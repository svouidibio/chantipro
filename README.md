# ChantirPro - Nettoyage Post-Chantier Professionnel 🏗️

> **Objectif : 100M€ de CA en 7 ans** avec la stratégie d'Alex "The Cleaner" Rodriguez

## ⚠️ CONFIGURATION NETLIFY CRITIQUE

**ATTENTION :** Si le build échoue avec une erreur sur le dossier `dist`, voir [NETLIFY_CONFIG_FIX.md](./NETLIFY_CONFIG_FIX.md)

**Config correcte dans l'UI Netlify :**
- Build command: `npm run build`
- Publish directory: `.` (point) ou VIDE
- NE PAS mettre `dist` ou `out`

## 🚀 Stack Technique

- **Framework**: Next.js 14 (SSG pour SEO optimal)
- **Styling**: Tailwind CSS
- **TypeScript**: Pour la robustesse du code
- **Déploiement**: Netlify (CI/CD automatisé)
- **SEO**: 100% optimisé avec SSG

## 🎯 Architecture

```
chantipro/
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout principal avec SEO
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── sitemap.ts         # Sitemap automatique
├── public/                 # Assets statiques
│   └── robots.txt         # Config robots Google
├── .github/workflows/      # CI/CD GitHub Actions
├── netlify.toml           # Config Netlify
└── next.config.js         # Config Next.js SSG
```

## ⚡ Démarrage Rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build && npm run export

# Preview production
npm run start
```

## 🌐 URLs

- **Production**: https://chantipro.netlify.app
- **Préprod**: https://chantipro-preprod.netlify.app
- **GitHub**: https://github.com/svouidibio/chantipro

## 🔄 Workflow Git

1. **Développement** sur `feature/*`
2. **PR vers `develop`** → Déploiement auto en préprod
3. **Merge vers `main`** → Déploiement en production

## 📊 Phases de Croissance

| Phase | Année | CA Objectif | Actions Clés |
|-------|-------|-------------|---------------|
| 1 | 2025 | 600K€ | Démarrage, 2 personnes |
| 2 | 2028 | 3M€ | Expansion 93, 10 personnes |
| 3 | 2032 | 100M€ | Leader IDF, 500+ employés |

## 🎯 SEO & Performance

- **Score Lighthouse**: 100/100 (visé)
- **Meta tags**: Complets et optimisés
- **Sitemap**: Généré automatiquement
- **SSG**: Pages statiques = vitesse max

## 🛠️ Scripts Disponibles

- `npm run dev` - Démarrer en mode développement
- `npm run build` - Build de production
- `npm run export` - Export statique pour Netlify
- `npm run lint` - Vérifier la qualité du code

## 📝 Variables d'Environnement

Copier `.env.example` vers `.env.local` et configurer :

```env
NEXT_PUBLIC_API_URL=https://api.chantipro.fr
NEXT_PUBLIC_ENVIRONMENT=production
```

## 🔒 Sécurité

- Headers de sécurité configurés dans `netlify.toml`
- HTTPS forcé sur tous les environnements
- Protection des branches GitHub

## 📈 Monitoring

- Analytics Netlify activées
- Lighthouse CI dans GitHub Actions
- Logs accessibles via Netlify Dashboard

---

**🔥 "Chez ISS, on mettait 6 mois pour un site. Là, c'est fait en 1 jour et 100x mieux !"** - Alex Rodriguez

*Pour toute question : contact@chantipro.fr*