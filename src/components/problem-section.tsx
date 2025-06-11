'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, UserX, Star } from 'lucide-react'

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Délais de Livraison Critiques',
      description: 'Vos clients attendent une livraison impeccable dans les temps. Un retard causé par un nettoyage insuffisant peut coûter cher en pénalités et réputation.',
      stats: '78% des retards',
      color: 'text-red-600 bg-red-100',
    },
    {
      icon: UserX,
      title: 'Équipes Surchargées',
      description: 'Vos ouvriers se concentrent sur leur métier. Le nettoyage post-chantier nécessite des compétences et du matériel spécialisés que vous n\'avez pas forcément.',
      stats: '60% du temps perdu',
      color: 'text-orange-600 bg-orange-100',
    },
    {
      icon: Star,
      title: 'Exigences Qualité Maximum',
      description: 'Promoteurs, architectes : vos clients finaux jugent sur l\'état de livraison. Un nettoyage professionnel fait la différence entre satisfaction et réclamations.',
      stats: '9/10 décision sur finition',
      color: 'text-yellow-600 bg-yellow-100',
    },
  ]

  return (
    <section id="problemes" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Défis du BTP
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            Les Enjeux de vos Livraisons
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Dans le BTP, la qualité de finition détermine votre réputation professionnelle. 
            Un chantier mal nettoyé peut compromettre des mois de travail.
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-hover p-8 bg-white border-l-4 border-red-400"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${problem.color}`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <div className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                    {problem.stats}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ces problèmes vous parlent ?
            </h3>
            <p className="text-gray-600 mb-6">
              ChantirPro résout ces défis grâce à une approche professionnelle 
              et des solutions sur-mesure pour chaque chantier.
            </p>
            <a
              href="#services"
              className="btn-primary btn-lg"
            >
              Découvrir nos Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}