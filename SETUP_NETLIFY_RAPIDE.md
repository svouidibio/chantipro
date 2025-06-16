# 🚀 GUIDE SETUP RAPIDE NETLIFY NEXT.JS - 10 MINUTES MAX

## 🔴 IMPORTANT : NEXT.JS POUR LE SEO

**POURQUOI NEXT.JS ?**
- **SSG (Static Site Generation)** = Pages HTML pré-générées = Google adore
- **SEO optimisé** = Metadata, sitemap, robots.txt automatiques
- **Performance maximale** = Score Lighthouse 100/100
- **0€ de serveur** = Export statique sur Netlify

## ÉTAPE 1 : CRÉER LES SITES NETLIFY (3 min)

### Site PRÉPROD
1. Aller sur [https://app.netlify.com](https://app.netlify.com)
2. Cliquer "Add new site" > "Import an existing project"
3. Sélectionner "GitHub"
4. Chercher et sélectionner `svouidibio/chantipro`
5. Configuration :
   - **Branch to deploy**: `develop`
   - **Build command**: `npm run build && npm run export`
   - **Publish directory**: `out`
6. Cliquer "Deploy site"
7. Une fois créé, aller dans "Site configuration" > "Site details"
8. Changer le nom en : `chantipro-preprod`
9. **NOTER LE SITE ID** (format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

### Site PRODUCTION
1. Répéter les étapes 1-6 mais avec :
   - **Branch to deploy**: `main`
2. Changer le nom en : `chantipro`
3. **NOTER LE SITE ID**

## ÉTAPE 2 : CRÉER TOKEN NETLIFY (1 min)
1. Aller sur [https://app.netlify.com/user/applications#personal-access-tokens](https://app.netlify.com/user/applications#personal-access-tokens)
2. Cliquer "New access token"
3. Description : `GitHub Actions Deploy`
4. **COPIER LE TOKEN** (ne sera plus visible après)

## ÉTAPE 3 : CONFIGURER GITHUB SECRETS (2 min)
1. Aller sur https://github.com/svouidibio/chantipro/settings/secrets/actions
2. Cliquer "New repository secret" pour chaque :

**Secret 1:**
- Name: `NETLIFY_AUTH_TOKEN`
- Value: [Le token créé à l'étape 2]

**Secret 2:**
- Name: `NETLIFY_PREPROD_SITE_ID`
- Value: [Site ID du site preprod]

**Secret 3:**
- Name: `NETLIFY_PROD_SITE_ID`
- Value: [Site ID du site production]

## ÉTAPE 4 : VARIABLES D'ENVIRONNEMENT NETLIFY (2 min)

### Sur le site PRÉPROD
1. Aller dans "Site configuration" > "Environment variables"
2. Ajouter :
   - `NODE_ENV` = `development`
   - `NEXT_PUBLIC_ENVIRONMENT` = `preprod`
   - `NEXT_PUBLIC_API_URL` = `https://api-preprod.chantipro.fr`

### Sur le site PRODUCTION
1. Même chose avec :
   - `NODE_ENV` = `production`
   - `NEXT_PUBLIC_ENVIRONMENT` = `production`
   - `NEXT_PUBLIC_API_URL` = `https://api.chantipro.fr`

## ÉTAPE 5 : PROTÉGER LES BRANCHES (2 min)

### Branch MAIN (Production)
1. Aller sur https://github.com/svouidibio/chantipro/settings/branches
2. Cliquer "Add rule"
3. Branch name pattern : `main`
4. Cocher :
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings
5. Cliquer "Create"

### Branch DEVELOP (Préprod)
1. "Add rule" à nouveau
2. Branch name pattern : `develop`
3. Cocher :
   - ✅ Require status checks to pass before merging
4. Cliquer "Create"

## VÉRIFICATION FINALE

### Test Préprod
```bash
git checkout develop
git pull
echo "// Test deploy preprod" >> app/page.tsx
git add .
git commit -m "test: Deploy preprod"
git push origin develop
```
→ Vérifier sur https://chantipro-preprod.netlify.app

### Test Production
```bash
git checkout main
git merge develop
git push origin main
```
→ Vérifier sur https://chantipro.netlify.app

## 🎆 BONUS SEO NEXT.JS

### Vérifications SEO
1. Tester sur [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. Vérifier le sitemap : `/sitemap.xml`
3. Tester les meta tags : View Source de la page

### Optimisations incluses
- ✅ Meta tags complets (title, description, keywords)
- ✅ Open Graph pour réseaux sociaux
- ✅ Sitemap automatique
- ✅ Robots.txt configuré
- ✅ Headers de cache optimisés
- ✅ Images optimisées Next.js

## 🎯 RACCOURCIS COPIER/COLLER

### Variables Préprod
```
NODE_ENV=development
NEXT_PUBLIC_ENVIRONMENT=preprod
NEXT_PUBLIC_API_URL=https://api-preprod.chantipro.fr
```

### Variables Production
```
NODE_ENV=production
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_API_URL=https://api.chantipro.fr
```

### Build Commands
```
npm run build && npm run export
```

### Publish Directory
```
out
```

---

**🔥 AVEC NEXT.JS SSG, ON VA ÊTRE #1 SUR GOOGLE !**

*"Chez ISS, on a perdu 3 ans de SEO avec une SPA. Avec Next.js SSG, impossible !"* - Alex