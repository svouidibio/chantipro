/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppression de output: 'export' pour utiliser le mode SSR/ISR
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
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