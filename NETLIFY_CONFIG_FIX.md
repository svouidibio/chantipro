# ⚠️ CONFIGURATION NETLIFY CRITIQUE

## ERREUR COMMUNE : Publish Directory

**PROBLÈME IDENTIFIÉ :**
- L'interface Netlify a `dist` comme publish directory
- Next.js avec le plugin Netlify ne génère PAS de dossier `dist`
- Cette config UI OVERRIDE le netlify.toml

## SOLUTION IMMÉDIATE

### 1. Accéder aux paramètres Netlify
1. Connectez-vous à Netlify
2. Sélectionnez le site concerné (preprod ou prod)
3. Allez dans "Site configuration"
4. Puis "Build & deploy" → "Continuous deployment"

### 2. Modifier le Publish Directory
Dans "Build settings", modifiez :
- **DE :** `dist`
- **VERS :** `.` (point seul) ou laissez VIDE

### 3. Relancer le build
- Cliquez sur "Clear cache and retry deploy"

## CONFIGURATION CORRECTE

### Pour Next.js avec @netlify/plugin-nextjs :
- **Build command :** `npm run build`
- **Publish directory :** `.` ou vide
- **Functions directory :** `netlify/functions`

### Ne JAMAIS mettre :
- ❌ `dist` (n'existe pas avec Next.js)
- ❌ `out` (seulement pour export statique)
- ❌ `.next` (géré automatiquement par le plugin)

## VÉRIFICATION

Le plugin Netlify pour Next.js gère automatiquement :
- La publication des fichiers
- Les Edge Functions
- Les API Routes
- L'optimisation des assets

## SITES À VÉRIFIER

- [ ] Site PREPROD : https://app.netlify.com/sites/[SITE_ID_PREPROD]/configuration/deploys
- [ ] Site PROD : https://app.netlify.com/sites/[SITE_ID_PROD]/configuration/deploys

## CONTACT

En cas de doute, le plugin @netlify/plugin-nextjs doit TOUJOURS gérer la publication automatiquement.

---
*Documentation créée suite à l'erreur de build du 16/06/2025*