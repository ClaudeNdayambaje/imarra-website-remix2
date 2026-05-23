# 📧 Configuration des emails — site Imarra

Ce document explique comment fonctionne l'envoi de mails depuis les formulaires
du site (modale "Réserver une démo" + page Contact) et **ce que vous devez
faire vous-même** pour activer le système.

---

## Architecture

```
[Formulaire site]
      ↓ POST /.netlify/functions/send-mail
[Netlify Function (Node.js)]
      ↓ Resend API (clé secrète)
[Resend]
  ├─→ contact@imarra.be     (notification interne, ou support@imarra.io si "Question technique")
  └─→ email du client       (accusé de réception personnalisé)
```

Code de la fonction : `netlify/functions/send-mail.js`.

## Variables d'environnement requises (à configurer sur Netlify)

| Nom               | Valeur                                  | Obligatoire |
|-------------------|-----------------------------------------|-------------|
| `RESEND_API_KEY`  | clé API Resend (commence par `re_...`)  | ✅ |
| `MAIL_FROM`       | `Imarra <contact@imarra.be>`            | recommandé  |
| `MAIL_TO`         | `contact@imarra.be`                     | recommandé  |
| `MAIL_TO_SUPPORT` | `support@imarra.io`                     | recommandé  |

Si les 3 dernières ne sont pas définies, les valeurs par défaut du code seront utilisées.

---

## Étape 1 — Créer un compte Resend (~5 min)

1. Aller sur https://resend.com → **Sign up**.
2. Confirmer l'email.

## Étape 2 — Vérifier le domaine `imarra.be` (~10 min + propagation DNS)

1. Dashboard Resend → **Domains** → **Add Domain** → entrer `imarra.be`.
2. Resend affiche **plusieurs enregistrements DNS** (TXT pour SPF, CNAME pour DKIM, TXT pour DMARC).
3. Aller chez votre registrar (OVH / Gandi / Cloudflare / etc.) et **ajouter ces enregistrements**
   exactement tels qu'affichés par Resend.
4. Revenir sur Resend, cliquer **Verify**. Si rouge, attendre 10-30 min puis re-cliquer.
5. Tous verts ✅ → vous pouvez envoyer depuis n'importe quelle adresse `@imarra.be`.

> ⚠️ Tant que le domaine n'est pas vérifié, les mails seront refusés par Resend.

## Étape 3 — Créer une clé API Resend

1. Dashboard Resend → **API Keys** → **Create API Key**.
2. Nom : `imarra-website`. Permission : **Sending access**.
3. **Copier la clé** (`re_...`). Elle ne sera plus jamais affichée.

## Étape 4 — Déployer sur Netlify

1. https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Connecter GitHub → choisir `ClaudeNdayambaje/imarra-website-remix2`.
3. Les paramètres sont déjà dans `netlify.toml` (publish = `.`, functions = `netlify/functions`).
4. **AVANT de lancer le deploy** : aller dans **Site settings → Environment variables** et
   ajouter les 4 variables listées plus haut.
5. Lancer le deploy.

## Étape 5 — Tester

Sur l'URL Netlify (ex: `imarra-pos.netlify.app`) :
- Cliquer "Réserver une démo" → remplir avec **votre propre email** → envoyer.
- Vérifier que :
  - `contact@imarra.be` reçoit la notif interne (sujet `[Imarra · DÉMO] ...`).
  - Votre email reçoit l'accusé de réception.
- Idem pour le formulaire `/contact` (tester aussi "Question technique" → doit aller à `support@imarra.io`).

---

## Sécurité

- La clé API Resend reste **côté serveur Netlify** (jamais exposée au navigateur).
- **Honeypot** anti-spam (champ caché `website`) sur les deux formulaires.
- **Rate limit** : 5 envois max par IP par minute (côté fonction).
- **Validation** : email valide + nom + entreprise obligatoires.

## Coûts

- **Resend free** : 3 000 mails / mois (et 100 / jour). Largement suffisant.
- **Netlify** : free tier inclut 125k invocations de functions / mois.

## Debug

- Logs des envois : **Resend Dashboard → Emails** (chaque envoi listé avec statut).
- Logs de la fonction : **Netlify Dashboard → Site → Functions → send-mail**.
- En cas d'erreur côté client, un message rouge s'affiche sous le bouton "Envoyer".
