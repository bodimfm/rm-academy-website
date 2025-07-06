import { content } from '../../content'
import { Button } from '../ui/button'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section
      className="py-16 bg-white text-gray-900"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1200x600?text=IA+Pratica')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white/80 backdrop-brightness-95">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{content.hero.title}</h1>
            <p className="mb-6 text-lg">{content.hero.subtitle}</p>
            <div className="flex gap-4 mb-8">
              <Button className="bg-amber-500 text-white hover:bg-amber-600">
                {content.hero.primaryCta}
              </Button>
              <a href="#programa" className="inline-flex">
                <Button variant="outline">{content.hero.secondaryCta}</Button>
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
