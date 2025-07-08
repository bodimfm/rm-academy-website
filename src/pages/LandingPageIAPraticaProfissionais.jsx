import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import LogoAdaptive from '../components/LogoAdaptive'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { crmFunctions } from '../config/supabase'

const parts = [
  {
    title: 'Parte 1 – Fundamentos',
    items: [
      'Entendendo o funcionamento das soluções para extrair o melhor resultado e não cometer gafes.',
      'Cuidados com os dados dos clientes — breve exposição dos riscos envolvidos.',
      'Mapeando oportunidades: como identificar processos rotineiros ou gargalos em que a IA pode ajudar.',
      'Panorama de soluções disponíveis que podem ser utilizadas na prática profissional.',
      'Qual modelo de IA utilizar.',
      'O que são prompts? Como formular prompts eficientes para tarefas de gestão, marketing, vendas e relacionamento com clientes.',
      'Modos de pesquisa profunda (“Deep Research”): como utilizar com sabedoria.'
    ]
  },
  {
    title: 'Parte 2 – Prática & Automação',
    items: [
      'Assistentes personalizados.',
      'Ganhe tempo com seu ambiente de produção configurado.',
      'Exemplos práticos: atualização do conhecimento; atendimento & comunicação com clientes.',
      'Integrando seus arquivos para gerar relatórios (MCPs e IA Agêntica).',
      'Agentes de Inteligência Artificial: Manus, Operator e agentes “autônomos”; pesquisa de preços de concorrentes; relatórios de mercado; página de leads; base de dados completa no Claude Desktop para CRM, gestão de tarefas e KPIs.',
      'Automação com e sem IA: demo de fluxo de novo lead → e-mail personalizado/CRM, passo a passo sem código.',
      'A. Copiloto de rotina — e-mail, reunião, relatório.',
      'B. Comunicação com o cliente — review Google & SMS NPS.',
      'C. Coaching de equipe — roteiro 1-a-1 e role-play de objeções.',
      'D. Inteligência de mercado “light” — preços OLX/Webmotors; news via Zapier + ChatGPT.'
    ]
  },
  {
    title: 'Parte 3 – Oficina Hands-On',
    items: [
      'Hands-on: criação de soluções personalizadas.',
      'Definir objetivo → Escolher solução (custo × benefício) → Implementar ferramentas simples.',
      'Material incluido: ZIP com planilha, prompt-book, banco de respostas, canvas, vídeo tutorial 5 min; grupo WhatsApp/Teams por 15 dias.'
    ]
  }
]

const turmas = [
  {
    tipo: 'Presencial São Paulo',
    data: '15 de Fevereiro',
    horario: '9h às 18h',
    local: 'Av. Paulista - SP',
    preco: 'R$ 997'
  },
  {
    tipo: 'Online ao Vivo',
    data: '22 de Fevereiro',
    horario: '9h às 18h',
    local: 'Zoom',
    preco: 'R$ 697'
  }
]

export default function LandingPageIAPraticaProfissionais() {
  const [tab, setTab] = useState(0)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    formato: 'presencial'
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const scrollToForm = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const novoCliente = await crmFunctions.criarLead({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.whatsapp,
        cargo: 'Profissional'
      })
      if (novoCliente && novoCliente[0] && novoCliente[0].cliente_id) {
        await crmFunctions.registrarInteracao(
          novoCliente[0].cliente_id,
          'inscricao_ia_pratica_profissionais',
          `Interesse no curso IA Prática - Formato: ${formData.formato}`
        )
      }
      setSuccess(true)
      setFormData({ nome: '', email: '', whatsapp: '', formato: 'presencial' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Erro ao enviar inscrição. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="font-sans text-gray-900">
      <header className="bg-brand-navy text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <LogoAdaptive className="h-10 w-auto" />
          <Button onClick={scrollToForm} className="bg-brand-accent text-brand-navy font-bold" aria-label="Garanta minha vaga">
            Garanta minha vaga
          </Button>
        </div>
      </header>

      <section className="py-20 text-center bg-brand-navy text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-4">
          IA PRÁTICA: Transforme sua Produtividade em 1 Dia
        </motion.h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">Profissionais que ainda não aplicam IA desperdiçam até 15 h/semana em tarefas manuais. Mude esse jogo agora.</p>
        <Button onClick={scrollToForm} className="bg-brand-accent text-brand-navy font-bold px-8 py-4" aria-label="Garanta minha vaga">
          Garanta minha vaga
        </Button>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Você se identifica?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="font-semibold text-red-800 mb-4">Antes (❌)</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Perde 15 h/semana em tarefas repetitivas.</li>
                <li>Não sabe por onde começar com IA.</li>
                <li>Medo de expor dados dos clientes.</li>
                <li>Concorrentes já usam IA.</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-4">Depois (✅)</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Automatiza tarefas em minutos.</li>
                <li>Domina as melhores ferramentas sem código.</li>
                <li>Implementa IA com segurança (LGPD).</li>
                <li>Sai na frente da concorrência.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Resultados comprovados</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
            <Card>
              <CardContent className="p-6">
                <p className="font-bold text-lg">Economize 20 h/mês</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="font-bold text-lg">Aumente resultados em até 30%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="font-bold text-lg">100% Seguro & Ético</p>
              </CardContent>
            </Card>
          </div>
          <p className="italic">“Recuperei o investimento em 3 semanas e ganho 6 h/mês” – Ricardo M.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="conteudo">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Conteúdo do Curso</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {parts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setTab(i)}
                  className={`px-4 py-2 font-semibold border-b-2 ${tab === i ? 'border-brand-navy text-brand-navy' : 'border-transparent text-gray-500'}`}
                >
                  {p.title}
                </button>
              ))}
            </div>
            {parts.map((p, i) => (
              <div key={i} className={tab === i ? 'block' : 'hidden'}>
                <ul className="list-disc space-y-2 ml-5">
                  {p.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="turmas">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Próximas turmas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {turmas.map((t, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6 space-y-2">
                  <p className="text-xl font-bold">{t.tipo}</p>
                  <p className="flex items-center justify-center gap-2 text-gray-700"><Calendar className="w-4 h-4" />{t.data}</p>
                  <p className="flex items-center justify-center gap-2 text-gray-700"><Clock className="w-4 h-4" />{t.horario}</p>
                  <p className="text-sm text-gray-500">{t.local}</p>
                  <p className="text-brand-navy font-bold text-2xl mt-2">{t.preco}</p>
                  <Button onClick={() => { setFormData({ ...formData, formato: t.tipo.toLowerCase().includes('online') ? 'online' : 'presencial' }); scrollToForm(); }} className="bg-brand-accent text-brand-navy font-bold w-full" aria-label="Garantir vaga">
                    Garantir vaga
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Garantia 7 dias, reembolso integral</h2>
        <p>Se o curso não atender às suas expectativas, devolvemos 100% do valor.</p>
      </section>

      <section className="py-20" id="material">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Material gratuito</h2>
          <a href="#" target="_blank" rel="noopener" aria-label="Baixar PDF">
            <Button className="bg-brand-accent text-brand-navy font-bold px-6 py-3">Baixe o PDF de introdução e descubra como já economizar 15 h/semana</Button>
          </a>
        </div>
      </section>

      <section id="inscricao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Inscreva-se agora</h2>
          {success ? (
            <div className="bg-green-100 p-6 rounded-xl text-center">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <p className="font-semibold text-green-700">Inscrição enviada com sucesso!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="nome">Nome completo</label>
                <input id="nome" name="nome" type="text" value={formData.nome} onChange={handleChange} required className="w-full rounded-lg border p-3" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border p-3" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="whatsapp">WhatsApp</label>
                <input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} required className="w-full rounded-lg border p-3" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="formato">Formato</label>
                <select id="formato" name="formato" value={formData.formato} onChange={handleChange} className="w-full rounded-lg border p-3">
                  <option value="presencial">Presencial</option>
                  <option value="online">Online</option>
                </select>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <Button type="submit" disabled={loading} className="bg-brand-accent text-brand-navy font-bold w-full py-3" aria-label="Confirmar inscrição">
                {loading ? 'Enviando...' : 'Confirmar Inscrição'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
