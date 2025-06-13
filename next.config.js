/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver l'export statique temporairement pour diagnostiquer
  // output: 'export',
  images: {
    unoptimized: true
  },
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
