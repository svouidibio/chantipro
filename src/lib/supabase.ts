import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Types pour la base de données
export interface ContactForm {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service_type?: string
  project_surface?: number
  urgent?: boolean
  created_at?: string
  status?: 'nouveau' | 'contacte' | 'devis_envoye' | 'refuse' | 'accepte'
}

export interface QuoteRequest {
  id?: string
  contact_form_id?: string
  surface: number
  service_type: 'standard' | 'premium' | 'express'
  location: string
  deadline?: string
  special_requirements?: string
  estimated_price?: number
  created_at?: string
  status?: 'en_attente' | 'calcule' | 'envoye' | 'accepte' | 'refuse'
}

export interface Testimonial {
  id?: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  verified: boolean
  created_at?: string
  published: boolean
}

// Fonctions utilitaires pour Supabase
export const insertContactForm = async (data: Omit<ContactForm, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('contact_forms')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return result
}

export const insertQuoteRequest = async (data: Omit<QuoteRequest, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('quote_requests')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return result
}

export const getTestimonials = async (limit = 10) => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}