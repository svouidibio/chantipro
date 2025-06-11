import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChantirPro - Nettoyage Post-Chantier Professionnel Seine-Saint-Denis',
  description: 'ChantirPro, expert du nettoyage post-chantier en Seine-Saint-Denis. Service professionnel, rapide et efficace pour tous vos chantiers BTP.',
  keywords: 'nettoyage chantier, nettoyage post-chantier, BTP, Seine-Saint-Denis, 93, nettoyage professionnel',
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
    title: 'ChantirPro - Nettoyage Post-Chantier Professionnel',
    description: 'Expert du nettoyage post-chantier en Seine-Saint-Denis',
    url: 'https://chantipro.fr',
    siteName: 'ChantirPro',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChantirPro - Nettoyage Post-Chantier',
    description: 'Expert du nettoyage post-chantier en Seine-Saint-Denis',
  },
  alternates: {
    canonical: 'https://chantipro.fr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}