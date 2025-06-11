'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Nettoyage post-chantier',
    'Remise en état après travaux',
    'Nettoyage industriel',
    'Décontamination spécialisée',
  ]

  const zones = [
    'Seine-Saint-Denis (93)',
    'Val-de-Marne (94)',
    'Hauts-de-Seine (92)',
    'Paris (75)',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">ChantirPro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour le nettoyage post-chantier 
              professionnel en Île-de-France.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </a>
              <a
                href="mailto:contact@chantipro.fr"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>contact@chantipro.fr</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Île-de-France, France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Zones d'Intervention</h3>
            <ul className="space-y-3">
              {zones.map((zone, index) => (
                <li key={index} className="text-gray-300">
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#tarifs"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tarifs et Devis
                </Link>
              </li>
              <li>
                <Link
                  href="#temoignages"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Témoignages Clients
                </Link>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/chantipro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Google My Business
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://fr.linkedin.com/company/chantipro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} ChantirPro. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/conditions-generales"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}