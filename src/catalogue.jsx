// Imarra — Catalogue Matériel complet (13 produits + 3 licences)

const getCatalogue = () => ({
  caisses: {
    title: t({fr:'Caisses fixes', nl:'Vaste kassa\'s', en:'Fixed POS', de:'Stationäre Kassen'}),
    eyebrow: t({fr:'Comptoir', nl:'Toonbank', en:'Counter', de:'Tresen'}),
    desc: t({fr:'Le cœur de la maison. Deux formats : la caisse haut de gamme T3 PRO double écran, ou la D3 Mini compacte tout-en-un.', nl:'Het hart van het huis. Twee formaten: de premium T3 PRO met dubbel scherm, of de compacte D3 Mini alles-in-één.', en:'The heart of the house. Two formats: the high-end dual-screen T3 PRO, or the compact all-in-one D3 Mini.', de:'Das Herz des Hauses. Zwei Formate: die hochwertige T3 PRO mit Doppelbildschirm oder die kompakte D3 Mini alles-in-einem.'}),
    icon: 'monitor',
    items: [
      {
        ref: 'IMR-T3P', name: 'Sunmi T3 PRO', category: 'Smart Desktop POS',
        tagline: t({fr:'La caisse qui ne ralentit jamais.', nl:'De kassa die nooit vertraagt.', en:'The POS that never slows down.', de:'Die Kasse, die nie langsamer wird.'}),
        desc: t({fr:'Terminal de caisse desktop haut de gamme, châssis aluminium, écran 15,6" sans bordure et processeur Qualcomm Kryo octa-core. Pensé pour les restaurants exigeants, le retail rapide et les boutiques premium.', nl:'Premium desktop-kassaterminal, aluminium chassis, 15,6" randloos scherm en Qualcomm Kryo octa-core processor. Voor veeleisende restaurants, snel retail en premium winkels.', en:'High-end desktop POS terminal, aluminium chassis, borderless 15.6" screen and Qualcomm Kryo octa-core CPU. Built for demanding restaurants, fast retail and premium shops.', de:'High-End-Desktop-Kassenterminal, Aluminiumgehäuse, randloser 15,6"-Bildschirm und Qualcomm Kryo Octa-Core. Für anspruchsvolle Restaurants, schnellen Retail und Premium-Boutiquen.'}),
        features: [
          { icon: 'zap',     t: t({fr:'Encaissez plus vite', nl:'Sneller afrekenen', en:'Cash up faster', de:'Schneller kassieren'}),
                             d: t({fr:'Octa-core 2,7 GHz, fluide même en heure de pointe.', nl:'Octa-core 2,7 GHz, vloeiend zelfs tijdens piekuren.', en:'Octa-core 2.7 GHz, smooth even at peak hours.', de:'Octa-Core 2,7 GHz, flüssig auch zu Stoßzeiten.'}) },
          { icon: 'monitor', t: t({fr:'Double écran client', nl:'Dubbel klantenscherm', en:'Dual customer screen', de:'Doppelter Kundenbildschirm'}),
                             d: t({fr:'Écran orienté client, transparence totale.', nl:'Naar de klant gericht scherm, totale transparantie.', en:'Customer-facing screen, total transparency.', de:'Zum Kunden gerichteter Bildschirm, völlige Transparenz.'}) },
          { icon: 'card',    t: t({fr:'NFC sur l\'écran', nl:'NFC op het scherm', en:'NFC on screen', de:'NFC am Bildschirm'}),
                             d: t({fr:'Paiement sans contact, tap-on-screen intégré.', nl:'Contactloos betalen, ingebouwde tap-on-screen.', en:'Contactless payment, built-in tap-on-screen.', de:'Kontaktloses Zahlen, integriertes Tap-on-Screen.'}) },
          { icon: 'lock',    t: t({fr:'Connexion en un toucher', nl:'Inloggen met één aanraking', en:'One-touch sign-in', de:'Anmeldung mit einer Berührung'}),
                             d: t({fr:'Empreinte digitale, multi-comptes équipe.', nl:'Vingerafdruk, multi-accounts team.', en:'Fingerprint, team multi-accounts.', de:'Fingerabdruck, Team-Multi-Accounts.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'KDS', 'Viva Wallet'],
        photo: 'assets/photos/products/t3-pro-hero.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-D3M', name: 'Sunmi D3 Mini', category: 'Smart Desktop POS',
        tagline: t({fr:'La caisse compacte tout-en-un.', nl:'De compacte alles-in-één kassa.', en:'The compact all-in-one POS.', de:'Die kompakte All-in-One-Kasse.'}),
        desc: t({fr:'Caisse desktop compacte avec écran principal 10,1" tactile, écran client 4" orienté vers l\'acheteur, imprimante thermique 80 mm intégrée et scanner 1D/2D. Idéale pour les comptoirs étroits.', nl:'Compacte desktop-kassa met 10,1" hoofdtouchscreen, 4" klantenscherm, ingebouwde 80 mm thermische printer en 1D/2D-scanner. Ideaal voor smalle toonbanken.', en:'Compact desktop POS with 10.1" main touch screen, 4" customer-facing display, built-in 80 mm thermal printer and 1D/2D scanner. Ideal for tight counters.', de:'Kompakte Desktop-Kasse mit 10,1"-Haupttouchscreen, 4"-Kundendisplay, eingebautem 80-mm-Thermodrucker und 1D/2D-Scanner. Ideal für schmale Tresen.'}),
        features: [
          { icon: 'monitor', t: t({fr:'Double écran', nl:'Dubbel scherm', en:'Dual screen', de:'Doppelbildschirm'}),
                             d: t({fr:'10,1" caissier + 4" client : prix & ticket transparents.', nl:'10,1" kassier + 4" klant: transparante prijzen en bon.', en:'10.1" cashier + 4" customer: transparent prices and ticket.', de:'10,1" Kassierer + 4" Kunde: transparente Preise und Beleg.'}) },
          { icon: 'receipt', t: t({fr:'Imprimante intégrée', nl:'Ingebouwde printer', en:'Built-in printer', de:'Integrierter Drucker'}),
                             d: t({fr:'80 mm · 250 mm/s, ticket en 1 seconde.', nl:'80 mm · 250 mm/s, ticket in 1 seconde.', en:'80 mm · 250 mm/s, ticket in 1 second.', de:'80 mm · 250 mm/s, Beleg in 1 Sekunde.'}) },
          { icon: 'grid',    t: t({fr:'Scanner 1D / 2D', nl:'Scanner 1D / 2D', en:'1D / 2D scanner', de:'1D-/2D-Scanner'}),
                             d: t({fr:'Lecture code-barres & QR sans périphérique.', nl:'Barcode- en QR-lezing zonder randapparaat.', en:'Barcode & QR reading without peripheral.', de:'Barcode- und QR-Lesung ohne Peripherie.'}) },
          { icon: 'package', t: t({fr:'Format compact', nl:'Compact formaat', en:'Compact format', de:'Kompaktformat'}),
                             d: t({fr:'Tient sur 25 cm de comptoir, design Red Dot.', nl:'Past op 25 cm toonbank, Red Dot-design.', en:'Fits in 25 cm of counter, Red Dot design.', de:'Passt auf 25 cm Tresen, Red-Dot-Design.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), t({fr:'Tiroir-caisse', nl:'Kassalade', en:'Cash drawer', de:'Kassenschublade'}), 'Viva Wallet'],
        photo: 'assets/photos/products/d3-mini-hero.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-CPAD-POS', name: 'cPad Bundle POS', category: t({fr:'Smart Tablet POS · imprimante intégrée', nl:'Smart Tablet POS · ingebouwde printer', en:'Smart Tablet POS · built-in printer', de:'Smart Tablet POS · integrierter Drucker'}),
        tagline: t({fr:'La caisse tablette, posée sur son imprimante.', nl:'De tabletkassa, op zijn printer geplaatst.', en:'The tablet POS, sitting on its printer.', de:'Die Tablet-Kasse auf ihrem Drucker.'}),
        desc: t({fr:'Bundle caisse fixe Sunmi : tablette cPad 14" FHD+ posée sur sa base d\'impression 80 mm. Format compact, design pivotant, ticket sur place. Idéal pour les comptoirs où chaque centimètre compte.', nl:'Sunmi vaste-kassabundel: 14" FHD+ cPad-tablet op zijn 80 mm printerbasis. Compact formaat, draaibaar design, ticket ter plaatse. Ideaal waar elke centimeter toonbank telt.', en:'Sunmi fixed-POS bundle: 14" FHD+ cPad tablet on its 80 mm printer base. Compact, swivel design, on-the-spot receipt. Ideal where every counter centimetre counts.', de:'Sunmi-Bundle für stationäre Kasse: 14" FHD+ cPad-Tablet auf seiner 80-mm-Druckerbasis. Kompakt, drehbar, Beleg vor Ort. Ideal, wo jeder Tresen-Zentimeter zählt.'}),
        features: [
          { icon: 'monitor', t: t({fr:'Écran cPad 14"', nl:'cPad-scherm 14"', en:'cPad screen 14"', de:'cPad-Bildschirm 14"'}),
                             d: t({fr:'Tablette Android FHD+ pivotante, tactile capacitif.', nl:'Draaibare Android FHD+ tablet, capacitief touch.', en:'Swivel Android FHD+ tablet, capacitive touch.', de:'Drehbares Android-FHD+-Tablet, kapazitiver Touch.'}) },
          { icon: 'receipt', t: t({fr:'Imprimante 80 mm intégrée', nl:'Ingebouwde 80 mm printer', en:'Built-in 80 mm printer', de:'Integrierter 80-mm-Drucker'}),
                             d: t({fr:'Ticket thermique direct dans la base, 250 mm/s.', nl:'Thermisch ticket direct in de basis, 250 mm/s.', en:'Thermal receipt straight from the base, 250 mm/s.', de:'Thermo-Beleg direkt aus der Basis, 250 mm/s.'}) },
          { icon: 'package', t: t({fr:'Empreinte minimale', nl:'Minimale voetafdruk', en:'Minimal footprint', de:'Minimale Stellfläche'}),
                             d: t({fr:'Tablette + imprimante sur la même base — gain de comptoir.', nl:'Tablet + printer op dezelfde basis — winst aan toonbank.', en:'Tablet + printer on the same base — counter space saved.', de:'Tablet + Drucker auf derselben Basis — Tresen-Platz gewonnen.'}) },
          { icon: 'plug',    t: t({fr:'Plug & play', nl:'Plug & play', en:'Plug & play', de:'Plug & play'}),
                             d: t({fr:'Un câble, deux appareils. Connectique Sunmi propriétaire.', nl:'Eén kabel, twee toestellen. Sunmi-connectoren.', en:'One cable, two devices. Proprietary Sunmi connectors.', de:'Ein Kabel, zwei Geräte. Sunmi-Steckverbindung.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), t({fr:'Tiroir-caisse', nl:'Kassalade', en:'Cash drawer', de:'Kassenschublade'}), 'Viva Wallet'],
        photo: 'assets/photos/products/cpad-bundle-pos.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-S2', name: 'Sunmi S2', category: t({fr:'Smart Cashier Scale · POS Android', nl:'Smart Cashier Scale · POS Android', en:'Smart Cashier Scale · POS Android', de:'Smart Cashier Scale · POS Android'}),
        tagline: t({fr:'La caisse qui pèse aussi vos produits.', nl:'De kassa die ook uw producten weegt.', en:'The POS that also weighs your products.', de:'Die Kasse, die auch Ihre Produkte wiegt.'}),
        desc: t({fr:'Balance commerciale Android nouvelle génération : caisse, pesage (40 g → 15 kg) et impression de ticket dans un seul appareil. Châssis en alliage d\'aluminium suspendu, double écran 15,6" + 10,1", capteur de pesage homologué. Conçue pour les boucheries, fromageries, primeurs, traiteurs et rayons frais.', nl:'Nieuwe generatie Android handelsweegschaal: kassa, weging (40 g → 15 kg) en ticketprinten in één toestel. Opgehangen aluminium chassis, dubbel scherm 15,6" + 10,1", gehomologeerde weegcel. Voor slagerijen, kaaswinkels, groentewinkels, traiteurs en versafdelingen.', en:'Next-gen Android commercial scale: POS, weighing (40 g → 15 kg) and receipt printing in one device. Suspended aluminium chassis, dual 15.6" + 10.1" screens, certified load cell. For butchers, cheesemongers, greengrocers, caterers and fresh aisles.', de:'Android-Handelswaage neuer Generation: Kasse, Wiegung (40 g → 15 kg) und Bondruck in einem Gerät. Hängendes Aluminiumgehäuse, Doppelbildschirm 15,6" + 10,1", zertifizierte Wägezelle. Für Metzgereien, Käsereien, Obstläden, Catering und Frischetheken.'}),
        features: [
          { icon: 'box',     t: t({fr:'Pesage 40 g → 15 kg', nl:'Weging 40 g → 15 kg', en:'Weighing 40 g → 15 kg', de:'Wiegung 40 g → 15 kg'}),
                             d: t({fr:'Capteur homologué OIML, lecture ultra-rapide.', nl:'OIML-gehomologeerde sensor, ultrasnelle aflezing.', en:'OIML-certified sensor, ultra-fast reading.', de:'OIML-zertifizierter Sensor, ultraschnelles Ablesen.'}) },
          { icon: 'monitor', t: t({fr:'Double écran 15,6" + 10,1"', nl:'Dubbel scherm 15,6" + 10,1"', en:'Dual screen 15.6" + 10.1"', de:'Doppelbildschirm 15,6" + 10,1"'}),
                             d: t({fr:'Écran vendeur géant + affichage client : poids, prix, total.', nl:'Reusachtig verkopersscherm + klantendisplay: gewicht, prijs, totaal.', en:'Giant seller screen + customer display: weight, price, total.', de:'Riesiger Verkäuferbildschirm + Kundendisplay: Gewicht, Preis, Summe.'}) },
          { icon: 'receipt', t: t({fr:'Imprimante Seiko 80 mm', nl:'Seiko 80 mm printer', en:'Seiko 80 mm printer', de:'Seiko-80-mm-Drucker'}),
                             d: t({fr:'Ticket thermique 200 mm/s, étiquettes prix possibles.', nl:'Thermisch ticket 200 mm/s, prijsetiketten mogelijk.', en:'Thermal receipt 200 mm/s, price labels possible.', de:'Thermo-Beleg 200 mm/s, Preisetiketten möglich.'}) },
          { icon: 'wifi',    t: 'eSIM + 4G + Wi-Fi',
                             d: t({fr:'Connexion partout, sans carte SIM physique à gérer.', nl:'Overal verbinding, geen fysieke SIM-kaart te beheren.', en:'Connected everywhere, no physical SIM to manage.', de:'Überall verbunden, keine physische SIM zu verwalten.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), t({fr:'Module Pesage', nl:'Weegmodule', en:'Weighing module', de:'Wiegemodul'}), 'Viva Wallet'],
        photo: 'assets/photos/products/s2-hero.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
    ],
  },
  paiement: {
    title: t({fr:'Paiement & Mobilité', nl:'Betaling & Mobiliteit', en:'Payment & Mobility', de:'Zahlung & Mobilität'}),
    eyebrow: t({fr:'Service en salle', nl:'Tafelbediening', en:'Table service', de:'Tischservice'}),
    desc: t({fr:'Vos serveurs encaissent à table. Vos clients ne font plus la queue. Deux terminaux Android certifiés EMV / PCI.', nl:'Uw obers rekenen aan tafel af. Uw klanten staan niet meer in de rij. Twee EMV/PCI-gecertificeerde Android-terminals.', en:'Your waiters cash up at the table. Your customers no longer queue. Two EMV/PCI-certified Android terminals.', de:'Ihre Kellner kassieren am Tisch. Ihre Kunden warten nicht mehr in der Schlange. Zwei EMV/PCI-zertifizierte Android-Terminals.'}),
    icon: 'smartphone',
    items: [
      {
        ref: 'IMR-P3', name: 'Sunmi P3', category: 'Smart Payment Terminal',
        tagline: t({fr:'Le paiement en main, partout en salle.', nl:'Betalen in de hand, overal in de zaal.', en:'Payment in hand, everywhere on the floor.', de:'Zahlung in der Hand, überall im Saal.'}),
        desc: t({fr:'Terminal de paiement Android nouvelle génération, 6,75" HD+, NFC, scanner intégré. Conçu pour la prise de commande mobile, le paiement à table et le line-busting en boutique.', nl:'Nieuwe generatie Android-betaalterminal, 6,75" HD+, NFC, ingebouwde scanner. Voor mobiele bestellingen, betalen aan tafel en line-busting in de winkel.', en:'New-gen Android payment terminal, 6.75" HD+, NFC, built-in scanner. Designed for mobile order-taking, table payment and in-store line-busting.', de:'Android-Zahlungsterminal neuer Generation, 6,75" HD+, NFC, integrierter Scanner. Für mobile Bestellung, Tischzahlung und Line-Busting im Laden.'}),
        features: [
          { icon: 'card',   t: t({fr:'Tous les paiements', nl:'Alle betalingen', en:'All payments', de:'Alle Zahlungen'}),
                            d: t({fr:'NFC, puce, piste, QR — en un seul appareil.', nl:'NFC, chip, magneetstrip, QR — in één toestel.', en:'NFC, chip, swipe, QR — in one device.', de:'NFC, Chip, Magnetstreifen, QR — in einem Gerät.'}) },
          { icon: 'shield', t: t({fr:'PCI & EMV certifié', nl:'PCI & EMV gecertificeerd', en:'PCI & EMV certified', de:'PCI- & EMV-zertifiziert'}),
                            d: t({fr:'Sécurité bancaire, OS dédié paiement.', nl:'Bankbeveiliging, OS speciaal voor betalingen.', en:'Banking-grade security, dedicated payment OS.', de:'Banksicherheit, dediziertes Zahlungs-OS.'}) },
          { icon: 'chef',   t: t({fr:'Commande à table', nl:'Bestelling aan tafel', en:'Order at the table', de:'Bestellung am Tisch'}),
                            d: t({fr:'Le ticket part directement en cuisine.', nl:'Het ticket gaat rechtstreeks naar de keuken.', en:'The ticket goes straight to the kitchen.', de:'Der Bon geht direkt in die Küche.'}) },
          { icon: 'grid',   t: 'Scan 1D / 2D',
                            d: t({fr:'Codes-barres et QR, même abîmés.', nl:'Barcodes en QR, zelfs beschadigd.', en:'Barcodes and QR, even damaged.', de:'Barcodes und QR, auch beschädigt.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Viva Wallet', t({fr:'4G partout', nl:'4G overal', en:'4G everywhere', de:'4G überall'})],
        photo: 'assets/photos/products/p3.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-V3', name: 'Sunmi V3 Mix', category: t({fr:'Smart Payment Terminal · imprimante intégrée', nl:'Smart Payment Terminal · ingebouwde printer', en:'Smart Payment Terminal · built-in printer', de:'Smart Payment Terminal · integrierter Drucker'}),
        tagline: t({fr:'Le paiement + l\'impression, en une main.', nl:'Betalen + printen, in één hand.', en:'Payment + printing, in one hand.', de:'Zahlung + Druck, in einer Hand.'}),
        desc: t({fr:'Terminal Android tout-en-un : 6,7" HD+, NFC, imprimante ticket 58 mm intégrée. La promesse du P3, plus l\'impression de ticket sur place — idéal pour la livraison, les marchés et les services itinérants.', nl:'Alles-in-één Android-terminal: 6,7" HD+, NFC, ingebouwde 58 mm ticketprinter. De belofte van de P3 + ticket ter plaatse — ideaal voor levering, markten en mobiele diensten.', en:'All-in-one Android terminal: 6.7" HD+, NFC, built-in 58 mm receipt printer. P3 promise + on-the-spot receipts — ideal for delivery, markets and mobile services.', de:'Android-Alles-in-Einem-Terminal: 6,7" HD+, NFC, integrierter 58-mm-Belegdrucker. Das P3-Versprechen + Beleg vor Ort — ideal für Lieferung, Märkte und mobile Dienste.'}),
        features: [
          { icon: 'receipt', t: t({fr:'Imprimante intégrée', nl:'Ingebouwde printer', en:'Built-in printer', de:'Integrierter Drucker'}),
                             d: t({fr:'Ticket 58 mm, coupe automatique, papier facile à recharger.', nl:'Ticket 58 mm, automatische snij, papier eenvoudig na te vullen.', en:'58 mm receipt, auto-cut, paper easy to reload.', de:'58-mm-Beleg, automatischer Schnitt, Papier einfach nachzuladen.'}) },
          { icon: 'card',    t: t({fr:'Paiement complet', nl:'Volledige betaling', en:'Full payment', de:'Komplette Zahlung'}),
                             d: t({fr:'NFC, puce, contactless, QR — certifié EMV.', nl:'NFC, chip, contactloos, QR — EMV-gecertificeerd.', en:'NFC, chip, contactless, QR — EMV certified.', de:'NFC, Chip, kontaktlos, QR — EMV-zertifiziert.'}) },
          { icon: 'plug',    t: t({fr:'Autonomie longue', nl:'Lange autonomie', en:'Long battery life', de:'Lange Akkulaufzeit'}),
                             d: t({fr:'Une journée de service sans recharge.', nl:'Een hele service zonder bij te laden.', en:'A full service day with no recharge.', de:'Ein ganzer Servicetag ohne Aufladen.'}) },
          { icon: 'wifi',    t: '4G + Wi-Fi',
                             d: t({fr:'Connecté en permanence, partout en mobilité.', nl:'Altijd verbonden, overal mobiel.', en:'Always connected, mobile everywhere.', de:'Immer verbunden, überall mobil.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Viva Wallet', 'Cloud Printer'],
        photo: 'assets/photos/products/v3.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-P2LSE', name: 'Sunmi P2 Lite SE', category: 'Smart Payment Terminal',
        tagline: t({fr:'Le paiement simple et sécurisé.', nl:'Eenvoudig en veilig betalen.', en:'Simple, secure payment.', de:'Einfache, sichere Zahlung.'}),
        desc: t({fr:'Terminal de paiement mobile Android avec écran HD 5,5", lecteur NFC et scanner de codes-barres. Certifié EMV & PCI PTS, idéal pour la prise de commande à table et la vente en mobilité.', nl:'Mobiele Android-betaalterminal met 5,5" HD-scherm, NFC-lezer en barcodescanner. EMV- en PCI-PTS-gecertificeerd, ideaal voor bestelling aan tafel en mobiele verkoop.', en:'Mobile Android payment terminal with 5.5" HD screen, NFC reader and barcode scanner. EMV & PCI-PTS certified, ideal for table ordering and mobile sales.', de:'Mobiles Android-Zahlungsterminal mit 5,5"-HD-Display, NFC-Leser und Barcode-Scanner. EMV- & PCI-PTS-zertifiziert, ideal für Tischbestellung und mobilen Verkauf.'}),
        features: [
          { icon: 'shield',     t: t({fr:'Paiement sécurisé', nl:'Veilige betaling', en:'Secure payment', de:'Sichere Zahlung'}),
                                d: t({fr:'EMV · PCI PTS · contactless · puce & PIN.', nl:'EMV · PCI PTS · contactloos · chip & PIN.', en:'EMV · PCI PTS · contactless · chip & PIN.', de:'EMV · PCI PTS · kontaktlos · Chip & PIN.'}) },
          { icon: 'smartphone', t: t({fr:'Mobile en salle', nl:'Mobiel in de zaal', en:'Mobile on the floor', de:'Mobil im Saal'}),
                                d: t({fr:'Léger, prise en main d\'une seule main.', nl:'Licht, eenhandig vast te houden.', en:'Lightweight, one-handed grip.', de:'Leicht, einhändig zu bedienen.'}) },
          { icon: 'grid',       t: t({fr:'NFC & scanner', nl:'NFC & scanner', en:'NFC & scanner', de:'NFC & Scanner'}),
                                d: t({fr:'QR, codes-barres, cartes contactless en un geste.', nl:'QR, barcodes, contactloze kaarten in één gebaar.', en:'QR, barcodes, contactless cards in one gesture.', de:'QR, Barcodes, kontaktlose Karten in einer Geste.'}) },
          { icon: 'plug',       t: t({fr:'Autonomie 1 journée', nl:'1 dag autonomie', en:'All-day battery', de:'Akku für einen Tag'}),
                                d: t({fr:'Batterie longue durée, 4G & Wi-Fi.', nl:'Langdurige batterij, 4G & wifi.', en:'Long-lasting battery, 4G & Wi-Fi.', de:'Langlebiger Akku, 4G & WLAN.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Viva Wallet', 'Cloud Printer'],
        photo: 'assets/photos/products/p2-lite-se.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-M3', name: 'Sunmi M3', category: t({fr:'Smart Handheld · Service en salle', nl:'Smart Handheld · Zaalbediening', en:'Smart Handheld · Table service', de:'Smart Handheld · Tischservice'}),
        tagline: t({fr:'Le PDA serveur, fin comme un smartphone.', nl:'De obers-PDA, dun als een smartphone.', en:'The waiter PDA, thin as a smartphone.', de:'Der Kellner-PDA, schlank wie ein Smartphone.'}),
        desc: t({fr:'Terminal Android ultra-slim 6,7" HD+, conçu pour la prise de commande à table et la mobilité boutique. Plus léger et plus discret que le P3 : aucun encombrement de papier, juste l\'écran. Idéal pour les serveurs qui enchaînent les tables, et le line-busting en magasin.', nl:'Ultraslim Android-terminal 6,7" HD+, ontworpen voor bestelling aan tafel en winkelmobiliteit. Lichter en discreter dan de P3: geen papier in de weg, alleen het scherm. Ideaal voor obers die tafels aaneenrijgen, en voor line-busting in de winkel.', en:'Ultra-slim Android terminal 6.7" HD+, designed for table ordering and shop mobility. Lighter and more discreet than the P3: no paper clutter, just the screen. Ideal for waiters running tables in sequence, and for in-store line-busting.', de:'Ultraschlankes Android-Terminal 6,7" HD+, für Tischbestellung und Mobilität im Laden. Leichter und dezenter als der P3: kein Papierkram, nur Bildschirm. Ideal für Kellner, die Tisch um Tisch bedienen, und Line-Busting im Laden.'}),
        features: [
          { icon: 'chef',       t: t({fr:'Commande à table', nl:'Bestelling aan tafel', en:'Order at the table', de:'Bestellung am Tisch'}),
                                d: t({fr:'Le serveur saisit, le ticket part en cuisine en temps réel.', nl:'De ober voert in, het ticket gaat realtime naar de keuken.', en:'The waiter inputs, the ticket flows to the kitchen in real time.', de:'Der Kellner gibt ein, der Bon geht in Echtzeit in die Küche.'}) },
          { icon: 'smartphone', t: t({fr:'Ultra-slim ergonomique', nl:'Ultraslim & ergonomisch', en:'Ultra-slim & ergonomic', de:'Ultraschlank & ergonomisch'}),
                                d: t({fr:'Format smartphone, 230 g, tient dans une poche de tablier.', nl:'Smartphone-formaat, 230 g, past in een schortzak.', en:'Smartphone format, 230 g, fits in an apron pocket.', de:'Smartphone-Format, 230 g, passt in eine Schürzentasche.'}) },
          { icon: 'grid',       t: 'Scan 1D / 2D · NFC',
                                d: t({fr:'Code-barres, QR, carte fidélité — tout en un geste.', nl:'Barcode, QR, loyaliteitskaart — alles in één gebaar.', en:'Barcode, QR, loyalty card — all in one gesture.', de:'Barcode, QR, Treuekarte — alles in einer Geste.'}) },
          { icon: 'plug',       t: 'Wi-Fi 6 + 4G',
                                d: t({fr:'Synchro caisse instantanée, autonomie 1 service complet.', nl:'Onmiddellijke kassasynchronisatie, autonomie 1 volledige service.', en:'Instant POS sync, battery for a full service.', de:'Sofortige Kassensynchronisierung, Akku für einen kompletten Service.'}) },
        ],
        compatible: ['Imarra Mobile', t({fr:'KDS Cuisine', nl:'KDS Keuken', en:'Kitchen KDS', de:'KDS Küche'}), 'Cloud Printer'],
        photo: 'assets/photos/products/m3.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
    ],
  },
  bornes: {
    title: t({fr:'Bornes self-service', nl:'Self-service kiosken', en:'Self-service kiosks', de:'Self-Service-Kioske'}),
    eyebrow: t({fr:'Self-order', nl:'Self-order', en:'Self-order', de:'Self-Order'}),
    desc: t({fr:'Le serveur qui ne dort jamais. Bornes sur pied ou comptoir, restauration ou retail — toutes connectées à votre caisse.', nl:'De ober die nooit slaapt. Staande of toonbankkiosken, horeca of retail — allemaal verbonden met uw kassa.', en:'The waiter who never sleeps. Floor-standing or counter kiosks, food or retail — all connected to your POS.', de:'Der Kellner, der nie schläft. Steh- oder Tresenkioske, Gastronomie oder Retail — alle mit Ihrer Kasse verbunden.'}),
    icon: 'kiosk',
    items: [
      {
        ref: 'IMR-K2', name: 'Sunmi K2', category: 'Self-Service Kiosk',
        tagline: t({fr:'+20 % de panier moyen.', nl:'+20 % gemiddelde mandgrootte.', en:'+20 % average basket.', de:'+20 % Warenkorbgröße.'}),
        desc: t({fr:'Borne 24" avec scanner QR, NFC et imprimante 80 mm intégrés. Commande, paiement et ticket en moins d\'une minute.', nl:'24" kiosk met ingebouwde QR-scanner, NFC en 80 mm printer. Bestellen, betalen en ticket in minder dan een minuut.', en:'24" kiosk with built-in QR scanner, NFC and 80 mm printer. Order, pay and ticket in under a minute.', de:'24"-Kiosk mit integriertem QR-Scanner, NFC und 80-mm-Drucker. Bestellung, Zahlung und Beleg in unter einer Minute.'}),
        features: [
          { icon: 'sparkle', t: t({fr:'+20 % panier moyen', nl:'+20 % gemiddelde mand', en:'+20 % average basket', de:'+20 % Warenkorbgröße'}),
                             d: t({fr:'Suggestions, options, upsell automatique.', nl:'Suggesties, opties, automatische upsell.', en:'Suggestions, options, automatic upsell.', de:'Vorschläge, Optionen, automatischer Upsell.'}) },
          { icon: 'clock',   t: t({fr:'Zéro file d\'attente', nl:'Geen wachtrij', en:'Zero queue', de:'Keine Warteschlange'}),
                             d: t({fr:'Plusieurs clients commandent en parallèle.', nl:'Meerdere klanten bestellen gelijktijdig.', en:'Multiple customers order in parallel.', de:'Mehrere Kunden bestellen parallel.'}) },
          { icon: 'card',    t: 'QR · NFC · CB',
                             d: t({fr:'Tous moyens de paiement, ticket imprimé.', nl:'Alle betaalmethoden, geprint ticket.', en:'All payment methods, printed receipt.', de:'Alle Zahlungsmittel, gedruckter Beleg.'}) },
          { icon: 'users',   t: t({fr:'Hauteur ajustée', nl:'Aangepaste hoogte', en:'Adjusted height', de:'Angepasste Höhe'}),
                             d: t({fr:'Pied au sol, accessible PMR, écran lisible.', nl:'Staander, PMR-toegankelijk, leesbaar scherm.', en:'Floor stand, accessible, readable screen.', de:'Standfuß, barrierefrei, lesbarer Bildschirm.'}) },
        ],
        compatible: [t({fr:'KDS Cuisine', nl:'KDS Keuken', en:'Kitchen KDS', de:'KDS Küche'}), t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Viva Wallet'],
        photo: 'assets/photos/products/k2.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-FLEX3-R', name: 'Flex 3 Restauration', category: 'Flex 3 Kiosk',
        tagline: t({fr:'La borne resto nouvelle génération.', nl:'De nieuwe generatie horecakiosk.', en:'The new generation restaurant kiosk.', de:'Der Restaurant-Kiosk der neuen Generation.'}),
        desc: t({fr:'Format standard sur pied, écran portrait haute luminosité, lecteur QR & NFC intégrés et imprimante de tickets en option. Pensée pour la restauration rapide, le quick-service et les chaînes.', nl:'Standaard staand formaat, helder portretscherm, ingebouwde QR- en NFC-lezer en optionele ticketprinter. Voor fast-food, quick-service en ketens.', en:'Standard floor format, bright portrait screen, built-in QR & NFC reader and optional receipt printer. Built for fast-food, quick-service and chains.', de:'Standard-Standformat, heller Porträtbildschirm, integrierter QR- und NFC-Leser und optionaler Belegdrucker. Für Fast-Food, Quick-Service und Ketten.'}),
        features: [
          { icon: 'star',    t: t({fr:'Carte mise en valeur', nl:'Menu in de kijker', en:'Menu in the spotlight', de:'Speisekarte hervorgehoben'}),
                             d: t({fr:'Photos plein écran, options, allergènes.', nl:'Foto\'s op volledig scherm, opties, allergenen.', en:'Full-screen photos, options, allergens.', de:'Vollbildfotos, Optionen, Allergene.'}) },
          { icon: 'sparkle', t: t({fr:'+20 % panier moyen', nl:'+20 % gemiddelde mand', en:'+20 % average basket', de:'+20 % Warenkorbgröße'}),
                             d: t({fr:'Upsell & suggestions automatiques.', nl:'Automatische upsell & suggesties.', en:'Automatic upsell & suggestions.', de:'Automatischer Upsell & Vorschläge.'}) },
          { icon: 'card',    t: 'QR · NFC · CB',
                             d: t({fr:'Paiement Viva Wallet, ticket dématérialisé.', nl:'Viva Wallet-betaling, digitaal ticket.', en:'Viva Wallet payment, paperless ticket.', de:'Viva-Wallet-Zahlung, papierloser Beleg.'}) },
          { icon: 'users',   t: t({fr:'Pied au sol PMR', nl:'PMR-staander', en:'Accessible floor stand', de:'Barrierefreier Standfuß'}),
                             d: t({fr:'Écran portrait à hauteur, accessible à tous.', nl:'Portretscherm op hoogte, voor iedereen toegankelijk.', en:'Portrait screen at the right height, accessible to all.', de:'Porträtbildschirm in passender Höhe, für alle zugänglich.'}) },
        ],
        compatible: [t({fr:'KDS Cuisine', nl:'KDS Keuken', en:'Kitchen KDS', de:'KDS Küche'}), t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Viva Wallet'],
        photo: 'assets/photos/products/kiosk-flex-resto.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-FLEX3-RM', name: 'Flex 3 Mini', category: 'Flex 3 Kiosk Mini',
        tagline: t({fr:'La borne compacte pour petits espaces.', nl:'De compacte kiosk voor kleine ruimtes.', en:'The compact kiosk for small spaces.', de:'Der kompakte Kiosk für kleine Räume.'}),
        desc: t({fr:'Borne self-order compacte à poser sur comptoir ou meuble bas. Idéale pour boulangeries, food-trucks, bars à salades, snacks.', nl:'Compacte self-order-kiosk op toonbank of laag meubel te plaatsen. Ideaal voor bakkerijen, foodtrucks, saladbars en snacks.', en:'Compact self-order kiosk to sit on a counter or low cabinet. Ideal for bakeries, food trucks, salad bars and snack bars.', de:'Kompakter Self-Order-Kiosk für Tresen oder Niedrigmöbel. Ideal für Bäckereien, Food-Trucks, Salatbars und Imbisse.'}),
        features: [
          { icon: 'package', t: t({fr:'Format compact', nl:'Compact formaat', en:'Compact format', de:'Kompaktformat'}),
                             d: t({fr:'Posée sur comptoir, gain d\'espace immédiat.', nl:'Op de toonbank, direct ruimtewinst.', en:'On the counter, immediate space savings.', de:'Auf dem Tresen, sofortiger Platzgewinn.'}) },
          { icon: 'plug',    t: 'Plug & play',
                             d: t({fr:'Branchement secteur, configuration en 5 min.', nl:'Stopcontact, configuratie in 5 min.', en:'Plug into mains, configured in 5 min.', de:'Steckdose, Konfiguration in 5 Min.'}) },
          { icon: 'card',    t: 'QR · NFC · CB',
                             d: t({fr:'Paiement Viva Wallet, ticket dématérialisé.', nl:'Viva Wallet-betaling, digitaal ticket.', en:'Viva Wallet payment, paperless ticket.', de:'Viva-Wallet-Zahlung, papierloser Beleg.'}) },
          { icon: 'clock',   t: t({fr:'Zéro file d\'attente', nl:'Geen wachtrij', en:'Zero queue', de:'Keine Warteschlange'}),
                             d: t({fr:'Plusieurs clients commandent en parallèle.', nl:'Meerdere klanten bestellen gelijktijdig.', en:'Multiple customers order in parallel.', de:'Mehrere Kunden bestellen parallel.'}) },
        ],
        compatible: [t({fr:'KDS Cuisine', nl:'KDS Keuken', en:'Kitchen KDS', de:'KDS Küche'}), t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Viva Wallet'],
        photo: 'assets/photos/products/kiosk-flex-resto-mini.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-FLEX3-T', name: 'Flex 3 Retail', category: 'Flex 3 Kiosk Retail',
        tagline: t({fr:'La borne retail ultra-présente en magasin.', nl:'De ultra-zichtbare retailkiosk in de winkel.', en:'The ultra-present retail kiosk in store.', de:'Der ultra-präsente Retail-Kiosk im Laden.'}),
        desc: t({fr:'Format standard sur pied, écran portrait haute luminosité, scanner code-barres & QR pour la consultation prix, l\'inscription fidélité et le click & collect.', nl:'Standaard staand formaat, helder portretscherm, barcode- en QR-scanner voor prijsraadpleging, loyaliteitsinschrijving en click & collect.', en:'Standard floor format, bright portrait screen, barcode & QR scanner for price look-up, loyalty sign-up and click & collect.', de:'Standard-Standformat, heller Porträtbildschirm, Barcode- & QR-Scanner für Preisabfrage, Treueprogramm-Anmeldung und Click & Collect.'}),
        features: [
          { icon: 'tag',     t: t({fr:'Consultation prix', nl:'Prijsraadpleging', en:'Price look-up', de:'Preisabfrage'}),
                             d: t({fr:'Scan d\'étiquette, fiche produit complète.', nl:'Scan etiket, volledige productfiche.', en:'Scan label, full product sheet.', de:'Etikett scannen, vollständiges Produktblatt.'}) },
          { icon: 'heart',   t: t({fr:'Inscription fidélité', nl:'Loyaliteitsinschrijving', en:'Loyalty sign-up', de:'Treueprogramm-Anmeldung'}),
                             d: t({fr:'QR, NFC, e-mail : client conquis en 30 sec.', nl:'QR, NFC, e-mail: klant gewonnen in 30 sec.', en:'QR, NFC, email: customer won in 30 sec.', de:'QR, NFC, E-Mail: Kunde in 30 Sek. gewonnen.'}) },
          { icon: 'package', t: 'Click & collect',
                             d: t({fr:'Retrait commande, scan QR, ticket retrait.', nl:'Bestelling ophalen, QR-scan, afhaalticket.', en:'Order pickup, QR scan, pickup ticket.', de:'Bestellabholung, QR-Scan, Abholbeleg.'}) },
          { icon: 'sparkle', t: t({fr:'Affichage dynamique', nl:'Dynamische weergave', en:'Dynamic display', de:'Dynamische Anzeige'}),
                             d: t({fr:'Catalogue, promos, vidéos quand libre.', nl:'Catalogus, promo\'s, video\'s indien vrij.', en:'Catalogue, promos, videos when idle.', de:'Katalog, Aktionen, Videos im Leerlauf.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), t({fr:'Catalogue produits', nl:'Productcatalogus', en:'Product catalogue', de:'Produktkatalog'}), t({fr:'Fidélité', nl:'Loyaliteit', en:'Loyalty', de:'Treue'})],
        photo: 'assets/photos/products/kiosk-flex-retail.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-FLEX3-TM', name: 'Flex 3 Retail Mini', category: 'Flex 3 Kiosk Mini Retail',
        tagline: t({fr:'La borne comptoir pour le retail.', nl:'De toonbankkiosk voor retail.', en:'The counter kiosk for retail.', de:'Der Tresen-Kiosk für den Retail.'}),
        desc: t({fr:'Borne libre-service compacte à poser sur banque d\'accueil ou comptoir caisse. Idéale pour boutiques de mode, beauté, librairies, corners shop-in-shop.', nl:'Compacte self-service kiosk op een onthaalbalie of toonbank te plaatsen. Ideaal voor mode-, beauty- en boekenwinkels, shop-in-shop-hoeken.', en:'Compact self-service kiosk to sit on a reception desk or POS counter. Ideal for fashion shops, beauty stores, bookshops and shop-in-shop corners.', de:'Kompakter Self-Service-Kiosk für Empfangstheken oder Kassentresen. Ideal für Mode-, Beauty- und Buchhandlungen, Shop-in-Shop-Ecken.'}),
        features: [
          { icon: 'package', t: t({fr:'Format compact', nl:'Compact formaat', en:'Compact format', de:'Kompaktformat'}),
                             d: t({fr:'Posée sur comptoir, parfaite pour petits magasins.', nl:'Op toonbank, perfect voor kleine winkels.', en:'On the counter, perfect for small shops.', de:'Auf dem Tresen, ideal für kleine Läden.'}) },
          { icon: 'tag',     t: t({fr:'Consultation prix', nl:'Prijsraadpleging', en:'Price look-up', de:'Preisabfrage'}),
                             d: t({fr:'Scan d\'étiquette, fiche produit, stock magasin.', nl:'Scan etiket, productfiche, winkelvoorraad.', en:'Scan label, product sheet, store stock.', de:'Etikett scannen, Produktblatt, Filialbestand.'}) },
          { icon: 'heart',   t: t({fr:'Inscription fidélité', nl:'Loyaliteitsinschrijving', en:'Loyalty sign-up', de:'Treueprogramm-Anmeldung'}),
                             d: t({fr:'Cumul de points en caisse, inscription rapide.', nl:'Punten verzamelen aan de kassa, snelle inschrijving.', en:'Points at checkout, quick sign-up.', de:'Punkte an der Kasse, schnelle Anmeldung.'}) },
          { icon: 'plug',    t: 'Plug & play',
                             d: t({fr:'Branchement secteur, configuration en 5 min.', nl:'Stopcontact, configuratie in 5 min.', en:'Plug into mains, configured in 5 min.', de:'Steckdose, Konfiguration in 5 Min.'}) },
        ],
        compatible: [t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), t({fr:'Catalogue produits', nl:'Productcatalogus', en:'Product catalogue', de:'Produktkatalog'}), t({fr:'Fidélité', nl:'Loyaliteit', en:'Loyalty', de:'Treue'})],
        photo: 'assets/photos/products/kiosk-flex-retail-mini.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
    ],
  },
  peripheriques: {
    title: t({fr:'Périphériques', nl:'Randapparatuur', en:'Peripherals', de:'Peripheriegeräte'}),
    eyebrow: t({fr:'Écosystème', nl:'Ecosysteem', en:'Ecosystem', de:'Ökosystem'}),
    desc: t({fr:'L\'imprimante cuisine, le tiroir-caisse, la tablette KDS et le scanner code-barres. Tout l\'écosystème en plus de la caisse.', nl:'De keukenprinter, kassalade, KDS-tablet en barcodescanner. Het hele ecosysteem naast de kassa.', en:'The kitchen printer, cash drawer, KDS tablet and barcode scanner. The whole ecosystem on top of the POS.', de:'Der Küchendrucker, die Kassenschublade, das KDS-Tablet und der Barcode-Scanner. Das ganze Ökosystem rund um die Kasse.'}),
    icon: 'layers',
    items: [
      {
        ref: 'IMR-NT312', name: 'Cloud Printer NT312', category: 'Kitchen Cloud Printer',
        tagline: t({fr:'Des tickets qui n\'attendent jamais.', nl:'Tickets die nooit wachten.', en:'Tickets that never wait.', de:'Bons, die nie warten.'}),
        desc: t({fr:'Imprimante thermique 80 mm cloud-native : les commandes passées sur la caisse, la borne ou le P3 arrivent directement, sans passer par un PC. IP52, conçue pour la cuisine.', nl:'Cloud-native 80 mm thermische printer: bestellingen vanaf de kassa, kiosk of P3 komen direct binnen, zonder PC ertussen. IP52, voor de keuken.', en:'Cloud-native 80 mm thermal printer: orders from the POS, kiosk or P3 arrive directly, no PC in between. IP52, built for the kitchen.', de:'Cloud-nativer 80-mm-Thermodrucker: Bestellungen von Kasse, Kiosk oder P3 kommen direkt an, ohne PC dazwischen. IP52, für die Küche.'}),
        features: [
          { icon: 'wifi',   t: t({fr:'100 % cloud', nl:'100 % cloud', en:'100 % cloud', de:'100 % Cloud'}),
                            d: t({fr:'Pas de PC intermédiaire, config à distance.', nl:'Geen tussen-PC, configuratie op afstand.', en:'No middle PC, remote configuration.', de:'Kein Zwischen-PC, Fernkonfiguration.'}) },
          { icon: 'zap',    t: '250 mm/s',
                            d: t({fr:'Deux tickets par seconde, coupe automatique.', nl:'Twee tickets per seconde, automatische snij.', en:'Two tickets per second, auto-cut.', de:'Zwei Belege pro Sekunde, automatischer Schnitt.'}) },
          { icon: 'plug',   t: 'Wi-Fi · 4G · LAN · BT',
                            d: t({fr:'Tous les liens, redondance en cas de coupure.', nl:'Alle verbindingen, redundantie bij uitval.', en:'All links, redundancy in case of outage.', de:'Alle Verbindungen, Redundanz bei Ausfall.'}) },
          { icon: 'shield', t: t({fr:'IP52 anti-éclaboussures', nl:'IP52 spatwaterdicht', en:'IP52 splash-proof', de:'IP52 spritzwassergeschützt'}),
                            d: t({fr:'Coque oléofuge, pensée pour la cuisine.', nl:'Olieafstotende behuizing, voor de keuken.', en:'Oleophobic shell, built for the kitchen.', de:'Ölabweisende Hülle, für die Küche.'}) },
        ],
        compatible: ['T3 PRO', 'P3', t({fr:'K2 Borne', nl:'K2 Kiosk', en:'K2 Kiosk', de:'K2 Kiosk'})],
        photo: 'assets/photos/products/imprimante.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-CD', name: t({fr:'Tiroir-caisse', nl:'Kassalade', en:'Cash drawer', de:'Kassenschublade'}), category: 'Cash Drawer',
        tagline: t({fr:'L\'espèce sous contrôle.', nl:'Cash onder controle.', en:'Cash under control.', de:'Bargeld unter Kontrolle.'}),
        desc: t({fr:'Tiroir-caisse robuste 4 billets / 8 pièces, ouverture électronique pilotée par la caisse ou l\'imprimante via RJ11. Verrou à clé trois positions. Conçu pour 2 millions de cycles.', nl:'Robuuste kassalade 4 biljetten / 8 munten, elektronische opening aangestuurd door kassa of printer via RJ11. Sleutelvergrendeling met drie standen. Voor 2 miljoen cycli.', en:'Robust cash drawer for 4 notes / 8 coins, electronic opening driven by POS or printer via RJ11. Three-position key lock. Designed for 2 million cycles.', de:'Robuste Kassenschublade für 4 Scheine / 8 Münzen, elektronische Öffnung gesteuert von Kasse oder Drucker via RJ11. Schlüsselschloss mit drei Positionen. Für 2 Mio. Zyklen ausgelegt.'}),
        features: [
          { icon: 'lock',    t: t({fr:'Verrou 3 positions', nl:'Slot 3 standen', en:'3-position lock', de:'Schloss mit 3 Positionen'}),
                             d: t({fr:'Auto, verrouillé, ouvert manuellement.', nl:'Auto, vergrendeld, handmatig open.', en:'Auto, locked, manually open.', de:'Auto, verriegelt, manuell offen.'}) },
          { icon: 'plug',    t: t({fr:'Pilotage RJ11', nl:'RJ11-aansturing', en:'RJ11 control', de:'RJ11-Steuerung'}),
                             d: t({fr:'Ouvert depuis T3 PRO ou imprimante NT312.', nl:'Geopend vanaf T3 PRO of NT312-printer.', en:'Opened from T3 PRO or NT312 printer.', de:'Öffnung über T3 PRO oder NT312-Drucker.'}) },
          { icon: 'shield',  t: t({fr:'Acier renforcé', nl:'Versterkt staal', en:'Reinforced steel', de:'Verstärkter Stahl'}),
                             d: t({fr:'Anti-effraction, pieds antidérapants.', nl:'Inbraakbestendig, antislipvoetjes.', en:'Anti-break-in, anti-slip feet.', de:'Einbruchsicher, Anti-Rutsch-Füße.'}) },
          { icon: 'refresh', t: '2 M cycles',
                             d: t({fr:'Fiabilité pensée pour la durée.', nl:'Betrouwbaarheid voor de lange termijn.', en:'Reliability built for the long haul.', de:'Zuverlässigkeit für die lange Dauer.'}) },
        ],
        compatible: ['T3 PRO RJ11', 'NT312 RJ12', 'Plug & play'],
        photo: 'assets/photos/products/tiroir-caisse.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-CPAD14', name: 'cPad 14"', category: 'Smart Commercial Tablet',
        tagline: t({fr:'L\'écran KDS et la tablette de service.', nl:'Het KDS-scherm en de servicetablet.', en:'The KDS screen and service tablet.', de:'Der KDS-Bildschirm und das Service-Tablet.'}),
        desc: t({fr:'Tablette Android 14 pouces FHD+, slim et robuste. Affiche les commandes en cuisine (KDS), accompagne les serveurs en salle, ou sert de borne de consultation produit.', nl:'14" FHD+ Android-tablet, slim en robuust. Toont bestellingen in de keuken (KDS), vergezelt obers in de zaal of fungeert als productraadplegingskiosk.', en:'14" FHD+ Android tablet, slim and rugged. Displays orders in the kitchen (KDS), assists waiters on the floor, or serves as a product look-up kiosk.', de:'14"-FHD+-Android-Tablet, schlank und robust. Zeigt Bestellungen in der Küche (KDS), begleitet Kellner im Saal oder dient als Produkt-Infokiosk.'}),
        features: [
          { icon: 'chef',    t: t({fr:'KDS cuisine 14"', nl:'KDS keuken 14"', en:'14" kitchen KDS', de:'14"-Küchen-KDS'}),
                             d: t({fr:'Bons affichés en grand, chrono & statuts.', nl:'Bonnen groot weergegeven, timer & statussen.', en:'Tickets shown large, timer & statuses.', de:'Bons groß angezeigt, Timer & Status.'}) },
          { icon: 'receipt', t: t({fr:'Service à table', nl:'Tafelbediening', en:'Table service', de:'Tischservice'}),
                             d: t({fr:'Prise de commande, envoi cuisine, SoftPOS.', nl:'Bestelling opnemen, naar keuken sturen, SoftPOS.', en:'Order-taking, kitchen dispatch, SoftPOS.', de:'Bestellaufnahme, Küchenversand, SoftPOS.'}) },
          { icon: 'zap',     t: 'Octa-core · 8 Go',
                             d: 'Android 14, Wi-Fi 6E, Bluetooth 5.3, NFC.' },
          { icon: 'layers',  t: t({fr:'Modulaire Quick-Lock', nl:'Modulair Quick-Lock', en:'Modular Quick-Lock', de:'Modulares Quick-Lock'}),
                             d: t({fr:'Mural, pied pivotant, base imprimante.', nl:'Muur, draaibare voet, printerbasis.', en:'Wall mount, swivel stand, printer base.', de:'Wandhalterung, drehbarer Fuß, Druckerbasis.'}) },
        ],
        compatible: [t({fr:'KDS Cuisine', nl:'KDS Keuken', en:'Kitchen KDS', de:'KDS Küche'}), t({fr:'Imarra Caisse', nl:'Imarra Kassa', en:'Imarra POS', de:'Imarra Kasse'}), 'Cloud Printer'],
        photo: 'assets/photos/products/cpad.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
      {
        ref: 'IMR-NS021', name: 'Scanner NS021', category: '2D Handheld Scanner',
        tagline: t({fr:'Scannez tout, même l\'écran.', nl:'Scan alles, zelfs het scherm.', en:'Scan anything, even the screen.', de:'Alles scannen, sogar den Bildschirm.'}),
        desc: t({fr:'Scanner 2D filaire à haute tolérance de mouvement : capture les codes même flous, abîmés ou affichés sur un écran de smartphone. Indispensable pour la caisse et le retail.', nl:'Bekabelde 2D-scanner met hoge bewegingstolerantie: leest codes ook wanneer ze wazig, beschadigd of op een smartphonescherm getoond worden. Onmisbaar voor kassa en retail.', en:'Wired 2D scanner with high motion tolerance: reads codes even when blurred, damaged or shown on a phone screen. A must for POS and retail.', de:'Kabelgebundener 2D-Scanner mit hoher Bewegungstoleranz: liest Codes auch verschwommen, beschädigt oder auf einem Smartphone-Display. Unverzichtbar für Kasse und Retail.'}),
        features: [
          { icon: 'zap',    t: t({fr:'300 scans / seconde', nl:'300 scans / seconde', en:'300 scans / second', de:'300 Scans / Sekunde'}),
                            d: t({fr:'Décodage ultra-rapide, file qui avance.', nl:'Ultrasnelle decodering, rij blijft bewegen.', en:'Ultra-fast decoding, queue keeps moving.', de:'Ultraschnelle Decodierung, Schlange bewegt sich.'}) },
          { icon: 'grid',   t: '1D · 2D · QR',
                            d: 'EAN, Code 128, Data Matrix, PDF417, QR.' },
          { icon: 'eye',    t: t({fr:'Lit l\'écran', nl:'Leest het scherm', en:'Reads the screen', de:'Liest den Bildschirm'}),
                            d: t({fr:'Coupons e-tickets sur smartphone.', nl:'E-coupons en e-tickets op smartphone.', en:'E-coupons and e-tickets on smartphone.', de:'E-Coupons und E-Tickets auf dem Smartphone.'}) },
          { icon: 'shield', t: t({fr:'Robuste', nl:'Robuust', en:'Robust', de:'Robust'}),
                            d: t({fr:'Test de chute 1,2 m, 3 M de clics gâchette.', nl:'Valtest 1,2 m, 3 mln triggerklikken.', en:'1.2 m drop test, 3 M trigger clicks.', de:'1,2-m-Falltest, 3 Mio. Triggerklicks.'}) },
        ],
        compatible: ['T3 PRO', 'P3', 'Imarra POS'],
        photo: 'assets/photos/products/scanner.png',
        photoFit: 'contain',
        photoBg: '#f9fafb',
      },
    ],
  },
});

// =============================================================================
// Product card — vertical (photo top) or horizontal (photo side, for tall products)
// =============================================================================
function ProductCard({ p, layout = 'vertical' }) {
  if (layout === 'horizontal') {
    return (
      <div className="card kiosk-card" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '0.85fr 1.4fr', height: '100%', minHeight: 420 }}>
        {/* Photo — tall left column */}
        <div style={{
          background: p.photoBg,
          position: 'relative',
          overflow: 'hidden',
          borderRight: '1px solid var(--border-subtle)',
        }}>
          {p.photo ? (
            <img src={p.photo} alt={p.name} style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'contain',
              padding: 20,
            }} />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(0,0,0,0.05)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.08)' }}>
                <Icon name={p.icon || 'kiosk'} size={28} />
              </div>
            </div>
          )}
          <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 10px', background: 'rgba(0,0,0,0.55)', color: '#fff', borderRadius: 999, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', backdropFilter: 'blur(8px)' }}>
            {p.ref}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
          <div className="eyebrow muted" style={{ margin: 0, marginBottom: 10 }}>{p.category}</div>
          <h3 className="h3" style={{ marginBottom: 8, fontSize: 22 }}>{p.name}</h3>
          <p style={{ color: 'var(--fg-1)', fontSize: 14.5, fontWeight: 500, marginBottom: 10, lineHeight: 1.4 }}>{p.tagline}</p>
          <p style={{ color: 'var(--fg-2)', fontSize: 13.5, lineHeight: 1.55, marginBottom: 18 }}>{p.desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18, paddingTop: 16, borderTop: '1px solid var(--border-subtle)', flex: 1 }}>
            {p.features.map(f => (
              <div key={f.t} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={f.icon} size={13} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg-1)', marginBottom: 2, lineHeight: 1.3 }}>{f.t}</div>
                  <div style={{ fontSize: 11, color: 'var(--fg-2)', lineHeight: 1.4 }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-2)', marginBottom: 8 }}>{t({fr:"Compatible avec",nl:"Compatibel met",en:"Compatible with",de:"Kompatibel mit"})}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {p.compatible.map(c => (
                <span key={c} style={{ fontSize: 11, padding: '4px 9px', background: 'var(--bg-sunken)', borderRadius: 999, color: 'var(--fg-1)', fontWeight: 500 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .kiosk-card { grid-template-columns: 1fr !important; min-height: 0 !important; }
            .kiosk-card > div:first-child { aspect-ratio: 4 / 5; border-right: 0 !important; border-bottom: 1px solid var(--border-subtle); }
          }
        `}</style>
      </div>
    );
  }

  // vertical (default)
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Photo */}
      <div style={{
        aspectRatio: '5 / 3',
        background: p.photoBg,
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        {p.photo ? (
          <img src={p.photo} alt={p.name} style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: p.photoFit,
            padding: p.photoFit === 'contain' ? 16 : 0,
          }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,0.05)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Icon name={p.icon || 'package'} size={32} />
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, textAlign: 'center', padding: '0 16px' }}>
              {p.photoPlaceholder || 'Photo à venir'}
            </div>
          </div>
        )}
        {/* Reference tag */}
        <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 10px', background: 'rgba(0,0,0,0.55)', color: '#fff', borderRadius: 999, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', backdropFilter: 'blur(8px)' }}>
          {p.ref}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="eyebrow muted" style={{ margin: 0, marginBottom: 10 }}>{p.category}</div>
        <h3 className="h3" style={{ marginBottom: 8, fontSize: 22 }}>{p.name}</h3>
        <p style={{ color: 'var(--fg-1)', fontSize: 15, fontWeight: 500, marginBottom: 12, lineHeight: 1.4 }}>{p.tagline}</p>
        <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>

        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20, paddingTop: 20, borderTop: '1px solid var(--border-subtle)', flex: 1 }}>
          {p.features.map(f => (
            <div key={f.t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={f.icon} size={14} />
              </div>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--fg-1)', marginBottom: 2 }}>{f.t}</div>
                <div style={{ fontSize: 11.5, color: 'var(--fg-2)', lineHeight: 1.4 }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Compatible */}
        <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-2)', marginBottom: 8 }}>{t({fr:"Compatible avec",nl:"Compatibel met",en:"Compatible with",de:"Kompatibel mit"})}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {p.compatible.map(c => (
              <span key={c} style={{ fontSize: 11, padding: '4px 10px', background: 'var(--bg-sunken)', borderRadius: 999, color: 'var(--fg-1)', fontWeight: 500 }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// Page
// =============================================================================
// Ecosystem hero — dynamic SVG visualization of the partner ecosystem
// =============================================================================
function EcosystemHero(props) {
  const bare = props && props.bare;
  const minimal = props && props.minimal;
  const nodes = [
    { id: 'sunmi',     label: 'Sunmi',     role: t({fr:'Hardware', nl:'Hardware', en:'Hardware', de:'Hardware'}), src: 'assets/partners/sunmi.webp',     angle: 270 },
    { id: 'viva',      label: 'Viva.com',  role: t({fr:'Paiement', nl:'Betaling', en:'Payment', de:'Zahlung'}),    src: 'assets/partners/viva.webp',      angle: 30  },
    { id: 'worldline', label: 'Worldline', role: t({fr:'Paiement', nl:'Betaling', en:'Payment', de:'Zahlung'}),    src: 'assets/partners/worldline.png', angle: 150 },
  ];
  const cx = 300, cy = 200;
  const r  = 138;

  const pos = (deg) => {
    const rad = (deg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return (
    <div className={'eco-hero' + (bare ? ' eco-hero--bare' : '')}>
      <svg viewBox="0 0 600 400" className="eco-svg" aria-hidden="true">
        <defs>
          <linearGradient id="ecoLine" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"  stopColor="rgba(217,119,87,0.55)" />
            <stop offset="50%" stopColor="rgba(217,119,87,0.7)" />
            <stop offset="100%" stopColor="rgba(217,119,87,0.55)" />
          </linearGradient>
          <radialGradient id="ecoVignette" cx="50%" cy="50%" r="55%">
            <stop offset="60%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
          </radialGradient>
        </defs>

        <g className="eco-grid" opacity="0.18">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={'gx' + i} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="rgba(255,255,255,0.08)" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={'gy' + i} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="rgba(255,255,255,0.08)" />
          ))}
        </g>

        <g className="eco-ring-rotate" style={{ transformOrigin: cx + 'px ' + cy + 'px' }}>
          <circle cx={cx} cy={cy} r={r + 28} fill="none" stroke="rgba(217,119,87,0.25)" strokeWidth="1" strokeDasharray="3 9" />
        </g>

        <circle cx={cx} cy={cy} r={r - 10} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {[0, 1, 2].map(i => (
          <circle
            key={'pulse' + i}
            cx={cx}
            cy={cy}
            r="48"
            fill="none"
            stroke="rgba(217,119,87,0.55)"
            strokeWidth="1.5"
            className="eco-pulse"
            style={{ animationDelay: (i * 1.4) + 's', transformOrigin: cx + 'px ' + cy + 'px' }}
          />
        ))}

        {nodes.map(n => {
          const p = pos(n.angle);
          return (
            <line
              key={'line-' + n.id}
              x1={cx} y1={cy} x2={p.x} y2={p.y}
              stroke="url(#ecoLine)"
              strokeWidth="1.8"
              strokeDasharray="5 10"
              className="eco-line-flow"
            />
          );
        })}

        <rect x="0" y="0" width="600" height="400" fill="url(#ecoVignette)" pointerEvents="none" className="eco-vignette" />
      </svg>

      <div className="eco-hub" aria-label="Imarra">
        <div className="eco-hub-inner">
          <img src="assets/imarra-logo.png" alt="Imarra" />
        </div>
        <div className="eco-hub-orbit" />
      </div>

      {nodes.map((n, idx) => {
        const p = pos(n.angle);
        const left = ((p.x / 600) * 100) + '%';
        const top  = ((p.y / 400) * 100) + '%';
        return (
          <div
            key={n.id}
            className={'eco-node eco-node-' + n.id}
            style={{ left, top, animationDelay: (idx * 0.4) + 's' }}
          >
            <div className="eco-node-bubble">
              <img src={n.src} alt={n.label} />
            </div>
            {!minimal && (
              <div className="eco-node-label">
                <span className="eco-node-role">{n.role}</span>
                <span className="eco-node-name">{n.label}</span>
              </div>
            )}
          </div>
        );
      })}

      {!minimal && (
        <div className="eco-status">
          <span className="eco-status-dot" />
          Écosystème connecté · en temps réel
        </div>
      )}

      <style>{`
        .eco-hero {
          position: relative;
          aspect-ratio: 3 / 2;
          border-radius: 20px;
          overflow: hidden;
          background: radial-gradient(circle at 50% 50%, #1f253b 0%, #0d111c 70%, #07091a 100%);
          box-shadow: var(--shadow-lg);
        }
        /* Bare variant — blends into a dark parent section, no card chrome */
        .eco-hero--bare {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          overflow: visible;
          aspect-ratio: auto;
          height: clamp(360px, 38vw, 480px);
          -webkit-mask-image: radial-gradient(ellipse 70% 75% at 50% 50%, #000 55%, transparent 100%);
                  mask-image: radial-gradient(ellipse 70% 75% at 50% 50%, #000 55%, transparent 100%);
        }
        .eco-hero--bare .eco-grid,
        .eco-hero--bare .eco-vignette { display: none; }
        .eco-hero--bare .eco-svg { background: transparent; }
        .eco-svg { position: absolute; inset: 0; width: 100%; height: 100%; }

        .eco-ring-rotate { animation: eco-rotate 38s linear infinite; }
        @keyframes eco-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .eco-pulse {
          animation: eco-pulse 4.2s cubic-bezier(.4,0,.2,1) infinite;
          transform-origin: 300px 200px;
        }
        @keyframes eco-pulse {
          0%   { r: 48; opacity: 0.55; }
          80%  { opacity: 0; }
          100% { r: 160; opacity: 0; }
        }

        .eco-line-flow { animation: eco-flow 2.4s linear infinite; }
        @keyframes eco-flow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -45; }
        }

        .eco-hub {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(60px, 9vw, 78px);
          height: clamp(60px, 9vw, 78px);
          display: flex; align-items: center; justify-content: center;
          z-index: 3;
        }
        .eco-hub-inner {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08),
            0 8px 22px rgba(0,0,0,0.35),
            0 0 32px rgba(217,119,87,0.45);
          display: flex; align-items: center; justify-content: center;
          padding: 8px;
          animation: eco-hub-glow 3.4s ease-in-out infinite;
        }
        .eco-hub-inner img { max-width: 80%; max-height: 60%; object-fit: contain; display: block; }
        @keyframes eco-hub-glow {
          0%,100% { box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 8px 22px rgba(0,0,0,0.35), 0 0 28px rgba(217,119,87,0.4); }
          50%     { box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 8px 22px rgba(0,0,0,0.35), 0 0 52px rgba(217,119,87,0.7); }
        }
        .eco-hub-orbit {
          position: absolute; inset: -25%;
          border: 1px dashed rgba(217,119,87,0.4);
          border-radius: 50%;
          animation: eco-rotate 22s linear infinite reverse;
        }

        .eco-node {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex; flex-direction: column; align-items: center;
          gap: 10px; z-index: 2;
          animation: eco-float 5s ease-in-out infinite;
        }
        @keyframes eco-float {
          0%,100% { transform: translate(-50%, -50%) translateY(0); }
          50%     { transform: translate(-50%, -50%) translateY(-6px); }
        }
        .eco-node-bubble {
          width: clamp(60px, 9vw, 78px);
          height: clamp(60px, 9vw, 78px);
          border-radius: 18px;
          background: rgba(255,255,255,0.97);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 8px 22px rgba(0,0,0,0.35), 0 0 28px rgba(217,119,87,0.16);
          display: flex; align-items: center; justify-content: center;
          padding: 12px;
          transition: transform 240ms;
        }
        .eco-node-bubble:hover { transform: scale(1.06); }
        .eco-node-bubble img { max-width: 100%; max-height: 100%; object-fit: contain; display: block; }
        .eco-node-label {
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; gap: 8px;
          font-size: 10.5px;
          color: #fff;
          white-space: nowrap;
        }
        .eco-node-role { color: var(--accent); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
        .eco-node-name { color: rgba(255,255,255,0.78); font-weight: 500; }
        .eco-node-name::before { content: '·'; margin-right: 6px; color: rgba(255,255,255,0.3); }

        .eco-status {
          position: absolute;
          left: 50%; bottom: 18px;
          transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 14px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.04em;
          z-index: 4;
        }
        .eco-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px rgba(52,211,153,0.6);
          animation: eco-blink 1.6s ease-in-out infinite;
        }
        @keyframes eco-blink {
          0%,100% { opacity: 1; }
          50%     { opacity: 0.4; }
        }

        @media (max-width: 700px) {
          .eco-node-label { font-size: 9.5px; padding: 4px 9px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .eco-ring-rotate, .eco-hub-orbit, .eco-line-flow, .eco-pulse, .eco-hub-inner, .eco-node, .eco-status-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

// =============================================================================
function CataloguePage() {
  return (
    <div className="page-fade">
      {/* Hero */}
      <section style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div className="container" data-grid="cat-hero">
          <div style={{ maxWidth: 1080 }}>
            <div className="eyebrow">{t({fr:"Catalogue Matériel · 2026",nl:"Hardwarecatalogus · 2026",en:"Hardware Catalogue · 2026",de:"Hardware-Katalog · 2026"})}</div>
            <h1 className="h-display" style={{ fontSize: 'clamp(40px, 4.8vw, 64px)', marginBottom: 24 }}>
              {t({
                fr:<>L'<span className="accent">ÉCOSYSTÈME</span> IMARRA POUR VOTRE COMMERCE.</>,
                nl:<>HET <span className="accent">ECOSYSTEEM</span> IMARRA VOOR UW HANDEL.</>,
                en:<>THE <span className="accent">ECOSYSTEM</span> IMARRA FOR YOUR BUSINESS.</>,
                de:<>DAS <span className="accent">ÖKOSYSTEM</span> IMARRA FÜR IHR GESCHÄFT.</>,
              })}
            </h1>
            <p className="lead" style={{ color: '#374151', marginBottom: 28, maxWidth: 760 }}>
              {t({
                fr:"Trois piliers, un même écosystème : caisse, borne self-service et paiement, certifiés, pré-paramétrés et livrés clé en main avec la solution Imarra. Installation rapide, accompagnée par nos équipes.",
                nl:"Drie pijlers, één ecosysteem: kassa, self-service kiosk en betaling — gecertificeerd, vooraf geconfigureerd en kant-en-klaar geleverd met Imarra. Snelle installatie, begeleid door onze teams.",
                en:"Three pillars, one ecosystem: POS, self-service kiosk and payment — certified, pre-configured and turnkey with Imarra. Fast install, supported by our teams.",
                de:"Drei Säulen, ein Ökosystem: Kasse, Self-Service-Kiosk und Zahlung — zertifiziert, vorkonfiguriert und schlüsselfertig mit Imarra. Schnelle Installation, betreut von unseren Teams.",
              })}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={openDemo} className="btn btn-primary btn-lg">
                {t({fr:"Réserver une démo",nl:"Demo boeken",en:"Book a demo",de:"Demo buchen"})} <Icon name="arrow" size={16} />
              </button>
              <a href="#/contact" className="btn btn-secondary btn-lg">{t({fr:"Demander un devis",nl:"Offerte aanvragen",en:"Request a quote",de:"Angebot anfordern"})}</a>
            </div>
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginTop: 32, fontSize: 13, color: 'var(--fg-2)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="check" size={16} style={{ color: 'var(--accent)' }} /> {t({fr:"15 références matériel",nl:"15 hardware-referenties",en:"15 hardware refs",de:"15 Hardware-Referenzen"})}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="check" size={16} style={{ color: 'var(--accent)' }} /> {t({fr:"3 licences logicielles",nl:"3 softwarelicenties",en:"3 software licences",de:"3 Softwarelizenzen"})}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="check" size={16} style={{ color: 'var(--accent)' }} /> {t({fr:"Tarif clair, transparent",nl:"Heldere, transparante tarieven",en:"Clear, transparent pricing",de:"Klare, transparente Preise"})}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor nav */}
      <section className="tight cat-anchor-nav" style={{ padding: '24px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: '#fff', position: 'sticky', top: 64, zIndex: 20 }}>
        <div className="container cat-anchor-inner" style={{ display: 'flex', gap: 8, overflowX: 'auto', alignItems: 'center', WebkitOverflowScrolling: 'touch' }}>
          <span className="cat-anchor-label" style={{ fontSize: 12, color: 'var(--fg-2)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: 12, flexShrink: 0 }}>{t({fr:"Catalogue",nl:"Catalogus",en:"Catalogue",de:"Katalog"})}</span>
          {[
            ['licences', t({fr:'Licences logicielles',nl:'Softwarelicenties',en:'Software licences',de:'Softwarelizenzen'}), 'sliders'],
            ['caisses', t({fr:'Caisses fixes',nl:'Vaste kassa\'s',en:'Fixed POS',de:'Stationäre Kassen'}), 'monitor'],
            ['paiement', t({fr:'Paiement & Mobilité',nl:'Betaling & Mobiliteit',en:'Payment & Mobility',de:'Zahlung & Mobilität'}), 'smartphone'],
            ['bornes', t({fr:'Bornes self-service',nl:'Self-service kiosken',en:'Self-service kiosks',de:'Self-Service-Kioske'}), 'kiosk'],
            ['peripheriques', t({fr:'Périphériques',nl:'Randapparatuur',en:'Peripherals',de:'Peripheriegeräte'}), 'layers'],
          ].map(([id, l, icon]) => (
            <a key={id} href={`#cat-${id}`} onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(`cat-${id}`);
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 140;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 500,
              background: 'var(--bg-sunken)', color: 'var(--fg-1)',
              border: '1px solid transparent',
              transition: 'background 120ms',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-tint)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-sunken)'; e.currentTarget.style.color = 'var(--fg-1)'; }}>
              <Icon name={icon} size={14} /> {l}
            </a>
          ))}
        </div>
      </section>

      {/* Licences */}
      <section id="cat-licences" style={{ scrollMarginTop: 140 }}>
        <div className="container">
          <CatalogSectionHeader eyebrow={t({fr:"Logiciel Imarra",nl:"Imarra-software",en:"Imarra software",de:"Imarra-Software"})} title={t({fr:"TROIS LICENCES. UN ÉCOSYSTÈME.",nl:"DRIE LICENTIES. ÉÉN ECOSYSTEEM.",en:"THREE LICENCES. ONE ECOSYSTEM.",de:"DREI LIZENZEN. EIN ÖKOSYSTEM."})} desc={t({fr:"Une licence pour la caisse, une pour les bornes, une pour la mobilité. Le même catalogue, les mêmes paiements, la même console.",nl:"Eén licentie voor de kassa, één voor de kiosken, één voor de mobiliteit. Dezelfde catalogus, dezelfde betalingen, dezelfde console.",en:"One licence for POS, one for kiosks, one for mobile. Same catalogue, same payments, same console.",de:"Eine Lizenz für die Kasse, eine für die Kioske, eine für die Mobilität. Derselbe Katalog, dieselben Zahlungen, dieselbe Konsole."})} />
          <LicensesGrid />
        </div>
      </section>

      {/* Each category */}
      {Object.entries(getCatalogue()).map(([id, cat]) => {
        const isHorizontal = id === 'bornes' || id === 'caisses' || id === 'paiement';
        const isFullWidth = id === 'caisses' || id === 'paiement';
        return (
        <section key={id} id={`cat-${id}`} className={id === 'paiement' || id === 'peripheriques' ? 'wash' : ''} style={{ scrollMarginTop: 140 }}>
          <div className="container">
            <CatalogSectionHeader eyebrow={cat.eyebrow} title={cat.title.toUpperCase() + '.'} desc={cat.desc} icon={cat.icon} />
            <div className={isFullWidth ? 'grid' : 'grid grid-2'} style={{ gap: 24, alignItems: 'stretch', gridTemplateColumns: isFullWidth ? '1fr' : undefined }}>
              {cat.items.map(item => (
                <ProductCard
                  key={item.ref}
                  p={{ ...item, icon: cat.icon }}
                  layout={isHorizontal ? 'horizontal' : 'vertical'}
                />
              ))}
            </div>
          </div>
        </section>
        );
      })}

      <CTABand title={t({fr:'VOTRE CONFIG{ }EN UNE DÉMO.', nl:'UW CONFIG{ }IN ÉÉN DEMO.', en:'YOUR SETUP{ }IN ONE DEMO.', de:'IHRE KONFIG{ }IN EINER DEMO.'})} accent=" " subtitle={t({fr:'20 minutes pour configurer votre écosystème Imarra. Notre conseiller chiffre votre devis sur place.', nl:'20 minuten om uw Imarra-ecosysteem te configureren. Onze adviseur stelt uw offerte ter plaatse op.', en:'20 minutes to configure your Imarra ecosystem. Our advisor quotes you on the spot.', de:'20 Minuten zur Konfiguration Ihres Imarra-Ökosystems. Unser Berater erstellt Ihr Angebot vor Ort.'})} />
      <style>{`
        @media (max-width: 900px) {
          [data-grid="cat-hero"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .cat-anchor-nav { padding: 16px 0 !important; top: 60px !important; }
          .cat-anchor-label { display: none; }
          .cat-anchor-inner { padding: 0 16px !important; }
        }
        .cat-anchor-inner::-webkit-scrollbar { display: none; }
        .cat-anchor-inner { scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function CatalogSectionHeader({ eyebrow, title, accent, desc, icon }) {
  const accentToken = accent || ' ';
  const parts = title.split(`{${accentToken}}`);
  return (
    <div style={{ marginBottom: 48, maxWidth: 820 }}>
      {icon && (
        <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--imarra-black)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Icon name={icon} size={24} />
        </div>
      )}
      <div className="eyebrow muted">{eyebrow}</div>
      <h2 className="h2" style={{ marginBottom: 14 }}>
        {parts.length > 1 ? <>{parts[0]}<span className="accent">{accentToken}</span>{parts[1]}</> : title}
      </h2>
      {desc && <p style={{ color: 'var(--fg-2)', lineHeight: 1.7, maxWidth: 720, margin: 0 }}>{desc}</p>}
    </div>
  );
}

function LicensesGrid() {
  const licenses = [
    { id: 'pos', n: '01', name: 'Imarra POS',
      sub: t({fr:'Caisse fixe · Comptoir', nl:'Vaste kassa · Toonbank', en:'Fixed POS · Counter', de:'Stationäre Kasse · Tresen'}),
      hardware: t({fr:'Pour T3 PRO · Tiroir · Imprimantes', nl:'Voor T3 PRO · Lade · Printers', en:'For T3 PRO · Drawer · Printers', de:'Für T3 PRO · Schublade · Drucker'}),
      desc: t({fr:'Le cœur de la maison. Pilote votre caisse, vos stocks et votre comptoir.', nl:'Het hart van het huis. Stuurt uw kassa, voorraad en toonbank.', en:'The heart of the house. Drives your POS, stock and counter.', de:'Das Herz des Hauses. Steuert Ihre Kasse, Ihren Bestand und Ihren Tresen.'}),
      points: [
        t({fr:'Encaissement CB, espèces, tickets resto, avoirs', nl:'Afrekenen kaart, cash, maaltijdcheques, tegoedbonnen', en:'Card, cash, meal vouchers, credit notes', de:'Karte, Bargeld, Essensgutscheine, Gutschriften'}),
        t({fr:'Gestion des tables : plan de salle, couverts, transferts', nl:'Tafelbeheer: zaalplan, couverts, transfers', en:'Table management: floor plan, covers, transfers', de:'Tischverwaltung: Saalplan, Gedecke, Transfers'}),
        t({fr:'Catalogue illimité, variantes, menus, options', nl:'Onbeperkte catalogus, varianten, menu\'s, opties', en:'Unlimited catalogue, variants, menus, options', de:'Unbegrenzter Katalog, Varianten, Menüs, Optionen'}),
        t({fr:'Stocks temps réel, alertes, multi-sites', nl:'Realtime voorraad, alerts, multi-vestiging', en:'Real-time stock, alerts, multi-site', de:'Echtzeit-Bestand, Warnungen, Multi-Standort'}),
        t({fr:'Rapports Z & X, exports comptables, NF525', nl:'Z- & X-rapporten, boekhoudkundige export, NF525', en:'Z & X reports, accounting exports, NF525', de:'Z- und X-Berichte, Buchhaltungsexporte, NF525'}),
        t({fr:'Fidélité, comptes clients, cartes cadeaux', nl:'Loyaliteit, klantaccounts, cadeaubonnen', en:'Loyalty, customer accounts, gift cards', de:'Treue, Kundenkonten, Geschenkkarten'}),
        t({fr:'Promotions, remises, happy hours, codes promo', nl:'Promoties, kortingen, happy hours, promocodes', en:'Promotions, discounts, happy hours, promo codes', de:'Aktionen, Rabatte, Happy Hours, Promo-Codes'}),
      ],
      price: '59,86', priceUnit: t({fr:'€ / mois',nl:'€ / maand',en:'€ / month',de:'€ / Monat'}),
      tags: [t({fr:'Multi-postes', nl:'Multi-werkplek', en:'Multi-station', de:'Multi-Station'}), 'Cloud'],
      icon: 'assets/license-icons/imarra-pos.png',
    },
    { id: 'kiosk', n: '02', name: 'Imarra Kiosk',
      sub: t({fr:'Borne · Self-order', nl:'Kiosk · Self-order', en:'Kiosk · Self-order', de:'Kiosk · Self-Order'}),
      hardware: t({fr:'Pour borne Sunmi K2 (1 borne)', nl:'Voor Sunmi K2 kiosk (1 kiosk)', en:'For Sunmi K2 kiosk (1 kiosk)', de:'Für Sunmi K2 Kiosk (1 Kiosk)'}),
      desc: t({fr:'Le serveur qui ne dort jamais. Vos clients commandent et paient en autonomie.', nl:'De ober die nooit slaapt. Uw klanten bestellen en betalen zelfstandig.', en:'The waiter who never sleeps. Your customers order and pay on their own.', de:'Der Kellner, der nie schläft. Ihre Kunden bestellen und bezahlen selbstständig.'}),
      points: [
        t({fr:'Parcours self-order en 3 écrans, optimisé conversion', nl:'Self-order-parcours in 3 schermen, conversie-geoptimaliseerd', en:'3-screen self-order flow, conversion-optimised', de:'Self-Order-Ablauf in 3 Bildschirmen, conversion-optimiert'}),
        t({fr:'Carte synchronisée avec la caisse, mise à jour live', nl:'Menu gesynchroniseerd met kassa, live update', en:'Menu synced with POS, live update', de:'Karte synchronisiert mit Kasse, Live-Update'}),
        t({fr:'Multilingue : 6 langues, drapeau d\'accueil', nl:'Meertalig: 6 talen, welkomstvlag', en:'Multilingual: 6 languages, welcome flag', de:'Mehrsprachig: 6 Sprachen, Willkommensflagge'}),
        t({fr:'Personnalisation : logo, couleurs, photos', nl:'Personalisatie: logo, kleuren, foto\'s', en:'Customisation: logo, colours, photos', de:'Anpassung: Logo, Farben, Fotos'}),
        t({fr:'Paiement intégré CB & QR via Viva Wallet', nl:'Geïntegreerde betaling kaart & QR via Viva Wallet', en:'Built-in card & QR payment via Viva Wallet', de:'Integrierte Karten- & QR-Zahlung via Viva Wallet'}),
      ],
      price: '49,86', priceUnit: t({fr:'€ / mois',nl:'€ / maand',en:'€ / month',de:'€ / Monat'}),
      tags: [t({fr:'1 borne', nl:'1 kiosk', en:'1 kiosk', de:'1 Kiosk'}), 'Self-order'],
      icon: 'assets/license-icons/imarra-kiosk.png',
    },
    { id: 'mobile', n: '03', name: 'Imarra Mobile',
      sub: t({fr:'Caisse de poche · Salle & mobilité', nl:'Zakkassa · Zaal & mobiliteit', en:'Pocket POS · Floor & mobility', de:'Taschenkasse · Saal & Mobilität'}),
      hardware: t({fr:'Pour Sunmi P3 · Smartphone Android', nl:'Voor Sunmi P3 · Android-smartphone', en:'For Sunmi P3 · Android smartphone', de:'Für Sunmi P3 · Android-Smartphone'}),
      desc: t({fr:'La caisse dans la poche. Prise de commande en salle, vente en mobilité, encaissement à table.', nl:'De kassa in uw zak. Bestelopname in de zaal, verkoop mobiel, afrekenen aan tafel.', en:'The POS in your pocket. Order-taking on the floor, mobile sales, table payment.', de:'Die Kasse in der Tasche. Bestellaufnahme im Saal, mobiler Verkauf, Tischzahlung.'}),
      points: [
        t({fr:'Prise de commande à table, envoi cuisine instantané', nl:'Bestelopname aan tafel, onmiddellijke verzending naar keuken', en:'Order-taking at the table, instant kitchen dispatch', de:'Bestellaufnahme am Tisch, sofortiger Küchenversand'}),
        t({fr:'Encaissement CB sans contact, ticket dématérialisé', nl:'Contactloos afrekenen, digitaal ticket', en:'Contactless checkout, paperless ticket', de:'Kontaktlose Bezahlung, papierloser Beleg'}),
        t({fr:'Vente en mobilité : marchés, livraison, événements', nl:'Verkoop in mobiliteit: markten, levering, events', en:'Mobile sales: markets, delivery, events', de:'Mobiler Verkauf: Märkte, Lieferung, Events'}),
        t({fr:'Carte & menus : photos, options, allergènes — à jour', nl:'Menu & kaarten: foto\'s, opties, allergenen — up-to-date', en:'Menu & cards: photos, options, allergens — always up to date', de:'Karte & Menüs: Fotos, Optionen, Allergene — stets aktuell'}),
        t({fr:'Synchronisation caisse + bornes en temps réel', nl:'Realtime synchronisatie kassa + kiosken', en:'Real-time POS + kiosk sync', de:'Echtzeit-Synchronisierung Kasse + Kioske'}),
      ],
      price: '15,89', priceUnit: t({fr:'€ / mois',nl:'€ / maand',en:'€ / month',de:'€ / Monat'}),
      tags: [t({fr:'Multi-terminaux', nl:'Multi-terminal', en:'Multi-terminal', de:'Multi-Terminal'}), t({fr:'Catalogue live', nl:'Live catalogus', en:'Live catalogue', de:'Live-Katalog'})],
      icon: 'assets/license-icons/imarra-mobile.png',
    },
  ];
  return (
    <div className="grid grid-3" style={{ alignItems: 'stretch' }}>
      {licenses.map(l => (
        <div key={l.id} className="card card-hover" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 28, background: 'var(--imarra-black)', color: '#fff', position: 'relative', display: 'flex', gap: 18, alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 56, fontWeight: 700, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em', lineHeight: 1 }}>{l.n}</div>
            <img src={l.icon} alt={l.name} style={{ width: 72, height: 72, borderRadius: 14, flexShrink: 0, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }} />
            <div style={{ flex: 1 }}>
              <h3 className="h3" style={{ color: '#fff', marginBottom: 6, fontSize: 24, letterSpacing: '-0.01em' }}>{l.name}</h3>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{l.sub}</div>
            </div>
          </div>
          <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 11, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, marginBottom: 16 }}>{l.hardware}</div>
            <p style={{ color: 'var(--fg-1)', fontSize: 15, fontWeight: 500, lineHeight: 1.45, marginBottom: 20 }}>{l.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24, flex: 1 }}>
              {l.points.map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, lineHeight: 1.5 }}>
                  <Icon name="check" size={14} style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 20, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.025em', lineHeight: 1 }}>{l.price}</span>
                  <span style={{ fontSize: 14, color: 'var(--fg-2)', fontWeight: 500 }}>{l.priceUnit}</span>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {l.tags.map(t => <span key={t} style={{ fontSize: 11, padding: '3px 8px', background: 'var(--bg-sunken)', borderRadius: 999, color: 'var(--fg-1)', fontWeight: 500 }}>{t}</span>)}
                </div>
              </div>
              <a href={`#/produits/${l.id}`} className="btn btn-secondary btn-sm" style={{ padding: '8px 14px' }}>
                {t({fr:"Détails",nl:"Details",en:"Details",de:"Details"})} <Icon name="arrow" size={12} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { CataloguePage, EcosystemHero });
