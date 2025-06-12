'use client'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre demande ! Nous vous recontactons sous 4h maximum.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Entreprise <span className="text-blue-600">*</span>
          </label>
          <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nom & Prénom <span className="text-blue-600">*</span>
          </label>
          <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Pro <span className="text-blue-600">*</span>
          </label>
          <input type="email" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Téléphone <span className="text-blue-600">*</span>
          </label>
          <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Type de Projet <span className="text-blue-600">*</span>
          </label>
          <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors">
            <option value="">Sélectionner...</option>
            <option value="tour">Tour / IGH</option>
            <option value="bureaux">Bureaux / Tertiaire</option>
            <option value="logements">Logements collectifs</option>
            <option value="commercial">Centre commercial</option>
            <option value="industriel">Site industriel</option>
            <option value="autre">Autre projet</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Détails du Projet
          </label>
          <textarea rows={4} placeholder="Décrivez vos besoins spécifiques, contraintes, niveau de finition attendu..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"></textarea>
        </div>
      </div>
      
      <button type="submit" className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
        Recevoir Mon Devis Sous 4h
      </button>
      
      <p className="text-center mt-4 text-gray-600">
        🔒 Vos données sont sécurisées et restent confidentielles
      </p>
    </form>
  )
}