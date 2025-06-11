import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | ChantirPro - Nettoyage Post-Chantier Professionnel',
    default: 'ChantirPro - Nettoyage Post-Chantier BTP | Intervention 48h',
  },
  description: 'Spécialiste nettoyage post-chantier pour promoteurs et entreprises BTP. Intervention garantie 48h, équipe qualifiée, tarifs transparents. Devis gratuit 24h.',
  keywords: [
    'nettoyage post-chantier',
    'nettoyage fin de chantier',
    'entreprise nettoyage BTP',
    'nettoyage construction',
    'promoteur immobilier',
    'maître d\'œuvre',
    'île-de-france',
    'paris',
    'seine-saint-denis',
    'tarif nettoyage chantier',
    'devis nettoyage',
    'norme NF P03-001'
  ],
  authors: [{ name: 'ChantirPro' }],
  creator: 'ChantirPro',
  publisher: 'ChantirPro',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://chantipro.fr',
    siteName: 'ChantirPro',
    title: 'ChantirPro - Nettoyage Post-Chantier Professionnel BTP',
    description: 'Spécialiste nettoyage post-chantier. Intervention 48h, équipe qualifiée, tarifs transparents. Devis gratuit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChantirPro - Nettoyage Post-Chantier Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChantirPro - Nettoyage Post-Chantier BTP',
    description: 'Spécialiste nettoyage post-chantier. Intervention 48h garantie.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chantipro.fr',
  },
  other: {
    'google-site-verification': 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f4c75" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ChantirPro" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ChantirPro",
              "description": "Entreprise spécialisée dans le nettoyage post-chantier pour professionnels du BTP",
              "url": "https://chantipro.fr",
              "telephone": "+33123456789",
              "email": "contact@chantipro.fr",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Île-de-France",
                "addressCountry": "FR"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8566,
                  "longitude": 2.3522
                },
                "geoRadius": "50000"
              },
              "serviceType": [
                "Nettoyage post-chantier",
                "Nettoyage fin de chantier",
                "Nettoyage construction",
                "Remise en état après travaux"
              ],
              "priceRange": "4€-8€ par m²",
              "openingHours": "Mo-Su 08:00-20:00",
              "sameAs": [
                "https://www.google.com/business/",
                "https://fr.linkedin.com/company/chantipro"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}