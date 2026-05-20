// Imarra — Produits (overview) + Produit detail (POS / Kiosk / Mobile)

const LICENSE_ICONS = {
  pos: 'assets/license-icons/imarra-pos.png',
  kiosk: 'assets/license-icons/imarra-kiosk.png',
  mobile: 'assets/license-icons/imarra-mobile.png',
};
window.LICENSE_ICONS = LICENSE_ICONS;

const getLicenses = () => ({
  pos: {
    id: 'pos', icon: 'monitor', name: 'Imarra POS',
    tagline: t({fr:'La caisse fixe pour comptoir.', nl:'De vaste kassa voor de toonbank.', en:'The fixed POS for the counter.', de:'Die stationäre Kasse für den Tresen.'}),
    hardware: 'Sunmi T3 PRO',
    hero: t({fr:'LA CAISSE QUI {TIENT} LE RYTHME DU RUSH.',
             nl:'DE KASSA DIE HET {TEMPO} VAN DE DRUKTE BIJHOUDT.',
             en:'THE POS THAT {KEEPS UP} WITH THE RUSH.',
             de:'DIE KASSE, DIE DEM {RUSH} STANDHÄLT.'}),
    accent: t({fr:'TIENT', nl:'TEMPO', en:'KEEPS UP', de:'RUSH'}),
    desc: t({fr:'Caisse fixe tactile pour comptoir, salle ou back-office. Robuste, rapide, double écran client. Conçue pour les commerces qui encaissent toute la journée.',
             nl:'Vaste touch-kassa voor toonbank, zaal of back-office. Robuust, snel, dubbel klantenscherm. Ontworpen voor handelszaken die de hele dag afrekenen.',
             en:'Fixed touch POS for counter, dining room or back-office. Robust, fast, dual customer screen. Designed for businesses cashing up all day long.',
             de:'Stationäre Touch-Kasse für Tresen, Saal oder Back-Office. Robust, schnell, Kundenbildschirm. Für Geschäfte, die den ganzen Tag kassieren.'}),
    photo: 'assets/photos/imarra-pos-hero.jpg',
    photoFit: 'cover',
    photoBg: '#2a1d12',
    photoSecondary: 'assets/photos/d3-mini-rocks-hero.jpg',
    photoCaption: {
      eyebrow: t({fr:'Sunmi D3 Mini · Red Dot Award', nl:'Sunmi D3 Mini · Red Dot Award', en:'Sunmi D3 Mini · Red Dot Award', de:'Sunmi D3 Mini · Red Dot Award'}),
      title: t({fr:'QUATRE PÉRIPHÉRIQUES.\nUN SEUL APPAREIL.',
                nl:'VIER RANDAPPARATEN.\nÉÉN ENKEL APPARAAT.',
                en:'FOUR PERIPHERALS.\nA SINGLE DEVICE.',
                de:'VIER PERIPHERIEGERÄTE.\nEIN EINZIGES GERÄT.'}),
      desc: t({fr:'Écran caissier 10,1", écran client 4,3", imprimante thermique 80 mm et scanner 1D/2D — tout est intégré, rien à brancher. Format ultra-compact pensé pour les boulangeries, snacks, food-trucks et corners boutique où chaque centimètre de comptoir compte. Installation en cinq minutes, maintenance proche de zéro.',
               nl:'Kassiersscherm 10,1", klantenscherm 4,3", thermische printer 80 mm en 1D/2D-scanner — alles geïntegreerd, niets aan te sluiten. Ultracompact formaat voor bakkerijen, snacks, foodtrucks en shop-in-shop waar elke centimeter toonbank telt. Installatie in vijf minuten, vrijwel geen onderhoud.',
               en:'10.1" cashier screen, 4.3" customer screen, 80 mm thermal printer and 1D/2D scanner — all integrated, nothing to plug in. Ultra-compact format designed for bakeries, snack bars, food trucks and shop-in-shops where every centimetre of counter counts. Installed in five minutes, near-zero maintenance.',
               de:'10,1"-Kassierbildschirm, 4,3"-Kundendisplay, Thermodrucker 80 mm und 1D/2D-Scanner — alles integriert, nichts anzuschließen. Ultrakompaktes Format für Bäckereien, Imbisse, Food-Trucks und Shop-in-Shops, wo jeder Zentimeter Tresen zählt. In fünf Minuten installiert, nahezu wartungsfrei.'}),
    },
    video: {
      src: 'assets/videos/sunmi-t3pro-usage.mp4',
      poster: 'assets/photos/imarra-pos-bar-counter.jpg',
      eyebrow: 'Imarra POS · Sunmi T3 PRO',
      title: t({fr:'L’ENCAISSEMENT EN 8 SECONDES. SANS LEVER LES YEUX.',
                nl:'AFREKENEN IN 8 SECONDEN. ZONDER OP TE KIJKEN.',
                en:'CHECKOUT IN 8 SECONDS. WITHOUT LOOKING UP.',
                de:'BEZAHLUNG IN 8 SEKUNDEN. OHNE AUFZUSEHEN.'}),
      desc: t({fr:'Le client commande, la caisse encaisse, le ticket part en cuisine. Double écran : votre équipe travaille d’un côté, le client voit ses prix de l’autre. Pensé pour les rushs du midi, du soir, du week-end.',
               nl:'De klant bestelt, de kassa rekent af, het ticket gaat naar de keuken. Dubbel scherm: uw team werkt aan de ene kant, de klant ziet zijn prijzen aan de andere. Ontworpen voor middag-, avond- en weekenddrukte.',
               en:'Customer orders, POS rings up, ticket goes to the kitchen. Dual screen: your team works on one side, the customer sees prices on the other. Built for lunch, dinner and weekend rushes.',
               de:'Der Kunde bestellt, die Kasse kassiert, der Bon geht in die Küche. Doppelter Bildschirm: Ihr Team arbeitet auf der einen, der Kunde sieht die Preise auf der anderen Seite. Für Mittags-, Abend- und Wochenendansturm.'}),
    },
    video2: {
      src: 'assets/videos/sunmi-d3mini-usage.mp4',
      poster: 'assets/photos/products/d3-mini-hero.png',
      eyebrow: 'Imarra POS · Sunmi D3 Mini',
      title: t({fr:'TOUT LE COMPTOIR EN 25 CM.',
                nl:'DE HELE TOONBANK IN 25 CM.',
                en:'THE WHOLE COUNTER IN 25 CM.',
                de:'DER GANZE TRESEN AUF 25 CM.'}),
      desc: t({fr:'Caisse, écran client, imprimante, scanner — tout est intégré dans un seul boîtier. Le D3 Mini se pose sur le comptoir, se branche en une prise, et travaille sans périphérique additionnel. Idéal pour boulangeries, snacks, food-trucks et corners boutique.',
               nl:'Kassa, klantenscherm, printer, scanner — alles in één behuizing. De D3 Mini staat op de toonbank, gaat in één stopcontact en werkt zonder extra randapparatuur. Ideaal voor bakkerijen, snacks, foodtrucks en shop-in-shops.',
               en:'POS, customer screen, printer, scanner — all in one housing. The D3 Mini sits on the counter, plugs into one socket, and runs without extra peripherals. Ideal for bakeries, snack bars, food trucks and shop-in-shops.',
               de:'Kasse, Kundenbildschirm, Drucker, Scanner — alles in einem Gehäuse. Der D3 Mini steht auf dem Tresen, benötigt nur eine Steckdose und kommt ohne Zusatzgeräte aus. Ideal für Bäckereien, Imbisse, Food-Trucks und Shop-in-Shops.'}),
    },
    models: [
      {
        ref: 'IMR-T3P', name: 'Sunmi T3 PRO', category: t({fr:'Smart Desktop POS', nl:'Smart Desktop POS', en:'Smart Desktop POS', de:'Smart Desktop POS'}),
        tagline: t({fr:'La caisse qui ne ralentit jamais.', nl:'De kassa die nooit vertraagt.', en:'The POS that never slows down.', de:'Die Kasse, die nie langsamer wird.'}),
        desc: t({fr:'Terminal de caisse desktop haut de gamme : châssis aluminium, écran 15,6" sans bordure, processeur Qualcomm Kryo octa-core. Pensé pour les restaurants exigeants et le retail rapide.',
                 nl:'Topklasse desktop-kassaterminal: aluminium chassis, 15,6" randloos scherm, Qualcomm Kryo octa-core processor. Voor veeleisende restaurants en snel retail.',
                 en:'High-end desktop POS terminal: aluminium chassis, borderless 15.6" screen, Qualcomm Kryo octa-core CPU. Built for demanding restaurants and fast retail.',
                 de:'High-End-Desktop-Kassenterminal: Aluminiumgehäuse, randloser 15,6"-Bildschirm, Qualcomm Kryo Octa-Core. Für anspruchsvolle Restaurants und schnellen Einzelhandel.'}),
        photo: 'assets/photos/products/t3-pro-hero.png',
        tags: [
          t({fr:'Écran 15,6" sans bordure', nl:'15,6" randloos scherm', en:'15.6" borderless screen', de:'15,6"-Bildschirm randlos'}),
          t({fr:'Double écran client', nl:'Dubbel klantenscherm', en:'Dual customer screen', de:'Doppelter Kundenbildschirm'}),
          t({fr:'NFC sur l’écran', nl:'NFC op het scherm', en:'NFC on the screen', de:'NFC am Bildschirm'}),
          t({fr:'Empreinte digitale', nl:'Vingerafdruk', en:'Fingerprint', de:'Fingerabdruck'}),
        ],
        usage: t({fr:'Resto · Bar · Retail premium', nl:'Resto · Bar · Premium retail', en:'Resto · Bar · Premium retail', de:'Resto · Bar · Premium-Retail'}),
      },
      {
        ref: 'IMR-D3M', name: 'Sunmi D3 Mini', category: t({fr:'Smart Desktop POS', nl:'Smart Desktop POS', en:'Smart Desktop POS', de:'Smart Desktop POS'}),
        tagline: t({fr:'La caisse compacte tout-en-un.', nl:'De compacte alles-in-één-kassa.', en:'The compact all-in-one POS.', de:'Die kompakte All-in-One-Kasse.'}),
        desc: t({fr:'Caisse desktop compacte : écran principal 10,1" tactile, écran client 4", imprimante thermique 80 mm intégrée et scanner 1D/2D. Idéale pour les comptoirs étroits.',
                 nl:'Compacte desktop-kassa: 10,1" touchscreen, 4" klantenscherm, ingebouwde 80 mm thermische printer en 1D/2D-scanner. Ideaal voor smalle toonbanken.',
                 en:'Compact desktop POS: 10.1" touch screen, 4" customer screen, built-in 80 mm thermal printer and 1D/2D scanner. Ideal for tight counters.',
                 de:'Kompakte Desktop-Kasse: 10,1"-Touchscreen, 4"-Kundendisplay, eingebauter 80-mm-Thermodrucker und 1D/2D-Scanner. Ideal für schmale Tresen.'}),
        photo: 'assets/photos/products/d3-mini-hero.png',
        tags: [
          t({fr:'Double écran 10,1" + 4"', nl:'Dubbel scherm 10,1" + 4"', en:'Dual screen 10.1" + 4"', de:'Doppelbildschirm 10,1" + 4"'}),
          t({fr:'Imprimante 80 mm intégrée', nl:'Ingebouwde 80 mm printer', en:'Built-in 80 mm printer', de:'Eingebauter 80-mm-Drucker'}),
          t({fr:'Scanner 1D / 2D', nl:'Scanner 1D / 2D', en:'1D / 2D scanner', de:'1D-/2D-Scanner'}),
          t({fr:'Format compact 25 cm', nl:'Compact formaat 25 cm', en:'Compact 25 cm format', de:'Kompaktes Format 25 cm'}),
        ],
        usage: t({fr:'Snack · Boulangerie · Petits comptoirs', nl:'Snack · Bakkerij · Kleine toonbanken', en:'Snack · Bakery · Small counters', de:'Imbiss · Bäckerei · Kleine Tresen'}),
      },
      {
        ref: 'IMR-CPAD-POS', name: 'cPad Bundle POS', category: t({fr:'Smart Tablet POS · imprimante intégrée', nl:'Smart Tablet POS · ingebouwde printer', en:'Smart Tablet POS · built-in printer', de:'Smart Tablet POS · integrierter Drucker'}),
        tagline: t({fr:'La caisse tablette, posée sur son imprimante.', nl:'De tabletkassa, geplaatst op zijn printer.', en:'The tablet POS, sitting on its printer.', de:'Die Tablet-Kasse auf ihrem Drucker.'}),
        desc: t({fr:'Bundle Sunmi : tablette cPad 14" FHD+ posée sur sa base d’impression 80 mm. Format compact, design pivotant, ticket sur place. Idéal pour les comptoirs où chaque centimètre compte.',
                 nl:'Sunmi-bundel: 14" FHD+ cPad-tablet op zijn 80 mm printerbasis. Compact formaat, draaibaar design, ticket ter plaatse. Ideaal waar elke centimeter toonbank telt.',
                 en:'Sunmi bundle: 14" FHD+ cPad tablet seated on its 80 mm printer base. Compact, swivel design, on-the-spot receipts. Ideal where every counter centimetre counts.',
                 de:'Sunmi-Bundle: 14"-cPad-Tablet FHD+ auf seiner 80-mm-Druckerbasis. Kompakt, drehbar, Belege vor Ort. Ideal, wo jeder Zentimeter Tresen zählt.'}),
        photo: 'assets/photos/products/cpad-bundle-pos.png',
        tags: [
          t({fr:'Écran cPad 14"', nl:'cPad-scherm 14"', en:'cPad screen 14"', de:'cPad-Bildschirm 14"'}),
          t({fr:'Imprimante 80 mm intégrée', nl:'Ingebouwde 80 mm printer', en:'Built-in 80 mm printer', de:'Eingebauter 80-mm-Drucker'}),
          t({fr:'Empreinte minimale', nl:'Minimale voetafdruk', en:'Minimal footprint', de:'Minimale Stellfläche'}),
          t({fr:'Plug & play', nl:'Plug & play', en:'Plug & play', de:'Plug & play'}),
        ],
        usage: t({fr:'Boutique · Pop-up · Showroom', nl:'Winkel · Pop-up · Showroom', en:'Shop · Pop-up · Showroom', de:'Boutique · Pop-up · Showroom'}),
      },
      {
        ref: 'IMR-S2', name: 'Sunmi S2', category: t({fr:'Smart Cashier Scale · POS Android', nl:'Smart Cashier Scale · POS Android', en:'Smart Cashier Scale · POS Android', de:'Smart Cashier Scale · POS Android'}),
        tagline: t({fr:'La caisse qui pèse aussi vos produits.', nl:'De kassa die ook uw producten weegt.', en:'The POS that also weighs your products.', de:'Die Kasse, die auch Ihre Produkte wiegt.'}),
        desc: t({fr:'Balance commerciale Android nouvelle génération : caisse, pesage (40 g → 15 kg) et impression de ticket dans un seul appareil. Châssis en alliage d’aluminium suspendu, double écran 15,6" + 10,1", capteur homologué OIML. Pour boucheries, fromageries, primeurs, traiteurs et rayons frais.',
                 nl:'Nieuwe generatie Android handelsweegschaal: kassa, weging (40 g → 15 kg) en ticketprinten in één apparaat. Opgehangen aluminium chassis, dubbel scherm 15,6" + 10,1", OIML-gekeurde sensor. Voor slagerijen, kaaswinkels, groentewinkels, traiteurs en versafdelingen.',
                 en:'Next-gen Android commercial scale: POS, weighing (40 g → 15 kg) and receipt printing in one device. Suspended aluminium chassis, dual 15.6" + 10.1" screens, OIML-certified sensor. For butchers, cheesemongers, greengrocers, caterers and fresh aisles.',
                 de:'Android-Handelswaage neuer Generation: Kasse, Wiegung (40 g → 15 kg) und Bondruck in einem Gerät. Hängendes Aluminium-Chassis, Doppelbildschirm 15,6" + 10,1", OIML-zertifizierter Sensor. Für Metzgereien, Käsereien, Obstläden, Catering und Frischetheken.'}),
        photo: 'assets/photos/products/s2-hero.png',
        tags: [
          t({fr:'Pesage 40 g → 15 kg', nl:'Weging 40 g → 15 kg', en:'Weighing 40 g → 15 kg', de:'Wiegung 40 g → 15 kg'}),
          t({fr:'Double écran 15,6" + 10,1"', nl:'Dubbel scherm 15,6" + 10,1"', en:'Dual screen 15.6" + 10.1"', de:'Doppelbildschirm 15,6" + 10,1"'}),
          'Imprimante Seiko 80 mm',
          'eSIM + 4G + Wi-Fi',
        ],
        usage: t({fr:'Boucherie · Fromagerie · Primeur · Traiteur', nl:'Slagerij · Kaaswinkel · Groentewinkel · Traiteur', en:'Butcher · Cheesemonger · Greengrocer · Caterer', de:'Metzgerei · Käserei · Obstladen · Catering'}),
      },
    ],
    modelsHeader: {
      eyebrow: t({fr:'La gamme complète', nl:'Het volledige assortiment', en:'The full range', de:'Die komplette Reihe'}),
      title: t({fr:'TOUTES VOS {CAISSES FIXES}. UN SEUL LOGICIEL.',
                nl:'AL UW {VASTE KASSA’S}. ÉÉN SOFTWARE.',
                en:'ALL YOUR {FIXED POS}. ONE SOFTWARE.',
                de:'ALLE IHRE {STATIONÄREN KASSEN}. EINE SOFTWARE.'}),
      accent: t({fr:'CAISSES FIXES', nl:'VASTE KASSA’S', en:'FIXED POS', de:'STATIONÄREN KASSEN'}),
      subtitle: t({fr:'Comptoir, salle ou back-office — un seul logiciel Imarra POS pilote autant de caisses Sunmi que vous voulez déployer, en double écran comme en format compact.',
                   nl:'Toonbank, zaal of back-office — één Imarra POS-software bestuurt zoveel Sunmi-kassa’s als u wilt uitrollen, met dubbel scherm of in compact formaat.',
                   en:'Counter, dining room or back-office — a single Imarra POS software drives as many Sunmi POS units as you want to deploy, dual-screen or compact.',
                   de:'Tresen, Saal oder Back-Office — eine einzige Imarra-POS-Software steuert beliebig viele Sunmi-Kassen, mit Doppelbildschirm oder im Kompaktformat.'}),
    },
    specs: null,
    benefits: [
      { icon: 'zap',   t: t({fr:'Encaissement en 8 secondes', nl:'Afrekenen in 8 seconden', en:'Checkout in 8 seconds', de:'Bezahlung in 8 Sekunden'}),
                       d: t({fr:'Du scan au reçu : pensée pour les rushs du midi, du soir, du week-end.', nl:'Van scan tot bon: ontworpen voor middag-, avond- en weekenddrukte.', en:'From scan to receipt: built for lunch, dinner and weekend rushes.', de:'Vom Scan zum Beleg: gebaut für Mittags-, Abend- und Wochenendansturm.'}) },
      { icon: 'grid',  t: t({fr:'Gestion des tables', nl:'Tafelbeheer', en:'Table management', de:'Tischverwaltung'}),
                       d: t({fr:'Plan de salle, ouverture de couverts, transferts entre tables, comptes ouverts.', nl:'Zaalplan, openen van couverts, transfers tussen tafels, open rekeningen.', en:'Floor plan, opening covers, table transfers, open tabs.', de:'Saalplan, Gedeck-Eröffnung, Tischtransfers, offene Rechnungen.'}) },
      { icon: 'users', t: t({fr:'Multi-équipe, multi-caisse', nl:'Multi-team, multi-kassa', en:'Multi-team, multi-POS', de:'Multi-Team, Multi-Kasse'}),
                       d: t({fr:'Chaque caissier a son profil. Chaque comptoir sa vue. Aucun mélange.', nl:'Elke kassier heeft zijn profiel. Elke toonbank zijn weergave. Geen vermenging.', en:'Each cashier has their profile. Each counter its view. No mix-ups.', de:'Jeder Kassierer hat sein Profil. Jeder Tresen seine Ansicht. Keine Vermischung.'}) },
      { icon: 'chart', t: t({fr:'Rapports temps réel', nl:'Realtime rapporten', en:'Real-time reports', de:'Echtzeit-Berichte'}),
                       d: t({fr:'Vous voyez votre CA, vos marges, vos tops produits — en direct, partout.', nl:'U ziet uw omzet, marges en topproducten — live, overal.', en:'See your revenue, margins, top products — live, anywhere.', de:'Sehen Sie Umsatz, Margen, Top-Produkte — live, überall.'}) },
    ],
  },
  kiosk: {
    id: 'kiosk', icon: 'kiosk', name: 'Imarra Kiosk',
    tagline: t({fr:'La borne self-service qui encaisse pour vous.', nl:'De zelfbedieningskiosk die voor u afrekent.', en:'The self-service kiosk that cashes up for you.', de:'Der Self-Service-Kiosk, der für Sie kassiert.'}),
    hardware: 'Sunmi K2 · Flex 3',
    hero: t({fr:'PLUS DE QUEUE.{ } PLUS DE TICKETS.', nl:'GEEN WACHTRIJ.{ } MEER TICKETS.', en:'NO QUEUE.{ } MORE TICKETS.', de:'KEINE WARTESCHLANGE.{ } MEHR TICKETS.'}),
    accent: ' ',
    desc: t({fr:'Borne autonome de commande et de paiement. Idéale pour les rushs midi, les snacks, les fast-foods, les zones de restauration. Compatible KDS cuisine.',
             nl:'Zelfstandige bestel- en betaalkiosk. Ideaal voor middagdrukte, snacks, fast-food en restaurantzones. Compatibel met keuken-KDS.',
             en:'Standalone ordering & payment kiosk. Ideal for lunch rushes, snack bars, fast-food and food courts. Compatible with kitchen KDS.',
             de:'Autonomer Bestell- und Bezahlkiosk. Ideal für Mittagsansturm, Imbisse, Fast-Food und Food-Courts. Mit Küchen-KDS kompatibel.'}),
    photo: 'assets/photos/imarra-kiosk-retail-scene.jpg',
    photoFit: 'cover',
    photoBg: '#1f2937',
    video: {
      src: 'assets/videos/sunmi-flex3-usage.mp4',
      poster: 'assets/photos/products/kiosk-flex-resto.png',
      eyebrow: t({fr:'Imarra Kiosk · en utilisation', nl:'Imarra Kiosk · in gebruik', en:'Imarra Kiosk · in use', de:'Imarra Kiosk · im Einsatz'}),
      title: t({fr:'SCANNE. PAIE. PART. EN MOINS DE 30 SECONDES.',
                nl:'SCANT. BETAALT. VERTREKT. IN MINDER DAN 30 SECONDEN.',
                en:'SCAN. PAY. LEAVE. IN UNDER 30 SECONDS.',
                de:'SCANNEN. ZAHLEN. GEHEN. IN UNTER 30 SEKUNDEN.'}),
      desc: t({fr:'Le client prend son article, scanne le code-barre sur la borne, paie en sans contact et s’en va. En retail, c’est la file qui disparaît. En restauration, la commande part automatiquement en cuisine via le KDS — votre équipe reste concentrée sur le service.',
               nl:'De klant pakt zijn artikel, scant de barcode op de kiosk, betaalt contactloos en vertrekt. In retail verdwijnt de rij. In horeca gaat de bestelling automatisch via het KDS naar de keuken — uw team blijft gefocust op service.',
               en:'The customer picks the item, scans the barcode at the kiosk, taps to pay and leaves. In retail, the queue disappears. In food, the order flows automatically to the kitchen via KDS — your team stays focused on service.',
               de:'Der Kunde nimmt seinen Artikel, scannt den Barcode am Kiosk, zahlt kontaktlos und geht. Im Retail verschwindet die Schlange. In der Gastronomie geht die Bestellung automatisch über das KDS in die Küche — Ihr Team bleibt am Service.'}),
    },
    models: [
      {
        ref: 'IMR-K2', name: 'Sunmi K2', category: t({fr:'Self-service kiosk', nl:'Zelfbedieningskiosk', en:'Self-service kiosk', de:'Self-Service-Kiosk'}),
        tagline: t({fr:'+20 % de panier moyen.', nl:'+20 % gemiddelde mandgrootte.', en:'+20 % average basket.', de:'+20 % Warenkorbgröße.'}),
        desc: t({fr:'Borne sur pied 24" avec scanner QR, NFC et imprimante 80 mm intégrés. La référence pour la restauration rapide.',
                 nl:'Staande kiosk 24" met geïntegreerde QR-scanner, NFC en 80 mm printer. De referentie voor fast-food.',
                 en:'24" floor-standing kiosk with built-in QR scanner, NFC and 80 mm printer. The reference for quick-service.',
                 de:'24"-Stand-Kiosk mit integriertem QR-Scanner, NFC und 80-mm-Drucker. Die Referenz für Quick-Service.'}),
        photo: 'assets/photos/products/k2.png',
        tags: [t({fr:'24" tactile', nl:'24" touch', en:'24" touch', de:'24" Touch'}), 'QR · NFC · CB', t({fr:'Imprimante 80 mm', nl:'80 mm printer', en:'80 mm printer', de:'80-mm-Drucker'}), t({fr:'Pied au sol PMR', nl:'PMR-staander', en:'Floor stand (accessible)', de:'Standfuß (barrierefrei)'})],
        usage: t({fr:'Fast-food · Quick-service · Chaîne', nl:'Fast-food · Quick-service · Keten', en:'Fast-food · Quick-service · Chain', de:'Fast-Food · Quick-Service · Kette'}),
      },
      {
        ref: 'IMR-FLEX3-R', name: 'Flex 3 Restauration', category: 'Flex 3 Kiosk',
        tagline: t({fr:'La borne resto nouvelle génération.', nl:'De nieuwe generatie horecakiosk.', en:'The new generation restaurant kiosk.', de:'Der Restaurant-Kiosk der neuen Generation.'}),
        desc: t({fr:'Format sur pied compact, écran portrait haute luminosité, lecteur QR & NFC. Pensée pour la restauration moderne.',
                 nl:'Compact staand formaat, helder portretscherm, QR- en NFC-lezer. Voor moderne horeca.',
                 en:'Compact floor format, bright portrait screen, QR & NFC reader. Built for modern food service.',
                 de:'Kompaktes Standformat, heller Porträtbildschirm, QR- & NFC-Leser. Für moderne Gastronomie.'}),
        photo: 'assets/photos/products/kiosk-flex-resto.png',
        tags: [t({fr:'Écran portrait HD', nl:'HD portretscherm', en:'HD portrait screen', de:'HD-Porträtbildschirm'}), 'QR · NFC · CB', t({fr:'Imprimante en option', nl:'Printer optioneel', en:'Optional printer', de:'Drucker optional'}), t({fr:'Pied au sol', nl:'Staander', en:'Floor stand', de:'Standfuß'})],
        usage: t({fr:'Resto · Bar · Snack', nl:'Resto · Bar · Snack', en:'Resto · Bar · Snack', de:'Resto · Bar · Imbiss'}),
      },
      {
        ref: 'IMR-FLEX3-RM', name: 'Flex 3 Mini', category: 'Flex 3 Kiosk Mini',
        tagline: t({fr:'La borne compacte pour petits espaces.', nl:'De compacte kiosk voor kleine ruimtes.', en:'The compact kiosk for small spaces.', de:'Der kompakte Kiosk für kleine Räume.'}),
        desc: t({fr:'Borne self-order compacte à poser sur comptoir ou meuble bas. Idéale pour boulangeries, food-trucks et snacks.',
                 nl:'Compacte self-order-kiosk om op een toonbank of laag meubel te plaatsen. Ideaal voor bakkerijen, foodtrucks en snacks.',
                 en:'Compact self-order kiosk to sit on a counter or low cabinet. Ideal for bakeries, food trucks and snack bars.',
                 de:'Kompakter Self-Order-Kiosk für Tresen oder Niedrigmöbel. Ideal für Bäckereien, Food-Trucks und Imbisse.'}),
        photo: 'assets/photos/products/kiosk-flex-resto-mini.png',
        tags: [t({fr:'Format comptoir', nl:'Toonbankformaat', en:'Counter format', de:'Tresenformat'}), 'QR · NFC · CB', 'Plug & play', t({fr:'Idéale boulangerie', nl:'Ideaal voor bakkerij', en:'Ideal for bakeries', de:'Ideal für Bäckereien'})],
        usage: t({fr:'Boulangerie · Food-truck · Salade-bar', nl:'Bakkerij · Foodtruck · Saladbar', en:'Bakery · Food truck · Salad bar', de:'Bäckerei · Food-Truck · Salatbar'}),
      },
      {
        ref: 'IMR-FLEX3-T', name: 'Flex 3 Retail', category: 'Flex 3 Kiosk Retail',
        tagline: t({fr:'La borne retail ultra-présente.', nl:'De ultra-zichtbare retailkiosk.', en:'The ultra-present retail kiosk.', de:'Der ultra-präsente Retail-Kiosk.'}),
        desc: t({fr:'Écran portrait haute luminosité, scanner code-barres & QR pour consultation prix, fidélité et click & collect.',
                 nl:'Helder portretscherm, barcode- en QR-scanner voor prijsraadpleging, loyaliteit en click & collect.',
                 en:'Bright portrait screen, barcode & QR scanner for price look-up, loyalty and click & collect.',
                 de:'Heller Porträtbildschirm, Barcode- & QR-Scanner für Preisabfrage, Treueprogramm und Click & Collect.'}),
        photo: 'assets/photos/products/kiosk-flex-retail.png',
        tags: [t({fr:'Scanner code-barres', nl:'Barcodescanner', en:'Barcode scanner', de:'Barcode-Scanner'}), t({fr:'Consultation prix', nl:'Prijsraadpleging', en:'Price look-up', de:'Preisabfrage'}), t({fr:'Fidélité QR', nl:'QR-loyaliteit', en:'QR loyalty', de:'QR-Treueprogramm'}), 'Click & collect'],
        usage: t({fr:'Boutique · Mode · Beauté', nl:'Winkel · Mode · Beauty', en:'Shop · Fashion · Beauty', de:'Boutique · Mode · Beauty'}),
      },
      {
        ref: 'IMR-FLEX3-TM', name: 'Flex 3 Retail Mini', category: 'Flex 3 Kiosk Mini Retail',
        tagline: t({fr:'La borne comptoir pour le retail.', nl:'De toonbankkiosk voor retail.', en:'The counter kiosk for retail.', de:'Der Tresen-Kiosk für den Einzelhandel.'}),
        desc: t({fr:'Borne libre-service compacte à poser sur banque d\'accueil ou comptoir. Pour boutiques de mode, beauté, librairies.',
                 nl:'Compacte self-service kiosk om op een onthaalbalie of toonbank te plaatsen. Voor mode-, beauty- en boekenwinkels.',
                 en:'Compact self-service kiosk to sit on a reception desk or counter. For fashion shops, beauty stores and bookshops.',
                 de:'Kompakter Self-Service-Kiosk für Empfangstheken oder Tresen. Für Mode-, Beauty- und Buchhandlungen.'}),
        photo: 'assets/photos/products/kiosk-flex-retail-mini.png',
        tags: [t({fr:'Format compact', nl:'Compact formaat', en:'Compact format', de:'Kompaktformat'}), t({fr:'Scanner produits', nl:'Productscanner', en:'Product scanner', de:'Produkt-Scanner'}), t({fr:'Fidélité', nl:'Loyaliteit', en:'Loyalty', de:'Treueprogramm'}), t({fr:'Corners shop-in-shop', nl:'Shop-in-shop-hoeken', en:'Shop-in-shop corners', de:'Shop-in-Shop-Ecken'})],
        usage: t({fr:'Librairie · Corners · Petits magasins', nl:'Boekenwinkel · Corners · Kleine winkels', en:'Bookshop · Corners · Small stores', de:'Buchhandlung · Corners · Kleine Läden'}),
      },
    ],
    modelsHeader: {
      eyebrow: t({fr:'La gamme complète', nl:'Het volledige assortiment', en:'The full range', de:'Die komplette Reihe'}),
      title: t({fr:'TOUTES VOS {BORNES}. UN SEUL LOGICIEL.', nl:'AL UW {KIOSKEN}. ÉÉN SOFTWARE.', en:'ALL YOUR {KIOSKS}. ONE SOFTWARE.', de:'ALLE IHRE {KIOSKE}. EINE SOFTWARE.'}),
      accent: t({fr:'BORNES', nl:'KIOSKEN', en:'KIOSKS', de:'KIOSKE'}),
      subtitle: t({fr:'Restauration ou retail, sur pied ou comptoir, format standard ou compact — un seul logiciel Imarra Kiosk pilote autant de bornes Sunmi que vous voulez déployer.',
                   nl:'Horeca of retail, staand of op de toonbank, standaard of compact — één Imarra Kiosk-software bestuurt zoveel Sunmi-kiosken als u wilt uitrollen.',
                   en:'Food or retail, floor-standing or countertop, standard or compact — a single Imarra Kiosk software drives as many Sunmi kiosks as you want to deploy.',
                   de:'Gastronomie oder Einzelhandel, stehend oder auf dem Tresen, Standard oder kompakt — eine einzige Imarra-Kiosk-Software steuert beliebig viele Sunmi-Kioske.'}),
    },
    photoSecondary: null,
    specs: null,
    benefits: [
      { icon: 'clock', t: t({fr:'Absorbez 30 % de couverts en plus', nl:'Verwerk 30 % meer couverts', en:'Handle 30 % more covers', de:'30 % mehr Gedecke bewältigen'}),
                       d: t({fr:'Pendant que la borne encaisse, votre équipe sert en salle. Le rush se digère seul.', nl:'Terwijl de kiosk afrekent, bedient uw team in de zaal. De drukte regelt zichzelf.', en:'While the kiosk cashes up, your team serves the floor. The rush handles itself.', de:'Während der Kiosk kassiert, bedient Ihr Team im Saal. Der Ansturm regelt sich selbst.'}) },
      { icon: 'sparkle', t: t({fr:'Upsell automatique', nl:'Automatische upsell', en:'Automatic upsell', de:'Automatischer Upsell'}),
                         d: t({fr:'L\'IA menu suggère les bonnes combinaisons. +18 % de panier moyen.', nl:'De AI-menu stelt de juiste combinaties voor. +18 % gemiddelde mand.', en:'The AI menu suggests the right combos. +18 % average basket.', de:'Das KI-Menü schlägt die richtigen Kombinationen vor. +18 % Warenkorb.'}) },
      { icon: 'shield', t: t({fr:'Zéro erreur de saisie', nl:'Geen invoerfouten', en:'Zero input errors', de:'Keine Eingabefehler'}),
                        d: t({fr:'Le client commande lui-même. Plus d\'allers-retours, plus de confusion.', nl:'De klant bestelt zelf. Geen heen-en-weer, geen verwarring meer.', en:'Customers order themselves. No more back-and-forth, no more confusion.', de:'Der Kunde bestellt selbst. Kein Hin und Her, keine Missverständnisse.'}) },
      { icon: 'globe', t: t({fr:'Multilingue d\'office', nl:'Standaard meertalig', en:'Multilingual by default', de:'Mehrsprachig standardmäßig'}),
                       d: t({fr:'FR · NL · EN. Vos clients étrangers commandent dans leur langue.', nl:'FR · NL · EN. Uw buitenlandse klanten bestellen in hun taal.', en:'FR · NL · EN. Foreign customers order in their language.', de:'FR · NL · EN. Ausländische Kunden bestellen in ihrer Sprache.'}) },
    ],
  },
  mobile: {
    id: 'mobile', icon: 'smartphone', name: 'Imarra Mobile',
    tagline: t({fr:'La caisse de poche qui suit votre équipe.', nl:'De zakkassa die uw team volgt.', en:'The pocket POS that follows your team.', de:'Die Taschenkasse, die Ihr Team begleitet.'}),
    hardware: 'Sunmi M3 · P3',
    hero: t({fr:'LA CAISSE{ }DANS VOTRE POCHE.', nl:'DE KASSA{ }IN UW ZAK.', en:'THE POS{ }IN YOUR POCKET.', de:'DIE KASSE{ }IN IHRER TASCHE.'}),
    accent: ' ',
    desc: t({fr:'Caisse de poche pour service en salle, livraison, food truck, marchés. Caisse + paiement réunis dans un seul terminal. Synchro temps réel.',
             nl:'Zakkassa voor zaalbediening, levering, foodtruck en markten. Kassa + betaling in één terminal. Realtime synchronisatie.',
             en:'Pocket POS for table service, delivery, food trucks and markets. POS + payment in one terminal. Real-time sync.',
             de:'Taschenkasse für Tischservice, Lieferung, Food-Truck und Märkte. Kasse + Zahlung in einem Terminal. Echtzeit-Synchronisierung.'}),
    photo: 'assets/photos/imarra-mobile-restaurant-hero.jpg',
    photoFit: 'cover',
    photoBg: '#1f1a14',
    photoSecondary: 'assets/photos/sunmi-p3-in-situ.jpg',
    video: {
      src: 'assets/videos/sunmi-m3-usage.mp4',
      poster: 'assets/photos/products/m3.png',
      eyebrow: 'Imarra Mobile · Sunmi M3',
      title: t({fr:'LA COMMANDE PRISE À TABLE. LE TICKET DÉJÀ EN CUISINE.',
                nl:'BESTELLING AAN TAFEL OPGENOMEN. TICKET AL IN DE KEUKEN.',
                en:'ORDER TAKEN AT THE TABLE. TICKET ALREADY IN THE KITCHEN.',
                de:'BESTELLUNG AM TISCH AUFGENOMMEN. BON SCHON IN DER KÜCHE.'}),
      desc: t({fr:'Le serveur saisit la commande sur son Sunmi mobile, à table avec le client. Elle part instantanément en cuisine via le KDS et apparaît dans la caisse. Plus de papier, plus d’aller-retours — juste du service.',
               nl:'De ober neemt de bestelling op via zijn mobiele Sunmi, naast de klant. Ze gaat onmiddellijk via het KDS naar de keuken en verschijnt in de kassa. Geen papier, geen heen-en-weer — alleen service.',
               en:'The waiter takes the order on the mobile Sunmi, right at the table. It flows instantly to the kitchen via KDS and appears in the POS. No paper, no back-and-forth — just service.',
               de:'Der Kellner nimmt die Bestellung auf dem mobilen Sunmi am Tisch auf. Sie geht sofort über das KDS in die Küche und erscheint in der Kasse. Kein Papier, kein Hin und Her — nur Service.'}),
    },
    video2: null,
    models: [
      {
        ref: 'IMR-P3', name: 'Sunmi P3', category: 'Smart Payment Terminal',
        tagline: t({fr:'Le paiement en main, partout en salle.', nl:'Betalen in de hand, overal in de zaal.', en:'Payment in hand, everywhere in the room.', de:'Zahlung in der Hand, überall im Saal.'}),
        desc: t({fr:'Terminal de paiement Android nouvelle génération, 6,75" HD+, NFC, scanner intégré. Conçu pour la prise de commande mobile, le paiement à table et le line-busting en boutique.',
                 nl:'Nieuwe generatie Android-betaalterminal, 6,75" HD+, NFC, geïntegreerde scanner. Voor mobiele bestellingen, betalen aan tafel en line-busting in de winkel.',
                 en:'New-gen Android payment terminal, 6.75" HD+, NFC, built-in scanner. Designed for mobile order-taking, table payment and in-store line-busting.',
                 de:'Android-Zahlungsterminal neuer Generation, 6,75" HD+, NFC, integrierter Scanner. Für mobile Bestellaufnahme, Tischzahlung und Line-Busting im Laden.'}),
        photo: 'assets/photos/products/p3.png',
        tags: [t({fr:'Tous les paiements', nl:'Alle betalingen', en:'All payments', de:'Alle Zahlungen'}), t({fr:'PCI & EMV certifié', nl:'PCI & EMV gecertificeerd', en:'PCI & EMV certified', de:'PCI- & EMV-zertifiziert'}), t({fr:'Commande à table', nl:'Bestelling aan tafel', en:'Order at the table', de:'Bestellung am Tisch'}), 'Scan 1D / 2D'],
        usage: t({fr:'Resto · Bar · Boutique · Livraison', nl:'Resto · Bar · Winkel · Levering', en:'Resto · Bar · Shop · Delivery', de:'Resto · Bar · Boutique · Lieferung'}),
      },
      {
        ref: 'IMR-V3', name: 'Sunmi V3 Mix', category: t({fr:'Smart Payment Terminal · imprimante intégrée', nl:'Smart Payment Terminal · ingebouwde printer', en:'Smart Payment Terminal · built-in printer', de:'Smart Payment Terminal · integrierter Drucker'}),
        tagline: t({fr:'Le paiement + l’impression, en une main.', nl:'Betalen + printen, in één hand.', en:'Payment + printing, in one hand.', de:'Zahlung + Druck, in einer Hand.'}),
        desc: t({fr:'Terminal Android tout-en-un : 6,7" HD+, NFC, imprimante ticket 58 mm intégrée. La promesse du P3 + impression de ticket sur place — idéal pour la livraison, les marchés et les services itinérants.',
                 nl:'Alles-in-één Android-terminal: 6,7" HD+, NFC, ingebouwde 58 mm ticketprinter. De belofte van de P3 + ticket ter plaatse — ideaal voor levering, markten en mobiele diensten.',
                 en:'All-in-one Android terminal: 6.7" HD+, NFC, built-in 58 mm receipt printer. P3 promise + on-the-spot receipts — ideal for delivery, markets and mobile services.',
                 de:'Android-Alles-in-Einem-Terminal: 6,7" HD+, NFC, integrierter 58-mm-Belegdrucker. Das P3-Versprechen + Beleg vor Ort — ideal für Lieferung, Märkte und mobile Dienste.'}),
        photo: 'assets/photos/products/v3.png',
        tags: [t({fr:'Imprimante intégrée', nl:'Ingebouwde printer', en:'Built-in printer', de:'Integrierter Drucker'}), t({fr:'Paiement complet', nl:'Volledige betaling', en:'Full payment', de:'Komplette Zahlung'}), t({fr:'Autonomie longue', nl:'Lange autonomie', en:'Long battery life', de:'Lange Akkulaufzeit'}), '4G + Wi-Fi'],
        usage: t({fr:'Livraison · Marchés · Food-truck · Mobilité', nl:'Levering · Markten · Foodtruck · Mobiliteit', en:'Delivery · Markets · Food truck · Mobility', de:'Lieferung · Märkte · Food-Truck · Mobilität'}),
      },
      {
        ref: 'IMR-P2LSE', name: 'Sunmi P2 Lite SE', category: 'Smart Payment Terminal',
        tagline: t({fr:'Le paiement simple et sécurisé.', nl:'Eenvoudig en veilig betalen.', en:'Simple, secure payment.', de:'Einfache, sichere Zahlung.'}),
        desc: t({fr:'Terminal de paiement mobile Android avec écran HD 5,5", lecteur NFC et scanner de codes-barres. Certifié EMV & PCI PTS, idéal pour la prise de commande à table et la vente en mobilité.',
                 nl:'Mobiele Android-betaalterminal met 5,5" HD-scherm, NFC-lezer en barcodescanner. EMV- & PCI-PTS-gecertificeerd, ideaal voor bestelling aan tafel en mobiele verkoop.',
                 en:'Mobile Android payment terminal with 5.5" HD screen, NFC reader and barcode scanner. EMV & PCI PTS certified, ideal for table ordering and mobile sales.',
                 de:'Mobiles Android-Zahlungsterminal mit 5,5"-HD-Display, NFC-Leser und Barcode-Scanner. EMV- & PCI-PTS-zertifiziert, ideal für Tischbestellung und mobilen Verkauf.'}),
        photo: 'assets/photos/products/p2-lite-se.png',
        tags: [t({fr:'Paiement sécurisé', nl:'Veilige betaling', en:'Secure payment', de:'Sichere Zahlung'}), t({fr:'NFC & scanner', nl:'NFC & scanner', en:'NFC & scanner', de:'NFC & Scanner'}), t({fr:'Mobile en salle', nl:'Mobiel in de zaal', en:'Mobile on the floor', de:'Mobil im Saal'}), t({fr:'Autonomie 1 journée', nl:'1 dag autonomie', en:'All-day battery', de:'Akku für einen Tag'})],
        usage: t({fr:'Resto · Vente itinérante · Salons', nl:'Resto · Mobiele verkoop · Beurzen', en:'Resto · Mobile sales · Trade shows', de:'Resto · Mobiler Verkauf · Messen'}),
      },
      {
        ref: 'IMR-M3', name: 'Sunmi M3', category: t({fr:'Smart Handheld · Service en salle', nl:'Smart Handheld · Zaalbediening', en:'Smart Handheld · Table service', de:'Smart Handheld · Tischservice'}),
        tagline: t({fr:'Le PDA serveur, fin comme un smartphone.', nl:'De obers-PDA, dun als een smartphone.', en:'The waiter PDA, thin as a smartphone.', de:'Der Kellner-PDA, schlank wie ein Smartphone.'}),
        desc: t({fr:'Terminal Android ultra-slim 6,7" HD+, conçu pour la prise de commande à table et la mobilité boutique. Plus léger et plus discret que le P3 — aucun encombrement de papier, juste l’écran.',
                 nl:'Ultraslim Android-terminal 6,7" HD+, ontworpen voor bestelling aan tafel en winkelmobiliteit. Lichter en discreter dan de P3 — geen papier in de weg, alleen het scherm.',
                 en:'Ultra-slim Android terminal 6.7" HD+, designed for table ordering and shop mobility. Lighter and more discreet than the P3 — no paper clutter, just the screen.',
                 de:'Ultraschlankes Android-Terminal 6,7" HD+, für Tischbestellung und Mobilität im Laden. Leichter und dezenter als der P3 — ohne Papierkram, nur Bildschirm.'}),
        photo: 'assets/photos/products/m3.png',
        tags: [t({fr:'Commande à table', nl:'Bestelling aan tafel', en:'Order at the table', de:'Bestellung am Tisch'}), t({fr:'Ultra-slim ergonomique', nl:'Ultraslim & ergonomisch', en:'Ultra-slim & ergonomic', de:'Ultraschlank & ergonomisch'}), 'Scan 1D / 2D · NFC', 'Wi-Fi 6 + 4G'],
        usage: t({fr:'Service en salle · Line-busting · Boutique', nl:'Zaalbediening · Line-busting · Winkel', en:'Table service · Line-busting · Shop', de:'Tischservice · Line-Busting · Boutique'}),
      },
    ],
    modelsHeader: {
      eyebrow: t({fr:'La gamme complète', nl:'Het volledige assortiment', en:'The full range', de:'Die komplette Reihe'}),
      title: t({fr:'TOUS LES {MOBILES}. UN SEUL LOGICIEL.', nl:'ALLE {MOBIELE TERMINALS}. ÉÉN SOFTWARE.', en:'ALL {MOBILE} TERMINALS. ONE SOFTWARE.', de:'ALLE {MOBIL}-TERMINALS. EINE SOFTWARE.'}),
      accent: t({fr:'MOBILES', nl:'MOBIELE TERMINALS', en:'MOBILE', de:'MOBIL'}),
      subtitle: t({fr:'Terminal de paiement, PDA serveur, tout-en-un avec imprimante — un seul logiciel Imarra Mobile pilote autant de terminaux Sunmi que vous voulez déployer.',
                   nl:'Betaalterminal, obers-PDA, alles-in-één met printer — één Imarra Mobile-software bestuurt zoveel Sunmi-terminals als u wilt uitrollen.',
                   en:'Payment terminal, waiter PDA, all-in-one with printer — a single Imarra Mobile software drives as many Sunmi terminals as you want to deploy.',
                   de:'Zahlungsterminal, Kellner-PDA, Alles-in-Einem mit Drucker — eine einzige Imarra-Mobile-Software steuert beliebig viele Sunmi-Terminals.'}),
    },
    specs: null,
    benefits: [
      { icon: 'zap',     t: t({fr:'Encaissez à table', nl:'Reken af aan tafel', en:'Cash up at the table', de:'Am Tisch kassieren'}),
                         d: t({fr:'Le serveur prend la commande, l\'envoie en cuisine et encaisse — sans bouger.', nl:'De ober neemt de bestelling op, stuurt ze naar de keuken en rekent af — zonder zich te verplaatsen.', en:'The waiter takes the order, sends it to the kitchen and cashes up — without moving.', de:'Der Kellner nimmt die Bestellung auf, schickt sie in die Küche und kassiert — ohne sich zu bewegen.'}) },
      { icon: 'plug',    t: t({fr:'Caisse + paiement en un', nl:'Kassa + betaling in één', en:'POS + payment in one', de:'Kasse + Zahlung in einem'}),
                         d: t({fr:'Un seul terminal. Plus de jonglage entre la borne et la machine à carte.', nl:'Één terminal. Geen gejongleer meer tussen kiosk en kaartautomaat.', en:'One terminal. No more juggling between kiosk and card machine.', de:'Ein Terminal. Kein Jonglieren mehr zwischen Kiosk und Kartengerät.'}) },
      { icon: 'refresh', t: t({fr:'Synchro temps réel', nl:'Realtime synchronisatie', en:'Real-time sync', de:'Echtzeit-Synchronisierung'}),
                         d: t({fr:'Ce qui se vend en salle apparaît immédiatement sur la caisse principale.', nl:'Wat in de zaal verkocht wordt, verschijnt onmiddellijk op de hoofdkassa.', en:'What sells on the floor shows up instantly on the main POS.', de:'Was im Saal verkauft wird, erscheint sofort an der Hauptkasse.'}) },
      { icon: 'package', t: t({fr:'Idéal pour la livraison', nl:'Ideaal voor levering', en:'Ideal for delivery', de:'Ideal für Lieferung'}),
                         d: t({fr:'Food truck, marché, livraison à domicile : votre caisse vous suit partout.', nl:'Foodtruck, markt, thuislevering: uw kassa volgt u overal.', en:'Food truck, market, home delivery: your POS follows you anywhere.', de:'Food-Truck, Markt, Hauslieferung: Ihre Kasse begleitet Sie überall.'}) },
    ],
  },
});

function ProduitsOverview() {
  return (
    <div className="page-fade">
      <section style={{ paddingTop: 88, paddingBottom: 32 }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow">{t({fr:"L'écosystème Imarra",nl:"Het Imarra-ecosysteem",en:"The Imarra ecosystem",de:"Das Imarra-Ökosystem"})}</div>
            <h1 className="h-display" style={{ fontSize: 'clamp(40px, 4.8vw, 68px)', marginBottom: 24 }}>
              {t({
                fr:<>UN <span className="accent">LOGICIEL</span>.<br/>TROIS FORMATS DE CAISSE.<br/>HUIT MODULES INCLUS.</>,
                nl:<>ÉÉN <span className="accent">SOFTWARE</span>.<br/>DRIE KASSAFORMATEN.<br/>ACHT MODULES INBEGREPEN.</>,
                en:<>ONE <span className="accent">SOFTWARE</span>.<br/>THREE POS FORMATS.<br/>EIGHT MODULES INCLUDED.</>,
                de:<>EINE <span className="accent">SOFTWARE</span>.<br/>DREI KASSENFORMATE.<br/>ACHT MODULE INKLUSIVE.</>,
              })}
            </h1>
            <p className="lead" style={{ maxWidth: 640, color: '#374151', marginBottom: 32 }}>
              {t({
                fr:"Une seule logique partout. Vos produits, vos prix, vos rapports — synchronisés en temps réel entre la caisse fixe, la borne self-service et la caisse de poche.",
                nl:"Eén logica overal. Uw producten, prijzen, rapporten — realtime gesynchroniseerd tussen vaste kassa, self-service kiosk en mobiele kassa.",
                en:"One logic everywhere. Your products, prices, reports — synchronised in real time across fixed POS, self-service kiosk and pocket POS.",
                de:"Eine Logik überall. Ihre Produkte, Preise, Berichte — in Echtzeit zwischen stationärer Kasse, Self-Service-Kiosk und mobiler Kasse synchronisiert.",
              })}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={openDemo} className="btn btn-primary btn-lg">
                {t({fr:"Réserver ma démo",nl:"Mijn demo boeken",en:"Book my demo",de:"Demo buchen"})} <Icon name="arrow" size={16} />
              </button>
              <a href="#/contact" className="btn btn-secondary btn-lg">{t({fr:"Nous parler",nl:"Met ons praten",en:"Talk to us",de:"Sprechen Sie uns an"})}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 licenses */}
      <section style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="grid grid-3">
            {Object.values(getLicenses()).map(l => (
              <a key={l.id} href={`#/produits/${l.id}`} className="card card-hover" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  aspectRatio: '4 / 3',
                  background: l.photoBg,
                  borderBottom: '1px solid var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img src={l.photo} alt={`${l.name} — ${l.hardware}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: l.photoFit, padding: l.photoFit === 'contain' ? 20 : 0 }} />
                  <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 600, color: 'var(--fg-1)', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)', padding: '5px 10px', borderRadius: 999 }}>
                    {l.hardware}
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                    <img src={LICENSE_ICONS[l.id]} alt={l.name} style={{ width: 48, height: 48, borderRadius: 11, flexShrink: 0, boxShadow: 'var(--shadow-sm)' }} />
                    <h3 className="h3" style={{ fontSize: 22, margin: 0 }}>{l.name}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 18 }}>{l.desc}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--accent)', fontSize: 14, fontWeight: 500 }}>
                    {t({fr:'Découvrir',nl:'Ontdek',en:'Discover',de:'Entdecken'})} {l.name} <Icon name="arrow" size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8 modules detail */}
      <section className="wash">
        <div className="container">
          <SectionHeader
            eyebrow={t({fr:"8 modules logiciels",nl:"8 softwaremodules",en:"8 software modules",de:"8 Softwaremodule"})}
            title={t({fr:"UNE SUITE COMPLÈTE, SANS OPTIONS CACHÉES.",nl:"EEN COMPLETE SUITE, ZONDER VERBORGEN OPTIES.",en:"A COMPLETE SUITE, NO HIDDEN OPTIONS.",de:"EINE KOMPLETTE SUITE, OHNE VERSTECKTE OPTIONEN."})}
            accent={null}
            subtitle={t({fr:"Quelle que soit la licence choisie, vous avez accès aux 8 modules — du module Caisse aux tableaux de bord IA.",nl:"Welke licentie u ook kiest, u krijgt toegang tot alle 8 modules — van de kassamodule tot AI-dashboards.",en:"Whichever licence you pick, you get access to all 8 modules — from Cashier to AI dashboards.",de:"Egal welche Lizenz Sie wählen, Sie erhalten Zugriff auf alle 8 Module — vom Kassenmodul bis zu den KI-Dashboards."})}
          />
          <ModulesDetail />
        </div>
      </section>

      {/* Ecosystem matériel + paiement */}
      <section>
        <div className="container">
          <SectionHeader
            eyebrow={t({fr:"Écosystème",nl:"Ecosysteem",en:"Ecosystem",de:"Ökosystem"})}
            title={t({fr:"MATÉRIEL {SUNMI} · PAIEMENT INTÉGRÉ",nl:"HARDWARE {SUNMI} · BETALING NATIEF",en:"HARDWARE {SUNMI} · NATIVE PAYMENT",de:"HARDWARE {SUNMI} · ZAHLUNG NATIV"})}
            accent="SUNMI"
            subtitle={t({fr:"Un écosystème pensé bout-en-bout : matériel professionnel, paiement natif, support local.",nl:"Een end-to-end ecosysteem: professionele hardware, native betaling, lokale support.",en:"An end-to-end ecosystem: professional hardware, native payment, local support.",de:"Ein durchgängiges Ökosystem: professionelle Hardware, native Zahlung, lokaler Support."})}
          />
          <div className="grid grid-2" style={{ gap: 32 }}>
            <div className="card" style={{ padding: 36 }}>
              <div className="pill" style={{ marginBottom: 20 }}>{t({fr:"Matériel",nl:"Hardware",en:"Hardware",de:"Hardware"})}</div>
              <div style={{ marginBottom: 20, display: 'flex' }}>
                <PartnerWordmark name="Sunmi" height={36} />
              </div>
              <h3 className="h3" style={{ marginBottom: 12, fontSize: 20 }}>{t({fr:'Sunmi — constructeur unique', nl:'Sunmi — één hardwarefabrikant', en:'Sunmi — single hardware maker', de:'Sunmi — ein einziger Hardwarehersteller'})}</h3>
              <p style={{ color: 'var(--fg-2)', marginBottom: 20 }}>
                {t({fr:'Toute la gamme Imarra tourne sur du Sunmi : Android sécurisé, mise à jour à distance, garantie 24 mois constructeur. Un seul interlocuteur pour le matériel.',
                    nl:'Het volledige Imarra-assortiment draait op Sunmi: beveiligd Android, updates op afstand, 24 maanden fabrieksgarantie. Één aanspreekpunt voor de hardware.',
                    en:'The entire Imarra range runs on Sunmi: secure Android, remote updates, 24-month manufacturer warranty. One point of contact for hardware.',
                    de:'Die gesamte Imarra-Reihe läuft auf Sunmi: gesichertes Android, Fernupdates, 24 Monate Herstellergarantie. Ein einziger Ansprechpartner für die Hardware.'})}
              </p>
              <div className="grid grid-2" style={{ gap: 12 }}>
                {[
                  t({fr:'T3 PRO — caisse fixe', nl:'T3 PRO — vaste kassa', en:'T3 PRO — fixed POS', de:'T3 PRO — stationäre Kasse'}),
                  t({fr:'K2 — borne sur pied', nl:'K2 — staande kiosk', en:'K2 — floor kiosk', de:'K2 — Stand-Kiosk'}),
                  t({fr:'Flex 3 — borne comptoir', nl:'Flex 3 — toonbankkiosk', en:'Flex 3 — counter kiosk', de:'Flex 3 — Tresen-Kiosk'}),
                  t({fr:'P3 — caisse de poche', nl:'P3 — zakkassa', en:'P3 — pocket POS', de:'P3 — Taschenkasse'}),
                ].map(d => (
                  <div key={d} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5 }}>
                    <Icon name="check" size={14} style={{ color: 'var(--accent)' }} /> {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div className="pill" style={{ marginBottom: 20 }}>{t({fr:"Paiement",nl:"Betaling",en:"Payment",de:"Zahlung"})}</div>
              <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 20 }}>
                <PartnerWordmark name="Viva.com" height={64} />
                <div style={{ width: 1, height: 48, background: 'var(--border-subtle)' }} />
                <PartnerWordmark name="Worldline" height={56} />
              </div>
              <h3 className="h3" style={{ marginBottom: 12, fontSize: 20 }}>{t({fr:'Viva.com & Worldline natifs', nl:'Viva.com & Worldline native', en:'Viva.com & Worldline native', de:'Viva.com & Worldline nativ'})}</h3>
              <p style={{ color: 'var(--fg-2)', marginBottom: 20 }}>
                {t({fr:'Acquéreurs intégrés directement dans la caisse. Un seul ticket, un seul reçu, une seule réconciliation comptable. Frais transparents.',
                    nl:'Acquirers direct geïntegreerd in de kassa. Één ticket, één bon, één boekhoudkundige reconciliatie. Transparante kosten.',
                    en:'Acquirers integrated directly in the POS. One ticket, one receipt, one accounting reconciliation. Transparent fees.',
                    de:'Acquirer direkt in der Kasse integriert. Ein Ticket, ein Beleg, eine Buchhaltungsabstimmung. Transparente Gebühren.'})}
              </p>
              <div className="grid grid-2" style={{ gap: 12 }}>
                {[
                  t({fr:'Viva.com intégré nativement', nl:'Viva.com native geïntegreerd', en:'Viva.com natively integrated', de:'Viva.com nativ integriert'}),
                  t({fr:'Worldline intégré nativement', nl:'Worldline native geïntegreerd', en:'Worldline natively integrated', de:'Worldline nativ integriert'}),
                  t({fr:'Sans contact + Apple/Google Pay', nl:'Contactloos + Apple/Google Pay', en:'Contactless + Apple/Google Pay', de:'Kontaktlos + Apple/Google Pay'}),
                  t({fr:'Frais transparents, sans options cachées', nl:'Transparante kosten, geen verborgen opties', en:'Transparent fees, no hidden options', de:'Transparente Gebühren, keine versteckten Optionen'}),
                ].map(d => (
                  <div key={d} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5 }}>
                    <Icon name="check" size={14} style={{ color: 'var(--accent)' }} /> {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand title={t({fr:'QUELLE LICENCE POUR {VOTRE} COMMERCE ?', nl:'WELKE LICENTIE VOOR {UW} ZAAK?', en:'WHICH LICENCE FOR {YOUR} BUSINESS?', de:'WELCHE LIZENZ FÜR {IHR} GESCHÄFT?'})} accent={t({fr:'VOTRE',nl:'UW',en:'YOUR',de:'IHR'})} subtitle={t({fr:'20 minutes de démo et nous chiffrons votre configuration exacte.', nl:'20 minuten demo en we maken een offerte voor uw exacte configuratie.', en:'A 20-min demo and we price your exact configuration.', de:'20 Minuten Demo und wir kalkulieren Ihre genaue Konfiguration.'})} />
    </div>
  );
}

function ModulesDetail() {
  const mods = [
    { icon: 'cart',    name: t({fr:'01 Caisse',          nl:'01 Kassa',         en:'01 POS',           de:'01 Kasse'}),         d: t({fr:'Encaissement, retours, paiements multi-mode, comptes ouverts, plan de salle.', nl:'Afrekenen, retours, multi-betaling, open rekeningen, zaalplan.', en:'Checkout, returns, multi-method payments, open tabs, floor plan.', de:'Bezahlung, Rückgaben, Multi-Method-Zahlungen, offene Rechnungen, Saalplan.'}) },
    { icon: 'chart',   name: t({fr:'02 Ventes',          nl:'02 Verkoop',       en:'02 Sales',         de:'02 Umsätze'}),       d: t({fr:'Suivi temps réel par caissier, canal, période. Comparatifs N-1. Exports comptables un clic.', nl:'Realtime opvolging per kassier, kanaal, periode. Vergelijking N-1. Boekhouding in één klik.', en:'Real-time tracking by cashier, channel, period. YoY compares. One-click accounting exports.', de:'Echtzeit-Tracking nach Kassierer, Kanal, Zeitraum. Vorjahresvergleich. Buchhaltungsexporte mit einem Klick.'}) },
    { icon: 'tag',     name: t({fr:'03 Produits',        nl:'03 Producten',     en:'03 Products',      de:'03 Produkte'}),      d: t({fr:'Catalogue, variantes, déclinaisons, prix par canal. Allergènes, marges, photos.', nl:'Catalogus, varianten, declinaties, prijzen per kanaal. Allergenen, marges, foto\'s.', en:'Catalogue, variants, declinations, prices per channel. Allergens, margins, photos.', de:'Katalog, Varianten, Ausprägungen, Preise pro Kanal. Allergene, Margen, Fotos.'}) },
    { icon: 'receipt', name: t({fr:'04 Commandes',       nl:'04 Bestellingen',  en:'04 Orders',        de:'04 Bestellungen'}),  d: t({fr:'Cuisine, livraison, comptoir, web — un flux unifié. KDS, file d\'attente, statut par ticket.', nl:'Keuken, levering, toonbank, web — één gestroomlijnde flow. KDS, wachtrij, status per ticket.', en:'Kitchen, delivery, counter, web — one unified flow. KDS, queue, status per ticket.', de:'Küche, Lieferung, Tresen, Web — ein einheitlicher Fluss. KDS, Warteschlange, Status pro Bon.'}) },
    { icon: 'sparkle', name: t({fr:'05 Promotions',      nl:'05 Promoties',     en:'05 Promotions',    de:'05 Aktionen'}),      d: t({fr:'Happy hours, menus combo, codes promo. Programmation à l\'avance, calendrier saisonnier.', nl:'Happy hours, combomen\'s, promocodes. Vooraf inplannen, seizoenskalender.', en:'Happy hours, combo menus, promo codes. Schedule ahead, seasonal calendar.', de:'Happy Hours, Combo-Menüs, Promo-Codes. Im Voraus planen, saisonaler Kalender.'}) },
    { icon: 'heart',   name: t({fr:'06 Fidélité',        nl:'06 Loyaliteit',    en:'06 Loyalty',       de:'06 Treue'}),         d: t({fr:'Programme intégré sans app tierce. Points, cashback, paliers, segmentation client.', nl:'Geïntegreerd programma zonder externe app. Punten, cashback, niveaus, klantsegmentatie.', en:'Built-in programme, no third-party app. Points, cashback, tiers, customer segmentation.', de:'Integriertes Programm ohne Drittanbieter-App. Punkte, Cashback, Stufen, Kundensegmentierung.'}) },
    { icon: 'lock',    name: t({fr:'07 Clôture',         nl:'07 Afsluiting',    en:'07 Cash-up',       de:'07 Abschluss'}),     d: t({fr:'Clôture de caisse en 90 secondes. Contrôle du fond, déclarations, journal automatique.', nl:'Kassasluiting in 90 seconden. Kasvoorraadcontrole, aangiften, automatisch journaal.', en:'Cash-up in 90 seconds. Float reconciliation, statements, automatic journal.', de:'Kassenabschluss in 90 Sekunden. Wechselgeldkontrolle, Meldungen, automatisches Journal.'}) },
    { icon: 'eye',     name: t({fr:'08 Tableaux de bord',nl:'08 Dashboards',    en:'08 Dashboards',    de:'08 Dashboards'}),    d: t({fr:'KPIs métiers, alertes intelligentes, recommandations IA stock et menu. Mobile & desktop.', nl:'Bedrijfs-KPI\'s, slimme alerts, AI-aanbevelingen voorraad en menu. Mobiel & desktop.', en:'Business KPIs, smart alerts, AI stock & menu recommendations. Mobile & desktop.', de:'Geschäfts-KPIs, smarte Warnungen, KI-Empfehlungen Bestand & Menü. Mobile & Desktop.'}) },
  ];
  return (
    <div className="grid grid-4" style={{ gap: 16 }}>
      {mods.map(m => (
        <div key={m.name} className="card" style={{ padding: 24 }}>
          <div style={{ width: 38, height: 38, borderRadius: 9, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Icon name={m.icon} size={20} />
          </div>
          <h4 className="h4" style={{ marginBottom: 8, fontSize: 16 }}>{m.name}</h4>
          <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{m.d}</p>
        </div>
      ))}
    </div>
  );
}

// Stylized product mockup — placeholder visual using CSS, no fake imagery
function ProductMockup({ type, size = 'sm' }) {
  const big = size === 'lg';
  const dim = big ? { w: 260, h: 200 } : { w: 160, h: 120 };

  if (type === 'pos') {
    return (
      <div style={{ position: 'relative', width: dim.w, height: dim.h }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--imarra-black)', borderRadius: 10, boxShadow: '0 14px 28px rgba(17,24,39,0.18)' }}>
          <div style={{ position: 'absolute', inset: 6, background: '#fff', borderRadius: 5, padding: 8 }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#e5e7eb' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#e5e7eb' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)' }} />
            </div>
            <div style={{ fontSize: big ? 28 : 18, fontWeight: 700, color: 'var(--fg-1)', letterSpacing: '-0.02em', lineHeight: 1, marginTop: 4 }}>€42,80</div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{ height: 3, background: '#f3f4f6', borderRadius: 2, width: '80%' }} />
              <div style={{ height: 3, background: '#f3f4f6', borderRadius: 2, width: '60%' }} />
              <div style={{ height: 3, background: '#f3f4f6', borderRadius: 2, width: '70%' }} />
            </div>
            <div style={{ marginTop: 8, height: big ? 16 : 10, background: 'var(--accent)', borderRadius: 4 }} />
          </div>
        </div>
        {/* Stand */}
        <div style={{ position: 'absolute', bottom: -12, left: '20%', right: '20%', height: 6, background: 'var(--imarra-ink-700)', borderRadius: '0 0 6px 6px' }} />
      </div>
    );
  }
  if (type === 'kiosk') {
    return (
      <div style={{ position: 'relative', width: big ? 160 : 100, height: big ? 240 : 150 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 20, background: 'var(--imarra-black)', borderRadius: 10, boxShadow: '0 14px 28px rgba(17,24,39,0.18)' }}>
          <div style={{ position: 'absolute', inset: 6, background: '#fff', borderRadius: 5, padding: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ height: 4, width: '60%', background: 'var(--imarra-black)', borderRadius: 2, marginBottom: 4 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, marginTop: 6 }}>
                <div style={{ aspectRatio: '1', background: '#f3f4f6', borderRadius: 3 }} />
                <div style={{ aspectRatio: '1', background: '#f3f4f6', borderRadius: 3 }} />
                <div style={{ aspectRatio: '1', background: '#f3f4f6', borderRadius: 3 }} />
                <div style={{ aspectRatio: '1', background: 'var(--accent-tint)', borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ height: big ? 12 : 8, background: 'var(--accent)', borderRadius: 3 }} />
          </div>
        </div>
        {/* Base */}
        <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: 20, background: 'var(--imarra-ink-700)', borderRadius: '4px 4px 8px 8px' }} />
      </div>
    );
  }
  if (type === 'mobile') {
    return (
      <div style={{ position: 'relative', width: big ? 110 : 80, height: big ? 200 : 140 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--imarra-black)', borderRadius: 14, boxShadow: '0 14px 28px rgba(17,24,39,0.18)' }}>
          <div style={{ position: 'absolute', top: 8, left: 8, right: 8, bottom: 22, background: '#fff', borderRadius: 8, padding: 6 }}>
            <div style={{ height: 4, width: '60%', background: 'var(--imarra-black)', borderRadius: 2, marginBottom: 4 }} />
            <div style={{ height: 2, background: '#f3f4f6', borderRadius: 2, marginBottom: 2 }} />
            <div style={{ height: 2, background: '#f3f4f6', borderRadius: 2, width: '80%', marginBottom: 2 }} />
            <div style={{ height: 2, background: '#f3f4f6', borderRadius: 2, width: '70%', marginBottom: 6 }} />
            <div style={{ height: big ? 10 : 7, background: 'var(--accent)', borderRadius: 2, marginTop: 'auto' }} />
          </div>
          {/* Bottom bar (impression) */}
          <div style={{ position: 'absolute', bottom: 4, left: 14, right: 14, height: 12, background: 'var(--imarra-ink-700)', borderRadius: 2 }} />
        </div>
      </div>
    );
  }
  return null;
}

function KioskVideoBlock({ video }) {
  const ref = React.useRef(null);
  const [muted, setMuted] = React.useState(true);
  const [playing, setPlaying] = React.useState(false);

  // Lazy-play when scrolled into view
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          el.pause();
          setPlaying(false);
        }
      });
    }, { threshold: 0.18 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) { el.play(); setPlaying(true); }
    else { el.pause(); setPlaying(false); }
  };
  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <div className="kiosk-video-wrap">
      <video
        ref={ref}
        className="kiosk-video"
        src={video.src}
        poster={video.poster}
        playsInline
        muted
        loop
        preload="metadata"
        onClick={togglePlay}
      />

      {/* Top-left status pill */}
      <div className="kiosk-video-status">
        <span className="kiosk-video-dot" />
        {t({fr:'Vidéo',nl:'Video',en:'Video',de:'Video'})} · {playing ? t({fr:'En cours',nl:'Bezig',en:'Playing',de:'Läuft'}) : t({fr:'En pause',nl:'Gepauzeerd',en:'Paused',de:'Pausiert'})}
      </div>

      {/* Controls bottom-right */}
      <div className="kiosk-video-controls">
        <button onClick={togglePlay} className="kiosk-video-btn" aria-label={playing ? t({fr:'Pause',nl:'Pauze',en:'Pause',de:'Pause'}) : t({fr:'Lecture',nl:'Afspelen',en:'Play',de:'Wiedergabe'})}>
          <Icon name={playing ? 'close' : 'play'} size={16} />
        </button>
        <button onClick={toggleMute} className="kiosk-video-btn" aria-label={muted ? t({fr:'Activer le son',nl:'Geluid aanzetten',en:'Unmute',de:'Ton einschalten'}) : t({fr:'Couper le son',nl:'Geluid uitzetten',en:'Mute',de:'Stummschalten'})}>
          <Icon name={muted ? 'sliders' : 'wifi'} size={16} />
          <span className="kiosk-video-btn-label">{muted ? t({fr:'Son OFF',nl:'Geluid UIT',en:'Sound OFF',de:'Ton AUS'}) : t({fr:'Son ON',nl:'Geluid AAN',en:'Sound ON',de:'Ton AN'})}</span>
        </button>
      </div>

      <style>{`
        .kiosk-video-wrap {
          position: relative;
          background: #0a0e1a;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(8,10,18,0.18);
          max-width: 1180px;
          margin: 0 auto;
        }
        .kiosk-video {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          background: #0a0e1a;
          display: block;
          cursor: pointer;
        }
        .kiosk-video-status {
          position: absolute;
          top: 18px; left: 18px;
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #fff;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          pointer-events: none;
        }
        .kiosk-video-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 0 rgba(217,119,87,0.7);
          animation: kiosk-pulse 1.6s ease-out infinite;
        }
        @keyframes kiosk-pulse {
          0% { box-shadow: 0 0 0 0 rgba(217,119,87,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(217,119,87,0); }
          100% { box-shadow: 0 0 0 0 rgba(217,119,87,0); }
        }
        .kiosk-video-controls {
          position: absolute;
          bottom: 18px; right: 18px;
          display: flex; gap: 8px;
        }
        .kiosk-video-btn {
          appearance: none;
          font-family: inherit;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 14px;
          background: rgba(255,255,255,0.95);
          color: var(--fg-1);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 999px;
          font-size: 12.5px; font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: background 200ms, transform 150ms;
        }
        .kiosk-video-btn:hover {
          background: #fff;
          transform: translateY(-1px);
        }
        .kiosk-video-btn-label { line-height: 1; }

        @media (max-width: 700px) {
          .kiosk-video-btn-label { display: none; }
          .kiosk-video-btn { padding: 10px; }
        }
      `}</style>
    </div>
  );
}

function KioskModelsGrid({ models }) {
  return (
    <div className="kiosk-lineup">
      {models.map((m, i) => (
        <article key={m.ref} className="kiosk-row" data-i={i + 1}>
          {/* Photo block */}
          <div className="kiosk-row-photo">
            <span className="kiosk-row-num">{String(i + 1).padStart(2, '0')}</span>
            <img src={m.photo} alt={m.name} />
            <span className="kiosk-row-ref">{m.ref}</span>
          </div>

          {/* Content block */}
          <div className="kiosk-row-body">
            <div className="eyebrow" style={{ color: 'var(--accent)', margin: 0, marginBottom: 8 }}>{m.category}</div>
            <h3 className="h3" style={{ fontSize: 22, marginBottom: 8, letterSpacing: '-0.015em', lineHeight: 1.18 }}>{m.name}</h3>
            <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-1)', lineHeight: 1.4, margin: 0, marginBottom: 12, letterSpacing: '-0.005em' }}>
              {m.tagline}
            </p>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, marginBottom: 18 }}>
              {m.desc}
            </p>

            <div className="kiosk-row-tags">
              {m.tags.map(tag => (
                <span key={tag} className="kiosk-row-tag">
                  <Icon name="check" size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {tag}
                </span>
              ))}
            </div>

            {m.usage && (
              <div className="kiosk-row-usage">
                <Icon name="store" size={14} style={{ color: 'var(--accent)' }} />
                <span>{m.usage}</span>
              </div>
            )}
          </div>
        </article>
      ))}

      <style>{`
        .kiosk-lineup {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .kiosk-row {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          background: #fff;
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          overflow: hidden;
          transition: border-color 200ms, box-shadow 200ms;
        }
        .kiosk-row:hover {
          border-color: var(--accent);
          box-shadow: 0 14px 34px rgba(8,10,18,0.08);
        }
        /* Last (odd) row takes the full width and uses a wider photo */
        .kiosk-row[data-i="5"] {
          grid-column: span 2;
          grid-template-columns: 0.6fr 1.4fr;
        }

        .kiosk-row-photo {
          position: relative;
          background: linear-gradient(180deg, #fafbfc 0%, #eef1f5 100%);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          min-height: 260px;
        }
        .kiosk-row-photo img {
          max-width: 82%;
          max-height: 90%;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(8,10,18,0.15));
        }
        .kiosk-row-num {
          position: absolute;
          top: 18px; left: 18px;
          font-size: 11px; font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.12em;
        }
        .kiosk-row-ref {
          position: absolute;
          bottom: 18px; left: 18px;
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--fg-2);
          background: rgba(255,255,255,0.95);
          padding: 6px 11px;
          border-radius: 999px;
          border: 1px solid var(--border-subtle);
        }
        .kiosk-row-body {
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kiosk-row-tags {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 16px;
          margin-bottom: 16px;
        }
        .kiosk-row-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13.5px;
          color: var(--fg-1);
          line-height: 1.4;
        }
        .kiosk-row-usage {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 14px;
          background: var(--accent-tint);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--fg-1);
          align-self: flex-start;
        }

        @media (max-width: 1100px) {
          .kiosk-lineup { grid-template-columns: 1fr; }
          .kiosk-row[data-i="5"] { grid-column: span 1; grid-template-columns: 0.85fr 1fr; }
        }
        @media (max-width: 820px) {
          .kiosk-row,
          .kiosk-row[data-i="5"] {
            grid-template-columns: 1fr;
          }
          .kiosk-row-photo {
            border-right: 0;
            border-bottom: 1px solid var(--border-subtle);
            min-height: 220px;
            padding: 24px;
          }
          .kiosk-row-body { padding: 26px; }
          .kiosk-row-tags { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

function ProduitDetail({ id }) {
  const l = getLicenses()[id];
  if (!l) return <NotFound />;
  const parts = (l.hero || '').split(`{${l.accent}}`);
  const others = Object.values(getLicenses()).filter(x => x.id !== id);

  return (
    <div className="page-fade">
      {/* Breadcrumb */}
      <div className="container" style={{ paddingTop: 32, paddingBottom: 16 }}>
        <div style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--fg-2)' }}>
          <a href="#/produits">{t({fr:'Produits',nl:'Producten',en:'Products',de:'Produkte'})}</a>
          <span>›</span>
          <span style={{ color: 'var(--fg-1)' }}>{l.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: '32px 0 80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }} data-grid="detail-hero">
          <div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginBottom: 24 }}>
              <img src={LICENSE_ICONS[l.id]} alt={l.name} style={{ width: 64, height: 64, borderRadius: 14, boxShadow: 'var(--shadow-md)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 4 }}>{t({fr:"Licence Imarra",nl:"Imarra-licentie",en:"Imarra licence",de:"Imarra-Lizenz"})}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--fg-1)' }}>{l.name}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>{l.hardware}</div>
              </div>
            </div>
            <h1 className="h-display" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', marginBottom: 20 }}>
              {parts[0]}<span className="accent">{l.accent}</span>{parts[1]}
            </h1>
            <p className="lead" style={{ color: '#374151', marginBottom: 32, maxWidth: 520 }}>{l.desc}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={openDemo} className="btn btn-primary btn-lg">{t({fr:"Demander une démo",nl:"Demo aanvragen",en:"Request a demo",de:"Demo anfragen"})} <Icon name="arrow" size={16} /></button>
              <a href="#/contact" className="btn btn-secondary btn-lg">{t({fr:"Devis personnalisé",nl:"Persoonlijke offerte",en:"Custom quote",de:"Persönliches Angebot"})}</a>
            </div>
          </div>

          {/* Visual — vraie photo produit */}
          <div style={{
            position: 'relative',
            aspectRatio: '4 / 3',
            background: l.photoBg,
            border: '1px solid var(--border-subtle)',
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
          }}>
            <img src={l.photo} alt={`${l.name} — ${l.hardware}`} style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: l.photoFit,
              padding: l.photoFit === 'contain' ? 24 : 0,
            }} />
            <div style={{ position: 'absolute', bottom: 18, left: 18, padding: '6px 14px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: 999, fontSize: 11, fontWeight: 600, color: 'var(--fg-1)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              {l.hardware}
            </div>
          </div>
        </div>
      </section>

      {/* Video — juste sous le hero "PLUS DE QUEUE. PLUS DE TICKETS." */}
      {l.video && (
        <section style={{ paddingTop: 0, paddingBottom: 96 }}>
          <div className="container">
            <SectionHeader
              eyebrow={l.video.eyebrow}
              title={l.video.title}
              accent={null}
              subtitle={l.video.desc}
            />
            <KioskVideoBlock video={l.video} />
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="wash" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <SectionHeader
            eyebrow={t({fr:"Bénéfices",nl:"Voordelen",en:"Benefits",de:"Vorteile"})}
            title={t({fr:"POURQUOI VOS {ÉQUIPES} VONT L'ADOPTER",nl:"WAAROM UW {TEAMS} HET ZULLEN OMARMEN",en:"WHY YOUR {TEAMS} WILL ADOPT IT",de:"WARUM IHRE {TEAMS} ES LIEBEN WERDEN"})}
            accent={t({fr:"ÉQUIPES",nl:"TEAMS",en:"TEAMS",de:"TEAMS"})}
          />
          <div className="grid grid-2" style={{ gap: 24 }}>
            {l.benefits.map(b => (
              <div key={b.t} className="card" style={{ padding: 32, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={b.icon} size={24} />
                </div>
                <div>
                  <h4 className="h4" style={{ marginBottom: 8 }}>{b.t}</h4>
                  <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bornes / Modèles (kiosk only for now) — inséré juste après les bénéfices */}
      {l.models && l.models.length > 0 && (
        <section style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="container">
            <SectionHeader
              eyebrow={l.modelsHeader?.eyebrow || t({fr:"La gamme complète",nl:"Het volledige assortiment",en:"The full range",de:"Die komplette Reihe"})}
              title={l.modelsHeader?.title || ''}
              accent={l.modelsHeader?.accent || ''}
              subtitle={l.modelsHeader?.subtitle || ''}
            />
            <KioskModelsGrid models={l.models} />
          </div>
        </section>
      )}

      {/* In situ photo — full bleed */}
      {l.photoSecondary && (
        <section style={{ padding: 0 }}>
          <div style={{ position: 'relative', aspectRatio: '16 / 7', maxHeight: 560, overflow: 'hidden', background: '#0a0e1a' }}>
            <img src={l.photoSecondary} alt={`${l.name} en situation réelle`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(17,24,39,0.78) 0%, rgba(17,24,39,0.45) 45%, rgba(17,24,39,0.1) 80%, rgba(17,24,39,0) 100%)' }} />
            <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: 560, color: '#fff' }}>
                <div className="eyebrow" style={{ color: 'var(--accent)' }}>
                  {l.photoCaption?.eyebrow || `${l.name} · ${t({fr:"en situation",nl:"in actie",en:"in action",de:"im Einsatz"})}`}
                </div>
                <h2 className="h2" style={{ color: '#fff', marginBottom: 16, whiteSpace: 'pre-line' }}>
                  {l.photoCaption?.title || l.tagline.replace(/\.$/, '') + '.'}
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: 0, fontSize: 16 }}>
                  {l.photoCaption?.desc || l.desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Second video — D3 Mini on POS page */}
      {l.video2 && (
        <section style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="container">
            <SectionHeader
              eyebrow={l.video2.eyebrow}
              title={l.video2.title}
              accent={null}
              subtitle={l.video2.desc}
            />
            <KioskVideoBlock video={l.video2} />
          </div>
        </section>
      )}

      {/* Specs */}
      {l.specs && l.specs.length > 0 && (
      <section>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 56, alignItems: 'start' }} data-grid="specs">
          <div>
            <div className="eyebrow">{t({fr:"Fiche technique",nl:"Technisch blad",en:"Technical sheet",de:"Datenblatt"})}</div>
            <h2 className="h2" style={{ marginBottom: 18 }}>{l.hardware}</h2>
            <p style={{ color: 'var(--fg-2)', marginBottom: 24, maxWidth: 380 }}>
              {t({fr:"Matériel professionnel Sunmi, livré pré-configuré avec Imarra. Garantie 24 mois constructeur. Mises à jour à distance.",nl:"Professionele Sunmi-hardware, voorgeconfigureerd geleverd met Imarra. 24 maanden fabrieksgarantie. Updates op afstand.",en:"Professional Sunmi hardware, delivered pre-configured with Imarra. 24-month factory warranty. Remote updates.",de:"Professionelle Sunmi-Hardware, vorkonfiguriert mit Imarra geliefert. 24 Monate Herstellergarantie. Fernupdates."})}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                t({fr:'Garantie 24 mois', nl:'24 maanden garantie', en:'24-month warranty', de:'24 Monate Garantie'}),
                'Wi-Fi 6',
                t({fr:'Android sécurisé', nl:'Beveiligd Android', en:'Secure Android', de:'Gesichertes Android'}),
                'OTA updates',
              ].map(p => (
                <span key={p} className="pill neutral">{p}</span>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {l.specs.map((s, i) => (
              <div key={s.l} style={{
                display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16,
                padding: '18px 24px',
                borderBottom: i < l.specs.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}>
                <div style={{ fontSize: 13.5, color: 'var(--fg-2)' }}>{s.l}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-1)', fontWeight: 500 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Other licenses */}
      <section className="wash">
        <div className="container">
          <SectionHeader
            eyebrow={t({fr:"L'écosystème complet",nl:"Het volledige ecosysteem",en:"The full ecosystem",de:"Das gesamte Ökosystem"})}
            title={t({fr:"LES AUTRES LICENCES {IMARRA}",nl:"DE ANDERE {IMARRA}-LICENTIES",en:"OTHER {IMARRA} LICENCES",de:"WEITERE {IMARRA}-LIZENZEN"})}
            accent="IMARRA"
          />
          <div className="grid grid-2" style={{ gap: 24 }}>
            {others.map(o => (
              <a key={o.id} href={`#/produits/${o.id}`} className="card card-hover" style={{ padding: 32, display: 'flex', gap: 20, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <img src={LICENSE_ICONS[o.id]} alt={o.name} style={{ width: 64, height: 64, borderRadius: 14, flexShrink: 0, boxShadow: 'var(--shadow-sm)' }} />
                <div style={{ flex: 1 }}>
                  <div className="eyebrow muted" style={{ margin: 0, marginBottom: 4 }}>{o.hardware}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-1)', marginBottom: 4 }}>{o.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>{o.tagline}</div>
                </div>
                <Icon name="arrow" size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={t({fr:`PRÊT À ESSAYER {${l.name.toUpperCase()}} ?`, nl:`KLAAR OM {${l.name.toUpperCase()}} TE PROBEREN?`, en:`READY TO TRY {${l.name.toUpperCase()}}?`, de:`BEREIT, {${l.name.toUpperCase()}} ZU TESTEN?`})} accent={l.name.toUpperCase()} subtitle={t({fr:"Une démo de 20 min. On s'occupe du reste.", nl:"Een demo van 20 min. Wij regelen de rest.", en:"A 20-min demo. We take care of the rest.", de:"Eine 20-min-Demo. Wir kümmern uns um den Rest."})} />

      <style>{`
        @media (max-width: 900px) {
          [data-grid="detail-hero"], [data-grid="specs"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

function NotFound() {
  return (
    <section style={{ padding: '120px 0', textAlign: 'center' }}>
      <div className="container">
        <h1 className="h-display" style={{ fontSize: 64, marginBottom: 16 }}>{t({fr:<>PAGE <span className="accent">INTROUVABLE</span></>, nl:<>PAGINA <span className="accent">NIET GEVONDEN</span></>, en:<>PAGE <span className="accent">NOT FOUND</span></>, de:<>SEITE <span className="accent">NICHT GEFUNDEN</span></>})}</h1>
        <p className="lead muted" style={{ marginBottom: 32 }}>{t({fr:"La page que vous cherchez n'existe pas ou a été déplacée.", nl:"De pagina die u zoekt bestaat niet of is verplaatst.", en:"The page you’re looking for doesn’t exist or has moved.", de:"Die gesuchte Seite existiert nicht oder wurde verschoben."})}</p>
        <a href="#/" className="btn btn-primary">{t({fr:"Retour à l'accueil", nl:'Terug naar home', en:'Back to home', de:'Zur Startseite'})}</a>
      </div>
    </section>
  );
}

Object.assign(window, { ProduitsOverview, ProduitDetail, NotFound });
