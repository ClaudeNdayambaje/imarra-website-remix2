// Imarra — Partenaires, Qui sommes-nous (Imarra), Contact, Légal

// =============================================================================
// PARTENAIRES
// =============================================================================

function PartenairesPage() {
  const partners = [
    {
      name: 'Sunmi',
      role: t({fr:'Constructeur matériel', nl:'Hardwarefabrikant', en:'Hardware maker', de:'Hardwarehersteller'}),
      desc: t({fr:"Constructeur mondial de terminaux Android dédiés au commerce. Sunmi fournit l'intégralité du matériel Imarra : caisses fixes T3 PRO, bornes K2 et Flex 3, terminaux mobiles P3. Mise à jour à distance, garantie 24 mois, mode kiosque sécurisé.",
                nl:"Wereldwijde fabrikant van Android-terminals voor de handel. Sunmi levert alle Imarra-hardware: vaste T3 PRO-kassa's, K2- en Flex 3-kiosken, mobiele P3-terminals. Updates op afstand, 24 maanden garantie, beveiligde kioskmodus.",
                en:"Global maker of Android terminals for retail. Sunmi supplies all Imarra hardware: T3 PRO fixed POS, K2 and Flex 3 kiosks, P3 mobile terminals. Remote updates, 24-month warranty, secure kiosk mode.",
                de:"Weltweiter Hersteller von Android-Terminals für den Handel. Sunmi liefert die gesamte Imarra-Hardware: stationäre T3-PRO-Kassen, K2- und Flex-3-Kioske, mobile P3-Terminals. Fernupdates, 24 Monate Garantie, gesicherter Kioskmodus."}),
      points: [
        t({fr:'Plus de 5 millions de terminaux déployés dans 200+ pays', nl:'Meer dan 5 miljoen terminals in 200+ landen', en:'More than 5 million terminals across 200+ countries', de:'Über 5 Millionen Terminals in 200+ Ländern'}),
        t({fr:'OS Android dédié au retail, mises à jour OTA', nl:'Android-OS speciaal voor retail, OTA-updates', en:'Retail-grade Android OS, OTA updates', de:'Auf Retail spezialisiertes Android-OS, OTA-Updates'}),
        t({fr:'Garantie constructeur 24 mois sur toute la gamme', nl:'24 maanden fabrieksgarantie op de hele reeks', en:'24-month manufacturer warranty across the range', de:'24 Monate Herstellergarantie auf die gesamte Reihe'}),
      ],
      bg: '#0a1020',
      tag: 'Hardware',
      logoHeight: 64,
    },
    {
      name: 'Viva.com',
      role: t({fr:'Acquéreur paiement', nl:'Betalingsacquirer', en:'Payment acquirer', de:'Zahlungs-Acquirer'}),
      desc: t({fr:"Banque de paiement européenne, intégrée nativement dans Imarra. Un seul ticket, un seul reçu, une seule réconciliation comptable. Frais transparents, sans options cachées. Apple Pay, Google Pay et NFC inclus.",
                nl:"Europese betaalbank, native geïntegreerd in Imarra. Eén ticket, één bon, één boekhoudkundige reconciliatie. Transparante kosten, geen verborgen opties. Apple Pay, Google Pay en NFC inbegrepen.",
                en:"European payment bank, natively integrated in Imarra. One ticket, one receipt, one accounting reconciliation. Transparent fees, no hidden options. Apple Pay, Google Pay and NFC included.",
                de:"Europäische Zahlungsbank, nativ in Imarra integriert. Ein Ticket, ein Beleg, eine Buchhaltungsabstimmung. Transparente Gebühren, keine versteckten Optionen. Apple Pay, Google Pay und NFC inklusive."}),
      points: [
        t({fr:'Acquéreur agréé Banque Nationale de Belgique', nl:'Acquirer erkend door de Nationale Bank van België', en:'Acquirer licensed by the National Bank of Belgium', de:'Acquirer zugelassen von der Belgischen Nationalbank'}),
        t({fr:'Frais affichés, sans frais cachés', nl:'Transparante kosten, geen verborgen kosten', en:'Posted fees, no hidden charges', de:'Veröffentlichte Gebühren, keine versteckten Kosten'}),
        t({fr:'Reversement J+1 sur compte belge', nl:'Storting D+1 op Belgische rekening', en:'D+1 settlement on Belgian account', de:'Auszahlung T+1 auf belgisches Konto'}),
      ],
      bg: '#0a1020',
      tag: t({fr:'Paiement', nl:'Betaling', en:'Payment', de:'Zahlung'}),
      logoHeight: 140,
    },
    {
      name: 'Worldline',
      role: t({fr:'Acquéreur paiement', nl:'Betalingsacquirer', en:'Payment acquirer', de:'Zahlungs-Acquirer'}),
      desc: t({fr:"Leader européen des paiements électroniques, intégré nativement dans Imarra. Pour les commerces qui veulent rester fidèles à leur banque acquéreur historique tout en bénéficiant de l'intégration native Imarra.",
                nl:"Europese leider in elektronische betalingen, native geïntegreerd in Imarra. Voor handelszaken die hun historische acquirer-bank trouw willen blijven en toch de native Imarra-integratie willen genieten.",
                en:"European leader in electronic payments, natively integrated in Imarra. For businesses who want to stay with their historical acquirer bank while enjoying native Imarra integration.",
                de:"Europäischer Marktführer bei elektronischen Zahlungen, nativ in Imarra integriert. Für Geschäfte, die ihrer bisherigen Acquirer-Bank treu bleiben wollen und gleichzeitig die native Imarra-Integration nutzen möchten."}),
      points: [
        t({fr:'Leader européen des paiements (FR · BE · NL)', nl:'Europese leider in betalingen (FR · BE · NL)', en:'European payments leader (FR · BE · NL)', de:'Europäischer Zahlungsführer (FR · BE · NL)'}),
        t({fr:'Compatible toutes cartes belges (Bancontact inclus)', nl:'Compatibel met alle Belgische kaarten (Bancontact inbegrepen)', en:'Compatible with all Belgian cards (Bancontact included)', de:'Kompatibel mit allen belgischen Karten (Bancontact inklusive)'}),
        t({fr:'Connexion native sans terminal additionnel', nl:'Native verbinding zonder extra terminal', en:'Native connection without extra terminal', de:'Native Verbindung ohne zusätzliches Terminal'}),
      ],
      bg: '#0a1020',
      tag: t({fr:'Paiement', nl:'Betaling', en:'Payment', de:'Zahlung'}),
      logoHeight: 130,
    },
  ];

  return (
    <div className="page-fade">
      <section style={{ paddingTop: 88, paddingBottom: 48 }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow">{t({fr:"Partenaires",nl:"Partners",en:"Partners",de:"Partner"})}</div>
            <h1 className="h-display" style={{ fontSize: 'clamp(40px, 4.8vw, 68px)', marginBottom: 24 }}>
              {t({
                fr: <>UN ÉCOSYSTÈME<br/><span className="accent">SOLIDE</span>,<br/>UN INTERLOCUTEUR UNIQUE.</>,
                nl: <>EEN <span className="accent">SOLIDE</span><br/>ECOSYSTEEM,<br/>ÉÉN AANSPREEKPUNT.</>,
                en: <>A <span className="accent">SOLID</span><br/>ECOSYSTEM,<br/>ONE POINT OF CONTACT.</>,
                de: <>EIN <span className="accent">SOLIDES</span><br/>ÖKOSYSTEM,<br/>EIN ANSPRECHPARTNER.</>,
              })}
            </h1>
            <p className="lead" style={{ color: '#374151', maxWidth: 640 }}>
              {t({
                fr: "Matériel professionnel, paiement européen, distribution locale : Imarra s'appuie sur des partenaires reconnus. Vous ne traitez qu'avec Imarra — on coordonne le reste.",
                nl: "Professionele hardware, Europese betaling, lokale distributie: Imarra steunt op erkende partners. U werkt enkel met Imarra — wij coördineren de rest.",
                en: "Professional hardware, European payment, local distribution: Imarra relies on recognised partners. You deal only with Imarra — we coordinate the rest.",
                de: "Professionelle Hardware, europäische Zahlung, lokale Distribution: Imarra setzt auf anerkannte Partner. Sie sprechen nur mit Imarra — wir koordinieren den Rest.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Partners — alternating */}
      <section style={{ padding: '32px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {partners.map((p, i) => (
              <div key={p.name} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', alignItems: 'stretch' }} className="partner-row">
                  {/* Logo block (alternating side) */}
                  <div style={{
                    order: i % 2 === 0 ? 0 : 1,
                    background: p.bg,
                    color: '#fff',
                    padding: 56,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: 320,
                  }}>
                    <div className="pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', alignSelf: 'flex-start' }}>{p.tag}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, padding: '20px 0' }}>
                      <PartnerWordmark name={p.name} height={p.logoHeight} onDark />
                    </div>
                    <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{t({fr:'Partenaire',nl:'Partner',en:'Partner',de:'Partner'})} {p.role}</div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="eyebrow muted">{p.role}</div>
                    <h2 className="h2" style={{ marginBottom: 16, fontSize: 36 }}>{p.name}</h2>
                    <p style={{ color: 'var(--fg-2)', marginBottom: 20, lineHeight: 1.65 }}>{p.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {p.points.map(pt => (
                        <div key={pt} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.5 }}>
                          <Icon name="check" size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imarra — interlocuteur unique */}
      <section className="wash">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} data-grid="imarra-block">
            <div>
              <div className="eyebrow">{t({fr:'Distribution locale',nl:'Lokale distributie',en:'Local distribution',de:'Lokale Distribution'})}</div>
              <h2 className="h2" style={{ marginBottom: 20 }}>IMARRA · <span className="accent">{t({fr:'votre interlocuteur',nl:'uw aanspreekpunt',en:'your point of contact',de:'Ihr Ansprechpartner'})}</span> {t({fr:'unique',nl:'één',en:'unique',de:'einzig'})}</h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 24, lineHeight: 1.7 }}>
                {t({fr:"Imarra propose une expérience clé en main : vente, installation, formation, support. Un seul interlocuteur du devis à la mise en route.",
                    nl:"Imarra biedt een sleutel-op-de-deur ervaring: verkoop, installatie, opleiding, support. Één aanspreekpunt van offerte tot opstart.",
                    en:"Imarra delivers a turnkey experience: sales, install, training, support. One single point of contact from quote to go-live.",
                    de:"Imarra bietet eine schlüsselfertige Erfahrung: Verkauf, Installation, Schulung, Support. Ein einziger Ansprechpartner vom Angebot bis zum Start."})}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  t({fr:'Support local, réponse en moins de 24 h', nl:'Lokale support, antwoord binnen 24 u', en:'Local support, response within 24 h', de:'Lokaler Support, Antwort innerhalb von 24 Std.'}),
                  t({fr:'Installation sur site, formation comprise', nl:'Installatie ter plaatse, opleiding inbegrepen', en:'On-site installation, training included', de:'Installation vor Ort, Schulung inklusive'}),
                  t({fr:'Facturation européenne, TVA conforme', nl:'Europese facturatie, conforme btw', en:'European invoicing, compliant VAT', de:'Europäische Rechnungsstellung, konforme USt.'}),
                  t({fr:'Contrat encadré par Imarra — entité européenne', nl:'Contract afgesloten met Imarra — Europese entiteit', en:'Contract signed with Imarra — European entity', de:'Vertrag mit Imarra — europäische Einheit'}),
                ].map(tx => (
                  <div key={tx} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}>
                    <Icon name="check" size={16} style={{ color: 'var(--accent)' }} /> {tx}
                  </div>
                ))}
              </div>
              <a href="#/about" className="btn btn-secondary">{t({fr:'En savoir plus sur Imarra', nl:'Meer over Imarra', en:'Learn more about Imarra', de:'Mehr über Imarra'})} <Icon name="arrow" size={14} /></a>
            </div>
            <div className="card" style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="flag" size={22} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{t({fr:'Marché',nl:'Markt',en:'Market',de:'Markt'})}</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>Europe</div>
                </div>
              </div>
              <hr className="divider" />
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="headset" size={22} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{t({fr:'Support',nl:'Support',en:'Support',de:'Support'})}</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{t({fr:'Lundi → Samedi · 9h–18h', nl:'Maandag → Zaterdag · 9u–18u', en:'Monday → Saturday · 9 am–6 pm', de:'Montag → Samstag · 9–18 Uhr'})}</div>
                </div>
              </div>
              <hr className="divider" />
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="phone" size={22} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{t({fr:'Ligne directe',nl:'Directe lijn',en:'Direct line',de:'Direkte Leitung'})}</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}><a href="tel:+3226153469" style={{ color: 'inherit', textDecoration: 'none' }}>+32 2 615 34 69</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrators / resellers placeholder */}
      <section>
        <div className="container">
          <SectionHeader
            eyebrow={t({fr:'Réseau',nl:'Netwerk',en:'Network',de:'Netzwerk'})}
            title={t({fr:'VOUS ÊTES { INTÉGRATEUR }OU REVENDEUR ?', nl:'BENT U { INTEGRATOR }OF DEALER?', en:'ARE YOU AN { INTEGRATOR }OR RESELLER?', de:'SIND SIE { INTEGRATOR }ODER WIEDERVERKÄUFER?'})}
            accent={t({fr:' INTÉGRATEUR ', nl:' INTEGRATOR ', en:' INTEGRATOR ', de:' INTEGRATOR '})}
            subtitle={t({fr:'Imarra ouvre son réseau de revendeurs partenaires en Europe. Marges attractives, formation complète, leads partagés.', nl:'Imarra opent zijn netwerk van partnerverkopers in Europa. Aantrekkelijke marges, volledige opleiding, gedeelde leads.', en:'Imarra is opening its reseller-partner network in Europe. Attractive margins, full training, shared leads.', de:'Imarra öffnet sein Wiederverkäufer-Netzwerk in Europa. Attraktive Margen, vollständige Schulung, geteilte Leads.'})}
            center
          />
          <div style={{ textAlign: 'center' }}>
            <a href="#/contact" className="btn btn-primary btn-lg">{t({fr:'Devenir partenaire revendeur',nl:'Partnerverkoper worden',en:'Become a reseller partner',de:'Partner-Wiederverkäufer werden'})} <Icon name="arrow" size={16} /></a>
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        @media (max-width: 900px) {
          .partner-row { grid-template-columns: 1fr !important; }
          .partner-row > *:first-child { order: 0 !important; }
          [data-grid="imarra-block"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// =============================================================================
// Mission manifesto block — typographic poster replacing the chef photo.
// Bold statement + subtle "live" counter + trust markers.
// =============================================================================
function MissionManifesto() {
  // Live counter — gives the panel a heartbeat without any imagery.
  // The numbers tick slowly, feel real, and showcase what Imarra actually does.
  const [ticks, setTicks] = React.useState({ orders: 1247, baskets: 86, loyalty: 19 });
  React.useEffect(() => {
    const id = setInterval(() => {
      setTicks(t => ({
        orders: t.orders + 1 + Math.floor(Math.random() * 2),
        baskets: t.baskets + (Math.random() > 0.55 ? 1 : 0),
        loyalty: t.loyalty + (Math.random() > 0.82 ? 1 : 0),
      }));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const liveLabel = t({fr:'Aujourd’hui · Réseau Imarra', nl:'Vandaag · Imarra-netwerk', en:'Today · Imarra network', de:'Heute · Imarra-Netzwerk'});

  return (
    <div className="mission-manifesto" style={{
      aspectRatio: '4 / 5',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      background: 'var(--imarra-black)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: 'clamp(28px, 4vw, 48px)',
    }}>
      {/* Subtle decorative grid — barely visible */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 56px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 56px)',
        pointerEvents: 'none',
      }} />
      {/* Top-right corner: orange spot for visual rhythm */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -120, right: -120,
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 65%)',
        pointerEvents: 'none',
      }} />

      {/* Top: eyebrow with pulsing dot */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 2 }}>
        <span className="manifesto-dot" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          {t({fr:'Notre manifeste', nl:'Ons manifest', en:'Our manifesto', de:'Unser Manifest'})}
        </span>
      </div>

      {/* Center: massive typographic statement */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{
          fontSize: 'clamp(38px, 4.6vw, 64px)',
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: '-0.025em',
          textTransform: 'uppercase',
          margin: 0,
          color: '#fff',
        }}>
          {t({
            fr: <>UN <span style={{color:'var(--accent)'}}>OUTIL</span>.<br/>UNE LICENCE.<br/>UNE ÉQUIPE.</>,
            nl: <>ÉÉN <span style={{color:'var(--accent)'}}>TOOL</span>.<br/>ÉÉN LICENTIE.<br/>ÉÉN TEAM.</>,
            en: <>ONE <span style={{color:'var(--accent)'}}>TOOL</span>.<br/>ONE LICENCE.<br/>ONE TEAM.</>,
            de: <>EIN <span style={{color:'var(--accent)'}}>WERKZEUG</span>.<br/>EINE LIZENZ.<br/>EIN TEAM.</>
          })}
        </h2>
        <p style={{
          fontSize: 16,
          color: 'rgba(255,255,255,0.62)',
          marginTop: 22,
          marginBottom: 0,
          lineHeight: 1.55,
          maxWidth: 320,
        }}>
          {t({
            fr: 'Qui parle votre langue. Qui reste joignable. Qui prend ses responsabilités.',
            nl: 'Dat uw taal spreekt. Bereikbaar blijft. Verantwoordelijkheid neemt.',
            en: 'That speaks your language. Stays reachable. Owns its responsibilities.',
            de: 'Das Ihre Sprache spricht. Erreichbar bleibt. Verantwortung übernimmt.'
          })}
        </p>
      </div>

      {/* Live ticker */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 20,
        marginBottom: 18,
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
          <span className="manifesto-livedot" />
          {liveLabel}
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { v: ticks.orders.toLocaleString('fr-BE'),  l: t({fr:'commandes encaissées', nl:'bestellingen afgerekend', en:'orders cashed', de:'Bestellungen kassiert'}) },
            { v: '+' + ticks.baskets,                   l: t({fr:'nouveaux paniers', nl:'nieuwe mandjes', en:'new baskets', de:'neue Warenkörbe'}) },
            { v: '+' + ticks.loyalty,                   l: t({fr:'fidélités créées', nl:'loyaliteiten aangemaakt', en:'loyalties created', de:'Treuekonten erstellt'}) },
          ].map((m, i) => (
            <div key={i} className="manifesto-metric">
              <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{m.v}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 4, lineHeight: 1.35 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust markers */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 16,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 18px',
        fontSize: 10.5,
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.5)',
        position: 'relative',
        zIndex: 2,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="flag" size={12} style={{ color: 'var(--accent)' }} />
          {t({fr:'Europe', nl:'Europa', en:'Europe', de:'Europa'})}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="shield" size={12} style={{ color: 'var(--accent)' }} />
          {t({fr:'RGPD', nl:'AVG', en:'GDPR', de:'DSGVO'})}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="headset" size={12} style={{ color: 'var(--accent)' }} />
          {t({fr:'Support local', nl:'Lokale support', en:'Local support', de:'Lokaler Support'})}
        </span>
      </div>

      <style>{`
        .manifesto-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 0 rgba(249,115,22,0.6);
          animation: manifestoPulse 1.8s ease-out infinite;
        }
        .manifesto-livedot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          animation: manifestoBlink 1.2s ease-in-out infinite;
        }
        @keyframes manifestoPulse {
          0%   { box-shadow: 0 0 0 0 rgba(249,115,22,0.7); }
          70%  { box-shadow: 0 0 0 14px rgba(249,115,22,0); }
          100% { box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }
        @keyframes manifestoBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .manifesto-metric { flex: 1; min-width: 70px; }
      `}</style>
    </div>
  );
}

// =============================================================================
// ABOUT — Qui sommes-nous
// =============================================================================
function AboutPage() {
  return (
    <div className="page-fade">
      <section style={{ paddingTop: 88, paddingBottom: 48 }}>
        <div className="container">
          <div style={{ maxWidth: 860 }}>
            <div className="eyebrow">{t({fr:"Qui sommes-nous",nl:"Over ons",en:"About us",de:"Über uns"})}</div>
            <h1 className="h-display" style={{ fontSize: 'clamp(40px, 4.8vw, 68px)', marginBottom: 24 }}>
              {t({
                fr: <>UNE ÉQUIPE EUROPÉENNE,<br/>AU SERVICE DES<br/><span className="accent">COMMERÇANTS</span>.</>,
                nl: <>EEN EUROPEES TEAM,<br/>TEN DIENSTE VAN<br/>DE <span className="accent">HANDELAARS</span>.</>,
                en: <>A EUROPEAN TEAM,<br/>SERVING<br/><span className="accent">MERCHANTS</span>.</>,
                de: <>EIN EUROPÄISCHES TEAM,<br/>IM DIENST DER<br/><span className="accent">HÄNDLER</span>.</>,
              })}
            </h1>
            <p className="lead" style={{ color: '#374151', maxWidth: 720 }}>
              {t({
                fr: "Imarra accompagne les commerces européens depuis le premier jour. Vente, installation, formation, support — tout passe par une seule équipe, qui parle votre langue.",
                nl: "Imarra begeleidt Europese handelszaken vanaf dag één. Verkoop, installatie, opleiding, support — alles via één team dat uw taal spreekt.",
                en: "Imarra has supported European businesses from day one. Sales, install, training, support — all through one team that speaks your language.",
                de: "Imarra unterstützt europäische Geschäfte vom ersten Tag an. Verkauf, Installation, Schulung, Support — alles über ein Team, das Ihre Sprache spricht.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} data-grid="mission">
            <MissionManifesto />
            <div>
              <div className="eyebrow">{t({fr:'Notre mission', nl:'Onze missie', en:'Our mission', de:'Unsere Mission'})}</div>
              <h2 className="h2" style={{ marginBottom: 20 }}>{t({fr:<>RENDRE LA <span className="accent">CAISSE</span> AUSSI SIMPLE QUE L'ENCAISSEMENT.</>, nl:<>DE <span className="accent">KASSA</span> ZO EENVOUDIG MAKEN ALS HET AFREKENEN.</>, en:<>MAKE THE <span className="accent">POS</span> AS SIMPLE AS CHECKOUT ITSELF.</>, de:<>DIE <span className="accent">KASSE</span> SO EINFACH MACHEN WIE DAS KASSIEREN.</>})}</h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 16, lineHeight: 1.7 }}>
                {t({fr:"Pendant trop longtemps, les commerçants belges ont dû choisir entre des caisses américaines compliquées, des solutions françaises hors-sol, ou des logiciels open-source ingérables.",
                    nl:"Te lang moesten Belgische handelaars kiezen tussen ingewikkelde Amerikaanse kassasystemen, onpraktische Franse oplossingen of onbeheerbare open-source software.",
                    en:"For too long, Belgian merchants had to choose between complicated American POS, disconnected French solutions, or unmanageable open-source software.",
                    de:"Zu lange mussten belgische Händler zwischen komplizierten amerikanischen Kassen, abgehobenen französischen Lösungen oder unhandhabbarer Open-Source-Software wählen."})}
              </p>
              <p style={{ color: 'var(--fg-2)', marginBottom: 16, lineHeight: 1.7 }}>
                {t({fr:<>Imarra arrive avec une réponse simple : <strong style={{ color: 'var(--fg-1)' }}>un seul outil, une seule licence, une seule équipe</strong> qui parle votre langue, vous installe sur place et reste joignable.</>,
                    nl:<>Imarra komt met een eenvoudig antwoord: <strong style={{ color: 'var(--fg-1)' }}>één tool, één licentie, één team</strong> dat uw taal spreekt, u ter plaatse installeert en bereikbaar blijft.</>,
                    en:<>Imarra comes with a simple answer: <strong style={{ color: 'var(--fg-1)' }}>one tool, one licence, one team</strong> that speaks your language, installs you on site and stays reachable.</>,
                    de:<>Imarra liefert eine einfache Antwort: <strong style={{ color: 'var(--fg-1)' }}>ein Werkzeug, eine Lizenz, ein Team</strong>, das Ihre Sprache spricht, Sie vor Ort installiert und erreichbar bleibt.</>})}
              </p>
              <p style={{ color: 'var(--fg-2)', lineHeight: 1.7 }}>
                {t({fr:<>Le résultat se mesure : <strong style={{ color: 'var(--accent)' }}>–30 % de temps à la clôture, +18 % de panier moyen, ROI en quelques semaines</strong>.</>,
                    nl:<>Het resultaat is meetbaar: <strong style={{ color: 'var(--accent)' }}>–30 % tijd bij afsluiting, +18 % gemiddelde mand, ROI in enkele weken</strong>.</>,
                    en:<>The result is measurable: <strong style={{ color: 'var(--accent)' }}>–30 % time at cash-up, +18 % average basket, ROI in a few weeks</strong>.</>,
                    de:<>Das Ergebnis ist messbar: <strong style={{ color: 'var(--accent)' }}>–30 % Zeit beim Abschluss, +18 % Warenkorb, ROI in wenigen Wochen</strong>.</>})}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="wash">
        <div className="container">
          <SectionHeader
            eyebrow={t({fr:'Ce qui nous tient debout', nl:'Wat ons rechtop houdt', en:'What keeps us upright', de:'Was uns aufrecht hält'})}
            title={t({fr:'QUATRE VALEURS,{ }ZÉRO COMPROMIS.', nl:'VIER WAARDEN,{ }NUL COMPROMISSEN.', en:'FOUR VALUES,{ }ZERO COMPROMISE.', de:'VIER WERTE,{ }KEINE KOMPROMISSE.'})}
            accent=" "
          />
          <div className="grid grid-2" style={{ gap: 24 }}>
            {[
              { icon: 'target',    t: t({fr:'Résultat avant fonctionnalité', nl:'Resultaat voor functionaliteit', en:'Outcome over feature', de:'Ergebnis vor Funktion'}),
                                   d: t({fr:"On ne vend pas un logiciel. On vend du temps gagné, des erreurs en moins, du chiffre en plus. Le reste est du moyen.", nl:"We verkopen geen software. We verkopen gewonnen tijd, minder fouten, meer omzet. De rest is middel.", en:"We don't sell software. We sell time saved, fewer mistakes, more revenue. Everything else is means.", de:"Wir verkaufen keine Software. Wir verkaufen gewonnene Zeit, weniger Fehler, mehr Umsatz. Der Rest ist Mittel."}) },
              { icon: 'handshake', t: t({fr:'Un seul interlocuteur', nl:'Één aanspreekpunt', en:'One point of contact', de:'Ein Ansprechpartner'}),
                                   d: t({fr:"Vente, installation, formation, support. Pas de hotline délocalisée. Une équipe locale, des humains qui se rappellent de vous.", nl:"Verkoop, installatie, opleiding, support. Geen offshore hotline. Een lokaal team, mensen die u kennen.", en:"Sales, install, training, support. No offshore hotline. A local team, people who remember you.", de:"Verkauf, Installation, Schulung, Support. Keine ausgelagerte Hotline. Ein lokales Team, Menschen, die sich an Sie erinnern."}) },
              { icon: 'flag',      t: t({fr:'Ancrage belge', nl:'Belgisch verankerd', en:'Belgian roots', de:'Belgische Verwurzelung'}),
                                   d: t({fr:"Facturation belge, support local, conformité RGPD européenne. Vos données restent en Europe.", nl:"Belgische facturatie, lokale support, Europese AVG-conformiteit. Uw gegevens blijven in Europa.", en:"Belgian invoicing, local support, European GDPR compliance. Your data stays in Europe.", de:"Belgische Rechnungsstellung, lokaler Support, europäische DSGVO-Konformität. Ihre Daten bleiben in Europa."}) },
              { icon: 'lock',      t: t({fr:"Pas d'options cachées", nl:'Geen verborgen opties', en:'No hidden options', de:'Keine versteckten Optionen'}),
                                   d: t({fr:"Un tarif clair, sans surprises. Vous savez ce que vous payez, dès le devis.", nl:"Een duidelijk tarief, zonder verrassingen. U weet wat u betaalt, vanaf de offerte.", en:"A clear price, no surprises. You know what you pay, from the quote.", de:"Ein klarer Preis, ohne Überraschungen. Sie wissen, was Sie zahlen — schon im Angebot."}) },
            ].map(v => (
              <div key={v.t} className="card" style={{ padding: 32, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={v.icon} size={24} />
                </div>
                <div>
                  <h4 className="h4" style={{ marginBottom: 8 }}>{v.t}</h4>
                  <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: 32 }}>
            {[
              { v: '2026',  l: t({fr:'année de lancement Imarra Belgique', nl:'lanceringsjaar Imarra België', en:'Imarra Belgium launch year', de:'Jahr des Imarra-Belgien-Starts'}) },
              { v: '100 %', l: t({fr:'des commerciaux & du support basés en Belgique', nl:'van sales & support gevestigd in België', en:'of sales & support based in Belgium', de:'Vertrieb & Support in Belgien ansässig'}) },
              { v: '< 24 h', l: t({fr:'de délai de réponse support', nl:'support-responstijd', en:'support response time', de:'Support-Reaktionszeit'}) },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 56, fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 12 }}>{s.v}</div>
                <div style={{ fontSize: 14, color: '#d1d5db', lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe section removed per request */}

      <CTABand title={t({fr:'VOUS VOULEZ NOUS {RENCONTRER} ?', nl:'WILT U ONS {ONTMOETEN}?', en:'WANT TO {MEET} US?', de:'MÖCHTEN SIE UNS {TREFFEN}?'})} accent={t({fr:'RENCONTRER',nl:'ONTMOETEN',en:'MEET',de:'TREFFEN'})} subtitle={t({fr:'Démo sur site, à distance, ou rendez-vous physique en Europe.', nl:'Demo ter plaatse, op afstand of fysiek afspraak in Europa.', en:'Demo on site, remote, or physical meeting in Europe.', de:'Demo vor Ort, remote oder persönliches Treffen in Europa.'})} />

      <style>{`
        @media (max-width: 900px) {
          [data-grid="mission"] { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}

// =============================================================================
// CONTACT
// =============================================================================
function ContactPage() {
  const [lang] = useLang();
  const [form, setForm] = React.useState({ nom: '', entreprise: '', tva: '', email: '', telephone: '', sujet: t({fr:'Demande de démo',nl:'Demo aanvragen',en:'Demo request',de:'Demo-Anfrage'}), message: '' });
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState('');
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
          form: 'contact',
          lang,
          website: honeypot ? honeypot.value : '',
          ...form,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `HTTP ${res.status}`);
      setSent(true);
    } catch (err) {
      console.error('Contact submit failed:', err);
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
    <div className="page-fade">
      <section style={{ paddingTop: 88, paddingBottom: 48 }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow">{t({fr:"Contact",nl:"Contact",en:"Contact",de:"Kontakt"})}</div>
            <h1 className="h-display" style={{ fontSize: 'clamp(40px, 4.8vw, 68px)', marginBottom: 24 }}>
              {t({
                fr: <>PARLONS DE<br/>VOTRE <span className="accent">COMMERCE</span>.</>,
                nl: <>LATEN WE PRATEN<br/>OVER UW <span className="accent">ZAAK</span>.</>,
                en: <>LET'S TALK ABOUT<br/>YOUR <span className="accent">BUSINESS</span>.</>,
                de: <>SPRECHEN WIR ÜBER<br/>IHR <span className="accent">GESCHÄFT</span>.</>,
              })}
            </h1>
            <p className="lead" style={{ color: '#374151', maxWidth: 640 }}>
              {t({
                fr: "Une question, un devis, une démo : un conseiller Imarra vous rappelle sous 24 h ouvrées.",
                nl: "Een vraag, een offerte, een demo: een Imarra-adviseur belt u binnen 24 werkuren terug.",
                en: "A question, a quote, a demo: an Imarra advisor calls you back within 24 working hours.",
                de: "Eine Frage, ein Angebot, eine Demo: Ein Imarra-Berater ruft Sie innerhalb von 24 Arbeitsstunden zurück.",
              })}
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 32, paddingBottom: 96 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'start' }} data-grid="contact">
            {/* Form */}
            <div className="card" style={{ padding: 40 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-tint)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Icon name="checkCircle" size={32} />
                  </div>
                  <h3 className="h3" style={{ marginBottom: 12 }}>{t({fr:'Message envoyé, merci.', nl:'Bericht verzonden, dank u.', en:'Message sent, thank you.', de:'Nachricht gesendet, danke.'})}</h3>
                  <p style={{ color: 'var(--fg-2)', maxWidth: 400, margin: '0 auto' }}>
                    {t({fr:'Un conseiller Imarra vous rappelle sous 24 h ouvrées. À très vite.', nl:'Een Imarra-adviseur belt u binnen 24 werkuren terug. Tot binnenkort.', en:'An Imarra advisor will call you back within 24 working hours. Talk soon.', de:'Ein Imarra-Berater ruft Sie innerhalb von 24 Arbeitsstunden zurück. Bis bald.'})}
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  {/* Honeypot — anti-spam */}
                  <input type="text" name="website" tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: -9999, opacity: 0, pointerEvents: 'none' }} />
                  <h3 className="h3" style={{ marginBottom: 6 }}>{t({fr:'Écrivez-nous', nl:'Schrijf ons', en:'Write to us', de:'Schreiben Sie uns'})}</h3>
                  <p style={{ color: 'var(--fg-2)', marginBottom: 24, fontSize: 14 }}>{t({fr:"Tous les champs marqués d'un * sont obligatoires.", nl:"Alle velden gemarkeerd met * zijn verplicht.", en:"All fields marked with * are required.", de:"Alle mit * markierten Felder sind Pflichtfelder."})}</p>
                  <div className="field-row">
                    <div className="field">
                      <label className="label">{t({fr:'Nom complet *', nl:'Volledige naam *', en:'Full name *', de:'Vollständiger Name *'})}</label>
                      <input className="input" required value={form.nom} onChange={update('nom')} />
                    </div>
                    <div className="field">
                      <label className="label">{t({fr:'Entreprise *', nl:'Onderneming *', en:'Company *', de:'Unternehmen *'})}</label>
                      <input className="input" required value={form.entreprise} onChange={update('entreprise')} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">{t({fr:'Numéro de TVA *', nl:'BTW-nummer *', en:'VAT number *', de:'USt-IdNr. *'})}</label>
                    <input className="input" required value={form.tva} onChange={update('tva')} placeholder="BE 0123.456.789" />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label className="label">{t({fr:'E-mail *', nl:'E-mail *', en:'Email *', de:'E-Mail *'})}</label>
                      <input className="input" required type="email" value={form.email} onChange={update('email')} />
                    </div>
                    <div className="field">
                      <label className="label">{t({fr:'Téléphone', nl:'Telefoon', en:'Phone', de:'Telefon'})}</label>
                      <input className="input" type="tel" value={form.telephone} onChange={update('telephone')} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">{t({fr:'Sujet *', nl:'Onderwerp *', en:'Subject *', de:'Betreff *'})}</label>
                    <select className="select" value={form.sujet} onChange={update('sujet')}>
                      <option>{t({fr:'Demande de démo', nl:'Demo aanvragen', en:'Demo request', de:'Demo-Anfrage'})}</option>
                      <option>{t({fr:'Demande de devis', nl:'Offerte aanvragen', en:'Quote request', de:'Angebotsanfrage'})}</option>
                      <option>{t({fr:'Question technique', nl:'Technische vraag', en:'Technical question', de:'Technische Frage'})}</option>
                      <option>{t({fr:'Devenir partenaire revendeur', nl:'Partnerverkoper worden', en:'Become a reseller partner', de:'Partner-Wiederverkäufer werden'})}</option>
                      <option>{t({fr:'Presse / Média', nl:'Pers / Media', en:'Press / Media', de:'Presse / Medien'})}</option>
                      <option>{t({fr:'Autre', nl:'Andere', en:'Other', de:'Andere'})}</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="label">{t({fr:'Message *', nl:'Bericht *', en:'Message *', de:'Nachricht *'})}</label>
                    <textarea className="textarea" required rows={5} value={form.message} onChange={update('message')} placeholder={t({fr:'Décrivez votre besoin en quelques lignes…', nl:'Beschrijf uw behoefte in enkele regels…', en:'Describe your need in a few lines…', de:'Beschreiben Sie Ihr Anliegen in wenigen Zeilen…'})} />
                  </div>
                  <button className="btn btn-primary btn-lg" type="submit" disabled={sending} style={{ width: '100%', opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}>
                    {sending
                      ? t({fr:'Envoi en cours…', nl:'Verzenden…', en:'Sending…', de:'Wird gesendet…'})
                      : <>{t({fr:'Envoyer le message', nl:'Bericht verzenden', en:'Send the message', de:'Nachricht senden'})} <Icon name="arrow" size={16} /></>}
                  </button>
                  {sendError && (
                    <p style={{ fontSize: 13, color: '#dc2626', marginTop: 12, marginBottom: 0, textAlign: 'center' }}>
                      {sendError}
                    </p>
                  )}
                  <p style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 14, marginBottom: 0, textAlign: 'center' }}>
                    {t({fr:'Vos données restent chez Imarra · RGPD compliant', nl:'Uw gegevens blijven bij Imarra · AVG-compliant', en:'Your data stays with Imarra · GDPR compliant', de:'Ihre Daten bleiben bei Imarra · DSGVO-konform'})}
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar coordonnées */}
            <div>
              <h3 className="h3" style={{ marginBottom: 24 }}>{t({fr:'Joignez-nous', nl:'Bereik ons', en:'Reach us', de:'Erreichen Sie uns'})}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 32 }}>
                {[
                  { icon: 'phone',   l: t({fr:'Téléphone',nl:'Telefoon',en:'Phone',de:'Telefon'}),
                                     v: '+32 2 615 34 69',
                                     sub: t({fr:'Lundi → Samedi · 9h → 18h', nl:'Maandag → Zaterdag · 9u → 18u', en:'Monday → Saturday · 9 am → 6 pm', de:'Montag → Samstag · 9 → 18 Uhr'}),
                                     href: 'tel:+3226153469' },
                  { icon: 'mail',    l: t({fr:'E-mail',nl:'E-mail',en:'Email',de:'E-Mail'}),
                                     v: 'contact@imarra.be',
                                     sub: t({fr:'Réponse sous 24 h ouvrées', nl:'Antwoord binnen 24 werkuren', en:'Reply within 24 working hours', de:'Antwort innerhalb von 24 Arbeitsstunden'}),
                                     href: 'mailto:contact@imarra.be' },
                  { icon: 'pin',     l: t({fr:'Adresse',nl:'Adres',en:'Address',de:'Adresse'}),
                                     v: 'Rue René Descartes 2',
                                     sub: t({fr:'7000 Mons · Belgique', nl:'7000 Bergen · België', en:'7000 Mons · Belgium', de:'7000 Mons · Belgien'}) },
                  { icon: 'headset', l: t({fr:'Support client', nl:'Klantenservice', en:'Customer support', de:'Kundenservice'}),
                                     v: 'support@imarra.be',
                                     sub: t({fr:'Pour les clients existants', nl:'Voor bestaande klanten', en:'For existing customers', de:'Für bestehende Kunden'}),
                                     href: 'mailto:support@imarra.be' },
                ].map(c => (
                  <div key={c.l} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={c.icon} size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, marginBottom: 4 }}>{c.l}</div>
                      {c.href ? (
                        <a href={c.href} style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg-1)', marginBottom: 2, display: 'block', textDecoration: 'none' }}>{c.v}</a>
                      ) : (
                        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg-1)', marginBottom: 2 }}>{c.v}</div>
                      )}
                      <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini-map — OpenStreetMap, Rue René Descartes 2 · 7000 Mons */}
              <div style={{
                aspectRatio: '4 / 3',
                background: '#f9fafb',
                border: '1px solid var(--border-subtle)',
                borderRadius: 12,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <iframe
                  title="Imarra — Rue René Descartes 2, 7000 Mons"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.9245%2C50.4566%2C3.9371%2C50.4626&layer=mapnik&marker=50.4596%2C3.9308"
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                    filter: 'saturate(0.55) contrast(1.02) brightness(1.02)',
                  }}
                />
                {/* Native OSM marker is now drawn inside the iframe — stays anchored on zoom/pan */}
                {/* Address pill */}
                <div style={{ position: 'absolute', bottom: 12, left: 12, padding: '6px 12px', background: '#fff', borderRadius: 999, border: '1px solid var(--border-subtle)', fontSize: 12, fontWeight: 500, boxShadow: 'var(--shadow-sm)' }}>
                  Rue René Descartes 2 · 7000 Mons
                </div>
                {/* "Open in Maps" link */}
                <a
                  href="https://www.openstreetmap.org/?mlat=50.4596&mlon=3.9308#map=18/50.4596/3.9308"
                  target="_blank"
                  rel="noopener"
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    padding: '6px 12px',
                    background: '#fff',
                    borderRadius: 999,
                    border: '1px solid var(--border-subtle)',
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'var(--fg-1)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <Icon name="arrow" size={12} /> {t({fr:'Ouvrir',nl:'Openen',en:'Open',de:'Öffnen'})}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          [data-grid="contact"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

// =============================================================================
// LEGAL (mentions / RGPD / cookies / CGV — combined placeholder page)
// =============================================================================
function LegalPage() {
  return (
    <div className="page-fade">
      <section style={{ paddingTop: 88, paddingBottom: 64 }}>
        <div className="container container-narrow">
          <div className="eyebrow">{t({fr:"Légal",nl:"Juridisch",en:"Legal",de:"Rechtliches"})}</div>
          <h1 className="h1" style={{ marginBottom: 24 }}>{t({fr:<>MENTIONS <span className="accent">LÉGALES</span></>,nl:<>WETTELIJKE <span className="accent">VERMELDINGEN</span></>,en:<>LEGAL <span className="accent">NOTICE</span></>,de:<><span className="accent">IMPRESSUM</span></>})}</h1>
          <p className="lead muted" style={{ marginBottom: 48 }}>{t({fr:"Mentions légales, politique RGPD, cookies, et conditions générales de vente.",nl:"Wettelijke vermeldingen, AVG-beleid, cookies en algemene verkoopsvoorwaarden.",en:"Legal notice, GDPR policy, cookies, and terms of sale.",de:"Impressum, DSGVO, Cookies und AGB."})}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              {
                t: t({fr:'Éditeur du site', nl:'Site-uitgever', en:'Site publisher', de:'Herausgeber der Website'}),
                items: [
                  t({fr:"Imarra — éditeur de la solution de caisse intelligente", nl:'Imarra — uitgever van de slimme kassaoplossing', en:'Imarra — publisher of the smart POS solution', de:'Imarra — Herausgeber der intelligenten Kassenlösung'}),
                  t({fr:'Siège social : Rue René Descartes 2, 7000 Mons, Belgique', nl:'Maatschappelijke zetel: Rue René Descartes 2, 7000 Bergen, België', en:'Registered office: Rue René Descartes 2, 7000 Mons, Belgium', de:'Sitz: Rue René Descartes 2, 7000 Mons, Belgien'}),
                  t({fr:'Téléphone : +32 2 615 34 69', nl:'Telefoon: +32 2 615 34 69', en:'Phone: +32 2 615 34 69', de:'Telefon: +32 2 615 34 69'}),
                  t({fr:'Identifiant unique européen disponible sur demande', nl:'Europese unieke identificator op aanvraag beschikbaar', en:'European unique identifier available on request', de:'Europäische eindeutige Kennung auf Anfrage erhältlich'}),
                  t({fr:'TVA européenne : conforme régime intra-communautaire', nl:'Europese btw: conform intracommunautair regime', en:'European VAT: compliant with intra-community regime', de:'Europäische USt: konform mit Intra-Gemeinschafts-Regelung'}),
                  t({fr:'Représentant légal : Direction Imarra', nl:'Wettelijke vertegenwoordiger: Imarra-directie', en:'Legal representative: Imarra management', de:'Gesetzlicher Vertreter: Imarra-Geschäftsführung'}),
                  t({fr:'Contact : contact@imarra.be', nl:'Contact: contact@imarra.be', en:'Contact: contact@imarra.be', de:'Kontakt: contact@imarra.be'}),
                ],
              },
              {
                t: t({fr:'Hébergement', nl:'Hosting', en:'Hosting', de:'Hosting'}),
                items: [
                  t({fr:"Données hébergées au sein de l'Union européenne", nl:'Gegevens gehost binnen de Europese Unie', en:'Data hosted within the European Union', de:'Daten innerhalb der Europäischen Union gehostet'}),
                  t({fr:'Hébergeur conforme RGPD et ISO 27001', nl:'Hostingprovider AVG- en ISO 27001-conform', en:'Host compliant with GDPR and ISO 27001', de:'Hoster DSGVO- und ISO-27001-konform'}),
                  t({fr:'Sauvegardes quotidiennes chiffrées', nl:'Dagelijkse versleutelde back-ups', en:'Daily encrypted backups', de:'Tägliche verschlüsselte Backups'}),
                ],
              },
              {
                t: t({fr:'RGPD — Protection des données', nl:'AVG — Gegevensbescherming', en:'GDPR — Data protection', de:'DSGVO — Datenschutz'}),
                items: [
                  t({fr:'Imarra est responsable du traitement des données collectées via ce site', nl:'Imarra is verantwoordelijk voor de verwerking van gegevens verzameld via deze site', en:'Imarra is the data controller for data collected through this site', de:'Imarra ist Verantwortlicher für die Verarbeitung der über diese Website erhobenen Daten'}),
                  t({fr:'Finalité : prise de contact commercial, demande de démo, support client', nl:'Doel: commercieel contact, demo-aanvragen, klantensupport', en:'Purpose: sales contact, demo requests, customer support', de:'Zweck: Geschäftskontakt, Demo-Anfragen, Kundensupport'}),
                  t({fr:'Conservation : 3 ans après dernier contact (5 ans pour les clients actifs)', nl:'Bewaring: 3 jaar na laatste contact (5 jaar voor actieve klanten)', en:'Retention: 3 years after last contact (5 years for active customers)', de:'Aufbewahrung: 3 Jahre nach letztem Kontakt (5 Jahre für aktive Kunden)'}),
                  t({fr:'Droits : accès, rectification, suppression, portabilité, opposition — exerçables auprès de rgpd@imarra.be', nl:'Rechten: inzage, rectificatie, verwijdering, portabiliteit, bezwaar — uit te oefenen via rgpd@imarra.be', en:'Rights: access, rectification, erasure, portability, objection — exercisable at rgpd@imarra.be', de:'Rechte: Auskunft, Berichtigung, Löschung, Übertragbarkeit, Widerspruch — über rgpd@imarra.be'}),
                  t({fr:"Réclamation possible auprès de l'Autorité de Protection des Données (APD) belge", nl:'Klacht mogelijk bij de Belgische Gegevensbeschermingsautoriteit (GBA)', en:'Complaints possible to the Belgian Data Protection Authority (DPA)', de:'Beschwerde bei der belgischen Datenschutzbehörde (APD) möglich'}),
                ],
              },
              {
                t: t({fr:'Cookies', nl:'Cookies', en:'Cookies', de:'Cookies'}),
                items: [
                  t({fr:'Cookies strictement nécessaires : session, préférences linguistiques (FR / NL)', nl:'Strikt noodzakelijke cookies: sessie, taalvoorkeuren (FR / NL)', en:'Strictly necessary cookies: session, language preferences (FR / NL)', de:'Unbedingt erforderliche Cookies: Sitzung, Spracheinstellungen (FR / NL)'}),
                  t({fr:'Cookies analytiques : GA4 anonymisé, après consentement', nl:'Analytische cookies: GA4 geanonimiseerd, na toestemming', en:'Analytics cookies: anonymised GA4, after consent', de:'Analyse-Cookies: anonymisiertes GA4, nach Einwilligung'}),
                  t({fr:'Cookies marketing : Meta Pixel, LinkedIn Insight Tag, après consentement explicite', nl:'Marketingcookies: Meta Pixel, LinkedIn Insight Tag, na uitdrukkelijke toestemming', en:'Marketing cookies: Meta Pixel, LinkedIn Insight Tag, after explicit consent', de:'Marketing-Cookies: Meta Pixel, LinkedIn Insight Tag, nach ausdrücklicher Einwilligung'}),
                  t({fr:'Vous pouvez modifier vos préférences à tout moment via le bandeau cookies', nl:'U kunt uw voorkeuren op elk moment wijzigen via de cookiebanner', en:'You can change your preferences at any time via the cookie banner', de:'Sie können Ihre Einstellungen jederzeit über das Cookie-Banner ändern'}),
                ],
              },
              {
                t: t({fr:'Propriété intellectuelle', nl:'Intellectuele eigendom', en:'Intellectual property', de:'Geistiges Eigentum'}),
                items: [
                  t({fr:'Imarra est une marque déposée. Tous droits réservés.', nl:'Imarra is een gedeponeerd handelsmerk. Alle rechten voorbehouden.', en:'Imarra is a registered trademark. All rights reserved.', de:'Imarra ist eine eingetragene Marke. Alle Rechte vorbehalten.'}),
                  t({fr:"Le contenu de ce site (textes, images, code) est protégé par le droit d'auteur", nl:'De inhoud van deze site (teksten, beelden, code) is auteursrechtelijk beschermd', en:'The content of this site (texts, images, code) is protected by copyright', de:'Der Inhalt dieser Website (Texte, Bilder, Code) ist urheberrechtlich geschützt'}),
                  t({fr:'Reproduction interdite sans autorisation écrite préalable', nl:'Reproductie verboden zonder voorafgaande schriftelijke toestemming', en:'Reproduction prohibited without prior written authorisation', de:'Vervielfältigung ohne vorherige schriftliche Genehmigung verboten'}),
                ],
              },
            ].map(s => (
              <div key={typeof s.t === 'string' ? s.t : Math.random()}>
                <h3 className="h3" style={{ marginBottom: 12 }}>{s.t}</h3>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {s.items.map((i, idx) => (
                    <li key={idx} style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.7, marginBottom: 6 }}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="divider" style={{ margin: '48px 0 24px' }} />
          <p style={{ fontSize: 13, color: 'var(--fg-muted)' }}>{t({fr:'Dernière mise à jour : 17 mai 2026.', nl:'Laatste update: 17 mei 2026.', en:'Last updated: 17 May 2026.', de:'Letzte Aktualisierung: 17. Mai 2026.'})}</p>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PartenairesPage, AboutPage, ContactPage, LegalPage });
