import { Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react'
import { content } from '../../content'

const icons = { Lightbulb, TrendingUp, ShieldCheck }

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Benefícios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.benefits.items.map((b, i) => {
            const Icon = icons[b.icon]
            return (
              <div key={i} className="text-center p-6 bg-white rounded-lg shadow">
                <Icon className="w-8 h-8 mx-auto mb-4 text-amber-500" />
                <h3 className="font-semibold text-lg">{b.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
