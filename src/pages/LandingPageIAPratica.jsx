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
    if (meta) meta.setAttribute('content', 'Do diagnóstico ao piloto em 10 horas. Caso real: ROI de 300% em 6 meses.')
  }, [])

  return (
    <div className="text-gray-900">
      <Hero subtitle="Do diagnóstico ao piloto em 10 horas" />
      <Benefits />
      <Program />
      <Testimonials />
      <CTASection />
    </div>
  )
}
