# Guide de Contribution - ChantirPro

Merci de votre intérêt pour contribuer au projet ChantirPro ! Ce guide vous aidera à bien démarrer.

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- npm ou yarn
- Git
- VS Code (recommandé)

### Installation

```bash
# Fork et clone le repository
git clone https://github.com/votre-username/chantipro.git
cd chantipro

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer en développement
npm run dev
```

## 📋 Types de Contributions

### 🐛 Corrections de bugs
- Identifier le problème dans les Issues
- Créer une branche `fix/description-bug`
- Corriger et tester
- Soumettre une Pull Request

### ✨ Nouvelles fonctionnalités
- Discuter de la fonctionnalité dans les Issues
- Créer une branche `feature/nom-fonctionnalite`
- Développer et tester
- Documenter les changements
- Soumettre une Pull Request

### 📚 Documentation
- Améliorer la documentation existante
- Ajouter des exemples
- Corriger les fautes de frappe

### 🎨 UI/UX
- Améliorer l'interface utilisateur
- Optimiser l'expérience utilisateur
- Respecter le design system

## 🛠️ Standards de Développement

### Structure des dossiers

```
src/
├── app/                 # App Router Next.js
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   └── sections/       # Sections de page
├── lib/                # Utilitaires et configuration
│   ├── utils.ts        # Fonctions utilitaires
│   └── supabase.ts     # Configuration Supabase
└── types/              # Types TypeScript
```

### Conventions de nommage

- **Fichiers**: `kebab-case.tsx`
- **Composants**: `PascalCase`
- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Types**: `PascalCase`

### Style de code

```typescript
// ✅ Bon exemple
export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (data: ContactForm) => {
    setIsLoading(true)
    try {
      await submitForm(data)
    } catch (error) {
      console.error('Erreur soumission:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-padding bg-white">
      {/* Contenu du composant */}
    </section>
  )
}
```

### Composants React

1. **Props typées avec TypeScript**
2. **Hooks au début du composant**
3. **Handlers avant le return**
4. **JSX propre et lisible**
5. **Classes Tailwind organisées**

### Gestion d'état

- **Local**: `useState` pour l'état simple
- **Complexe**: `useReducer` ou Context API
- **Serveur**: Supabase + React Query (futur)

## 🧪 Tests

### Tests unitaires

```bash
# Lancer les tests
npm run test

# Mode watch
npm run test:watch

# Coverage
npm run test:coverage
```

### Tests e2e

```bash
# Tests Playwright
npm run test:e2e

# Mode UI
npm run test:e2e:ui
```

### Écrire des tests

```typescript
// components/__tests__/ContactSection.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { ContactSection } from '../ContactSection'

describe('ContactSection', () => {
  it('affiche le formulaire de contact', () => {
    render(<ContactSection />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('valide les champs requis', async () => {
    render(<ContactSection />)
    const submitButton = screen.getByRole('button', { name: /envoyer/i })
    
    fireEvent.click(submitButton)
    
    expect(await screen.findByText(/nom requis/i)).toBeInTheDocument()
  })
})
```

## 🎨 Design System

### Couleurs

```css
/* Couleurs principales */
--primary-500: #0c8ce9;
--primary-700: #0f4c75;
--accent-500: #f97316;
--accent-600: #ea580c;

/* Gris */
--gray-50: #f8fafc;
--gray-900: #0f172a;
```

### Typographie

```css
/* Tailles */
.text-xs: 12px
.text-sm: 14px
.text-base: 16px
.text-lg: 18px
.text-xl: 20px

/* Poids */
.font-medium: 500
.font-semibold: 600
.font-bold: 700
```

### Composants

```typescript
// Boutons
<button className="btn btn-primary btn-lg">
  Action Principale
</button>

// Cards
<div className="card card-hover p-6">
  Contenu de la carte
</div>

// Sections
<section className="section-padding bg-gray-50">
  <div className="max-w-7xl mx-auto container-padding">
    Contenu de la section
  </div>
</section>
```

## 📝 Pull Requests

### Template de PR

```markdown
## Description
Description claire des changements apportés.

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Tests
- [ ] Tests unitaires passent
- [ ] Tests e2e passent
- [ ] Tests manuels effectués

## Checklist
- [ ] Code respecte les standards
- [ ] Documentation mise à jour
- [ ] Pas de breaking changes
- [ ] Performance vérifiée
```

### Processus de review

1. **Auto-review**: Vérifier son code avant soumission
2. **CI/CD**: Tests automatiques doivent passer
3. **Review**: Au moins 1 approbation requise
4. **Merge**: Squash and merge préféré

## 🚀 Déploiement

### Environnements

- **Development**: `npm run dev`
- **Preview**: Netlify deploy previews
- **Production**: Auto-deploy sur `main`

### Hotfixes

1. Créer branche `hotfix/description`
2. Fix rapide et test
3. PR directe sur `main`
4. Deploy immédiat

## 🤝 Code of Conduct

### Nos engagements

- **Respect**: Traiter chacun avec respect
- **Inclusivité**: Environnement accueillant
- **Collaboration**: Partage de connaissances
- **Qualité**: Code et design de qualité

### Inacceptable

- Langage ou images inappropriés
- Harcèlement sous toute forme
- Trolling ou commentaires insultants
- Publication d'informations privées

## 📞 Support

### Besoin d'aide ?

- **Issues GitHub**: Questions techniques
- **Discussions**: Idées et suggestions
- **Email**: contact@chantipro.fr

### Resources

- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase](https://supabase.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Merci de contribuer à ChantirPro !** 🙏