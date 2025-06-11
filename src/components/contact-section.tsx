'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Award, CheckCircle } from 'lucide-react'

export function ContactSection() {
  const contactItems = [
    {
      icon: MapPin,
      title: 'Zone d\'Intervention',
      description: 'Île-de-France et départements limitrophes',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      description: '7j/7 - Urgences 24h/24',
      color: 'bg-green-500',
    },
    {
      icon: Award,
      title: 'Expérience',
      description: 'Spécialiste BTP depuis 2024',
      color: 'bg-purple-500',
    },
    {
      icon: CheckCircle,
      title: 'Garantie',
      description: 'Satisfaction client 100%',
      color: 'bg-orange-500',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}