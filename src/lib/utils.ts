import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Formatage du numéro de téléphone français
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.startsWith('33')) {
    // Format international : +33 1 23 45 67 89
    const formatted = cleaned.replace(/^33(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/, '+33 $1 $2 $3 $4 $5')
    return formatted
  } else if (cleaned.length === 10) {
    // Format national : 01 23 45 67 89
    const formatted = cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
    return formatted
  }
  
  return phone
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(amount)
}

export function calculateQuotePrice(surface: number, serviceType: 'standard' | 'premium' | 'express'): number {
  const rates = {
    standard: { min: 4, max: 6 },
    premium: { min: 6, max: 8 },
    express: { base: 40 } // par heure
  }

  if (serviceType === 'express') {
    // Estimation basée sur 2h de travail par 50m²
    const estimatedHours = Math.max(2, Math.ceil(surface / 25))
    return estimatedHours * rates.express.base
  } else {
    const rate = rates[serviceType]
    const avgRate = (rate.min + rate.max) / 2
    return surface * avgRate
  }
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
}

export function generateMetaDescription(content: string, maxLength = 160): string {
  const cleaned = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return truncateText(cleaned, maxLength)
}

// Validation des données de formulaire
export function validateContactForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères')
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Veuillez entrer une adresse email valide')
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Veuillez entrer un numéro de téléphone valide')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Gestion des analytics
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && 'gtag' in window && typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties)
  }
}

// Gestion du localStorage avec fallback
export function safeLocalStorage() {
  if (typeof window === 'undefined') {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    }
  }

  return {
    getItem: (key: string) => {
      try {
        return localStorage.getItem(key)
      } catch {
        return null
      }
    },
    setItem: (key: string, value: string) => {
      try {
        localStorage.setItem(key, value)
      } catch {
        // Silently fail
      }
    },
    removeItem: (key: string) => {
      try {
        localStorage.removeItem(key)
      } catch {
        // Silently fail
      }
    },
  }
}