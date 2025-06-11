'use client'

import Link from 'next/link'
import { Phone, Mail, Calculator } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Entreprise certifiée et assurée
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Nettoyage Post-Chantier
            <br />
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              de Référence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Spécialiste BTP pour <strong>promoteurs</strong>, <strong>entreprises</strong> et <strong>maîtres d'œuvre</strong> exigeants.
            <br />
            Intervention garantie sous 48h, partout en Île-de-France.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#devis"
              className="btn-primary btn-xl group"
            >
              <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Devis Gratuit 24h
            </Link>
            <a
              href="tel:+33123456789"
              className="btn-secondary btn-xl group bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              01 23 45 67 89
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: '🛡️', text: 'Assurance RC Pro' },
              { icon: '⚡', text: 'Intervention 48h' },
              { icon: '🏆', text: 'Équipe Spécialisée' },
              { icon: '💰', text: 'Tarifs Transparents' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white/80 text-sm font-medium text-center">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}