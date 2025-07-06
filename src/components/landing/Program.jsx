import { useState } from 'react'
import { content } from '../../content'

const modules = content.program.modules

export default function Program() {
  const [open, setOpen] = useState(null)
  return (
    <section id="programa" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Programa do curso</h2>
        <div className="max-w-2xl mx-auto">
          {modules.map((m, i) => (
            <div key={i} className="border-b">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-4 flex justify-between items-center">
                <span className="font-medium text-gray-800">{m.title}</span>
                <span>{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <ul className="space-y-1 list-disc pl-5 pb-4">
                  {m.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
