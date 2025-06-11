'use client'

import { motion } from 'framer-motion'
import { Rocket, Wrench, Sparkles, ClipboardCheck } from 'lucide-react'

export function SolutionSection() {
  const solutions = [
    {
      icon: Rocket,
      title: 'Réactivité Express',
      description: 'Intervention garantie sous 48h maximum. Nous nous adaptons à vos plannings de livraison les plus serrés, weekends inclus.',
      features: ['Équipe disponible 7j/7', 'Intervention d\'urgence', 'Planning flexible'],
    },
    {
      icon: Wrench,
      title: 'Équipement Professionnel',
      description: 'Aspirateurs industriels, nettoyeurs haute pression, produits spécialisés : nous disposons de tout le matériel adapté aux chantiers BTP.',
      features: ['Matériel dernière génération', 'Produits écologiques', 'Outils spécialisés'],
    },
    {
      icon: Sparkles,
      title: 'Résultat Impeccable',
      description: 'Poussières de plâtre, résidus de colle, traces de peinture : nous maîtrisons tous les types de salissures et finitions post-chantier.',
      features: ['Techniques éprouvées', 'Savoir-faire expert', 'Finition soignée'],
    },
    {
      icon: ClipboardCheck,
      title: 'Conformité Garantie',
      description: 'Respect strict de la norme NF P03-001. Documentation complète et traçabilité pour vos réceptions de chantier.',
      features: ['Norme NF P03-001', 'Rapport détaillé', 'Certification qualité'],
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Notre Expertise
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            ChantirPro : Votre Partenaire de Confiance
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Une équipe d'experts dédiée au nettoyage post-chantier, avec l'expérience 
            et les équipements pour garantir des résultats impeccables.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-hover p-8 h-full border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Notre Processus en 4 Étapes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une méthode éprouvée pour garantir des résultats conformes à vos exigences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnostic', description: 'Évaluation du chantier et des besoins spécifiques' },
              { step: '02', title: 'Devis', description: 'Tarification transparente sous 24h maximum' },
              { step: '03', title: 'Intervention', description: 'Nettoyage professionnel avec équipement adapté' },
              { step: '04', title: 'Contrôle', description: 'Vérification qualité et remise du rapport' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}