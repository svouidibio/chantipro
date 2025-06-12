'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Le <span>Nettoyage Post-Chantier</span> Nouvelle Génération
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformez vos fins de chantier en véritables showrooms. 
              Service premium pour professionnels exigeants du BTP.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Entreprise locale 93</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Assurance professionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Devis gratuit détaillé</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                Obtenir un Devis
                <span>→</span>
              </Link>
              <a href="tel:0756938421" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                📞 07 56 93 84 21
              </a>
            </div>
          </div>
          
          {/* Stats card */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="stat-number text-4xl font-bold mb-2">150+</div>
                  <div className="text-gray-600">Chantiers livrés</div>
                </div>
                <div className="text-center p-4">
                  <div className="stat-number text-4xl font-bold mb-2">72h</div>
                  <div className="text-gray-600">Délai intervention</div>
                </div>
                <div className="text-center p-4">
                  <div className="stat-number text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                <div className="text-center p-4">
                  <div className="stat-number text-4xl font-bold mb-2">4.9/5</div>
                  <div className="text-gray-600">Note Google</div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
              <strong className="text-gray-900">Équipe Agile</strong><br/>
              <span className="text-gray-600 text-sm">Adaptation rapide</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
              <strong className="text-gray-900">Devis 4h</strong><br/>
              <span className="text-gray-600 text-sm">Réactivité garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}