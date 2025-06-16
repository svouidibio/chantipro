'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Erreur serveur
        </h2>
        <p className="text-gray-600 mb-8">
          Une erreur inattendue s'est produite. Nos équipes sont informées et 
          travaillent à résoudre le problème.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="block text-blue-600 hover:text-blue-700 transition-colors"
          >
            Retour à l'accueil
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>ChantirPro - Expert nettoyage post-chantier</p>
          <p>Seine-Saint-Denis (93)</p>
        </div>
      </div>
    </div>
  )
}