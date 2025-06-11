/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Pour générer un site statique
  images: {
    unoptimized: true // Nécessaire pour l'export statique
  },
  trailingSlash: true,
  // Optimisations SEO
  poweredByHeader: false,
  compress: true,
  // Variables d'environnement publiques
  env: {
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
  }
}

module.exports = nextConfig