import { useEffect } from 'react'
import Hero from '../components/landing/Hero'
import Benefits from '../components/landing/Benefits'
import Program from '../components/landing/Program'
import Testimonials from '../components/landing/Testimonials'
import CTASection from '../components/landing/CTASection'

export default function LandingPageIAPratica() {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR'
    document.title = 'Curso de Intelig\u00eancia Artificial In Company | RM Academy'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Capacite sua equipe a aplicar IA nos processos de neg\u00f3cio em 1 dia de imers\u00e3o hands-on.')
  }, [])

  return (
    <div className="text-gray-900">
      <Hero />
      <Benefits />
      <Program />
      <Testimonials />
      <CTASection />
    </div>
  )
}
