import { content } from '../../content'

const testimonials = content.testimonials.map((t) => ({
  ...t,
  img: 'https://via.placeholder.com/48'
}))

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Depoimentos</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-3 grayscale opacity-80" />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
