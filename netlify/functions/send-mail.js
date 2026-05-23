// =============================================================================
// Imarra — Netlify Function: send-mail
// Reçoit un POST JSON depuis les formulaires du site (démo ou contact),
// envoie 2 mails via SMTP Hostinger :
//   1) notification interne -> contact@imarra.be (ou support@imarra.io si tech)
//   2) accusé de réception personnalisé -> client
// =============================================================================

const nodemailer = require('nodemailer');

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || 'contact@imarra.be';
const SMTP_PASS = process.env.SMTP_PASS;

const MAIL_FROM = process.env.MAIL_FROM || `Imarra <${SMTP_USER}>`;
const MAIL_TO = process.env.MAIL_TO || 'contact@imarra.be';
const MAIL_TO_SUPPORT = process.env.MAIL_TO_SUPPORT || 'support@imarra.io';

// Reusable transporter (cold-start friendly)
let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    pool: false,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

// Naive in-memory rate limit (ephemeral, per-instance)
const recentByIp = new Map();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
function rateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const hits = (recentByIp.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) return true;
  hits.push(now);
  recentByIp.set(ip, hits);
  return false;
}

const esc = (v) => String(v ?? '').replace(/[<>&"']/g, c => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;',
}[c]));

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim());

// -----------------------------------------------------------------------------
// HTML templates — branding Imarra (orange #f97316, ink #111827)
// -----------------------------------------------------------------------------

const BRAND = {
  orange: '#f97316',
  ink: '#111827',
  ink2: '#6b7280',
  border: '#e5e7eb',
  bg: '#f9fafb',
};

const baseEmail = ({ preheader, title, intro, body, ctaLabel, ctaUrl, footer }) => `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:${BRAND.ink};">
<span style="display:none!important;opacity:0;color:transparent;visibility:hidden;height:0;width:0;overflow:hidden;">${esc(preheader || '')}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid ${BRAND.border};border-radius:14px;overflow:hidden;">
      <tr><td style="padding:28px 32px 12px;">
        <div style="font-weight:700;font-size:22px;letter-spacing:-0.02em;color:${BRAND.ink};">
          <span style="color:${BRAND.ink};">im</span><span style="color:${BRAND.orange};">arra</span>
        </div>
      </td></tr>
      <tr><td style="padding:8px 32px 8px;">
        <h1 style="margin:0 0 12px;font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-0.01em;color:${BRAND.ink};">${title}</h1>
        ${intro ? `<p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:${BRAND.ink2};">${intro}</p>` : ''}
      </td></tr>
      <tr><td style="padding:0 32px 24px;">${body}</td></tr>
      ${ctaUrl && ctaLabel ? `<tr><td style="padding:0 32px 28px;">
        <a href="${esc(ctaUrl)}" style="display:inline-block;background:${BRAND.orange};color:#fff;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:600;font-size:14px;">${esc(ctaLabel)}</a>
      </td></tr>` : ''}
      <tr><td style="padding:18px 32px 24px;border-top:1px solid ${BRAND.border};background:#fafafa;">
        <p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND.ink2};">
          ${footer || `Imarra · Rue René Descartes 2, 7000 Mons, Belgique<br>
          <a href="tel:+3226153469" style="color:${BRAND.ink2};text-decoration:none;">+32 2 615 34 69</a>
          · <a href="mailto:contact@imarra.be" style="color:${BRAND.ink2};text-decoration:none;">contact@imarra.be</a>`}
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

function fieldsTable(rows) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${
    rows.filter(([_, v]) => v != null && v !== '').map(([k, v]) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.ink2};text-transform:uppercase;letter-spacing:0.06em;width:38%;vertical-align:top;">${esc(k)}</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:14px;color:${BRAND.ink};vertical-align:top;">${esc(v)}</td>
      </tr>`).join('')
  }</table>`;
}

function internalDemoBody(d) {
  return fieldsTable([
    ['Nom', d.nom],
    ['Entreprise', d.entreprise],
    ['N° TVA', d.tva],
    ['Téléphone', d.telephone],
    ['Email', d.email],
    ["Type d'activité", d.type],
    ['Taille (couverts/m²)', d.couverts],
    ['Créneau souhaité', d.creneau],
    ['Message', d.message],
    ['Langue UI', d.lang],
  ]);
}

function internalContactBody(d) {
  return fieldsTable([
    ['Nom', d.nom],
    ['Entreprise', d.entreprise],
    ['N° TVA', d.tva],
    ['Email', d.email],
    ['Téléphone', d.telephone],
    ['Sujet', d.sujet],
    ['Message', d.message],
    ['Langue UI', d.lang],
  ]);
}

function clientReplyDemo({ nom }) {
  const firstName = (nom || '').trim().split(/\s+/)[0] || 'bonjour';
  return baseEmail({
    preheader: 'Votre demande de démo Imarra a bien été reçue.',
    title: 'Votre demande de démo a bien été reçue.',
    intro: `Bonjour ${esc(firstName)}, merci pour votre intérêt envers Imarra.`,
    body: `
      <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:${BRAND.ink};">
        Un conseiller Imarra prend contact avec vous <strong>sous 24 h ouvrées</strong> pour planifier votre démo et comprendre votre activité.
      </p>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:${BRAND.ink};">
        En attendant, vous pouvez consulter notre catalogue produits ou parcourir nos cas d'usage : restaurant, snack, boulangerie, retail.
      </p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:${BRAND.ink2};">
        Pour toute question urgente : <a href="tel:+3226153469" style="color:${BRAND.orange};text-decoration:none;font-weight:600;">+32 2 615 34 69</a>.
      </p>`,
    ctaLabel: 'Découvrir le catalogue',
    ctaUrl: 'https://imarra.io/#/catalogue',
  });
}

function clientReplyContact({ nom, sujet }) {
  const firstName = (nom || '').trim().split(/\s+/)[0] || 'bonjour';
  const isTech = /technique/i.test(sujet || '');
  const teamLabel = isTech ? 'notre équipe support' : 'notre équipe commerciale';
  return baseEmail({
    preheader: 'Votre message a bien été reçu par Imarra.',
    title: 'Votre message a bien été reçu.',
    intro: `Bonjour ${esc(firstName)}, merci de nous avoir contactés.`,
    body: `
      <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:${BRAND.ink};">
        Votre demande${sujet ? ` concernant <strong>${esc(sujet).toLowerCase()}</strong>` : ''} a bien été reçue. ${esc(teamLabel)} revient vers vous <strong>sous 24 h ouvrées</strong>.
      </p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:${BRAND.ink2};">
        Pour toute question urgente : <a href="tel:+3226153469" style="color:${BRAND.orange};text-decoration:none;font-weight:600;">+32 2 615 34 69</a> (Lundi → Samedi, 9h–18h).
      </p>`,
    ctaLabel: null,
    ctaUrl: null,
  });
}

// -----------------------------------------------------------------------------
// Send helper
// -----------------------------------------------------------------------------

async function sendMail({ to, subject, html, replyTo }) {
  const tx = getTransporter();
  return tx.sendMail({
    from: MAIL_FROM,
    to,
    subject,
    html,
    replyTo: replyTo || undefined,
  });
}

// -----------------------------------------------------------------------------
// Handler
// -----------------------------------------------------------------------------

exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors, body: JSON.stringify({ ok: false, error: 'Method not allowed' }) };
  }
  // --- DEBUG: log env var availability (no values, just presence) ---
  console.log('[send-mail] env check', {
    has_SMTP_PASS: !!process.env.SMTP_PASS,
    SMTP_PASS_len: (process.env.SMTP_PASS || '').length,
    has_SMTP_USER: !!process.env.SMTP_USER,
    SMTP_USER_val: process.env.SMTP_USER || '(default)',
    has_SMTP_HOST: !!process.env.SMTP_HOST,
    has_SMTP_PORT: !!process.env.SMTP_PORT,
    netlify_keys_sample: Object.keys(process.env).filter(k => /SMTP|MAIL/i.test(k)),
    total_env_keys: Object.keys(process.env).length,
  });
  if (!SMTP_PASS) {
    console.error('Missing SMTP_PASS env var');
    return { statusCode: 500, headers: cors, body: JSON.stringify({ ok: false, error: 'Email service not configured' }) };
  }

  const ip = (event.headers['x-nf-client-connection-ip']
    || event.headers['x-forwarded-for']
    || '').split(',')[0].trim();
  if (rateLimited(ip)) {
    return { statusCode: 429, headers: cors, body: JSON.stringify({ ok: false, error: 'Too many requests' }) };
  }

  let data;
  try { data = JSON.parse(event.body || '{}'); }
  catch { return { statusCode: 400, headers: cors, body: JSON.stringify({ ok: false, error: 'Invalid JSON' }) }; }

  // Honeypot — bots fill the hidden "website" field
  if (data.website) {
    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true }) };
  }

  const form = String(data.form || '').toLowerCase();
  if (!['demo', 'contact'].includes(form)) {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ ok: false, error: 'Invalid form type' }) };
  }
  if (!isEmail(data.email)) {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ ok: false, error: 'Email invalide' }) };
  }
  if (!data.nom || !data.entreprise) {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ ok: false, error: 'Nom et entreprise requis' }) };
  }

  const isTech = form === 'contact' && /technique/i.test(data.sujet || '');
  const notifTo = isTech ? MAIL_TO_SUPPORT : MAIL_TO;

  try {
    if (form === 'demo') {
      const subject = `[Imarra · DÉMO] ${data.entreprise} — ${data.nom}`;
      const internalHtml = baseEmail({
        preheader: `Nouvelle demande de démo de ${data.nom}`,
        title: 'Nouvelle demande de démo',
        intro: 'Reçue via le site, modale "Réserver une démo".',
        body: internalDemoBody(data),
        ctaLabel: 'Répondre au client',
        ctaUrl: `mailto:${data.email}`,
      });
      await sendMail({ to: notifTo, subject, html: internalHtml, replyTo: data.email });
      await sendMail({
        to: data.email,
        subject: 'Votre demande de démo Imarra a bien été reçue',
        html: clientReplyDemo({ nom: data.nom }),
        replyTo: MAIL_TO,
      });
    } else {
      const subject = `[Imarra · CONTACT] ${data.sujet || 'Message'} — ${data.entreprise}`;
      const internalHtml = baseEmail({
        preheader: `Nouveau message de ${data.nom} (${data.entreprise})`,
        title: 'Nouveau message — formulaire contact',
        intro: `Sujet : <strong>${esc(data.sujet || 'non précisé')}</strong>`,
        body: internalContactBody(data),
        ctaLabel: 'Répondre au client',
        ctaUrl: `mailto:${data.email}`,
      });
      await sendMail({ to: notifTo, subject, html: internalHtml, replyTo: data.email });
      await sendMail({
        to: data.email,
        subject: 'Votre message a bien été reçu par Imarra',
        html: clientReplyContact({ nom: data.nom, sujet: data.sujet }),
        replyTo: isTech ? MAIL_TO_SUPPORT : MAIL_TO,
      });
    }

    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('send-mail error:', err);
    return { statusCode: 502, headers: cors, body: JSON.stringify({ ok: false, error: 'Email send failed' }) };
  }
};
