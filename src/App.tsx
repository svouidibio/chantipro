import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [environment, setEnvironment] = useState<string>('')
  
  useEffect(() => {
    const env = import.meta.env.VITE_ENVIRONMENT || 'development'
    setEnvironment(env)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ChantirPro 🏗️
          </h1>
          <p className="text-xl text-gray-600">
            Nettoyage Post-Chantier Professionnel en Seine-Saint-Denis
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
        
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">🚀 Objectif 100M€</h2>
            <p className="text-gray-700 mb-4">
              Avec Alex "The Cleaner" Rodriguez comme conseiller stratégique, 
              ChantirPro va devenir le leader du nettoyage post-chantier en Île-de-France.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Phase 1</h3>
                <p className="text-gray-700">600K€ - 2025</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Phase 2</h3>
                <p className="text-gray-700">3M€ - 2028</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Phase 3</h3>
                <p className="text-gray-700">100M€ - 2032</p>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="text-center mt-16 text-gray-600">
          <p>© 2025 ChantirPro - Tous droits réservés</p>
        </footer>
      </div>
    </div>
  )
}

export default App