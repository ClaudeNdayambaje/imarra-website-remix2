# 📧 Configuration des emails — site Imarra

Les formulaires du site (modale "Réserver une démo" + page Contact) envoient
les emails via **SMTP Hostinger**, en utilisant la boîte `contact@imarra.be`.

## Architecture

```
[Formulaire site]
      ↓ POST /.netlify/functions/send-mail
[Netlify Function (Node.js + nodemailer)]
      ↓ SMTP (smtp.hostinger.com:465)
[Hostinger Mail]
  ├─→ contact@imarra.be     (notification interne, ou support@imarra.io si "Question technique")
  └─→ email du client       (accusé de réception personnalisé)
```

Code : `netlify/functions/send-mail.js`. Dépendance : `nodemailer` (déclarée
dans `package.json`).

## Variables d'environnement (à configurer sur Netlify)

| Nom               | Valeur                            | Obligatoire | Défaut si non défini       |
|-------------------|-----------------------------------|-------------|----------------------------|
| `SMTP_PASS`       | mot de passe de `contact@imarra.be` | ✅          | —                          |
| `SMTP_USER`       | `contact@imarra.be`                 | recommandé  | `contact@imarra.be`        |
| `SMTP_HOST`       | `smtp.hostinger.com`                | non         | `smtp.hostinger.com`       |
| `SMTP_PORT`       | `465`                               | non         | `465` (SSL)                |
| `MAIL_FROM`       | `Imarra <contact@imarra.be>`        | non         | `Imarra <${SMTP_USER}>`    |
| `MAIL_TO`         | `contact@imarra.be`                 | non         | `contact@imarra.be`        |
| `MAIL_TO_SUPPORT` | `support@imarra.io`                 | non         | `support@imarra.io`        |

> **Seul `SMTP_PASS` est strictement obligatoire.** Tout le reste a un défaut sensé.

## Étapes d'activation

### 1. Récupérer le mot de passe de `contact@imarra.be`

- Si vous le connaissez déjà → parfait, gardez-le sous la main.
- Sinon : Hostinger hPanel → **Emails** → cliquer sur `contact@imarra.be` →
  **Change password** → définir un nouveau mot de passe fort.

### 2. Déployer sur Netlify

1. https://app.netlify.com → **Add new site** → **Import an existing project**
2. Connecter GitHub → choisir `ClaudeNdayambaje/imarra-website-remix2`
3. Build settings (déjà dans `netlify.toml`) :
   - Publish directory : `.`
   - Functions directory : `netlify/functions`
4. **AVANT de cliquer Deploy** → **Site settings → Environment variables** →
   ajouter au minimum :
   - `SMTP_PASS` = mot de passe de `contact@imarra.be`
5. Lancer le deploy.

### 3. Tester

Sur l'URL Netlify temporaire (ex: `imarra-pos.netlify.app`) :
- Cliquer "Réserver une démo" → remplir avec **votre propre email** → envoyer.
- Vérifier :
  - `contact@imarra.be` reçoit la notif interne (sujet `[Imarra · DÉMO] ...`)
  - Votre email reçoit l'accusé de réception
- Page `/contact` → tester aussi avec "Question technique" → la notif doit aller à `support@imarra.io`.

## Sécurité

- Mot de passe SMTP **côté serveur Netlify uniquement** (jamais exposé au navigateur).
- **Honeypot** anti-spam (champ caché `website`) sur les deux formulaires.
- **Rate limit** : 5 envois max / IP / minute (en mémoire de l'instance).
- **Validation** : email valide + nom + entreprise obligatoires.

## Coûts

- **Hostinger** : déjà inclus dans votre offre mail (pas de surcoût).
- **Netlify** : free tier inclut 125 000 invocations de functions / mois.

## Debug

- Logs des envois sortants : Hostinger hPanel → **Emails → Email Logs**.
- Logs de la fonction (erreurs SMTP, etc.) : Netlify Dashboard → **Site → Functions → send-mail**.
- En cas d'erreur côté client, un message rouge s'affiche sous le bouton "Envoyer".

## Migration future vers un service dédié (Resend / SendGrid / ...)

Si un jour le volume dépasse les capacités Hostinger ou que vous voulez un
dashboard d'envois pro :
1. Créer un compte chez le service.
2. Vérifier le domaine `imarra.be` (DNS).
3. Remplacer la partie `nodemailer` dans `send-mail.js` par l'appel à l'API du service.
4. Changer les variables d'env Netlify.

Le code des templates et la logique de routage restent identiques.
