# Guide de Déploiement ChantirPro

## 🚀 Déploiement Automatique

Le site se déploie automatiquement sur Netlify à chaque push sur la branche `main`.

## 📋 Prérequis

### 1. Variables d'environnement

Configurer les variables suivantes dans Netlify :

```env
# Supabase (obligatoire)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Email (optionnel)
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=contact@chantipro.fr

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Business
NEXT_PUBLIC_BUSINESS_PHONE=+33123456789
NEXT_PUBLIC_BUSINESS_EMAIL=contact@chantipro.fr
```

### 2. Configuration Netlify

Le fichier `netlify.toml` configure automatiquement :
- Build commands
- Redirections SPA
- Headers de sécurité
- Cache statique
- Functions serverless

## 🔧 Déploiement Manuel

### Depuis la ligne de commande

```bash
# 1. Build du projet
npm run build

# 2. Test local du build
npm run preview

# 3. Déploiement Netlify CLI
npx netlify deploy --prod --dir=out
```

### Via GitHub Actions (optionnel)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './out'
          production-branch: main
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🗄️ Configuration Supabase

### 1. Créer le projet Supabase

```bash
# Installer Supabase CLI
npm install -g supabase

# Login
supabase login

# Créer nouveau projet
supabase projects create chantipro

# Initialiser localement
supabase init
```

### 2. Schéma de base de données

```sql
-- Tables principales
CREATE TABLE contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  service_type TEXT,
  project_surface INTEGER,
  urgent BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'nouveau',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_form_id UUID REFERENCES contact_forms(id),
  surface INTEGER NOT NULL,
  service_type TEXT NOT NULL,
  location TEXT NOT NULL,
  deadline DATE,
  special_requirements TEXT,
  estimated_price DECIMAL(10,2),
  status TEXT DEFAULT 'en_attente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  verified BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### 3. Politiques RLS (Row Level Security)

```sql
-- Activer RLS
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Politiques publiques pour lecture
CREATE POLICY "Allow public read testimonials" ON testimonials
  FOR SELECT USING (published = true);

-- Politiques pour insertion formulaires
CREATE POLICY "Allow insert contact forms" ON contact_forms
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert quote requests" ON quote_requests
  FOR INSERT WITH CHECK (true);
```

## 🔒 Configuration Sécurité

### Headers de sécurité (netlify.toml)

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: origin-when-cross-origin`

### CSP (Content Security Policy)

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co;"
```

## 📊 Monitoring & Analytics

### Google Analytics 4

1. Créer une propriété GA4
2. Ajouter `NEXT_PUBLIC_GA_ID` aux variables d'environnement
3. Le tracking est automatiquement configuré

### Lighthouse CI

```bash
# Installation
npm install -g @lhci/cli

# Configuration
echo '{
  "ci": {
    "collect": {
      "staticDistDir": "./out"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}' > lighthouserc.json

# Audit
lhci autorun
```

## 🐛 Debugging

### Logs Netlify

```bash
# Voir les logs de build
netlify logs

# Logs des functions
netlify logs --functions
```

### Erreurs communes

1. **Build failed**: Vérifier les variables d'environnement
2. **500 Internal Error**: Vérifier la configuration Supabase
3. **404 on refresh**: Vérifier les redirections SPA
4. **Slow loading**: Optimiser les images et chunks

## ✅ Checklist de déploiement

- [ ] Variables d'environnement configurées
- [ ] Base Supabase créée et configurée
- [ ] DNS configuré (si domaine custom)
- [ ] HTTPS activé
- [ ] Tests Lighthouse > 90%
- [ ] Formulaire de contact fonctionnel
- [ ] Analytics configuré
- [ ] Monitoring activé

---

**Support**: Pour toute aide, contacter l'équipe technique via GitHub Issues.