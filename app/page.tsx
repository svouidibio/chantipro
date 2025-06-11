'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollTopVisible, setScrollTopVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setScrollTopVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre demande ! Nous vous recontactons sous 4h maximum.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4 shadow-md'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
              CP
            </div>
            ChantiPro
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Notre Process
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Témoignages
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:0756938421" className="hidden sm:flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600">
              📞 07 56 93 84 21
            </a>
            <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Devis Gratuit
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Le <span>Nettoyage Post-Chantier</span> Nouvelle Génération
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformez vos fins de chantier en véritables showrooms. 
                Service premium pour professionnels exigeants du BTP.
              </p>
              
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
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🏗️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nettoyage Premium Post-Chantier</h3>
              <p className="text-gray-600 mb-6">Service complet haute qualité pour livraison parfaite de vos projets les plus exigeants.</p>
              <ul className="service-features space-y-3">
                <li className="relative pl-8 text-gray-700">Évacuation gravats & déchets triés</li>
                <li className="relative pl-8 text-gray-700">Nettoyage haute pression façades</li>
                <li className="relative pl-8 text-gray-700">Dépoussiérage industriel complet</li>
                <li className="relative pl-8 text-gray-700">Cristallisation sols & marbres</li>
                <li className="relative pl-8 text-gray-700">Traitement vitres grande hauteur</li>
                <li className="relative pl-8 text-gray-700">Protocole de réception client</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🏢
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Projets d'Envergure</h3>
              <p className="text-gray-600 mb-6">Notre équipe agile s'adapte à vos projets ambitieux avec flexibilité et professionnalisme.</p>
              <ul className="service-features space-y-3">
                <li className="relative pl-8 text-gray-700">Équipe dédiée et réactive</li>
                <li className="relative pl-8 text-gray-700">Coordination optimale du planning</li>
                <li className="relative pl-8 text-gray-700">Adaptation aux contraintes spécifiques</li>
                <li className="relative pl-8 text-gray-700">Suivi personnalisé du projet</li>
                <li className="relative pl-8 text-gray-700">Respect strict des normes sécurité</li>
                <li className="relative pl-8 text-gray-700">Capacité d'adaptation rapide</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intervention Express 72h</h3>
              <p className="text-gray-600 mb-6">Mobilisation rapide pour vos urgences et deadlines serrées.</p>
              <ul className="service-features space-y-3">
                <li className="relative pl-8 text-gray-700">Devis validé en 4h maximum</li>
                <li className="relative pl-8 text-gray-700">Équipe mobilisable rapidement</li>
                <li className="relative pl-8 text-gray-700">Matériel professionnel disponible</li>
                <li className="relative pl-8 text-gray-700">Process optimisé pour l'urgence</li>
                <li className="relative pl-8 text-gray-700">Communication transparente</li>
                <li className="relative pl-8 text-gray-700">Engagement sur les délais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">Notre Méthode</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Un Process Millimétré</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 étapes clés pour garantir l'excellence et respecter vos délais
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Audit Terrain</h3>
              <p className="text-gray-600">Visite technique, analyse des besoins, devis détaillé sous 4h</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planification</h3>
              <p className="text-gray-600">Planning optimisé, mobilisation équipes, coordination interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exécution</h3>
              <p className="text-gray-600">Intervention professionnelle, suivi temps réel, contrôle qualité</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Réception</h3>
              <p className="text-gray-600">Validation client, rapport photo, garantie satisfaction totale</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Passer au Niveau Supérieur ?</h2>
          <p className="text-xl mb-8 opacity-95">
            Rejoignez les leaders du BTP qui ont choisi l'excellence ChantiPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              Demander un Devis
              <span>→</span>
            </Link>
            <a href="tel:0756938421" className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              📞 07 56 93 84 21
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Direct</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hotline Pro</h4>
                      <p className="text-gray-600">07 56 93 84 21</p>
                      <p className="text-gray-600 text-sm">7j/7 - 6h à 22h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Entreprise</h4>
                      <p className="text-gray-600">pro@chantipro.fr</p>
                      <p className="text-gray-600 text-sm">Réponse sous 4h ouvrées</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Zone d'Intervention</h4>
                      <p className="text-gray-600">Seine-Saint-Denis (93)</p>
                      <p className="text-gray-600 text-sm">Paris & Petite Couronne</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      🏢
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Siège Social</h4>
                      <p className="text-gray-600">Villeparisis 77270</p>
                      <p className="text-gray-600 text-sm">RCS Meaux B XXX XXX XXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Devis Express Gratuit</h3>
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
                    
                    <div>
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
                        <option value="hopital">Hôpital / Clinique</option>
                        <option value="ecole">École / Université</option>
                        <option value="autre">Autre projet</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Surface (m²) <span className="text-blue-600">*</span>
                      </label>
                      <input type="number" placeholder="Ex: 5000" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Ville du Chantier <span className="text-blue-600">*</span>
                      </label>
                      <input type="text" placeholder="Ex: Saint-Denis" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Date Souhaitée <span className="text-blue-600">*</span>
                      </label>
                      <input type="date" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ChantiPro</h3>
              <p className="text-gray-400 mb-4">
                Leader du nettoyage post-chantier nouvelle génération en Île-de-France.
              </p>
              <p className="text-gray-400">
                Partenaire stratégique des professionnels du BTP depuis 2025.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services Premium</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Nettoyage Post-Chantier</Link></li>
                <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Projets d'Envergure</Link></li>
                <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Intervention Express 72h</Link></li>
                <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Contrats Cadres Annuels</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Zones d'Intervention</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Saint-Denis & La Plaine</li>
                <li>Montreuil - Pantin - Bobigny</li>
                <li>Aubervilliers - Drancy</li>
                <li>Paris & Petite Couronne</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Certifications & Garanties</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Assurance Pro</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Devis Gratuit</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Garantie Satisfaction</span>
              </div>
              <p className="text-gray-400 text-sm">
                Agrément préfecture n°93-2025-XXX<br/>
                SIRET: XXX XXX XXX 00014
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ChantiPro SAS - Tous droits réservés | Mentions légales | CGV Professionnels | Politique RGPD</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrollTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all"
        >
          ↑
        </button>
      )}
    </>
  )
}