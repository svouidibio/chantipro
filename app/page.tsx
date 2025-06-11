'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [environment, setEnvironment] = useState('')
  
  useEffect(() => {
    setEnvironment(process.env.NEXT_PUBLIC_ENVIRONMENT || 'development')
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ChantirPro 🏗️
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Nettoyage Post-Chantier Professionnel en Seine-Saint-Denis
          </p>
          <p className="text-lg text-gray-500">
            Expert BTP - Intervention rapide - Devis gratuit
          </p>
          <div className="mt-4">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              environment === 'production' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              Environnement: {environment.toUpperCase()}
            </span>
          </div>
        </header>
        
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">🚀 Objectif 100M€</h2>
            <p className="text-gray-700 mb-4">
              Avec Alex "The Cleaner" Rodriguez comme conseiller stratégique, 
              ChantirPro va devenir le leader du nettoyage post-chantier en Île-de-France.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Phase 1</h3>
                <p className="text-3xl font-bold text-blue-600">600K€</p>
                <p className="text-gray-600 mt-1">2025</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Phase 2</h3>
                <p className="text-3xl font-bold text-indigo-600">3M€</p>
                <p className="text-gray-600 mt-1">2028</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Phase 3</h3>
                <p className="text-3xl font-bold text-purple-600">100M€</p>
                <p className="text-gray-600 mt-1">2032</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Nos Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Nettoyage post-chantier BTP complet</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Évacuation des déchets et gravats</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Nettoyage vitres et surfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Intervention 48h garantie</span>
              </li>
            </ul>
          </div>
        </section>
        
        <footer className="text-center mt-16 text-gray-600">
          <p>© 2025 ChantirPro - Tous droits réservés</p>
          <p className="text-sm mt-2">Seine-Saint-Denis (93) - Île-de-France</p>
        </footer>
      </div>
    </main>
  )
}