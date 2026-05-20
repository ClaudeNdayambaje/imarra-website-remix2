// Imarra — i18n system : FR (default) · NL · EN · DE
// Use t('key') in components; useLang() to read/set current language.

const LANGUAGES = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

const STORAGE_KEY = 'imarra-lang';

// All site strings — flat dictionary keyed by string id
const TRANSLATIONS = {
  // ===== Common / chrome =====
  'nav.products':            { fr: 'Produits',          nl: 'Producten',          en: 'Products',          de: 'Produkte' },
  'nav.partners':            { fr: 'Partenaires',       nl: 'Partners',           en: 'Partners',          de: 'Partner' },
  'nav.about':               { fr: 'Qui sommes-nous',   nl: 'Over ons',           en: 'About us',          de: 'Über uns' },
  'nav.contact':             { fr: 'Contact',           nl: 'Contact',            en: 'Contact',           de: 'Kontakt' },
  'nav.login':               { fr: 'Connexion',         nl: 'Inloggen',           en: 'Sign in',           de: 'Anmelden' },
  'nav.demo':                { fr: 'Demander une démo', nl: 'Demo aanvragen',     en: 'Request a demo',    de: 'Demo anfragen' },
  'nav.product.pos':         { fr: 'Caisse fixe sur Sunmi T3 PRO',      nl: 'Vaste kassa op Sunmi T3 PRO',         en: 'Fixed POS on Sunmi T3 PRO',           de: 'Stationäre Kasse auf Sunmi T3 PRO' },
  'nav.product.kiosk':       { fr: 'Borne self-service',                nl: 'Self-service kiosk',                  en: 'Self-service kiosk',                  de: 'Self-Service-Kiosk' },
  'nav.product.mobile':      { fr: 'Caisse de poche P3',                nl: 'Mobiele kassa P3',                    en: 'Pocket POS P3',                       de: 'Mobile Kasse P3' },
  'nav.ecosystem':           { fr: 'L\'écosystème complet',             nl: 'Het volledige ecosysteem',            en: 'The full ecosystem',                  de: 'Das gesamte Ökosystem' },
  'nav.ecosystem.sub':       { fr: '8 modules · matériel · paiement',   nl: '8 modules · hardware · betaling',     en: '8 modules · hardware · payment',      de: '8 Module · Hardware · Zahlung' },
  'nav.catalogue':           { fr: 'Catalogue matériel',                nl: 'Hardwarecatalogus',                   en: 'Hardware catalogue',                  de: 'Hardware-Katalog' },
  'nav.catalogue.sub':       { fr: '13 références Sunmi · 2026',        nl: '13 Sunmi-referenties · 2026',         en: '13 Sunmi references · 2026',          de: '13 Sunmi-Referenzen · 2026' },

  // ===== Footer =====
  'footer.intro':            { fr: 'La solution de caisse intelligente pour les commerces modernes.', nl: 'De slimme kassaoplossing voor moderne handelszaken.', en: 'The smart POS solution for modern businesses.', de: 'Die intelligente Kassenlösung für moderne Geschäfte.' },
  'footer.products':         { fr: 'Produits',          nl: 'Producten',          en: 'Products',          de: 'Produkte' },
  'footer.solutions':        { fr: 'Solutions',         nl: 'Oplossingen',        en: 'Solutions',         de: 'Lösungen' },
  'footer.company':          { fr: 'Entreprise',        nl: 'Bedrijf',            en: 'Company',           de: 'Unternehmen' },
  'footer.legal':            { fr: 'Légal',             nl: 'Juridisch',          en: 'Legal',             de: 'Rechtliches' },
  'footer.restaurant':       { fr: 'Restaurant',        nl: 'Restaurant',         en: 'Restaurant',        de: 'Restaurant' },
  'footer.bakery':           { fr: 'Boulangerie',       nl: 'Bakkerij',           en: 'Bakery',            de: 'Bäckerei' },
  'footer.retail':           { fr: 'Retail',            nl: 'Retail',             en: 'Retail',            de: 'Einzelhandel' },
  'footer.bar':              { fr: 'Bar / Café',        nl: 'Bar / Café',         en: 'Bar / Café',        de: 'Bar / Café' },
  'footer.about':            { fr: 'Qui sommes-nous',   nl: 'Over ons',           en: 'About us',          de: 'Über uns' },
  'footer.partners':         { fr: 'Partenaires',       nl: 'Partners',           en: 'Partners',          de: 'Partner' },
  'footer.contact':          { fr: 'Contact',           nl: 'Contact',            en: 'Contact',           de: 'Kontakt' },
  'footer.book_demo':        { fr: 'Réserver une démo', nl: 'Demo boeken',        en: 'Book a demo',       de: 'Demo buchen' },
  'footer.legal_mentions':   { fr: 'Mentions légales',  nl: 'Wettelijke vermeldingen', en: 'Legal notice',  de: 'Impressum' },
  'footer.gdpr':             { fr: 'RGPD',              nl: 'AVG',                en: 'GDPR',              de: 'DSGVO' },
  'footer.cookies':          { fr: 'Cookies',           nl: 'Cookies',            en: 'Cookies',           de: 'Cookies' },
  'footer.terms':            { fr: 'CGV',               nl: 'Algemene voorwaarden', en: 'Terms of sale',   de: 'AGB' },
  'footer.copyright':        { fr: '© 2026 Imarra · La solution de caisse intelligente', nl: '© 2026 Imarra · De slimme kassaoplossing', en: '© 2026 Imarra · The smart POS solution', de: '© 2026 Imarra · Die intelligente Kassenlösung' },
  'footer.gdpr_short':       { fr: 'RGPD',              nl: 'AVG',                en: 'GDPR',              de: 'DSGVO' },
  'footer.designed':         { fr: 'Conçu en Europe',   nl: 'Ontworpen in Europa', en: 'Designed in Europe', de: 'Entwickelt in Europa' },

  // ===== Demo modal =====
  'demo.eyebrow':            { fr: 'Démo gratuite · 20 min',      nl: 'Gratis demo · 20 min',      en: 'Free demo · 20 min',      de: 'Kostenlose Demo · 20 Min' },
  'demo.title':              { fr: 'Réserver votre démo',         nl: 'Uw demo boeken',            en: 'Book your demo',          de: 'Demo buchen' },
  'demo.field.name':         { fr: 'Nom complet',                 nl: 'Volledige naam',            en: 'Full name',               de: 'Vollständiger Name' },
  'demo.field.company':      { fr: 'Entreprise',                  nl: 'Onderneming',               en: 'Company',                 de: 'Unternehmen' },
  'demo.field.vat':          { fr: 'Numéro de TVA',               nl: 'BTW-nummer',                en: 'VAT number',              de: 'USt-IdNr.' },
  'demo.placeholder.vat':    { fr: 'BE 0123.456.789',             nl: 'BE 0123.456.789',           en: 'BE 0123.456.789',         de: 'BE 0123.456.789' },
  'demo.field.phone':        { fr: 'Téléphone',                   nl: 'Telefoon',                  en: 'Phone',                   de: 'Telefon' },
  'demo.field.email':        { fr: 'E-mail',                      nl: 'E-mail',                    en: 'Email',                   de: 'E-Mail' },
  'demo.field.business':     { fr: 'Type de commerce',            nl: 'Type onderneming',          en: 'Business type',           de: 'Geschäftstyp' },
  'demo.field.size':         { fr: 'Nb couverts / surface',       nl: 'Aantal couverts / oppervlakte', en: 'Seats / floor area',  de: 'Sitzplätze / Fläche' },
  'demo.field.slot':         { fr: 'Créneau préféré',             nl: 'Gewenst tijdstip',          en: 'Preferred slot',          de: 'Bevorzugter Termin' },
  'demo.slot.this_week':     { fr: 'Cette semaine',               nl: 'Deze week',                 en: 'This week',               de: 'Diese Woche' },
  'demo.slot.next_week':     { fr: 'La semaine prochaine',        nl: 'Volgende week',             en: 'Next week',               de: 'Nächste Woche' },
  'demo.slot.in_weeks':      { fr: 'Dans 2 à 3 semaines',         nl: 'Over 2 tot 3 weken',        en: 'In 2-3 weeks',            de: 'In 2-3 Wochen' },
  'demo.slot.exploring':     { fr: 'Pas urgent — j\'explore',     nl: 'Niet dringend — ik verken', en: 'Not urgent — exploring',  de: 'Nicht dringend — ich informiere mich' },
  'demo.business.restaurant':{ fr: 'Restaurant',                  nl: 'Restaurant',                en: 'Restaurant',              de: 'Restaurant' },
  'demo.business.snack':     { fr: 'Snack / Fast-food',           nl: 'Snack / Fast-food',         en: 'Snack / Fast-food',       de: 'Imbiss / Fast-Food' },
  'demo.business.bakery':    { fr: 'Boulangerie',                 nl: 'Bakkerij',                  en: 'Bakery',                  de: 'Bäckerei' },
  'demo.business.bar':       { fr: 'Bar / Café',                  nl: 'Bar / Café',                en: 'Bar / Café',              de: 'Bar / Café' },
  'demo.business.retail':    { fr: 'Retail / Boutique',           nl: 'Retail / Winkel',           en: 'Retail / Shop',           de: 'Einzelhandel / Boutique' },
  'demo.business.supermarket':{ fr: 'Supermarché de proximité',   nl: 'Buurtsupermarkt',           en: 'Convenience store',       de: 'Nahversorger' },
  'demo.business.other':     { fr: 'Autre',                       nl: 'Andere',                    en: 'Other',                   de: 'Andere' },
  'demo.submit':             { fr: 'Réserver ma démo',            nl: 'Mijn demo boeken',          en: 'Book my demo',            de: 'Demo buchen' },
  'demo.gdpr':               { fr: 'Vos données restent chez Imarra. RGPD compliant. Aucun spam.', nl: 'Uw gegevens blijven bij Imarra. AVG-compliant. Geen spam.', en: 'Your data stays with Imarra. GDPR compliant. No spam.', de: 'Ihre Daten bleiben bei Imarra. DSGVO-konform. Kein Spam.' },
  'demo.success.title':      { fr: 'Demande reçue, merci.',       nl: 'Aanvraag ontvangen, dank u.', en: 'Request received, thank you.', de: 'Anfrage erhalten, danke.' },
  'demo.success.body':       { fr: 'Un conseiller Imarra vous rappelle sous 24 h ouvrées pour fixer le créneau. À très vite.', nl: 'Een Imarra-adviseur belt u binnen 24 werkuren terug om een tijdstip in te plannen. Tot binnenkort.', en: 'An Imarra advisor will call you back within 24 working hours to set the slot. Talk to you soon.', de: 'Ein Imarra-Berater ruft Sie innerhalb von 24 Arbeitsstunden zurück. Bis bald.' },
  'demo.success.close':      { fr: 'Fermer',                      nl: 'Sluiten',                   en: 'Close',                   de: 'Schließen' },
  'demo.placeholder.name':   { fr: 'Marie Dupuis',                nl: 'Sophie Janssens',           en: 'Marie Dupuis',            de: 'Maria Müller' },
  'demo.placeholder.company':{ fr: 'Café du Nord',                nl: 'Café du Nord',              en: 'Café du Nord',            de: 'Café Nord' },
  'demo.placeholder.size':   { fr: '40 couverts ou 120 m²',       nl: '40 couverts of 120 m²',     en: '40 seats or 120 m²',      de: '40 Sitzplätze oder 120 m²' },

  // ===== CTABand =====
  'cta.default.title':       { fr: 'PRÊT À CHANGER DE {CAISSE} ?', nl: 'KLAAR VOOR EEN NIEUWE {KASSA}?', en: 'READY TO CHANGE YOUR {POS}?', de: 'BEREIT FÜR EINE NEUE {KASSE}?' },
  'cta.default.accent':      { fr: 'CAISSE',                      nl: 'KASSA',                     en: 'POS',                     de: 'KASSE' },
  'cta.default.subtitle':    { fr: 'Une démo de 20 min. On s\'occupe du reste.', nl: 'Een demo van 20 minuten. Wij regelen de rest.', en: 'A 20-min demo. We take care of the rest.', de: 'Eine 20-minütige Demo. Wir kümmern uns um den Rest.' },
  'cta.book_demo':           { fr: 'Réserver ma démo',            nl: 'Mijn demo boeken',          en: 'Book my demo',            de: 'Demo buchen' },
  'cta.contact_us':          { fr: 'Nous contacter',              nl: 'Contact opnemen',           en: 'Contact us',              de: 'Kontakt aufnehmen' },
  'cta.install_48h':         { fr: 'Installation en 48 h',        nl: 'Installatie in 48 u',       en: 'Installed in 48 h',       de: 'Installation in 48 Std.' },
  'cta.no_hidden':           { fr: 'Sans options cachées',        nl: 'Geen verborgen kosten',     en: 'No hidden options',       de: 'Keine versteckten Kosten' },
  'cta.support':             { fr: 'Support local, < 24 h',       nl: 'Lokale support, < 24 u',    en: 'Local support, < 24 h',   de: 'Lokaler Support, < 24 Std.' },

  // ===== Home Hero =====
  'home.hero.pill':          { fr: 'Imarra · Solution de caisse intelligente', nl: 'Imarra · Slimme kassaoplossing', en: 'Imarra · Smart POS solution', de: 'Imarra · Intelligente Kassenlösung' },
  'home.hero.title':         { fr: 'LA {CAISSE} QUI FAIT GAGNER DU TEMPS À VOTRE ÉQUIPE.', nl: 'DE {KASSA} DIE UW TEAM TIJD BESPAART.', en: 'THE {POS} THAT SAVES YOUR TEAM TIME.', de: 'DIE {KASSE}, DIE IHREM TEAM ZEIT SPART.' },
  'home.hero.accent':        { fr: 'CAISSE',                      nl: 'KASSA',                     en: 'POS',                     de: 'KASSE' },
  'home.hero.desc':          { fr: 'Caisse fixe, borne self-service, caisse de poche : Imarra remplace votre POS, vos écrans cuisine et vos terminaux de paiement par une seule solution. Installée en 48 h. Sans options cachées.', nl: 'Vaste kassa, self-service kiosk, mobiele kassa: Imarra vervangt uw POS, keukenschermen en betaalterminals door één oplossing. Geïnstalleerd in 48 u. Geen verborgen opties.', en: 'Fixed POS, self-service kiosk, pocket POS: Imarra replaces your POS, kitchen displays and payment terminals with one solution. Installed in 48 h. No hidden options.', de: 'Stationäre Kasse, Self-Service-Kiosk, mobile Kasse: Imarra ersetzt Ihr POS, Ihre Küchenbildschirme und Zahlungsterminals durch eine einzige Lösung. In 48 Std. installiert. Keine versteckten Kosten.' },
  'home.hero.cta.demo':      { fr: 'Réserver ma démo',            nl: 'Mijn demo boeken',          en: 'Book my demo',            de: 'Demo buchen' },
  'home.hero.cta.ecosystem': { fr: 'Voir l\'écosystème',          nl: 'Bekijk het ecosysteem',     en: 'See the ecosystem',       de: 'Ökosystem entdecken' },
  'home.hero.badge.payment': { fr: 'Viva.com & Worldline natifs', nl: 'Viva.com & Worldline native', en: 'Viva.com & Worldline native', de: 'Viva.com & Worldline nativ' },
  'home.hero.badge.hardware':{ fr: 'Matériel Sunmi inclus',       nl: 'Sunmi-hardware inbegrepen', en: 'Sunmi hardware included', de: 'Sunmi-Hardware enthalten' },
  'home.hero.badge.support': { fr: 'Support local, en moins de 24 h', nl: 'Lokale support, binnen 24 u', en: 'Local support, within 24 h', de: 'Lokaler Support, innerhalb von 24 Std.' },
  'home.hero.metric.value':  { fr: '8 sec',                       nl: '8 sec',                     en: '8 sec',                   de: '8 Sek.' },
  'home.hero.metric.label':  { fr: 'par encaissement en moyenne', nl: 'gemiddelde transactietijd', en: 'average checkout time',   de: 'durchschnittliche Bezahldauer' },
  'home.hero.hw_tag':        { fr: 'Sunmi · matériel inclus',     nl: 'Sunmi · hardware inbegrepen', en: 'Sunmi · hardware included', de: 'Sunmi · Hardware enthalten' },

  // ===== Trust strip + Partner strip =====
  'home.trust.label':        { fr: 'Ils nous font confiance',     nl: 'Zij vertrouwen op ons',     en: 'They trust us',           de: 'Sie vertrauen uns' },
  'home.partners.eyebrow':   { fr: 'L’écosystème Imarra',         nl: 'Het Imarra-ecosysteem',      en: 'The Imarra ecosystem',    de: 'Das Imarra-Ökosystem' },
  'home.partners.title':     { fr: 'Logiciel, matériel, paiement : un seul {interlocuteur}.', nl: 'Software, hardware, betaling: één {aanspreekpunt}.', en: 'Software, hardware, payment: one {point of contact}.', de: 'Software, Hardware, Zahlung: ein {Ansprechpartner}.' },
  'home.partners.accent':    { fr: 'interlocuteur',               nl: 'aanspreekpunt',             en: 'point of contact',        de: 'Ansprechpartner' },
  'home.partners.role.app':  { fr: 'Logiciel',                    nl: 'Software',                  en: 'Software',                de: 'Software' },
  'home.partners.role.hw':   { fr: 'Matériel',                    nl: 'Hardware',                  en: 'Hardware',                de: 'Hardware' },
  'home.partners.role.pay':  { fr: 'Paiement',                    nl: 'Betaling',                  en: 'Payment',                 de: 'Zahlung' },
  'home.partners.official':  { fr: 'partenaire officiel',         nl: 'officiële partner',         en: 'official partner',        de: 'offizieller Partner' },

  // ===== Three pillars =====
  'home.pillars.eyebrow':    { fr: 'Pourquoi Imarra',             nl: 'Waarom Imarra',             en: 'Why Imarra',              de: 'Warum Imarra' },
  'home.pillars.title':      { fr: 'TROIS PROMESSES. UN SEUL OUTIL.', nl: 'DRIE BELOFTES. ÉÉN TOOL.', en: 'THREE PROMISES. ONE TOOL.', de: 'DREI VERSPRECHEN. EIN WERKZEUG.' },
  'home.pillars.subtitle':   { fr: 'Imarra n\'est pas un logiciel de caisse de plus. C\'est une transformation du quotidien de vos équipes — chiffrée, mesurable, immédiate.', nl: 'Imarra is niet zomaar weer een kassasoftware. Het is een dagelijkse transformatie voor uw team — meetbaar, becijferd, onmiddellijk.', en: 'Imarra is not just another POS software. It\'s a daily transformation for your team — measurable, quantified, immediate.', de: 'Imarra ist nicht einfach noch eine Kassensoftware. Es ist eine tägliche Transformation für Ihr Team — messbar, beziffert, sofort.' },
  'home.pillars.time.eyebrow':  { fr: 'Temps gagné',              nl: 'Tijdwinst',                 en: 'Time saved',              de: 'Zeitgewinn' },
  'home.pillars.time.title':    { fr: 'Vos équipes\nrécupèrent leurs heures.', nl: 'Uw team\nwint uren terug.', en: 'Your team\ngets hours back.', de: 'Ihr Team\ngewinnt Stunden zurück.' },
  'home.pillars.time.p1':       { fr: '–30 % de temps à la fermeture de caisse', nl: '–30 % tijd bij kassasluiting', en: '–30 % time on cash-up', de: '–30 % Zeit beim Kassenabschluss' },
  'home.pillars.time.p2':       { fr: 'Encaissement en 8 secondes', nl: 'Afrekenen in 8 seconden', en: 'Checkout in 8 seconds', de: 'Bezahlung in 8 Sekunden' },
  'home.pillars.time.p3':       { fr: 'Plus de double saisie cuisine', nl: 'Geen dubbele invoer meer in de keuken', en: 'No more double entry in the kitchen', de: 'Keine Doppeleingaben mehr in der Küche' },
  'home.pillars.money.eyebrow': { fr: 'Argent gagné',             nl: 'Omzetgroei',                en: 'Money earned',            de: 'Mehr Umsatz' },
  'home.pillars.money.title':   { fr: 'Le panier moyen\naugmente. Vraiment.', nl: 'Het gemiddelde\nbedrag stijgt. Echt waar.', en: 'Your average\nbasket grows. Really.', de: 'Der durchschnittliche\nWarenkorb wächst. Wirklich.' },
  'home.pillars.money.p1':      { fr: '+18 % de ventes additionnelles avec l\'IA menu', nl: '+18 % extra verkoop met AI-menu', en: '+18 % upsell with the AI menu', de: '+18 % Zusatzverkäufe mit KI-Menü' },
  'home.pillars.money.p2':      { fr: 'Fidélité intégrée, sans application tierce', nl: 'Geïntegreerde loyaliteit, geen externe app', en: 'Built-in loyalty, no third-party app', de: 'Integriertes Treueprogramm ohne Drittanbieter-App' },
  'home.pillars.money.p3':      { fr: 'Aucune option cachée — un seul tarif', nl: 'Geen verborgen opties — één tarief', en: 'No hidden options — one price', de: 'Keine versteckten Kosten — ein Preis' },
  'home.pillars.calm.eyebrow':  { fr: 'Sérénité retrouvée',       nl: 'Rust hervonden',            en: 'Peace of mind',           de: 'Wiedergewonnene Ruhe' },
  'home.pillars.calm.title':    { fr: 'Vous reprenez\nla main sur votre commerce.', nl: 'U krijgt grip\nop uw zaak terug.', en: 'You take back\ncontrol of your business.', de: 'Sie übernehmen\nwieder die Kontrolle.' },
  'home.pillars.calm.p1':       { fr: 'Tableaux de bord en temps réel', nl: 'Real-time dashboards', en: 'Real-time dashboards', de: 'Echtzeit-Dashboards' },
  'home.pillars.calm.p2':       { fr: 'Support local en moins de 24 h', nl: 'Lokale support binnen 24 u', en: 'Local support within 24 h', de: 'Lokaler Support innerhalb von 24 Std.' },
  'home.pillars.calm.p3':       { fr: 'Données hébergées en Europe',   nl: 'Gegevens gehost in Europa', en: 'Data hosted in Europe', de: 'Daten in Europa gehostet' },

  // Home stats
  'home.stats.t1.v':         { fr: '–30 %',  nl: '–30 %',  en: '–30 %',  de: '–30 %' },
  'home.stats.t1.l':         { fr: 'de temps à la fermeture de caisse', nl: 'tijd bij kassasluiting', en: 'time on cash-up', de: 'Zeit beim Kassenabschluss' },
  'home.stats.t2.v':         { fr: '+18 %',  nl: '+18 %',  en: '+18 %',  de: '+18 %' },
  'home.stats.t2.l':         { fr: 'de panier moyen avec l\'IA menu', nl: 'gemiddelde mandgrootte met AI-menu', en: 'average basket with AI menu', de: 'Warenkorb mit KI-Menü' },
  'home.stats.t3.v':         { fr: '48 h',   nl: '48 u',   en: '48 h',   de: '48 Std.' },
  'home.stats.t3.l':         { fr: 'd\'installation, matériel compris', nl: 'installatietijd, hardware inbegrepen', en: 'install time, hardware included', de: 'Installation, Hardware inklusive' },
  'home.stats.t4.v':         { fr: '0 €',    nl: '0 €',    en: '€0',     de: '0 €' },
  'home.stats.t4.l':         { fr: 'd\'options cachées, toujours', nl: 'aan verborgen opties, altijd', en: 'hidden options, ever', de: 'versteckte Kosten, immer' },

  // ===== Generic UI =====
  'common.book_demo':        { fr: 'Réserver une démo',           nl: 'Demo boeken',               en: 'Book a demo',             de: 'Demo buchen' },
  'common.contact_us':       { fr: 'Nous contacter',              nl: 'Contact opnemen',           en: 'Contact us',              de: 'Kontakt aufnehmen' },
  'common.see_more':         { fr: 'Voir plus',                   nl: 'Meer bekijken',             en: 'See more',                de: 'Mehr ansehen' },
  'common.discover':         { fr: 'Découvrir',                   nl: 'Ontdekken',                 en: 'Discover',                de: 'Entdecken' },
  'common.send':             { fr: 'Envoyer',                     nl: 'Verzenden',                 en: 'Send',                    de: 'Senden' },
  'common.required':         { fr: 'Champs requis',               nl: 'Verplichte velden',         en: 'Required fields',         de: 'Pflichtfelder' },
  'common.close':            { fr: 'Fermer',                      nl: 'Sluiten',                   en: 'Close',                   de: 'Schließen' },
};

// ============================================================================
// State + hooks
// ============================================================================
let currentLang = (function() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && TRANSLATIONS['nav.products'][stored]) return stored;
  } catch (e) {}
  return 'fr';
})();

const langListeners = new Set();

function setLang(code) {
  if (!['fr','nl','en','de'].includes(code)) return;
  currentLang = code;
  try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}
  document.documentElement.lang = code;
  langListeners.forEach(fn => fn(code));
}

function getLang() { return currentLang; }

function t(keyOrObj) {
  // Inline translation object: { fr, nl, en, de }
  if (typeof keyOrObj === 'object' && keyOrObj !== null) {
    return keyOrObj[currentLang] || keyOrObj.fr || '';
  }
  // String key path
  const entry = TRANSLATIONS[keyOrObj];
  if (!entry) return keyOrObj;
  return entry[currentLang] || entry.fr || keyOrObj;
}

function useLang() {
  const [lang, setLangState] = React.useState(currentLang);
  React.useEffect(() => {
    const fn = (l) => setLangState(l);
    langListeners.add(fn);
    return () => langListeners.delete(fn);
  }, []);
  return [lang, setLang];
}

// Initial doc lang attribute
try { document.documentElement.lang = currentLang; } catch (e) {}

Object.assign(window, { t, setLang, getLang, useLang, LANGUAGES });
