// Imarra — Nav, Footer, Demo modal. Shared chrome across all pages.

const { useState, useEffect, useRef } = React;

// =============================================================================
// Router (hash-based)
// =============================================================================
function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
function parseHash(h) {
  const clean = (h || '').replace(/^#\/?/, '').split('?')[0];
  if (!clean) return { page: 'home', sub: null };
  const parts = clean.split('/');
  return { page: parts[0], sub: parts[1] || null };
}
function navTo(href) {
  window.location.hash = href.startsWith('#') ? href : '#/' + href;
}
window.useHashRoute = useHashRoute;
window.navTo = navTo;

// =============================================================================
// Demo Modal — opens via global event, accessible from ANY CTA
// =============================================================================
function DemoModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [lang] = useLang();
  const [form, setForm] = useState({
    nom: '', entreprise: '', tva: '', telephone: '', email: '',
    type: '', couverts: '', creneau: '', message: '',
  });

  useEffect(() => {
    const onOpen = () => { setOpen(true); setSubmitted(false); };
    window.addEventListener('imarra:open-demo', onOpen);
    return () => window.removeEventListener('imarra:open-demo', onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  if (!open) return null;

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSendError('');
    try {
      const honeypot = e.target.querySelector('input[name="website"]');
      const res = await fetch('/.netlify/functions/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: 'demo',
          lang,
          website: honeypot ? honeypot.value : '',
          ...form,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `HTTP ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error('Demo submit failed:', err);
      setSendError(t({
        fr: "Envoi impossible pour l'instant. Réessayez ou écrivez-nous à contact@imarra.be.",
        nl: 'Versturen lukt nu niet. Probeer opnieuw of mail contact@imarra.be.',
        en: 'Could not send right now. Please try again or email contact@imarra.be.',
        de: 'Senden derzeit nicht möglich. Bitte erneut versuchen oder an contact@imarra.be mailen.',
      }));
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(17,24,39,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20, animation: 'fadeIn 200ms ease-out',
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: 16,
        width: '100%', maxWidth: 560,
        maxHeight: '92vh', overflow: 'auto',
        boxShadow: '0 24px 64px rgba(17,24,39,0.18)',
      }}>
        <div style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
          <div>
            <div className="eyebrow" style={{ margin: 0, marginBottom: 4 }}>{t('demo.eyebrow')}</div>
            <h3 className="h3" style={{ fontSize: 22 }}>{t('demo.title')}</h3>
          </div>
          <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 0, padding: 8, borderRadius: 8, color: 'var(--fg-2)', display: 'flex' }} aria-label={t('common.close')}>
            <Icon name="close" size={22} />
          </button>
        </div>

        {submitted ? (
          <div style={{ padding: '48px 28px', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-tint)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <Icon name="checkCircle" size={28} />
            </div>
            <h3 className="h3" style={{ marginBottom: 8 }}>{t('demo.success.title')}</h3>
            <p style={{ color: 'var(--fg-2)', maxWidth: 360, margin: '0 auto 24px' }}>
              {t('demo.success.body')}
            </p>
            <button className="btn btn-secondary" onClick={() => setOpen(false)}>{t('demo.success.close')}</button>
          </div>
        ) : (
          <form onSubmit={submit} style={{ padding: 28 }}>
            {/* Honeypot — anti-spam */}
            <input type="text" name="website" tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: -9999, opacity: 0, pointerEvents: 'none' }} />

            <div className="field-row">
              <div className="field">
                <label className="label">{t('demo.field.name')} *</label>
                <input className="input" required value={form.nom} onChange={update('nom')} placeholder={t('demo.placeholder.name')} />
              </div>
              <div className="field">
                <label className="label">{t('demo.field.company')} *</label>
                <input className="input" required value={form.entreprise} onChange={update('entreprise')} placeholder={t('demo.placeholder.company')} />
              </div>
            </div>

            <div className="field">
              <label className="label">{t('demo.field.vat')} *</label>
              <input className="input" required value={form.tva} onChange={update('tva')} placeholder={t('demo.placeholder.vat')} />
            </div>

            <div className="field-row">
              <div className="field">
                <label className="label">{t('demo.field.phone')} *</label>
                <input className="input" required type="tel" value={form.telephone} onChange={update('telephone')} placeholder="+32 / +33 / +49 ..." />
              </div>
              <div className="field">
                <label className="label">{t('demo.field.email')} *</label>
                <input className="input" required type="email" value={form.email} onChange={update('email')} placeholder="contact@example.com" />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label className="label">{t('demo.field.business')}</label>
                <select className="select" value={form.type} onChange={update('type')}>
                  <option value="">{t('demo.business.restaurant')}</option>
                  <option>{t('demo.business.restaurant')}</option>
                  <option>{t('demo.business.snack')}</option>
                  <option>{t('demo.business.bakery')}</option>
                  <option>{t('demo.business.bar')}</option>
                  <option>{t('demo.business.retail')}</option>
                  <option>{t('demo.business.supermarket')}</option>
                  <option>{t('demo.business.other')}</option>
                </select>
              </div>
              <div className="field">
                <label className="label">{t('demo.field.size')}</label>
                <input className="input" value={form.couverts} onChange={update('couverts')} placeholder={t('demo.placeholder.size')} />
              </div>
            </div>

            <div className="field">
              <label className="label">{t('demo.field.slot')}</label>
              <select className="select" value={form.creneau} onChange={update('creneau')}>
                <option value="">{t('demo.slot.this_week')}</option>
                <option>{t('demo.slot.this_week')}</option>
                <option>{t('demo.slot.next_week')}</option>
                <option>{t('demo.slot.in_weeks')}</option>
                <option>{t('demo.slot.exploring')}</option>
              </select>
            </div>

            <button className="btn btn-primary" type="submit" disabled={sending} style={{ width: '100%', padding: '16px 22px', fontSize: 16, opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}>
              {sending
                ? t({fr:'Envoi en cours…', nl:'Verzenden…', en:'Sending…', de:'Wird gesendet…'})
                : <>{t('demo.submit')} <Icon name="arrow" size={16} /></>}
            </button>
            {sendError && (
              <p style={{ fontSize: 13, color: 'var(--imarra-danger, #dc2626)', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>
                {sendError}
              </p>
            )}
            <p style={{ fontSize: 12, color: 'var(--fg-2)', textAlign: 'center', marginTop: 14, marginBottom: 0 }}>
              {t('demo.gdpr')}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

const openDemo = () => window.dispatchEvent(new CustomEvent('imarra:open-demo'));
window.openDemo = openDemo;

// =============================================================================
// Language Switcher
// =============================================================================
function LangSwitcher({ compact = false }) {
  const [lang, setLangFn] = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'transparent', border: '1px solid var(--border-subtle)',
          padding: '7px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600,
          color: 'var(--fg-1)', fontFamily: 'inherit', cursor: 'pointer',
          letterSpacing: '0.03em',
        }}
        aria-label="Language"
      >
        <Icon name="globe" size={14} />
        {current.label}
        <Icon name="arrowDown" size={12} style={{ opacity: 0.6, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', right: 0,
          background: '#fff',
          border: '1px solid var(--border-subtle)',
          borderRadius: 10,
          boxShadow: 'var(--shadow-md)',
          padding: 6, minWidth: 160, zIndex: 30,
        }}>
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              onClick={() => { setLangFn(l.code); setOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                padding: '8px 10px', borderRadius: 7,
                background: l.code === lang ? 'var(--accent-tint)' : 'transparent',
                color: l.code === lang ? 'var(--accent)' : 'var(--fg-1)',
                border: 0, cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 13, fontWeight: 500, textAlign: 'left',
              }}
              onMouseEnter={(e) => { if (l.code !== lang) e.currentTarget.style.background = 'var(--bg-sunken)'; }}
              onMouseLeave={(e) => { if (l.code !== lang) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontWeight: 700, width: 24, fontSize: 11 }}>{l.label}</span>
              <span>{l.name}</span>
              {l.code === lang && <Icon name="check" size={14} style={{ marginLeft: 'auto' }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Nav
// =============================================================================
function Nav({ route }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [lang] = useLang();
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) document.body.classList.add('nav-locked');
    else document.body.classList.remove('nav-locked');
    return () => document.body.classList.remove('nav-locked');
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [route.page, route.sub]);

  const links = [
    { href: '#/produits', label: t('nav.products'), hasDropdown: true },
    { href: '#/partenaires', label: t('nav.partners') },
    { href: '#/about', label: t('nav.about') },
    { href: '#/contact', label: t('nav.contact') },
  ];

  const isActive = (href) => {
    const target = href.replace(/^#\/?/, '');
    return route.page === target;
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,1)',
      backdropFilter: scrolled ? 'saturate(180%) blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'border-color var(--dur-fast) var(--ease-std), background var(--dur-fast) var(--ease-std)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 36, padding: '18px 32px' }}>
        <a href="#/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="assets/imarra-logo.png" alt="Imarra" style={{ height: 26, display: 'block' }} />
        </a>

        <nav className="nav-desktop" style={{ display: 'flex', gap: 4, flex: 1, alignItems: 'center' }}>
          {links.map(l => (
            l.hasDropdown ? (
              <div key={l.href} ref={dropRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  onMouseEnter={() => setProductsOpen(true)}
                  style={{
                    background: 'transparent', border: 0,
                    padding: '8px 14px', borderRadius: 8,
                    fontSize: 14, fontWeight: 500,
                    color: isActive(l.href) ? 'var(--accent)' : 'var(--fg-1)',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontFamily: 'inherit', cursor: 'pointer',
                  }}
                >
                  {l.label}
                  <Icon name="arrowDown" size={14} style={{ marginTop: 1, transform: productsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }} />
                </button>
                {productsOpen && (
                  <div
                    onMouseLeave={() => setProductsOpen(false)}
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                      width: 540,
                      background: '#fff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 14,
                      boxShadow: 'var(--shadow-lg)',
                      padding: 12,
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4,
                    }}
                  >
                    {[
                      { sub: 'pos', appIcon: 'assets/license-icons/imarra-pos.png', t: 'Imarra POS', d: t('nav.product.pos') },
                      { sub: 'kiosk', appIcon: 'assets/license-icons/imarra-kiosk.png', t: 'Imarra Kiosk', d: t('nav.product.kiosk') },
                      { sub: 'mobile', appIcon: 'assets/license-icons/imarra-mobile.png', t: 'Imarra Mobile', d: t('nav.product.mobile') },
                      { sub: null, icon: 'grid', t: t('nav.ecosystem'), d: t('nav.ecosystem.sub') },
                      { href: '#/catalogue', icon: 'layers', t: t('nav.catalogue'), d: t('nav.catalogue.sub') },
                      { href: '#/usages', icon: 'sparkle', t: 'Cas d\'usage', d: 'Fast-food & retail · scénarios complets' },
                    ].map(item => (
                      <a
                        key={item.t}
                        href={item.href || (item.sub ? `#/produits/${item.sub}` : '#/produits')}
                        onClick={() => setProductsOpen(false)}
                        style={{
                          display: 'flex', gap: 12, padding: 12,
                          borderRadius: 10,
                          textDecoration: 'none',
                          transition: 'background 120ms',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-sunken)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        {item.appIcon ? (
                          <img src={item.appIcon} alt={item.t} style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, boxShadow: 'var(--shadow-xs)' }} />
                        ) : (
                          <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon name={item.icon} size={18} />
                          </div>
                        )}
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--fg-1)', marginBottom: 2 }}>{item.t}</div>
                          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{item.d}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={l.href} href={l.href} style={{
                padding: '8px 14px', borderRadius: 8,
                fontSize: 14, fontWeight: 500,
                color: isActive(l.href) ? 'var(--accent)' : 'var(--fg-1)',
              }}>{l.label}</a>
            )
          ))}
        </nav>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <LangSwitcher />
          <button onClick={openDemo} className="btn btn-primary btn-sm">
            {t('nav.demo')}
          </button>
        </div>

        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'transparent', border: 0, padding: 8, color: 'var(--fg-1)' }}
          aria-label="Menu"
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-panel" style={{ borderTop: '1px solid var(--border-subtle)', display: 'none' }}>
          {/* Produits — expandable */}
          <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => setMobileProductsOpen(v => !v)}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                width: '100%', padding: '14px 4px',
                background: 'transparent', border: 0,
                fontFamily: 'inherit', fontSize: 16, fontWeight: 500,
                color: 'var(--fg-1)', cursor: 'pointer', textAlign: 'left',
              }}
              aria-expanded={mobileProductsOpen}
            >
              {t('nav.products')}
              <Icon name="arrowDown" size={16} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 180ms', color: 'var(--fg-2)' }} />
            </button>
            {mobileProductsOpen && (
              <div style={{ paddingBottom: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { href: '#/produits/pos',    icon: 'assets/license-icons/imarra-pos.png',    t: 'Imarra POS',    d: t('nav.product.pos') },
                  { href: '#/produits/kiosk',  icon: 'assets/license-icons/imarra-kiosk.png',  t: 'Imarra Kiosk',  d: t('nav.product.kiosk') },
                  { href: '#/produits/mobile', icon: 'assets/license-icons/imarra-mobile.png', t: 'Imarra Mobile', d: t('nav.product.mobile') },
                  { href: '#/produits',        glyph: 'grid',  t: t('nav.ecosystem'),  d: t('nav.ecosystem.sub') },
                  { href: '#/catalogue',       glyph: 'layers', t: t('nav.catalogue'),  d: t('nav.catalogue.sub') },
                  { href: '#/usages',          glyph: 'sparkle', t: 'Cas d\'usage',    d: 'Fast-food & retail' },
                ].map(item => (
                  <a
                    key={item.t}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 4px',
                      textDecoration: 'none',
                      borderBottom: 'none',
                    }}
                  >
                    {item.icon ? (
                      <img src={item.icon} alt="" style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, boxShadow: 'var(--shadow-xs)' }} />
                    ) : (
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon name={item.glyph} size={18} />
                      </div>
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)', lineHeight: 1.3 }}>{item.t}</div>
                      <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2, lineHeight: 1.35 }}>{item.d}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other top-level links */}
          {links.filter(l => !l.hasDropdown).map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '14px 4px', fontWeight: 500, fontSize: 16, color: isActive(l.href) ? 'var(--accent)' : 'var(--fg-1)' }}>{l.label}</a>
          ))}

          {/* Language switcher */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Langue</span>
            <LangSwitcher />
          </div>

          {/* Demo CTA */}
          <button onClick={() => { setMobileOpen(false); openDemo(); }} className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }}>
            {t('nav.demo')} <Icon name="arrow" size={16} />
          </button>

          {/* Contact strip */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border-subtle)', fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.7 }}>
            <a href="tel:+3226153469" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg-1)', fontWeight: 500 }}>
              <Icon name="phone" size={14} style={{ color: 'var(--accent)' }} /> +32 2 615 34 69
            </a>
            <div style={{ marginTop: 4, fontSize: 12 }}>Lundi → Samedi · 9h → 18h</div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            margin-left: auto !important;
          }
          .nav-mobile-panel { display: block !important; }
        }
      `}</style>
    </header>
  );
}

// =============================================================================
// Footer
// =============================================================================
function Footer() {
  const [lang] = useLang();
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid var(--border-subtle)', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }} className="footer-grid">
          <div>
            <img src="assets/imarra-logo.png" alt="Imarra" style={{ height: 26, marginBottom: 16 }} />
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 16, maxWidth: 280 }}>
              {t('footer.intro')}
            </p>
            <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.7 }}>
              Rue René Descartes 2<br/>
              7000 Mons · Belgique<br/>
              <a href="tel:+3226153469" style={{ color: 'inherit', textDecoration: 'none' }}>+32 2 615 34 69</a>
            </div>
          </div>

          {[
            [t('footer.products'), [
              ['Imarra POS', '#/produits/pos'],
              ['Imarra Kiosk', '#/produits/kiosk'],
              ['Imarra Mobile', '#/produits/mobile'],
              [t('nav.catalogue'), '#/catalogue'],
            ]],
            [t('footer.solutions'), [
              [t('footer.restaurant'), '#/produits'],
              [t('footer.bakery'), '#/produits'],
              [t('footer.retail'), '#/produits'],
              [t('footer.bar'), '#/produits'],
            ]],
            [t('footer.company'), [
              [t('footer.about'), '#/about'],
              [t('footer.partners'), '#/partenaires'],
              [t('footer.contact'), '#/contact'],
              [t('footer.book_demo'), '#demo'],
            ]],
            [t('footer.legal'), [
              [t('footer.legal_mentions'), '#/legal'],
              [t('footer.gdpr'), '#/legal'],
              [t('footer.cookies'), '#/legal'],
              [t('footer.terms'), '#/legal'],
            ]],
          ].map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-1)', marginBottom: 16 }}>{title}</div>
              {items.map(([t2, h]) => (
                <a key={t2} href={h} onClick={(e) => { if (h === '#demo') { e.preventDefault(); openDemo(); } }} style={{ display: 'block', fontSize: 14, color: 'var(--fg-2)', marginBottom: 10, lineHeight: 1.4 }}>{t2}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 24, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'var(--fg-muted)' }}>
          <div>{t('footer.copyright')}</div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="shield" size={14} /> {t('footer.gdpr_short')}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="flag" size={14} /> {t('footer.designed')}</span>
            <a
              href="https://pos.imarra.io/#/partner/login"
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: 'var(--fg-muted)', textDecoration: 'none',
                padding: '4px 10px',
                border: '1px solid var(--border-subtle)',
                borderRadius: 999,
                transition: 'border-color 180ms, color 180ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--fg-muted)'; }}
            >
              <Icon name="lock" size={12} /> SalesPilot
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

// =============================================================================
// Reusable section header
// =============================================================================
function SectionHeader({ eyebrow, title, subtitle, accent, center }) {
  const parts = (title || '').split(`{${accent}}`);
  return (
    <div className="section-header" style={{ marginBottom: 64, textAlign: center ? 'center' : 'left', maxWidth: center ? 760 : 820, marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>
      {eyebrow && <div className="eyebrow muted">{eyebrow}</div>}
      <h2 className="h2" style={{ marginBottom: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>
        {accent && parts.length > 1 ? (
          <>{parts[0]}<span className="accent">{accent}</span>{parts[1]}</>
        ) : title}
      </h2>
      {subtitle && <p className="lead" style={{ color: 'var(--fg-2)', maxWidth: 580, margin: center ? '0 auto' : 0 }}>{subtitle}</p>}
    </div>
  );
}

// =============================================================================
// CTA Band — dark, recurring
// =============================================================================
function CTABand({ title, subtitle, accent }) {
  const [lang] = useLang();
  const titleStr = title || t('cta.default.title');
  const accentStr = accent || t('cta.default.accent');
  const subStr = subtitle || t('cta.default.subtitle');
  const parts = titleStr.split(`{${accentStr}}`);
  const hasAccent = parts.length > 1;
  return (
    <section className="dark" style={{ padding: '88px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 14 }}>
          {hasAccent ? (
            <>{parts[0]}<span className="accent">{accentStr}</span>{parts[1]}</>
          ) : titleStr}
        </h2>
        <p style={{ fontSize: 17, color: '#9ca3af', marginBottom: 36, maxWidth: 540, margin: '0 auto 36px' }}>{subStr}</p>
        <div className="cta-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
          <button onClick={openDemo} className="btn btn-primary btn-lg">
            {t('cta.book_demo')} <Icon name="arrow" size={16} />
          </button>
          <a href="#/contact" className="btn btn-lg" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
            {t('cta.contact_us')}
          </a>
        </div>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center', fontSize: 13, color: '#9ca3af' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={14} style={{ color: 'var(--accent)' }} /> {t('cta.install_48h')}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={14} style={{ color: 'var(--accent)' }} /> {t('cta.no_hidden')}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={14} style={{ color: 'var(--accent)' }} /> {t('cta.support')}</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Footer, DemoModal, SectionHeader, CTABand, PartnerWordmark });

// =============================================================================
// Partner logos — fichiers officiels fournis par le client
// =============================================================================
const PARTNER_LOGOS = {
  'Sunmi':     { src: 'assets/partners/sunmi.webp',    ratio: 794/222,  invertOnDark: false },
  'Viva.com':  { src: 'assets/partners/viva.webp',     ratio: 952/764,  invertOnDark: true },
  'Worldline': { src: 'assets/partners/worldline.png', ratio: 1280/890, invertOnDark: false },
};

function PartnerWordmark({ name, height = 56, onDark = false, maxWidth }) {
  const logo = PARTNER_LOGOS[name];
  if (!logo) return null;
  const filter = onDark && logo.invertOnDark ? 'brightness(0) invert(1)' : 'none';
  return (
    <img
      src={logo.src}
      alt={name}
      style={{
        height,
        width: 'auto',
        maxWidth: maxWidth || '100%',
        objectFit: 'contain',
        display: 'block',
        filter,
      }}
    />
  );
}
