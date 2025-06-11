'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Crown, Clock } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
  const pricingPlans = [
    {
      name: 'Nettoyage Standard',
      description: 'Pour chantiers classiques',
      price: '4-6€',
      unit: 'par m²',
      icon: Check,
      features: [
        'Dépoussiérage complet',
        'Nettoyage sols et surfaces',
        'Évacuation déchets légers',
        'Nettoyage vitres intérieures',
        'Rapport de prestation',
      ],
      popular: false,
      color: 'border-gray-200',
    },
    {
      name: 'Nettoyage Premium',
      description: 'Notre offre la plus demandée',
      price: '6-8€',
      unit: 'par m²',
      icon: Crown,
      features: [
        'Tout du Standard inclus',
        'Nettoyage vitres ext/int',
        'Décontamination spécialisée',
        'Finitions de prestige',
        'Garantie qualité 48h',
        'Chef d\'équipe dédié',
      ],
      popular: true,
      color: 'border-accent-500',
    },
    {
      name: 'Intervention Express',
      description: 'Urgence planning',
      price: '35-45€',
      unit: 'par heure',
      icon: Zap,
      features: [
        'Intervention < 24h',
        'Équipe dédiée disponible',
        'Weekend et jours fériés',
        'Urgence planning',
        'Support téléphonique 24/7',
      ],
      popular: false,
      color: 'border-gray-200',
    },
  ]

  return (
    <section id="tarifs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Tarification
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            Tarifs Transparents et Compétitifs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Pas de surprises, pas de frais cachés. Des tarifs adaptés à tous vos projets 
            avec une qualité de service constante.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative card-hover p-8 border-2 ${plan.color} ${
                plan.popular ? 'bg-gradient-to-br from-accent-50 to-orange-50 scale-105 lg:scale-110' : 'bg-white'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-bold">
                    PLUS DEMANDÉ
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 mx-auto">
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-accent-600">{plan.price}</span>
                  <span className="text-gray-500">{plan.unit}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="#devis"
                className={`btn w-full justify-center ${
                  plan.popular ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Demander un Devis
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Facturation Transparente
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Devis gratuit et détaillé sous 24h
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Pas de frais cachés ou supplémentaires
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Tarifs fixes garantis pendant 3 mois
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Paiement après validation des travaux
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-accent-600" />
                <h4 className="font-semibold text-gray-900">Exemple de Projet</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Appartement 80m²</span>
                  <span className="font-medium">Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tarif au m²</span>
                  <span className="font-medium">7€</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total estimé</span>
                  <span className="text-accent-600">560€</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Prix indicatif - Devis personnalisé gratuit
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}