// Imarra — Home page
// Hero · Trust strip · 3 piliers · Écosystème · 8 modules · Témoignages · Stats · Verticales · FAQ · CTA

// ----- Hero carousel slides (Caisse · Bornes · Paiement) -----
// Same visual design across all 3 slides — only data + photo change.
function useHeroSlides() {
  const [lang] = useLang();
  // i18n.jsx already covers slide 1 — slides 2 & 3 are inline-translated here.
  return [
    {
      key: 'caisse',
      pill:    t('home.hero.pill'),
      title:   t('home.hero.title'),
      accent:  t('home.hero.accent'),
      desc:    t('home.hero.desc'),
      photo:   'assets/photos/sunmi-p3-in-situ.jpg',
      photoPos:'50% 65%',
      alt:     'Encaissement en service avec Imarra',
      hwTag:   t('home.hero.hw_tag'),
      metric:  t('home.hero.metric.value'),
      metricL: t('home.hero.metric.label'),
      icon:    'zap',
      badges:  [t('home.hero.badge.payment'), t('home.hero.badge.hardware'), t('home.hero.badge.support')],
    },
    {
      key: 'comptoir',
      pill: t({fr:'Imarra · Caisse comptoir', nl:'Imarra · Toonbankkassa', en:'Imarra · Counter POS', de:'Imarra · Tresenkasse'}),
      title: t({fr:'LE {COMPTOIR} OÙ LE CLIENT COMMANDE LUI-MÊME.', nl:'DE {TOONBANK} WAAR DE KLANT ZELF BESTELT.', en:'THE {COUNTER} WHERE CUSTOMERS ORDER THEMSELVES.', de:'DER {TRESEN}, AN DEM DER KUNDE SELBST BESTELLT.'}),
      accent: t({fr:'COMPTOIR', nl:'TOONBANK', en:'COUNTER', de:'TRESEN'}),
      desc: t({fr:'Double écran tactile : votre équipe encaisse d’un côté, le client compose et valide sa commande de l’autre. Personnalisation, pourboire, fidélité — tout passe par son propre écran. Moins d’erreurs, plus de ticket moyen, et la file qui avance.', nl:'Dubbel touchscreen: uw team rekent aan de ene kant af, de klant stelt zijn bestelling zelf samen en bevestigt aan de andere kant. Personalisatie, fooi, loyaliteit — alles via zijn eigen scherm. Minder fouten, hoger gemiddeld ticket en de rij beweegt.', en:'Dual touch screen: your team rings up on one side, the customer builds and confirms the order on the other. Customisation, tip, loyalty — all from their own screen. Fewer mistakes, higher average ticket, queue keeps moving.', de:'Doppelter Touchscreen: Ihr Team kassiert auf einer Seite, der Kunde stellt seine Bestellung auf der anderen selbst zusammen und bestätigt. Personalisierung, Trinkgeld, Treue — alles über seinen eigenen Bildschirm. Weniger Fehler, höherer Durchschnittsbon, die Schlange bewegt sich.'}),
      photo:   'assets/photos/pos-comptoir-double-ecran.jpg',
      photoPos:'50% 50%',
      alt:     'Caisse fixe Imarra avec double écran client au comptoir',
      hwTag: t({fr:'Sunmi T3 PRO · double écran', nl:'Sunmi T3 PRO · dubbel scherm', en:'Sunmi T3 PRO · dual screen', de:'Sunmi T3 PRO · Doppelbildschirm'}),
      metric: t({fr:'0 erreur', nl:'0 fouten', en:'0 errors', de:'0 Fehler'}),
      metricL: t({fr:'la commande est validée par le client', nl:'de bestelling wordt door de klant bevestigd', en:'the order is confirmed by the customer', de:'die Bestellung wird vom Kunden bestätigt'}),
      icon:    'users',
      badges:  [
        t({fr:'Commande côté client', nl:'Bestelling klantzijde', en:'Customer-side ordering', de:'Bestellung kundenseitig'}),
        t({fr:'Pourboire & fidélité', nl:'Fooi & loyaliteit', en:'Tip & loyalty', de:'Trinkgeld & Treue'}),
        t({fr:'Ticket digital ou papier', nl:'Digitaal of papieren ticket', en:'Digital or paper receipt', de:'Digitaler oder Papierbeleg'}),
      ],
    },
    {
      key: 'bornes',
      pill: t({fr:'Imarra · Borne self-service', nl:'Imarra · Zelfbedieningskiosk', en:'Imarra · Self-service kiosk', de:'Imarra · Selbstbedienungs-Kiosk'}),
      title: t({fr:'LA {BORNE} QUI FAIT MONTER LE TICKET MOYEN.', nl:'DE {KIOSK} DIE UW GEMIDDELDE TICKET VERHOOGT.', en:'THE {KIOSK} THAT LIFTS YOUR AVERAGE TICKET.', de:'DER {KIOSK}, DER DEN DURCHSCHNITTSBON ERHÖHT.'}),
      accent: t({fr:'BORNE', nl:'KIOSK', en:'KIOSK', de:'KIOSK'}),
      desc: t({fr:'Commande autonome, parcours sans file, paiement intégré. Vos clients composent leur menu, votre équipe se concentre sur le service. Installée en 48 h.', nl:'Zelfstandige bestelling, geen wachtrij, betaling inbegrepen. Uw klanten stellen hun menu samen, uw team focust op service. Geïnstalleerd in 48 u.', en:'Self-ordering, no queue, payment built in. Customers build their menu while your team focuses on service. Installed in 48 h.', de:'Selbstbestellung, keine Warteschlange, Zahlung integriert. Ihre Kunden bestellen selbst, Ihr Team konzentriert sich auf den Service. In 48 Std. installiert.'}),
      photo:   'assets/photos/sunmi-flex3-kiosk-retail.jpg',
      photoPos:'45% 50%',
      alt:     'Borne self-service Sunmi Flex 3 utilisée par un client en retail',
      hwTag: t({fr:'Sunmi Flex 3 · borne retail', nl:'Sunmi Flex 3 · retail-kiosk', en:'Sunmi Flex 3 · retail kiosk', de:'Sunmi Flex 3 · Retail-Kiosk'}),
      metric: t({fr:'+22 %', nl:'+22 %', en:'+22 %', de:'+22 %'}),
      metricL: t({fr:'de ticket moyen en self-service', nl:'gemiddelde ticket in zelfbediening', en:'higher avg. ticket at the kiosk', de:'höherer Durchschnittsbon am Kiosk'}),
      icon:    'monitor',
      badges:  [
        t({fr:'Menus & photos HD', nl:'Menu’s & HD-foto’s', en:'Menus & HD photos', de:'Menüs & HD-Fotos'}),
        t({fr:'Paiement CB & QR', nl:'Kaart- & QR-betaling', en:'Card & QR payment', de:'Karten- & QR-Zahlung'}),
        t({fr:'Sans file d’attente', nl:'Geen wachtrij', en:'No queue', de:'Keine Warteschlange'}),
      ],
    },
  ];
}

const HERO_INTERVAL = 4500;     // ms between auto-advances
const HERO_FADE     = 360;      // ms crossfade duration

function HomeHero() {
  const slides = useHeroSlides();
  const [i, setI] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const timerRef = React.useRef(null);
  const resumeRef = React.useRef(null);

  // Auto-advance with fade-out / swap / fade-in
  React.useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setI(x => (x + 1) % slides.length);
        setVisible(true);
      }, HERO_FADE);
    }, HERO_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [i, paused, slides.length]);

  // Cleanup the resume timer on unmount
  React.useEffect(() => () => clearTimeout(resumeRef.current), []);

  // Pause auto-advance for `ms` and resume afterwards. Called on any user interaction.
  const pauseFor = (ms = 5000) => {
    setPaused(true);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), ms);
  };

  const goTo = (idx) => {
    if (idx === i) return;
    clearTimeout(timerRef.current);
    setVisible(false);
    setTimeout(() => { setI(idx); setVisible(true); }, HERO_FADE);
    pauseFor(5000);
  };

  const s = slides[i];
  const titleParts = s.title.split(`{${s.accent}}`);
  const fadeStyle = {
    opacity: visible ? 1 : 0,
    transition: `opacity ${HERO_FADE}ms cubic-bezier(.4,0,.2,1)`,
  };

  return (
    <section
      className="home-hero"
      style={{ padding: '56px 0 56px', position: 'relative', overflow: 'hidden' }}
      onClick={() => pauseFor(5000)}
    >
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }} data-grid="hero">
        <div>
          <div style={fadeStyle}>
            <div className="pill" style={{ marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              {s.pill}
            </div>
            <h1 className="h-display hero-title" style={{ marginBottom: 18, fontSize: 'clamp(38px, 4.4vw, 60px)', lineHeight: 1.02, letterSpacing: '-0.025em' }}>
              {titleParts[0]}<span className="accent">{s.accent}</span>{titleParts[1]}
            </h1>
            <p className="lead" style={{ maxWidth: 520, marginBottom: 22, color: '#374151', fontSize: 16.5, lineHeight: 1.55 }}>
              {s.desc}
            </p>
          </div>
          <div className="hero-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
            <button onClick={openDemo} className="btn btn-primary btn-lg">
              {t('home.hero.cta.demo')} <Icon name="arrow" size={16} />
            </button>
            <a href="#/produits" className="btn btn-secondary btn-lg">
              {t('home.hero.cta.ecosystem')}
            </a>
          </div>
          <div style={{ ...fadeStyle, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 13, color: 'var(--fg-2)', marginBottom: 20 }}>
            {s.badges.map(b => (
              <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="check" size={16} style={{ color: 'var(--accent)' }} /> {b}
              </span>
            ))}
          </div>
          {/* Carousel dots */}
          <div role="tablist" aria-label="Hero carousel" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {slides.map((sl, idx) => {
              const active = idx === i;
              return (
                <button
                  key={sl.key}
                  role="tab"
                  aria-selected={active}
                  aria-label={sl.accent}
                  onClick={() => goTo(idx)}
                  style={{
                    appearance: 'none',
                    border: 0,
                    padding: 0,
                    cursor: 'pointer',
                    height: 8,
                    width: active ? 32 : 8,
                    borderRadius: 999,
                    background: active ? 'var(--accent)' : 'var(--imarra-ink-200)',
                    transition: 'width 320ms cubic-bezier(.4,0,.2,1), background 200ms',
                  }}
                />
              );
            })}
            <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>
              {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')} · {s.accent}
            </span>
          </div>
        </div>

        <HeroVisual slides={slides} active={i} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-grid="hero"] { grid-template-columns: 1fr !important; gap: 36px !important; }
          .desktop-br { display: none; }
          .home-hero { padding: 48px 0 32px !important; }
        }
        @media (max-width: 700px) {
          .home-hero { padding: 32px 0 16px !important; }
        }
      `}</style>
    </section>
  );
}

function HeroVisual({ slides, active }) {
  // Stacked photos crossfade so the background never goes dark.
  // Overlays (hw tag, metric card) fade with the active slide content.
  const s = slides[active];
  return (
    <div className="hero-visual" style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: '#0a0e1a' }}>
      {slides.map((sl, idx) => (
        <img
          key={sl.key}
          src={sl.photo}
          alt={sl.alt}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: sl.photoPos,
            opacity: idx === active ? 1 : 0,
            transition: `opacity ${HERO_FADE * 1.8}ms cubic-bezier(.4,0,.2,1)`,
            transform: idx === active ? 'scale(1.02)' : 'scale(1)',
            transitionProperty: 'opacity, transform',
            transitionDuration: `${HERO_FADE * 1.8}ms, ${HERO_INTERVAL + HERO_FADE * 2}ms`,
          }}
        />
      ))}
      <style>{`
        @media (max-width: 900px) {
          .hero-visual { aspect-ratio: 5 / 4 !important; }
        }
      `}</style>
      {/* Subtle dark overlay for legibility of floating cards */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,24,39,0.0) 35%, rgba(8,10,18,0.62) 100%)', pointerEvents: 'none' }} />

      {/* Floating metric card — bottom-left (crossfades with slide) */}
      <div key={`metric-${s.key}`} style={{
        position: 'absolute', left: 20, bottom: 20,
        background: 'transparent',
        padding: 0,
        display: 'flex', alignItems: 'center', gap: 12,
        maxWidth: 260,
        textShadow: '0 2px 12px rgba(0,0,0,0.55)',
        animation: `heroCardIn ${HERO_FADE * 1.6}ms cubic-bezier(.4,0,.2,1) both`,
      }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.12)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <Icon name={s.icon} size={19} />
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.metric}</div>
          <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.92)', marginTop: 4, lineHeight: 1.35 }}>{s.metricL}</div>
        </div>
      </div>

      {/* Floating hardware tag retired per design — keep visuals clean */}

      <style>{`
        @keyframes heroCardIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function TrustStrip() {
  // Logos placeholders (clients), partners
  return (
    <section className="tight trust-strip" style={{ padding: '28px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: '#fff' }}>
      <div className="container">
        <div className="trust-strip-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg-2)', whiteSpace: 'nowrap' }}>
            {t('home.trust.label')}
          </div>
          <div className="logo-wall" style={{ flex: 1, minWidth: 0, gridTemplateColumns: 'repeat(6, 1fr)', maxWidth: 820 }}>
            {['Café du Nord', 'Bola', 'Saveurs & Co', 'Le Petit Marché', 'Tartine', 'Mimosa'].map(n => (
              <div key={n} className="ph">{n}</div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .trust-strip-inner { flex-direction: column; align-items: stretch !important; gap: 14px !important; }
          .trust-strip-inner > div:first-child { text-align: center; }
        }
      `}</style>
    </section>
  );
}

function PartnerStrip() {
  const [lang] = useLang();

  const partners = [
    {
      kind: 'logo-img', name: 'Imarra',
      src: 'assets/imarra-logo-white.png',
      height: 32,
    },
    { kind: 'logo', name: 'Sunmi',     height: 30 },
    { kind: 'logo', name: 'Viva.com',  height: 46 },
    { kind: 'logo', name: 'Worldline', height: 38 },
  ];

  const titleRaw  = t('home.partners.title');
  const accentStr = t('home.partners.accent');
  const titleParts = titleRaw.split(`{${accentStr}}`);

  const stats = [
    { v: t('home.stats.t1.v'), l: t('home.stats.t1.l') },
    { v: t('home.stats.t2.v'), l: t('home.stats.t2.l') },
    { v: t('home.stats.t3.v'), l: t('home.stats.t3.l') },
  ];

  return (
    <section data-section="partners-stats" style={{
      position: 'relative',
      padding: '88px 0 96px',
      background: 'var(--imarra-black)',
      color: '#fff',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Two-column layout: title + stats on the left, visualization on the right */}
        <div className="partner-eco-row">
          <div className="partner-eco-text">
            <div className="eyebrow" style={{ color: 'var(--accent)', margin: 0, marginBottom: 22, letterSpacing: '0.14em', fontSize: 11, fontWeight: 600 }}>
              {t('home.partners.eyebrow')}
            </div>
            <h3 className="h2" style={{ color: '#fff', fontSize: 'clamp(30px, 3.3vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 24, fontWeight: 600 }}>
              {titleParts[0]}<span className="accent">{accentStr}</span>{titleParts[1]}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, fontSize: 16, maxWidth: 460, margin: 0, marginBottom: 40 }}>
              {t({fr:"Une seule équipe pour vous accompagner, du choix du matériel à la mise en service. Pas de support fragmenté, pas d'options cachées.",nl:"Eén team om u te begeleiden, van hardwarekeuze tot oplevering. Geen versnipperde ondersteuning, geen verborgen opties.",en:"One team to walk you through it all, from hardware to go-live. No fragmented support, no hidden options.",de:"Ein Team begleitet Sie von der Hardware-Auswahl bis zur Inbetriebnahme. Kein fragmentierter Support, keine versteckten Optionen."})}
            </p>

            {/* Stats row — clean, no separators */}
            <div className="partner-stats-row">
              {stats.map(s => (
                <div key={s.l} className="partner-stat-card">
                  <div className="partner-stat-v">{s.v}</div>
                  <div className="partner-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="partner-eco-wrap">
            {window.EcosystemHero && React.createElement(window.EcosystemHero, { bare: true, minimal: true })}
          </div>
        </div>
      </div>

      <style>{`
        .partner-eco-row {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 56px;
          align-items: center;
        }
        .partner-eco-text { min-width: 0; max-width: 520px; }
        .partner-eco-wrap { min-width: 0; position: relative; }
        .partner-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .partner-stat-v {
          font-size: clamp(28px, 2.6vw, 36px);
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 10px;
        }
        .partner-stat-l {
          font-size: 12.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
        }

        @media (max-width: 980px) {
          .partner-eco-row { grid-template-columns: 1fr !important; gap: 40px !important; }
          .partner-eco-text { max-width: none !important; }
          .partner-stats-row { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .partner-stats-row { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
}

function ThreePillars() {
  const [lang] = useLang();
  const pillars = [
    {
      icon: 'clock',
      kicker: t('home.pillars.time.eyebrow'),
      title: t('home.pillars.time.title'),
      points: [t('home.pillars.time.p1'), t('home.pillars.time.p2'), t('home.pillars.time.p3')],
    },
    {
      icon: 'euro',
      kicker: t('home.pillars.money.eyebrow'),
      title: t('home.pillars.money.title'),
      points: [t('home.pillars.money.p1'), t('home.pillars.money.p2'), t('home.pillars.money.p3')],
    },
    {
      icon: 'shield',
      kicker: t('home.pillars.calm.eyebrow'),
      title: t('home.pillars.calm.title'),
      points: [t('home.pillars.calm.p1'), t('home.pillars.calm.p2'), t('home.pillars.calm.p3')],
    },
  ];

  return (
    <section>
      <div className="container">
        <SectionHeader
          eyebrow={t('home.pillars.eyebrow')}
          title={t('home.pillars.title')}
          accent=" "
          subtitle={t('home.pillars.subtitle')}
        />

        <div className="grid grid-3">
          {pillars.map((p, i) => (
            <div key={i} className="card card-hover" style={{ padding: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <span className="icon-chip">
                  <Icon name={p.icon} size={20} />
                </span>
                <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500 }}>
                  {p.kicker}
                </div>
              </div>
              <h3 className="h3" style={{ marginBottom: 22, whiteSpace: 'pre-line', fontSize: 22, lineHeight: 1.22, fontWeight: 600, letterSpacing: '-0.01em' }}>{p.title}</h3>
              <hr className="divider" style={{ margin: '0 0 22px', opacity: 0.7 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {p.points.map(pt => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.55 }}>
                    <Icon name="check" size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const licenses = [
    {
      id: 'pos', icon: 'monitor', name: 'Imarra POS', hardware: 'Sunmi T3 PRO',
      desc: t({fr:'La caisse fixe pour comptoir, salle ou back-office. Tactile, robuste, double écran.', nl:'De vaste kassa voor toonbank, zaal of back-office. Tactiel, robuust, dubbel scherm.', en:'The fixed POS for counter, dining room or back-office. Touch, robust, dual screen.', de:'Die stationäre Kasse für Tresen, Saal oder Back-Office. Touch, robust, Doppelbildschirm.'}),
      points: [
        t({fr:'Gestion des tables', nl:'Tafelbeheer', en:'Table management', de:'Tischverwaltung'}),
        t({fr:'Catalogue & stocks temps réel', nl:'Catalogus & voorraad in realtime', en:'Real-time catalogue & stock', de:'Katalog & Bestand in Echtzeit'}),
        t({fr:'Multi-équipe & multi-caisse', nl:'Multi-team & multi-kassa', en:'Multi-team & multi-POS', de:'Multi-Team & Multi-Kasse'}),
      ],
      price: '59,86',
      photo: 'assets/photos/imarra-pos-counter.jpg',
      photoFit: 'cover',
      photoBg: '#1a1410',
      appIcon: 'assets/license-icons/imarra-pos.png',
    },
    {
      id: 'kiosk', icon: 'kiosk', name: 'Imarra Kiosk', hardware: 'Sunmi K2 · Flex 3',
      desc: t({fr:'La borne self-service qui digère vos rushs du midi sans embaucher un caissier de plus.', nl:'De zelfbedieningskiosk die uw middagdrukte verwerkt zonder een extra kassier aan te werven.', en:'The self-service kiosk that handles your lunch rush without hiring an extra cashier.', de:'Der Self-Service-Kiosk, der Ihren Mittagsansturm bewältigt — ohne zusätzlichen Kassierer.'}),
      points: [
        t({fr:'Commande autonome', nl:'Zelfstandige bestelling', en:'Self-ordering', de:'Selbstbestellung'}),
        t({fr:'Paiement carte intégré', nl:'Geïntegreerde kaartbetaling', en:'Built-in card payment', de:'Integrierte Kartenzahlung'}),
        t({fr:'Compatible KDS', nl:'KDS-compatibel', en:'KDS-compatible', de:'KDS-kompatibel'}),
      ],
      price: '49,86',
      photo: 'assets/photos/imarra-kiosk-retail-scene.jpg',
      photoFit: 'cover',
      photoBg: '#1f2937',
      appIcon: 'assets/license-icons/imarra-kiosk.png',
    },
    {
      id: 'mobile', icon: 'smartphone', name: 'Imarra Mobile', hardware: 'Sunmi M3 · P3',
      desc: t({fr:'La caisse de poche pour servir en salle, livrer, ou encaisser un food truck partout.', nl:'De zakkassa om in de zaal te bedienen, te leveren of een foodtruck overal af te rekenen.', en:'The pocket POS to serve at the table, deliver, or run a food truck anywhere.', de:'Die Taschenkasse für den Service am Tisch, Lieferung oder Food-Truck — überall einsetzbar.'}),
      points: [
        t({fr:'Caisse + paiement réunis', nl:'Kassa + betaling samen', en:'POS + payment combined', de:'Kasse + Zahlung in einem'}),
        t({fr:'4G + Wi-Fi', nl:'4G + wifi', en:'4G + Wi-Fi', de:'4G + WLAN'}),
        t({fr:'Synchro temps réel', nl:'Realtime synchronisatie', en:'Real-time sync', de:'Echtzeit-Synchronisierung'}),
      ],
      price: '15,89',
      photo: 'assets/photos/imarra-mobile-restaurant.jpg',
      photoFit: 'cover',
      photoBg: '#1f2937',
      appIcon: 'assets/license-icons/imarra-mobile.png',
    },
  ];

  return (
    <section className="wash">
      <div className="container">
        <SectionHeader
          eyebrow={t({fr:"L'écosystème",nl:"Het ecosysteem",en:"The ecosystem",de:"Das Ökosystem"})}
          title={t({fr:"UN LOGICIEL. TROIS FORMATS.",nl:"ÉÉN SOFTWARE. DRIE FORMATEN.",en:"ONE SOFTWARE. THREE FORMATS.",de:"EINE SOFTWARE. DREI FORMATE."})}
          accent={null}
          subtitle={t({fr:"Une seule logique partout : vos produits, vos prix, vos rapports — synchronisés en temps réel entre la caisse, la borne et le mobile.",nl:"Eén logica overal: uw producten, prijzen, rapporten — realtime gesynchroniseerd tussen kassa, kiosk en mobiel.",en:"One logic everywhere: your products, prices, reports — synchronised in real time across POS, kiosk and mobile.",de:"Eine Logik überall: Ihre Produkte, Preise, Berichte — in Echtzeit zwischen Kasse, Kiosk und Mobil synchronisiert."})}
        />

        <div className="grid grid-3">
          {licenses.map(l => (
            <a key={l.id} href={`#/produits/${l.id}`} className="card card-hover" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block' }}>
              {/* Vraie photo produit */}
              <div style={{
                aspectRatio: '16 / 11',
                background: l.photoBg,
                borderBottom: '1px solid var(--border-subtle)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img src={l.photo} alt={`${l.name} — ${l.hardware}`} style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: l.photoFit,
                  padding: l.photoFit === 'contain' ? 16 : 0,
                }} />
              </div>

              <div style={{ padding: 32 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
                  <img src={l.appIcon} alt={l.name} style={{ width: 40, height: 40, borderRadius: 9, flexShrink: 0 }} />
                  <h3 className="h3" style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em' }}>{l.name}</h3>
                </div>
                <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 22 }}>{l.desc}</p>
                <hr className="divider" style={{ margin: '0 0 20px', opacity: 0.7 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
                  {l.points.map(pt => (
                    <div key={pt} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13.5, color: 'var(--fg-1)' }}>
                      <Icon name="check" size={14} style={{ color: 'var(--accent)' }} /> {pt}
                    </div>
                  ))}
                </div>
                {/* Price + CTA row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, marginBottom: 4 }}>{t({fr:'À partir de',nl:'Vanaf',en:'From',de:'Ab'})}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--fg-1)', letterSpacing: '-0.02em' }}>{l.price} €</span>
                      <span style={{ fontSize: 12, color: 'var(--fg-2)' }}>/ {t({fr:'mois',nl:'maand',en:'month',de:'Monat'})}</span>
                    </div>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg-1)', fontSize: 13.5, fontWeight: 500 }}>
                    <span>{t({fr:'Découvrir',nl:'Ontdek',en:'Discover',de:'Entdecken'})}</span>
                    <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--bg-sunken)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', transition: 'transform 200ms' }}>
                      <Icon name="arrow" size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const mods = [
    { icon: 'cart',    name: t({fr:'Caisse',          nl:'Kassa',         en:'POS',           de:'Kasse'}),         d: t({fr:'Encaissement multi-mode, multi-équipe, multi-caisse. Rapide en heure de pointe.', nl:'Afrekenen met meerdere methoden, teams en kassa\'s. Snel tijdens piekuren.', en:'Multi-method, multi-team, multi-POS checkout. Fast at peak hours.', de:'Multi-Method-, Multi-Team-, Multi-Kassen-Abrechnung. Schnell zu Stoßzeiten.'}) },
    { icon: 'chart',   name: t({fr:'Ventes',          nl:'Verkoop',       en:'Sales',         de:'Umsätze'}),       d: t({fr:'Suivi temps réel, comparatifs, exports comptables un clic.', nl:'Realtime monitoring, vergelijkingen, boekhoudkundige export in één klik.', en:'Real-time tracking, comparisons, one-click accounting exports.', de:'Echtzeit-Tracking, Vergleiche, Buchhaltungsexporte mit einem Klick.'}) },
    { icon: 'tag',     name: t({fr:'Produits',        nl:'Producten',     en:'Products',      de:'Produkte'}),      d: t({fr:'Catalogue centralisé, variantes, prix par canal de vente.', nl:'Gecentraliseerde catalogus, varianten, prijzen per verkoopkanaal.', en:'Centralised catalogue, variants, prices per sales channel.', de:'Zentraler Katalog, Varianten, Preise pro Verkaufskanal.'}) },
    { icon: 'receipt', name: t({fr:'Commandes',       nl:'Bestellingen',  en:'Orders',        de:'Bestellungen'}),  d: t({fr:'Cuisine, livraison, comptoir — un flux unifié vers le KDS.', nl:'Keuken, levering, toonbank — één gestroomlijnde flow naar het KDS.', en:'Kitchen, delivery, counter — one unified flow to the KDS.', de:'Küche, Lieferung, Tresen — ein einheitlicher Fluss zum KDS.'}) },
    { icon: 'sparkle', name: t({fr:'Promotions',      nl:'Promoties',     en:'Promotions',    de:'Aktionen'}),      d: t({fr:'Happy hours, menus, codes — programmés à l\'avance.', nl:'Happy hours, menu\'s, codes — vooraf ingepland.', en:'Happy hours, menus, codes — scheduled ahead.', de:'Happy Hours, Menüs, Codes — im Voraus geplant.'}) },
    { icon: 'heart',   name: t({fr:'Fidélité',        nl:'Loyaliteit',    en:'Loyalty',       de:'Treue'}),         d: t({fr:'Programme intégré. Sans app tierce. Sans coût additionnel.', nl:'Geïntegreerd programma. Zonder externe app. Zonder extra kosten.', en:'Built-in programme. No third-party app. No extra cost.', de:'Integriertes Programm. Ohne Drittanbieter-App. Ohne Mehrkosten.'}) },
    { icon: 'lock',    name: t({fr:'Clôture',         nl:'Afsluiting',    en:'Cash-up',       de:'Abschluss'}),     d: t({fr:'Clôture de caisse en 90 secondes. Fond de caisse contrôlé.', nl:'Kassasluiting in 90 seconden. Kasvoorraad gecontroleerd.', en:'Cash-up in 90 seconds. Float reconciled.', de:'Kassenabschluss in 90 Sekunden. Wechselgeld kontrolliert.'}) },
    { icon: 'eye',     name: t({fr:'Tableaux de bord',nl:'Dashboards',    en:'Dashboards',    de:'Dashboards'}),    d: t({fr:'KPIs métiers, accessibles partout, mis à jour en direct.', nl:'Bedrijfs-KPI\'s, overal toegankelijk, live bijgewerkt.', en:'Business KPIs, accessible anywhere, live-updated.', de:'Geschäfts-KPIs, überall verfügbar, live aktualisiert.'}) },
  ];

  return (
    <section>
      <div className="container">
        <SectionHeader
          eyebrow={t({fr:"8 modules",nl:"8 modules",en:"8 modules",de:"8 Module"})}
          title={t({fr:"TOUT CE QU'IL FAUT, RIEN DE TROP.",nl:"ALLES WAT NODIG IS, NIETS TE VEEL.",en:"EVERYTHING YOU NEED, NOTHING MORE.",de:"ALLES, WAS NÖTIG IST. NICHTS MEHR."})}
          accent={null}
          subtitle={t({fr:"Pas d'options cachées. Pas de surcoût par fonctionnalité. Tout est inclus, dès le premier jour.",nl:"Geen verborgen opties. Geen meerprijs per functie. Alles inbegrepen vanaf dag één.",en:"No hidden options. No per-feature surcharge. All included from day one.",de:"Keine versteckten Optionen. Kein Aufpreis pro Funktion. Alles inklusive ab Tag eins."})}
        />

        <div className="grid grid-4" style={{ gap: 16 }}>
          {mods.map(m => (
            <div key={m.name} className="card" style={{ padding: 24 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={m.icon} size={20} />
              </div>
              <h4 className="h4" style={{ marginBottom: 8 }}>{m.name}</h4>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats are now merged into <PartnerStrip /> as a single cohesive dark section.
function Stats() { return null; }

function Verticals() {
  const v = [
    { icon: 'coffee',  name: t({fr:'Restaurant',                nl:'Restaurant',                  en:'Restaurant',                de:'Restaurant'}),
                       d:    t({fr:'Salle, cuisine, terrasse. Du bistrot 30 couverts au brasserie 200 couverts.', nl:'Zaal, keuken, terras. Van bistro met 30 plaatsen tot brasserie met 200.', en:'Dining room, kitchen, terrace. From 30-seat bistro to 200-seat brasserie.', de:'Saal, Küche, Terrasse. Vom 30-Plätze-Bistro bis zur 200-Plätze-Brasserie.'}) },
    { icon: 'chef',    name: t({fr:'Snack & Fast-food',         nl:'Snack & Fast-food',           en:'Snack & Fast-food',         de:'Imbiss & Fast-Food'}),
                       d:    t({fr:'Bornes self-service, KDS, prise de commande mobile. Servez vite, encaissez vite.', nl:'Zelfbedieningskiosken, KDS, mobiele bestelling. Snel bedienen, snel afrekenen.', en:'Self-service kiosks, KDS, mobile ordering. Serve fast, cash up fast.', de:'Self-Service-Kioske, KDS, mobile Bestellung. Schnell servieren, schnell kassieren.'}) },
    { icon: 'store',   name: t({fr:'Boulangerie',               nl:'Bakkerij',                    en:'Bakery',                    de:'Bäckerei'}),
                       d:    t({fr:'Caisse rapide, fidélité intégrée, gestion des marges produit par produit.', nl:'Snelle kassa, geïntegreerde loyaliteit, margebeheer per product.', en:'Fast checkout, built-in loyalty, margin management product by product.', de:'Schnelle Kasse, integrierte Treue, Margenverwaltung pro Produkt.'}) },
    { icon: 'package', name: t({fr:'Retail · Boutique',         nl:'Retail · Winkel',             en:'Retail · Shop',             de:'Einzelhandel · Boutique'}),
                       d:    t({fr:'Catalogue large, variantes, étiquettes, inventaire piloté.', nl:'Brede catalogus, varianten, etiketten, gestuurd inventaris.', en:'Wide catalogue, variants, labels, piloted inventory.', de:'Breiter Katalog, Varianten, Etiketten, gesteuertes Inventar.'}) },
    { icon: 'sparkle', name: t({fr:'Bar · Café',                nl:'Bar · Café',                  en:'Bar · Café',                de:'Bar · Café'}),
                       d:    t({fr:'Comptes ouverts, tournées, happy hours programmés, terrasse couverte.', nl:'Open rekeningen, rondjes, geplande happy hours, overdekt terras.', en:'Open tabs, rounds, scheduled happy hours, covered terrace.', de:'Offene Rechnungen, Runden, geplante Happy Hours, überdachte Terrasse.'}) },
    { icon: 'grid',    name: t({fr:'Supermarché de proximité',  nl:'Buurtsupermarkt',             en:'Convenience store',         de:'Nahversorger'}),
                       d:    t({fr:'Multi-caisses, pesées intégrées, recettes journalières.', nl:'Multi-kassa\'s, geïntegreerde weging, dagelijkse recepten.', en:'Multi-POS, built-in weighing, daily receipts.', de:'Multi-Kasse, integrierte Wiegung, tägliche Rezepte.'}) },
  ];

  return (
    <section className="wash">
      <div className="container">
        <SectionHeader
          eyebrow={t({fr:"Pour qui ?",nl:"Voor wie?",en:"Who is it for?",de:"Für wen?"})}
          title={t({fr:"UNE {SOLUTION}, SIX MÉTIERS.",nl:"ÉÉN {OPLOSSING}, ZES SECTOREN.",en:"ONE {SOLUTION}, SIX TRADES.",de:"EINE {LÖSUNG}, SECHS BRANCHEN."})}
          accent={t({fr:"SOLUTION",nl:"OPLOSSING",en:"SOLUTION",de:"LÖSUNG"})}
          subtitle={t({fr:"Imarra est conçu pour les commerces européens. Chaque verticale a sa configuration prête à l'emploi — vous n'avez rien à paramétrer pour démarrer.",nl:"Imarra is ontworpen voor Europese handelszaken. Elke verticale heeft een kant-en-klare configuratie — u hoeft niets in te stellen om te starten.",en:"Imarra is designed for European businesses. Each vertical has a ready-made configuration — nothing to set up to get started.",de:"Imarra ist für europäische Geschäfte konzipiert. Jede Branche hat eine fertige Konfiguration — keine Einrichtung nötig."})}
        />

        <div className="grid grid-3">
          {v.map(item => (
            <div key={item.name} className="card card-hover" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={item.icon} size={22} />
              </div>
              <div>
                <h4 className="h4" style={{ marginBottom: 6 }}>{item.name}</h4>
                <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const tt = [
    {
      quote: t({fr:'On a gagné {2 heures par jour} à la clôture. L\'équipe adore. Les clients aussi — plus jamais la queue le midi.',
               nl:'We winnen {2 uur per dag} bij de afsluiting. Het team is dol op Imarra. De klanten ook — nooit meer een rij ’s middags.',
               en:'We saved {2 hours a day} at cash-up. The team loves it. Customers too — no more lunch queue.',
               de:'Wir sparen {2 Stunden pro Tag} beim Abschluss. Das Team liebt es. Die Kunden auch — keine Mittagsschlange mehr.'}),
      who: 'Marc Dupuis',
      role: t({fr:'Gérant · Café du Nord, Liège', nl:'Zaakvoerder · Café du Nord, Luik', en:'Owner · Café du Nord, Liège', de:'Inhaber · Café du Nord, Lüttich'}),
      initials: 'MD',
    },
    {
      quote: t({fr:'L\'installation s\'est faite en {48 h}, matériel inclus. On a relancé le service le lundi suivant — zéro stress.',
               nl:'De installatie was klaar in {48 u}, hardware inbegrepen. We zijn de maandag erna heropgestart — zonder stress.',
               en:'Install was done in {48 h}, hardware included. We reopened the next Monday — zero stress.',
               de:'Die Installation war in {48 Std.} fertig, Hardware inklusive. Wir haben am nächsten Montag wieder geöffnet — stressfrei.'}),
      who: 'Sophia Renard',
      role: t({fr:'Co-fondatrice · Tartine, Namur', nl:'Medeoprichter · Tartine, Namen', en:'Co-founder · Tartine, Namur', de:'Mitgründerin · Tartine, Namur'}),
      initials: 'SR',
    },
    {
      quote: t({fr:'Avec la borne, on traite {30 % de couverts en plus} le midi. Et on a libéré une personne pour la salle.',
               nl:'Met de kiosk verwerken we ’s middags {30 % meer couverts}. En één persoon staat nu vrij voor de zaal.',
               en:'With the kiosk we serve {30 % more covers} at lunch. And we freed up one person for the dining room.',
               de:'Mit dem Kiosk schaffen wir mittags {30 % mehr Gedecke}. Und wir haben eine Person für den Saal freigestellt.'}),
      who: 'Karim B.',
      role: t({fr:'Manager · Bola, Bruxelles', nl:'Manager · Bola, Brussel', en:'Manager · Bola, Brussels', de:'Manager · Bola, Brüssel'}),
      initials: 'KB',
    },
  ];

  return (
    <section>
      <div className="container">
        <SectionHeader
          eyebrow={t({fr:"Ils parlent d'Imarra",nl:"Zij praten over Imarra",en:"They talk about Imarra",de:"Sie sprechen über Imarra"})}
          title={t({fr:"LA PAROLE EST AUX COMMERÇANTS.",nl:"HET WOORD IS AAN DE HANDELAARS.",en:"OVER TO THE MERCHANTS.",de:"DAS WORT HABEN DIE HÄNDLER."})}
          accent=" "
          subtitle={null}
        />

        <div className="grid grid-3">
          {tt.map((t, i) => {
            const parts = t.quote.split(/\{|\}/);
            return (
              <figure key={i} className="card" style={{ padding: 28, margin: 0 }}>
                <div style={{ color: 'var(--accent)', fontSize: 40, fontWeight: 700, lineHeight: 0.8, marginBottom: 8 }}>“</div>
                <blockquote style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--fg-1)', margin: '0 0 24px', letterSpacing: '-0.005em' }}>
                  {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: 'var(--accent)', fontWeight: 700 }}>{p}</strong> : <span key={j}>{p}</span>)}
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-1)' }}>{t.who}</div>
                    <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    {
      q: t({fr:'Combien coûte Imarra ?', nl:'Wat kost Imarra?', en:'How much does Imarra cost?', de:'Was kostet Imarra?'}),
      a: t({fr:'Imarra fonctionne par licence mensuelle, matériel Sunmi inclus dans l\'offre. Aucune option cachée, aucun frais d\'installation. Notre conseiller Imarra chiffre l\'offre exacte selon votre configuration en moins de 15 minutes lors de la démo.',
            nl:'Imarra werkt met een maandelijkse licentie, inclusief Sunmi-hardware. Geen verborgen opties, geen installatiekosten. Onze Imarra-adviseur berekent uw offerte op basis van uw configuratie in minder dan 15 minuten tijdens de demo.',
            en:'Imarra works on a monthly licence, Sunmi hardware included. No hidden options, no install fees. Your Imarra advisor quotes the exact offer for your setup in under 15 minutes during the demo.',
            de:'Imarra läuft über eine monatliche Lizenz inkl. Sunmi-Hardware. Keine versteckten Optionen, keine Installationskosten. Ihr Imarra-Berater erstellt das exakte Angebot in unter 15 Minuten während der Demo.'}),
    },
    {
      q: t({fr:'Combien de temps pour être opérationnel ?', nl:'Hoe snel ben ik operationeel?', en:'How long until I\'m up and running?', de:'Wie schnell bin ich einsatzbereit?'}),
      a: t({fr:'48 heures en moyenne. Nous livrons le matériel pré-configuré, formons votre équipe sur place (2 h), et restons disponibles les 7 premiers jours pour le support de mise en route.',
            nl:'Gemiddeld 48 uur. We leveren de hardware voorgeconfigureerd, leiden uw team ter plaatse op (2 u) en blijven de eerste 7 dagen beschikbaar voor opstartondersteuning.',
            en:'48 hours on average. We deliver pre-configured hardware, train your team on site (2 h), and stay available the first 7 days for go-live support.',
            de:'Im Schnitt 48 Stunden. Wir liefern vorkonfigurierte Hardware, schulen Ihr Team vor Ort (2 Std.) und sind die ersten 7 Tage für den Go-Live-Support erreichbar.'}),
    },
    {
      q: t({fr:'Mes données sont-elles protégées ?', nl:'Zijn mijn gegevens beschermd?', en:'Is my data protected?', de:'Sind meine Daten geschützt?'}),
      a: t({fr:'Oui. Imarra est hébergé en Europe et conforme RGPD. Vos exports comptables et journaux de caisse vous appartiennent, exportables à tout moment. Les communications sont chiffrées (TLS 1.3) et les mots de passe sont hachés (bcrypt).',
            nl:'Ja. Imarra wordt in Europa gehost en is AVG-conform. Uw boekhoudkundige exports en kassajournalen zijn van u en altijd exporteerbaar. Communicatie is versleuteld (TLS 1.3), wachtwoorden zijn gehasht (bcrypt).',
            en:'Yes. Imarra is hosted in Europe and GDPR-compliant. Your accounting exports and POS journals belong to you, exportable at any time. Communications are encrypted (TLS 1.3) and passwords are hashed (bcrypt).',
            de:'Ja. Imarra wird in Europa gehostet und ist DSGVO-konform. Ihre Buchhaltungs-Exporte und Kassenjournale gehören Ihnen und sind jederzeit exportierbar. Kommunikation ist verschlüsselt (TLS 1.3), Passwörter sind gehasht (bcrypt).'}),
    },
    {
      q: t({fr:'Et si je change d\'avis ?', nl:'En als ik van gedachten verander?', en:'What if I change my mind?', de:'Was, wenn ich es mir anders überlege?'}),
      a: t({fr:'Engagement de 12 mois pour le matériel Sunmi (compris dans l\'offre). Pas d\'engagement pour la licence logicielle — vous arrêtez quand vous voulez. Vos données vous appartiennent, exportables à tout moment.',
            nl:'Engagement van 12 maanden voor Sunmi-hardware (inbegrepen in de offerte). Geen engagement voor de softwarelicentie — u stopt wanneer u wilt. Uw gegevens behoren u toe en zijn altijd exporteerbaar.',
            en:'12-month commitment on Sunmi hardware (included in the offer). No commitment on the software licence — stop whenever you want. Your data is yours, exportable at any time.',
            de:'12 Monate Bindung für die Sunmi-Hardware (im Angebot enthalten). Keine Bindung für die Softwarelizenz — jederzeit kündbar. Ihre Daten gehören Ihnen und sind jederzeit exportierbar.'}),
    },
    {
      q: t({fr:'Qui assure le support en cas de problème ?', nl:'Wie zorgt voor support bij problemen?', en:'Who handles support if something breaks?', de:'Wer übernimmt den Support bei Problemen?'}),
      a: t({fr:'Imarra, en direct. Support local, par téléphone et chat, du lundi au samedi. Délai de réponse moyen : moins de 24 h.',
            nl:'Imarra zelf. Lokale support, via telefoon en chat, van maandag tot zaterdag. Gemiddelde reactietijd: minder dan 24 u.',
            en:'Imarra, directly. Local support by phone and chat, Monday to Saturday. Average response time: under 24 h.',
            de:'Imarra selbst. Lokaler Support per Telefon und Chat, Montag bis Samstag. Durchschnittliche Reaktionszeit: unter 24 Std.'}),
    },
  ];

  return (
    <section className="wash">
      <div className="container container-narrow">
        <SectionHeader
          eyebrow={t({fr:"Questions fréquentes",nl:"Veelgestelde vragen",en:"Frequently asked questions",de:"Häufige Fragen"})}
          title={t({fr:"ON A DÉJÀ RÉPONDU ICI.",nl:"WIJ HEBBEN HIER AL GEANTWOORD.",en:"WE'VE ALREADY ANSWERED HERE.",de:"WIR HABEN HIER BEREITS GEANTWORTET."})}
          accent=" ICI"
          center
        />

        <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 14, overflow: 'hidden' }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="faq-row" style={{ borderBottom: i < items.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '20px 24px',
                    background: 'transparent', border: 0,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--fg-1)' }}>{it.q}</span>
                  <span style={{ color: 'var(--accent)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 200ms', display: 'flex', flexShrink: 0 }}>
                    <Icon name={isOpen ? 'close' : 'arrowDown'} size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 22px', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65 }}>
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InAction() {
  // Trois scènes réelles : POS comptoir + KDS cuisine + Stocks retail
  const scenes = [
    {
      photo: 'assets/photos/sunmi-pos-promo.jpg',
      icon: 'sparkle',
      eyebrow: t({fr:'Module Promotions',         nl:'Module Promoties',          en:'Promotions module',         de:'Modul Aktionen'}),
      title:   t({fr:'Vos promos, programmées à l\'avance.', nl:'Uw promo\'s, vooraf gepland.', en:'Your promos, scheduled ahead.', de:'Ihre Aktionen, im Voraus geplant.'}),
      desc:    t({fr:'Happy hours, menus combo, codes saisonniers. Vous configurez une fois, la caisse exécute toute l\'année.',
                  nl:'Happy hours, comboformules, seizoenscodes. U stelt één keer in, de kassa voert het hele jaar uit.',
                  en:'Happy hours, combo menus, seasonal codes. Set up once, the POS runs it all year.',
                  de:'Happy Hours, Combo-Menüs, saisonale Codes. Einmal konfigurieren, das ganze Jahr automatisch.'}),
    },
    {
      photo: 'assets/photos/kds-cuisine.jpg',
      icon: 'chef',
      eyebrow: t({fr:'Module Commandes · KDS',    nl:'Module Bestellingen · KDS', en:'Orders module · KDS',       de:'Modul Bestellungen · KDS'}),
      title:   t({fr:'La cuisine voit, l\'équipe sert.',
                  nl:'De keuken ziet, het team bedient.',
                  en:'The kitchen sees, the team serves.',
                  de:'Die Küche sieht, das Team serviert.'}),
      desc:    t({fr:'Écran cuisine connecté à la caisse et à la borne. Plus de papier, plus de bons perdus, plus de tickets oubliés.',
                  nl:'Keukenscherm verbonden met kassa en kiosk. Geen papier meer, geen verloren bonnen, geen vergeten tickets.',
                  en:'Kitchen display connected to POS and kiosk. No more paper, no more lost dockets, no more forgotten tickets.',
                  de:'Küchendisplay verbunden mit Kasse und Kiosk. Kein Papier mehr, keine verlorenen Bons, keine vergessenen Tickets.'}),
    },
    {
      photo: 'assets/photos/stocks-retail.jpg',
      icon: 'box',
      eyebrow: t({fr:'Module Stocks · IA',         nl:'Module Voorraad · AI',      en:'Stocks module · AI',      de:'Modul Bestand · KI'}),
      title:   t({fr:'Le stock se gère seul.',
                  nl:'De voorraad beheert zichzelf.',
                  en:'Stock manages itself.',
                  de:'Der Bestand verwaltet sich selbst.'}),
      desc:    t({fr:'Alertes rupture en temps réel, réassort assisté par IA, marges produit par produit. Du retail au food, partout.',
                  nl:'Realtime stock-out-alerts, AI-ondersteunde herbevoorrading, marges per product. Van retail tot food, overal.',
                  en:'Real-time stock-out alerts, AI-assisted replenishment, margins product by product. From retail to food, everywhere.',
                  de:'Echtzeit-Warnungen bei Engpässen, KI-gestützte Nachbestellung, Margen pro Produkt. Vom Einzelhandel bis zur Gastronomie.'}),
    },
  ];

  return (
    <section>
      <div className="container">
        <SectionHeader
          eyebrow={t({fr:"Imarra en situation",nl:"Imarra in actie",en:"Imarra in situ",de:"Imarra im Einsatz"})}
          title={t({fr:"VOTRE COMMERCE, EN CONDITIONS RÉELLES.",nl:"UW HANDEL, IN ECHTE OMSTANDIGHEDEN.",en:"YOUR BUSINESS, IN REAL CONDITIONS.",de:"IHR GESCHÄFT, UNTER ECHTEN BEDINGUNGEN."})}
          accent=" "
          subtitle={t({fr:"Pas de captures de démo arrangées. Voici Imarra installé chez de vrais commerçants, en plein service.",nl:"Geen opgesmukte demo-screenshots. Dit is Imarra bij echte handelaren, midden in de service.",en:"No staged demo screenshots. Imarra installed at real merchants, during service.",de:"Keine arrangierten Demo-Screenshots. Imarra bei echten Händlern, mitten im Service."})}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {scenes.map((s, i) => (
            <div key={s.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="in-action-row" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr', alignItems: 'stretch', minHeight: 320 }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1, background: '#0a0e1a', position: 'relative', overflow: 'hidden', minHeight: 280 }}>
                  <img src={s.photo} alt={s.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'clamp(28px, 4vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={s.icon} size={20} />
                    </div>
                    <div className="eyebrow muted" style={{ margin: 0 }}>{s.eyebrow}</div>
                  </div>
                  <h3 className="h3" style={{ fontSize: 26, lineHeight: 1.2, marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .in-action-row { grid-template-columns: 1fr !important; }
          .in-action-row > *:first-child { order: 0 !important; min-height: 240px !important; }
        }
      `}</style>
    </section>
  );
}

function HomePage() {
  return (
    <div className="page-fade">
      <HomeHero />
      <TrustStrip />
      <ThreePillars />
      <Ecosystem />
      <PartnerStrip />
      <Stats />
      <Modules />
      <InAction />
      <Verticals />
      <Testimonials />
      <FAQ />
      <CTABand />
    </div>
  );
}

window.HomePage = HomePage;
