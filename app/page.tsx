import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">Nos Prestations</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Haute Performance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions sur-mesure pour promoteurs, entreprises générales et maîtres d'œuvre. 
              Nous transformons vos contraintes en opportunités.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🏗️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nettoyage Premium Post-Chantier</h3>
              <p className="text-gray-600 mb-6">Service complet haute qualité pour livraison parfaite de vos projets les plus exigeants.</p>
              <ul className="service-features space-y-3">
                <li className="text-gray-700">Évacuation gravats & déchets triés</li>
                <li className="text-gray-700">Nettoyage haute pression façades</li>
                <li className="text-gray-700">Dépoussiérage industriel complet</li>
                <li className="text-gray-700">Cristallisation sols & marbres</li>
                <li className="text-gray-700">Traitement vitres grande hauteur</li>
                <li className="text-gray-700">Protocole de réception client</li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🏢
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Projets d'Envergure</h3>
              <p className="text-gray-600 mb-6">Notre équipe agile s'adapte à vos projets ambitieux avec flexibilité et professionnalisme.</p>
              <ul className="service-features space-y-3">
                <li className="text-gray-700">Équipe dédiée et réactive</li>
                <li className="text-gray-700">Coordination optimale du planning</li>
                <li className="text-gray-700">Adaptation aux contraintes spécifiques</li>
                <li className="text-gray-700">Suivi personnalisé du projet</li>
                <li className="text-gray-700">Respect strict des normes sécurité</li>
                <li className="text-gray-700">Capacité d'adaptation rapide</li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intervention Express 72h</h3>
              <p className="text-gray-600 mb-6">Mobilisation rapide pour vos urgences et deadlines serrées.</p>
              <ul className="service-features space-y-3">
                <li className="text-gray-700">Devis validé en 4h maximum</li>
                <li className="text-gray-700">Équipe mobilisable rapidement</li>
                <li className="text-gray-700">Matériel professionnel disponible</li>
                <li className="text-gray-700">Process optimisé pour l'urgence</li>
                <li className="text-gray-700">Communication transparente</li>
                <li className="text-gray-700">Engagement sur les délais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Passer au Niveau Supérieur ?</h2>
          <p className="text-xl mb-8 opacity-95">
            Rejoignez les leaders du BTP qui ont choisi l'excellence ChantirPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              Demander un Devis
              <span>→</span>
            </a>
            <a href="tel:0756938421" className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              📞 07 56 93 84 21
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Devis Express Gratuit</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ChantirPro</h3>
            <p className="text-gray-400 mb-6">
              Leader du nettoyage post-chantier nouvelle génération en Île-de-France
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <a href="tel:0756938421" className="hover:text-cyan-400 transition-colors">📞 07 56 93 84 21</a>
              <span className="text-gray-400">|</span>
              <a href="mailto:pro@chantipro.fr" className="hover:text-cyan-400 transition-colors">✉️ pro@chantipro.fr</a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">📍 Seine-Saint-Denis (93)</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 ChantirPro SAS - Tous droits réservés | SIRET: XXX XXX XXX 00014
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}