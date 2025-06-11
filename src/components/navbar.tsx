'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-primary-700">
              ChantirPro
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-primary-700 font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33123456789"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-700 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
            <Link
              href="#devis"
              className="btn-primary btn-md"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Menu mobile"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white border-t border-gray-100 shadow-soft">
          <div className="container-padding py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">01 23 45 67 89</span>
              </a>
              <a
                href="mailto:contact@chantipro.fr"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">contact@chantipro.fr</span>
              </a>
              <Link
                href="#devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary btn-md w-full justify-center mt-4"
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}