// Imarra — Cas d'usage : recréation web des plans de salle catalogue (Fast-food + Retail)

const UC_TILE = (ref, name, role, photo, opts = {}) => ({
  ref, name, role, photo,
  appIcon: opts.appIcon, // 'pos' | 'kiosk' | 'mobile' — affiché en pastille sur la tuile
  custom: opts.custom, // 'callscreen' (mockup écran d'appel)
  small: opts.small // dimension réduite
});

const getUseCases = () => ({
  fastfood: {
    label: t({fr:'Fast-Food · Service rapide', nl:'Fast-Food · Quick service', en:'Fast-Food · Quick service', de:'Fast-Food · Quick-Service'}),
    title: t({fr:"LE FLUX D'UNE {COMMANDE}", nl:'DE FLOW VAN EEN {BESTELLING}', en:'THE FLOW OF AN {ORDER}', de:'DER ABLAUF EINER {BESTELLUNG}'}),
    accent: t({fr:'COMMANDE', nl:'BESTELLING', en:'ORDER', de:'BESTELLUNG'}),
    intro: t({fr:"L'écosystème Imarra dans un fast-food. Chaque appareil parle à tous les autres, du kiosque self-order à l'écran d'appel, en passant par la caisse, la cuisine et le service à table.",
              nl:"Het Imarra-ecosysteem in een fast-food. Elk toestel praat met de andere, van de self-order kiosk tot het oproepscherm, via de kassa, de keuken en de zaalbediening.",
              en:"The Imarra ecosystem in a fast-food. Every device talks to every other, from the self-order kiosk to the call screen, through the POS, kitchen and table service.",
              de:"Das Imarra-Ökosystem in einem Fast-Food. Jedes Gerät kommuniziert mit allen anderen, vom Self-Order-Kiosk bis zum Aufrufbildschirm, über Kasse, Küche und Tischservice."}),
    planLabel: t({fr:'Plan de salle', nl:'Plattegrond', en:'Floor plan', de:'Raumplan'}),
    // Définit la grille de zones
    grid: `
      "entree comptoir cuisine"
      "entree salle    cuisine"
    `,
    gridCols: '1fr 1.6fr 1fr',
    gridRows: '1.05fr 1.05fr',
    zones: {
      entree: {
        label: t({fr:'Entrée', nl:'Ingang', en:'Entrance', de:'Eingang'}),
        sub: t({fr:'3 kiosques', nl:'3 kiosken', en:'3 kiosks', de:'3 Kioske'}),
        tiles: [
        { n: 1, ...UC_TILE('Borne K2', t({fr:'Borne K2', nl:'Kiosk K2', en:'K2 kiosk', de:'K2-Kiosk'}), 'Self-order', 'assets/photos/products/k2.png', { appIcon: 'kiosk' }) },
        { n: 1, ...UC_TILE('Borne K2', t({fr:'Borne K2', nl:'Kiosk K2', en:'K2 kiosk', de:'K2-Kiosk'}), 'Self-order', 'assets/photos/products/k2.png', { appIcon: 'kiosk' }) },
        { n: 1, ...UC_TILE('Borne K2', t({fr:'Borne K2', nl:'Kiosk K2', en:'K2 kiosk', de:'K2-Kiosk'}), 'Self-order', 'assets/photos/products/k2.png', { appIcon: 'kiosk' }) }],

        layout: 'col'
      },
      comptoir: {
        label: t({fr:'Comptoir', nl:'Toonbank', en:'Counter', de:'Tresen'}),
        sub: t({fr:'Caisse', nl:'Kassa', en:'POS', de:'Kasse'}),
        tiles: [
        { n: 2, ...UC_TILE('T3 PRO', t({fr:'Caisse T3 PRO', nl:'T3 PRO kassa', en:'T3 PRO POS', de:'T3 PRO Kasse'}), t({fr:'Encaissement', nl:'Afrekenen', en:'Checkout', de:'Bezahlung'}), 'assets/photos/products/t3-pro.png', { appIcon: 'pos' }) },
        { n: 3, ...UC_TILE('Tiroir', t({fr:'Tiroir-caisse', nl:'Kassalade', en:'Cash drawer', de:'Kassenschublade'}), t({fr:'Espèces', nl:'Cash', en:'Cash', de:'Bargeld'}), 'assets/photos/products/tiroir-caisse.png') },
        { n: 4, ...UC_TILE('TPE P3', 'TPE P3', t({fr:'Paiement CB', nl:'Kaartbetaling', en:'Card payment', de:'Kartenzahlung'}), 'assets/photos/products/p3.png') }],

        layout: 'row'
      },
      salle: {
        label: t({fr:'Salle', nl:'Zaal', en:'Dining', de:'Saal'}),
        sub: t({fr:'Service à table', nl:'Tafelbediening', en:'Table service', de:'Tischservice'}),
        tiles: [
        { n: 5, ...UC_TILE("Écran d'appel", t({fr:"Écran d'appel", nl:'Oproepscherm', en:'Call screen', de:'Aufrufbildschirm'}), t({fr:'Numéros · vocal', nl:'Nummers · stem', en:'Numbers · voice', de:'Nummern · Sprache'}), null, { custom: 'callscreen' }) },
        { n: 6, ...UC_TILE('Mobile P3', t({fr:'Mobile P3', nl:'Mobiele P3', en:'Mobile P3', de:'Mobile P3'}), t({fr:'Service à table', nl:'Tafelbediening', en:'Table service', de:'Tischservice'}), 'assets/photos/products/p3.png', { appIcon: 'mobile' }) }],

        layout: 'row'
      },
      cuisine: {
        label: t({fr:'Cuisine', nl:'Keuken', en:'Kitchen', de:'Küche'}),
        sub: t({fr:'Préparation', nl:'Bereiding', en:'Prep', de:'Zubereitung'}),
        tiles: [
        { n: 7, ...UC_TILE('Écran KDS', t({fr:'Écran KDS', nl:'KDS-scherm', en:'KDS screen', de:'KDS-Bildschirm'}), t({fr:'Préparation', nl:'Bereiding', en:'Prep', de:'Zubereitung'}), 'assets/photos/products/cpad.png') },
        { n: 7, ...UC_TILE('Cloud Printer', 'Cloud Printer', t({fr:'Bon de prép.', nl:'Bereidingsbon', en:'Prep ticket', de:'Zubereitungsbon'}), 'assets/photos/products/imprimante.webp') }],

        layout: 'col'
      }
    },
    steps: [
    { n: 1, tag: t({fr:'3 × Borne K2', nl:'3 × K2-kiosk', en:'3 × K2 kiosk', de:'3 × K2-Kiosk'}),
            title: t({fr:'Client commande au kiosque', nl:'Klant bestelt aan de kiosk', en:'Customer orders at the kiosk', de:'Kunde bestellt am Kiosk'}),
            text: t({fr:'Le client compose son menu en autonomie : 3 écrans, photos HD, paiement CB ou QR. Aucune file, aucun vendeur mobilisé.', nl:'De klant stelt zijn menu zelf samen: 3 schermen, HD-foto\'s, kaart- of QR-betaling. Geen rij, geen verkoper bezet.', en:'The customer builds the order on their own: 3 screens, HD photos, card or QR payment. No queue, no staff tied up.', de:'Der Kunde stellt sein Menü selbst zusammen: 3 Bildschirme, HD-Fotos, Karten- oder QR-Zahlung. Keine Schlange, kein Personal gebunden.'}) },
    { n: 2, tag: 'T3 PRO',
            title: t({fr:'Caisse synchronisée', nl:'Gesynchroniseerde kassa', en:'POS synced', de:'Kasse synchronisiert'}),
            text: t({fr:'La commande remonte automatiquement : journal de caisse, stocks déduits, fidélité reconnue. Le manager voit tout en temps réel.', nl:'De bestelling komt automatisch door: kassajournaal, voorraad afgetrokken, loyaliteit herkend. De manager ziet alles in realtime.', en:'The order flows up automatically: POS journal, stock deducted, loyalty recognised. The manager sees it all in real time.', de:'Die Bestellung läuft automatisch hoch: Kassenjournal, Bestand abgezogen, Treue erkannt. Der Manager sieht alles in Echtzeit.'}) },
    { n: 3, tag: t({fr:'Tiroir + TPE P3', nl:'Lade + P3 TPE', en:'Drawer + P3 PED', de:'Schublade + P3-TPE'}),
            title: t({fr:'Encaissement comptoir', nl:'Afrekenen aan de toonbank', en:'Counter checkout', de:'Tresen-Bezahlung'}),
            text: t({fr:'Pour les clients qui préfèrent le comptoir : espèces, CB sans contact, tickets resto, avoirs. Tiroir piloté par la caisse.', nl:'Voor klanten die de toonbank verkiezen: cash, contactloze kaart, maaltijdcheques, tegoeden. Lade aangestuurd door de kassa.', en:'For customers who prefer the counter: cash, contactless card, meal vouchers, credit notes. Drawer driven by the POS.', de:'Für Kunden, die den Tresen bevorzugen: Bargeld, kontaktlose Karte, Essensgutscheine, Gutschriften. Schublade von der Kasse gesteuert.'}) },
    { n: 4, tag: 'KDS + Printer',
            title: t({fr:'Cuisine prépare', nl:'Keuken bereidt voor', en:'Kitchen prepares', de:'Küche bereitet vor'}),
            text: t({fr:"Le bon part en cuisine au moment du paiement : imprimé sur le Cloud Printer et affiché sur l'écran KDS avec chrono. Aucun papier perdu.", nl:'De bon gaat naar de keuken bij betaling: geprint op de Cloud Printer en getoond op het KDS-scherm met timer. Geen papier verloren.', en:'The ticket goes to the kitchen on payment: printed on the Cloud Printer and shown on the KDS screen with timer. No paper lost.', de:'Der Bon geht bei Zahlung in die Küche: gedruckt auf dem Cloud Printer und auf dem KDS-Bildschirm mit Timer angezeigt. Kein Papier verloren.'}) },
    { n: 5, tag: t({fr:"Écran d'appel", nl:'Oproepscherm', en:'Call screen', de:'Aufrufbildschirm'}),
            title: t({fr:'Numéro appelé en salle', nl:'Nummer omgeroepen in de zaal', en:'Number called in the dining room', de:'Nummer im Saal aufgerufen'}),
            text: t({fr:'Quand le plat est prêt : numéro affiché en grand + annonce vocale « commande 42 prête ». Le client se sert, le flux ne bloque pas.', nl:'Wanneer het gerecht klaar is: nummer groot weergegeven + spraakannouncement "bestelling 42 klaar". De klant bedient zichzelf, de flow blokkeert niet.', en:'When the dish is ready: number displayed large + voice announcement "order 42 ready". The customer collects, the flow doesn\'t block.', de:'Wenn das Gericht fertig ist: Nummer groß angezeigt + Sprachansage „Bestellung 42 fertig". Der Kunde holt ab, der Fluss läuft weiter.'}) },
    { n: 6, tag: 'Mobile P3',
            title: t({fr:'Service à table', nl:'Tafelbediening', en:'Table service', de:'Tischservice'}),
            text: t({fr:'Pour les clients servis à table : le serveur sélectionne plats & boissons dans le catalogue, envoie en cuisine et au bar en temps réel, encaisse sur place.', nl:'Voor klanten die aan tafel bediend worden: de ober selecteert gerechten en dranken uit de catalogus, stuurt realtime naar keuken en bar, rekent ter plaatse af.', en:'For customers served at the table: the waiter picks dishes and drinks from the catalogue, sends to kitchen and bar in real time, cashes up on the spot.', de:'Für Gäste mit Tischservice: Der Kellner wählt Gerichte und Getränke aus dem Katalog, schickt sie in Echtzeit an Küche und Bar und kassiert vor Ort.'}) }]

  },
  retail: {
    label: t({fr:'Retail · Boutique & magasin', nl:'Retail · Winkel & magazijn', en:'Retail · Shop & store', de:'Retail · Boutique & Laden'}),
    title: t({fr:"LE FLUX D'UNE {VENTE}", nl:'DE FLOW VAN EEN {VERKOOP}', en:'THE FLOW OF A {SALE}', de:'DER ABLAUF EINES {VERKAUFS}'}),
    accent: t({fr:'VENTE', nl:'VERKOOP', en:'SALE', de:'VERKAUFS'}),
    intro: t({fr:"L'écosystème Imarra dans une boutique retail. Chaque appareil parle à tous les autres, de la borne self-checkout à la console manager, en passant par les écrans rayon, la caisse et le stock.",
              nl:"Het Imarra-ecosysteem in een retailwinkel. Elk toestel praat met de andere, van de self-checkout-kiosk tot de manager-console, via de rekschermen, de kassa en de voorraad.",
              en:"The Imarra ecosystem in a retail shop. Every device talks to every other, from the self-checkout kiosk to the manager console, through the aisle screens, POS and stock.",
              de:"Das Imarra-Ökosystem in einem Retail-Laden. Jedes Gerät kommuniziert mit allen anderen, vom Self-Checkout-Kiosk bis zur Manager-Konsole, über Regalbildschirme, Kasse und Lager."}),
    planLabel: t({fr:'Plan de boutique', nl:'Winkelplan', en:'Shop plan', de:'Ladenplan'}),
    grid: `
      "entree rayons   stock"
      "entree comptoir stock"
    `,
    gridCols: '1fr 1.8fr 0.9fr',
    gridRows: '1.05fr 1.05fr',
    zones: {
      entree: {
        label: t({fr:'Entrée', nl:'Ingang', en:'Entrance', de:'Eingang'}),
        sub: t({fr:'Self-checkout', nl:'Self-checkout', en:'Self-checkout', de:'Self-Checkout'}),
        tiles: [
        { n: 1, ...UC_TILE('Flex Retail', t({fr:'Borne Flex Retail', nl:'Flex Retail-kiosk', en:'Flex Retail kiosk', de:'Flex Retail-Kiosk'}), 'Self-checkout', 'assets/photos/products/kiosk-flex-retail.png', { appIcon: 'kiosk' }) },
        { n: 1, ...UC_TILE('Flex Retail', t({fr:'Borne Flex Retail', nl:'Flex Retail-kiosk', en:'Flex Retail kiosk', de:'Flex Retail-Kiosk'}), 'Self-checkout', 'assets/photos/products/kiosk-flex-retail.png', { appIcon: 'kiosk' }) },
        { n: 1, ...UC_TILE('Flex Retail', t({fr:'Borne Flex Retail', nl:'Flex Retail-kiosk', en:'Flex Retail kiosk', de:'Flex Retail-Kiosk'}), 'Self-checkout', 'assets/photos/products/kiosk-flex-retail.png', { appIcon: 'kiosk' }) }],

        layout: 'col'
      },
      rayons: {
        label: t({fr:'Espace produits', nl:'Productruimte', en:'Product space', de:'Produktbereich'}),
        sub: t({fr:'Rayons', nl:'Schappen', en:'Aisles', de:'Regale'}),
        tiles: [
        { n: 2, ...UC_TILE('cPad', t({fr:'Écran scan prix', nl:'Prijsscanscherm', en:'Price scan screen', de:'Preisscan-Bildschirm'}), t({fr:'Information produit', nl:'Productinformatie', en:'Product info', de:'Produktinfo'}), 'assets/photos/products/cpad.png') },
        { n: 2, ...UC_TILE('cPad', t({fr:'Écran scan prix', nl:'Prijsscanscherm', en:'Price scan screen', de:'Preisscan-Bildschirm'}), t({fr:'Information produit', nl:'Productinformatie', en:'Product info', de:'Produktinfo'}), 'assets/photos/products/cpad.png') },
        { n: 4, ...UC_TILE('Mobile P3', t({fr:'Mobile vendeur', nl:'Mobiele verkoper', en:'Sales mobile', de:'Mobile Verkäufer'}), t({fr:'Assistance & stock', nl:'Assistentie & voorraad', en:'Assistance & stock', de:'Hilfe & Bestand'}), 'assets/photos/products/p3.png', { appIcon: 'mobile' }) }],

        layout: 'row'
      },
      comptoir: {
        label: t({fr:'Comptoir', nl:'Toonbank', en:'Counter', de:'Tresen'}),
        sub: t({fr:'Caisse', nl:'Kassa', en:'POS', de:'Kasse'}),
        tiles: [
        { n: 3, ...UC_TILE('T3 PRO', t({fr:'Caisse Retail', nl:'Retail-kassa', en:'Retail POS', de:'Retail-Kasse'}), t({fr:'Encaissement', nl:'Afrekenen', en:'Checkout', de:'Bezahlung'}), 'assets/photos/products/t3-pro.png', { appIcon: 'pos' }) },
        { n: 3, ...UC_TILE('Tiroir', t({fr:'Tiroir-caisse', nl:'Kassalade', en:'Cash drawer', de:'Kassenschublade'}), t({fr:'Espèces', nl:'Cash', en:'Cash', de:'Bargeld'}), 'assets/photos/products/tiroir-caisse.png') },
        { n: 3, ...UC_TILE('TPE P3', t({fr:'TPE · Paiement', nl:'TPE · Betaling', en:'PED · Payment', de:'TPE · Zahlung'}), t({fr:'CB sans contact', nl:'Contactloos kaart', en:'Contactless card', de:'Kontaktlos-Karte'}), 'assets/photos/products/p3.png') },
        { n: 3, ...UC_TILE('Scanner', 'Scanner', t({fr:'Code-barres', nl:'Barcode', en:'Barcode', de:'Barcode'}), 'assets/photos/products/scanner.png') }],

        layout: 'row'
      },
      stock: {
        label: t({fr:'Stock', nl:'Voorraad', en:'Stock', de:'Bestand'}),
        sub: t({fr:'Réserve', nl:'Reserve', en:'Reserve', de:'Reserve'}),
        tiles: [
        { n: 5, ...UC_TILE('cPad', t({fr:'Écran gestion stock', nl:'Voorraadbeheer-scherm', en:'Stock management screen', de:'Bestandsverwaltungs-Bildschirm'}), t({fr:'Vue temps réel', nl:'Realtime overzicht', en:'Real-time view', de:'Echtzeit-Ansicht'}), 'assets/photos/products/cpad.png') },
        { n: 5, ...UC_TILE('cPad', t({fr:'Terminal stock', nl:'Voorraadterminal', en:'Stock terminal', de:'Bestandsterminal'}), t({fr:'Réception · inventaire', nl:'Ontvangst · inventaris', en:'Receiving · inventory', de:'Wareneingang · Inventur'}), 'assets/photos/products/cpad.png') }],

        layout: 'col'
      }
    },
    steps: [
    { n: 1, tag: t({fr:'3 × Borne Flex Retail', nl:'3 × Flex Retail-kiosk', en:'3 × Flex Retail kiosk', de:'3 × Flex Retail-Kiosk'}),
            title: t({fr:'Self-checkout autonome', nl:'Zelfstandige self-checkout', en:'Autonomous self-checkout', de:'Autonomer Self-Checkout'}),
            text: t({fr:'Le client scanne ses articles, paie en autonomie : CB sans contact, QR, ticket dématérialisé. Idéal pour les paniers rapides, sans file.', nl:'De klant scant zijn artikelen, betaalt zelfstandig: contactloos kaart, QR, digitaal ticket. Ideaal voor snelle mandjes, zonder rij.', en:'The customer scans items and pays on their own: contactless card, QR, paperless ticket. Ideal for quick baskets, no queue.', de:'Der Kunde scannt seine Artikel und zahlt selbstständig: kontaktlose Karte, QR, papierloser Beleg. Ideal für schnelle Einkäufe, ohne Schlange.'}) },
    { n: 2, tag: t({fr:'Écran scan prix', nl:'Prijsscanscherm', en:'Price scan screen', de:'Preisscan-Bildschirm'}),
            title: t({fr:'Consultation en rayon', nl:'Raadpleging in het schap', en:'Aisle look-up', de:'Abfrage im Regal'}),
            text: t({fr:"Bornes d'information dans les rayons : prix, stock, fiche produit, alternatives. Le client est autonome, le vendeur reste disponible.", nl:'Infozuilen in de schappen: prijs, voorraad, productfiche, alternatieven. De klant is zelfstandig, de verkoper blijft beschikbaar.', en:'Info kiosks in the aisles: price, stock, product sheet, alternatives. The customer is autonomous, the seller stays free.', de:'Infosäulen in den Regalen: Preis, Bestand, Produktblatt, Alternativen. Der Kunde ist autonom, der Verkäufer bleibt verfügbar.'}) },
    { n: 3, tag: t({fr:'T3 PRO + Scanner + Tiroir + TPE', nl:'T3 PRO + Scanner + Lade + TPE', en:'T3 PRO + Scanner + Drawer + PED', de:'T3 PRO + Scanner + Schublade + TPE'}),
            title: t({fr:'Caisse classique', nl:'Klassieke kassa', en:'Classic POS', de:'Klassische Kasse'}),
            text: t({fr:'Comptoir complet pour les paniers complexes : scan code-barres, fidélité, avoirs, espèces, CB. La caisse pilote tiroir et TPE.', nl:'Volledige toonbank voor complexe mandjes: barcodescan, loyaliteit, tegoeden, cash, kaart. De kassa stuurt lade en TPE.', en:'Full counter for complex baskets: barcode scan, loyalty, credit notes, cash, card. The POS drives drawer and PED.', de:'Komplette Theke für komplexe Einkäufe: Barcode-Scan, Treue, Gutschriften, Bargeld, Karte. Die Kasse steuert Schublade und TPE.'}) },
    { n: 4, tag: 'Mobile P3',
            title: t({fr:'Assistance vendeur', nl:'Verkopershulp', en:'Sales assistance', de:'Verkäuferhilfe'}),
            text: t({fr:"Le vendeur en rayon : consulte le stock, encaisse en mobilité, déclenche un click & collect. Plus jamais « je vais voir en réserve ».",
                     nl:'De verkoper in het schap: raadpleegt voorraad, rekent mobiel af, triggert click & collect. Nooit meer "ik ga even in de reserve kijken".',
                     en:'The seller on the floor: looks up stock, cashes up mobile, triggers click & collect. No more "I\'ll check in the back".',
                     de:'Der Verkäufer im Regal: prüft Bestand, kassiert mobil, löst Click & Collect aus. Nie mehr „Ich schaue im Lager nach".'}) },
    { n: 5, tag: t({fr:'Écran & terminal stock', nl:'Voorraadscherm & terminal', en:'Stock screen & terminal', de:'Bestandsbildschirm & Terminal'}),
            title: t({fr:'Stock mis à jour', nl:'Voorraad bijgewerkt', en:'Stock updated', de:'Bestand aktualisiert'}),
            text: t({fr:'Chaque vente — borne, caisse ou mobile — déduit le stock en temps réel. Réception fournisseur, inventaire et alertes rupture en réserve.', nl:'Elke verkoop — kiosk, kassa of mobiel — trekt voorraad af in realtime. Leveranciersontvangst, inventaris en stock-out-alerts in de reserve.', en:'Every sale — kiosk, POS or mobile — deducts stock in real time. Supplier receiving, inventory and stock-out alerts in the back.', de:'Jeder Verkauf — Kiosk, Kasse oder Mobil — zieht den Bestand in Echtzeit ab. Wareneingang, Inventur und Engpasswarnungen im Lager.'}) },
    { n: 6, tag: 'Imarra Manager',
            title: t({fr:'Console centrale', nl:'Centrale console', en:'Central console', de:'Zentrale Konsole'}),
            text: t({fr:'Le manager pilote la boutique depuis une console unique : ventes, marges, stocks, fidélité, équipes. Multi-magasins natif.', nl:'De manager bestuurt de winkel vanuit één console: verkoop, marges, voorraad, loyaliteit, teams. Native multi-store.', en:'The manager runs the shop from a single console: sales, margins, stock, loyalty, teams. Multi-store native.', de:'Der Manager steuert das Geschäft von einer einzigen Konsole aus: Umsätze, Margen, Bestand, Treue, Teams. Multi-Store nativ.'}) }]

  }
});

const APP_ICON_PATH = {
  pos: 'assets/license-icons/imarra-pos.png',
  kiosk: 'assets/license-icons/imarra-kiosk.png',
  mobile: 'assets/license-icons/imarra-mobile.png'
};

// =============================================================================
// Product tile inside the plan — fidèle au catalogue : card photo + label outside
// =============================================================================
function PlanTile({ tile, isActive }) {
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      {/* Card with photo only */}
      <div style={{
        width: 96, height: 96,
        background: '#fff',
        border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-subtle)'}`,
        borderRadius: 14,
        padding: 10,
        position: 'relative',
        boxShadow: isActive ?
        '0 0 0 4px var(--accent-ring), 0 8px 22px rgba(249,115,22,0.22), 0 1px 3px rgba(17,24,39,0.04)' :
        '0 1px 3px rgba(17,24,39,0.04), 0 4px 12px rgba(17,24,39,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: isActive ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 320ms cubic-bezier(.4,0,.2,1), box-shadow 320ms cubic-bezier(.4,0,.2,1), border-color 320ms',
        zIndex: isActive ? 3 : 1
      }}>
        {/* Numéro orange badge — sticks out top-right corner */}
        <div style={{
          position: 'absolute', top: -7, right: -7,
          width: 22, height: 22, borderRadius: '50%',
          background: 'var(--accent)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700,
          boxShadow: isActive ?
          '0 0 0 5px rgba(249,115,22,0.25), 0 4px 10px rgba(249,115,22,0.45), 0 0 0 2px #fff' :
          '0 3px 8px rgba(249,115,22,0.35), 0 0 0 2px #fff',
          zIndex: 2,
          transition: 'box-shadow 320ms cubic-bezier(.4,0,.2,1)'
        }}>{tile.n}</div>

        {/* Image or custom */}
        {tile.custom === 'callscreen' ?
        <div style={{
          width: '88%', aspectRatio: '5 / 4',
          background: '#0a0e1a', borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative'
        }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1, fontFamily: 'Ubuntu Mono, monospace' }}>42</span>
            <div style={{ position: 'absolute', bottom: -4, left: '40%', right: '40%', height: 3, background: 'var(--imarra-ink-700)', borderRadius: '0 0 2px 2px' }} />
          </div> :
        tile.photo ?
        <img src={tile.photo} alt={tile.name} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'contain' }} /> :

        <div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--bg-sunken)' }} />
        }

        {/* App icon pastille — bottom right inside the card */}
        {tile.appIcon && APP_ICON_PATH[tile.appIcon] &&
        <div style={{
          position: 'absolute', bottom: 6, right: 6,
          width: 22, height: 22, borderRadius: 5,
          boxShadow: '0 2px 5px rgba(0,0,0,0.18), 0 0 0 2px #fff',
          overflow: 'hidden'
        }}>
            <img src={APP_ICON_PATH[tile.appIcon]} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
          </div>
        }
      </div>

      {/* Label OUTSIDE the card */}
      <figcaption style={{ textAlign: 'center', maxWidth: 130 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--fg-1)', lineHeight: 1.25, marginBottom: 3 }}>{tile.name}</div>
        <div style={{ fontSize: 9.5, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, lineHeight: 1.3 }}>{tile.role}</div>
      </figcaption>
    </figure>);

}

// =============================================================================
// Zone — bordered area with label + tiles
// =============================================================================
function PlanZone({ zone, area, activeStep }) {
  return (
    <div style={{
      gridArea: area,
      padding: '22px 18px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 22,
      background: 'rgba(255,255,255,0.55)',
      position: 'relative',
      display: 'flex', flexDirection: 'column',
      minWidth: 0
    }}>
      {/* Zone label */}
      <div style={{
        fontSize: 10.5, fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.14em',
        color: 'var(--fg-2)',
        marginBottom: 20,
        paddingLeft: 4
      }}>
        {zone.label} <span style={{ color: 'var(--fg-muted)', margin: '0 6px' }}>·</span> {zone.sub}
      </div>

      {/* Tiles */}
      <div style={{
        display: 'flex',
        flexDirection: zone.layout === 'col' ? 'column' : 'row',
        gap: zone.layout === 'col' ? 28 : 22,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: zone.layout === 'row' ? 'wrap' : 'nowrap'
      }}>
        {zone.tiles.map((tile, i) =>
        <PlanTile key={i} tile={tile} isActive={tile.n === activeStep} />
        )}
      </div>
    </div>);

}

// =============================================================================
// Floor plan + sidebar with flow steps
// =============================================================================
function FloorPlan({ data, sectionId, activeStep, onStepClick }) {
  return (
    <div className="floor-plan-wrap">
      {/* Plan en pleine largeur */}
      <div className="floor-plan-left" style={{
        background:
        'linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(249,250,251,0.5) 100%), ' +
        'repeating-linear-gradient(0deg, rgba(17,24,39,0.025) 0 1px, transparent 1px 32px), ' +
        'repeating-linear-gradient(90deg, rgba(17,24,39,0.025) 0 1px, transparent 1px 32px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 20,
        padding: 26,
        position: 'relative',
        minHeight: 540,
        marginBottom: 20
      }}>
        {/* Plan header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, padding: '0 4px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-2)' }}>
            {data.planLabel} <span style={{ color: 'var(--fg-muted)', margin: '0 8px' }}>—</span> {t({ fr: "Vue de dessus", nl: "Bovenaanzicht", en: "Top view", de: "Draufsicht" })}
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
            {t({ fr: "Flux en direct", nl: "Live flow", en: "Live flow", de: "Live-Flow" })} · {t({ fr: "étape", nl: "stap", en: "step", de: "Schritt" })} {activeStep}/6
          </div>
        </div>

        {/* Zones grid */}
        <div style={{
          display: 'grid',
          gridTemplateAreas: data.grid,
          gridTemplateColumns: data.gridCols,
          gridTemplateRows: data.gridRows,
          gap: 16,
          minHeight: 480
        }} className="zones-grid">
          {Object.entries(data.zones).map(([area, zone]) =>
          <PlanZone key={area} zone={zone} area={area} activeStep={activeStep} />
          )}
        </div>
      </div>

      {/* Flow steps : en dessous, sur 3 colonnes pour rester compact */}
      <div className="floor-plan-right">
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-2)', marginBottom: 16, paddingLeft: 4 }}>
          {t({ fr: "Le flux d'une", nl: "Het verloop van een", en: "The flow of a", de: "Der Ablauf einer" })} {sectionId === 'uc-fastfood' ? t({ fr: "commande", nl: "bestelling", en: "order", de: "Bestellung" }) : t({ fr: "vente", nl: "verkoop", en: "sale", de: "Verkauf" })}
        </div>
        <div className="flow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {data.steps.map((s) => {
            const isActive = s.n === activeStep;
            return (
              <button
                key={s.n}
                type="button"
                onClick={() => onStepClick && onStepClick(s.n)}
                style={{
                background: '#fff',
                border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-subtle)'}`,
                borderRadius: 14,
                padding: 20,
                display: 'flex', gap: 14,
                alignItems: 'flex-start',
                textAlign: 'left',
                font: 'inherit',
                color: 'inherit',
                cursor: 'pointer',
                boxShadow: isActive ? '0 0 0 4px var(--accent-ring), 0 6px 18px rgba(249,115,22,0.15)' : 'none',
                transition: 'box-shadow 320ms cubic-bezier(.4,0,.2,1), border-color 320ms, transform 200ms cubic-bezier(.4,0,.2,1)',
                position: 'relative'
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: isActive ? 'var(--accent)' : 'var(--imarra-black)',
                  color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                  flexShrink: 0,
                  transition: 'background 320ms'
                }}>{s.n}</div>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-1)' }}>{s.title}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.tag}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55 }}>{s.text}</div>
                </div>
              </button>);

          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .flow-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .zones-grid {
            grid-template-areas: none !important;
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .flow-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
      `}</style>
    </div>);

}

// =============================================================================
// UseCase wrapper (header + plan + footer pill)
// =============================================================================
function UseCaseSection({ data, id }) {
  const titleParts = data.title.split(`{${data.accent}}`);
  const [activeStep, setActiveStep] = React.useState(1);
  const [isPaused, setIsPaused] = React.useState(false);
  const resumeTimerRef = React.useRef(null);

  // Auto-rotation : avance d'une étape toutes les 1800 ms tant que non pausé
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => prev % data.steps.length + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPaused, data.steps.length]);

  // Cleanup du timer de reprise au démontage
  React.useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  // Clic sur une carte : sélectionne l'étape, pause l'auto-rotation,
  // puis reprend tout seul après 6 s d'inactivité.
  const handleStepClick = (n) => {
    setActiveStep(n);
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, 6000);
  };

  return (
    <section id={id} style={{ scrollMarginTop: 140, padding: 0 }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow muted">{t({ fr: "Cas d'usage", nl: "Use case", en: "Use case", de: "Anwendungsfall" })}</div>
            <h2 className="h2" style={{ marginBottom: 14 }}>
              {titleParts[0]}<span className="accent">{data.accent}</span>{titleParts[1]}
            </h2>
            <p style={{ color: 'var(--fg-2)', lineHeight: 1.7, maxWidth: 720, margin: 0, fontSize: 16 }}>{data.intro}</p>
          </div>
          <div className="pill" style={{ background: 'var(--accent-tint)', color: 'var(--accent)', fontSize: 12, fontWeight: 700 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            {data.label}
          </div>
        </div>

        <FloorPlan data={data} sectionId={id} activeStep={activeStep} onStepClick={handleStepClick} />

        {/* Footer pill */}
        <div style={{ marginTop: 24, padding: '22px 28px', background: 'var(--imarra-black)', color: '#fff', borderRadius: 14, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 4 }}>{t({ fr: "Une console unique", nl: "Eén console", en: "One single console", de: "Eine einzige Konsole" })}</div>
            <div style={{ fontSize: 16, color: '#fff', fontWeight: 500 }}>{t({ fr: "Tout l'écosystème pilote depuis un seul tableau de bord — local ou multi-sites.", nl: "Het hele ecosysteem bestuurd via één dashboard — lokaal of multi-site.", en: "The whole ecosystem driven from a single dashboard — local or multi-site.", de: "Das gesamte Ökosystem über ein einziges Dashboard — lokal oder multi-site." })}</div>
          </div>
          <button onClick={openDemo} className="btn btn-primary btn-sm">
            {t({ fr: "Réserver une démo", nl: "Demo boeken", en: "Book a demo", de: "Demo buchen" })} <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>
    </section>);

}

// =============================================================================
// Page
// =============================================================================
function UsagesPage() {
  return (
    <div className="page-fade">
      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 8 }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow">{t({ fr: "Écosystème · Cas d'usage", nl: "Ecosysteem · Use cases", en: "Ecosystem · Use cases", de: "Ökosystem · Anwendungsfälle" })}</div>
            <h1 className="h-display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', marginBottom: 18 }}>
              {t({
                fr: <>IMARRA, EN<br /><span className="accent">CONDITIONS</span> RÉELLES.</>,
                nl: <>IMARRA, IN<br />ECHTE <span className="accent">OMSTANDIGHEDEN</span>.</>,
                en: <>IMARRA, IN<br />REAL <span className="accent">CONDITIONS</span>.</>,
                de: <>IMARRA, UNTER<br />ECHTEN <span className="accent">BEDINGUNGEN</span>.</>
              })}
            </h1>
            <p className="lead" style={{ color: '#374151', maxWidth: 640, marginBottom: 0 }}>
              {t({
                fr: "Deux scénarios complets, plan de salle à l'appui : un fast-food en plein rush et une boutique retail. Chaque appareil parle à tous les autres.",
                nl: "Twee volledige scenario's, met plattegrond: een fast-food in de rush en een retailwinkel. Elk apparaat praat met de andere.",
                en: "Two complete scenarios, floor plan included: a fast-food during rush hour and a retail shop. Every device talks to every other.",
                de: "Zwei komplette Szenarien mit Raumplan: ein Fast-Food im Rush und ein Einzelhandelsladen. Jedes Gerät kommuniziert mit allen anderen."
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Cas 1 : Fast-food */}
      <section style={{ paddingTop: 8, paddingBottom: 24 }}>
        <UseCaseSection data={getUseCases().fastfood} id="uc-fastfood" />
      </section>

      {/* Cas 2 : Retail */}
      <section style={{ paddingTop: 24, paddingBottom: 56 }}>
        <UseCaseSection data={getUseCases().retail} id="uc-retail" />
      </section>

      <CTABand title={t({fr:'PRÊT À DÉPLOYER {VOTRE} ÉCOSYSTÈME ?', nl:'KLAAR OM {UW} ECOSYSTEEM UIT TE ROLLEN?', en:'READY TO DEPLOY {YOUR} ECOSYSTEM?', de:'BEREIT, {IHR} ÖKOSYSTEM AUSZUROLLEN?'})} accent={t({fr:'VOTRE', nl:'UW', en:'YOUR', de:'IHR'})} subtitle={t({fr:'20 minutes de démo. On chiffre la config exacte de votre commerce.', nl:'20 minuten demo. We berekenen de exacte configuratie voor uw zaak.', en:'A 20-min demo. We price the exact setup for your business.', de:'20 Minuten Demo. Wir kalkulieren die exakte Konfiguration für Ihr Geschäft.'})} />
    </div>);

}

Object.assign(window, { UsagesPage });