# ChantirPro - Workflow de Déploiement Pro 🚀

## Architecture Git & Déploiement

### Branches
- **`main`** : PRODUCTION (protection activée)
- **`develop`** : PRÉPROD (auto-deploy sur Netlify)
- **`feature/*`** : Développements isolés

### Workflow de Développement

1. **Développement Local**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/ma-nouvelle-fonctionnalite
   # Développer...
   git add .
   git commit -m "feat: description claire"
   git push origin feature/ma-nouvelle-fonctionnalite
   ```

2. **Test en Préprod**
   - Créer une Pull Request vers `develop`
   - Tests automatiques lancés
   - Merge = déploiement auto sur préprod
   - URL préprod : `https://chantipro-preprod.netlify.app`

3. **Mise en Production**
   ```bash
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
   ```
   - Validation manuelle requise (environment protection)
   - URL prod : `https://chantipro.netlify.app`

## Configuration Netlify

### 1. Créer 2 sites Netlify

#### Site PRÉPROD
1. Aller sur [app.netlify.com](https://app.netlify.com)
2. "Add new site" > "Import an existing project"
3. Connecter GitHub > Sélectionner `svouidibio/chantipro`
4. Configuration :
   - Branch to deploy : `develop`
   - Build command : `npm run build`
   - Publish directory : `dist`
5. Renommer le site : `chantipro-preprod`

#### Site PRODUCTION
1. Répéter les étapes ci-dessus
2. Configuration :
   - Branch to deploy : `main`
   - Build command : `npm run build`
   - Publish directory : `dist`
3. Renommer le site : `chantipro`

### 2. Variables d'Environnement

#### GitHub Secrets (Settings > Secrets > Actions)
- `NETLIFY_AUTH_TOKEN` : Token personnel Netlify
- `NETLIFY_PREPROD_SITE_ID` : ID du site préprod
- `NETLIFY_PROD_SITE_ID` : ID du site production

#### Variables Netlify (par site)
**Préprod** :
```
NODE_ENV=development
VITE_API_URL=https://api-preprod.chantipro.fr
VITE_ENVIRONMENT=preprod
```

**Production** :
```
NODE_ENV=production
VITE_API_URL=https://api.chantipro.fr
VITE_ENVIRONMENT=production
```

## Protection des Branches

### Branch `main` (Production)
1. Settings > Branches > Add rule
2. Branch name pattern : `main`
3. Cocher :
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

### Branch `develop` (Préprod)
1. Settings > Branches > Add rule
2. Branch name pattern : `develop`
3. Cocher :
   - ✅ Require status checks to pass before merging

## Commandes Utiles

```bash
# Voir l'état des branches
git branch -a

# Synchroniser develop avec main
git checkout develop
git merge main
git push origin develop

# Hotfix production
git checkout -b hotfix/correction-urgente main
# Corriger...
git push origin hotfix/correction-urgente
# PR vers main ET develop

# Nettoyer les branches locales
git branch -d feature/ancienne-feature
git remote prune origin
```

## Monitoring & Alertes

### Netlify
- Analytics activées sur les 2 sites
- Notifications email pour échecs de build
- Webhook Slack (optionnel)

### GitHub Actions
- Status checks obligatoires
- Notifications sur PR

## Best Practices Alex Rodriguez 💪

1. **JAMAIS de push direct sur `main`**
2. **Tester TOUT en préprod avant prod**
3. **Commits atomiques avec messages clairs**
4. **Review de code obligatoire pour prod**
5. **Tags de version sur chaque release prod**

---

*"Chez ISS, on a perdu 3M€ à cause d'un déploiement foireux. Avec ce workflow, c'est IMPOSSIBLE !"* - Alex