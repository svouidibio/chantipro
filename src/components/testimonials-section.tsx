'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { getInitials } from '@/lib/utils'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Jean-Michel Lefebvre',
      company: 'Empresa BTP',
      role: 'Directeur',
      content: 'Équipe ultra-professionnelle et réactive. Ils ont sauvé notre planning de livraison sur un chantier de 50 logements. Résultat impeccable, je les recommande vivement !',
      rating: 5,
      verified: true,
    },
    {
      name: 'Sophie Martin',
      company: 'Cabinet M&Associés',
      role: 'Architecte',
      content: 'Enfin une entreprise qui comprend nos contraintes ! Intervention rapide, tarifs transparents, résultat parfait. Nous ne changeons plus de prestataire.',
      rating: 5,
      verified: true,
    },
    {
      name: 'Alexandre Dubois',
      company: 'Immoconstruct',
      role: 'Promoteur',
      content: 'Nous utilisons ChantirPro pour tous nos projets immobiliers. Leur professionnalisme et leur réactivité nous font gagner un temps précieux.',
      rating: 5,
      verified: true,
    },
  ]

  return (
    <section id="temoignages" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Témoignages
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            Ils Nous Font Confiance
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Des professionnels du BTP qui nous recommandent pour la qualité 
            de nos prestations et notre fiabilité.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-hover bg-white p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                    {testimonial.verified && (
                      <span className="ml-2 text-green-600 text-sm">✓</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-700 mb-2">98%</div>
              <div className="text-gray-600">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-700 mb-2">150+</div>
              <div className="text-gray-600">Chantiers Réalisés</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-700 mb-2">24h</div>
              <div className="text-gray-600">Délai Moyen Devis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}