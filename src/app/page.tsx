import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { TrustSection } from '@/components/trust-section'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { CTASection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}