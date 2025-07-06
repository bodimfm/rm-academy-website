import { content } from '../../content'
import { Button } from '../ui/button'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-fuchsia-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">{content.ctaFinal.title}</h2>
      <Button className="bg-amber-500 text-white hover:bg-amber-600">
        {content.ctaFinal.button}
      </Button>
    </section>
  )
}
