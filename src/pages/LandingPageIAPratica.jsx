import React, { useState } from 'react'
import LogoAdaptive from '../components/LogoAdaptive'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { CheckCircle, Calendar, Clock, Users } from 'lucide-react'

const partes = [
  {
    titulo: 'Parte 1 – Fundamentos',
    topicos: [
      'Entendendo o funcionamento das soluções para extrair o melhor resultado e não cometer gafes.',
      'Cuidados com os dados dos clientes — breve exposição dos riscos envolvidos.',
      'Mapeando oportunidades: como identificar processos rotineiros ou gargalos em que a IA pode ajudar.',
      'Panorama de soluções disponíveis que podem ser utilizadas na prática profissional.',
      'Qual modelo de IA utilizar.',
      'O que são prompts? Como formular prompts eficientes para tarefas de gestão, marketing, vendas e relacionamento com clientes.',
      'Modos de pesquisa profunda ("Deep Research"): como utilizar com sabedoria.'
    ]
  },
  {
    titulo: 'Parte 2 – Prática & Automação',
    topicos: [
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
    titulo: 'Parte 3 – Oficina Hands-On',
    topicos: [
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
    preco: 'R$ 997',
    local: 'Av. Paulista - SP'
  },
  {
    tipo: 'Online ao Vivo',
    data: '22 de Fevereiro',
    horario: '9h às 18h',
    preco: 'R$ 697',
    local: 'Zoom'
  }
]

export default function LandingPageIAPratica() {
  const [tab, setTab] = useState(0)
  const [formData, setFormData] = useState({ nome: '', email: '', whatsapp: '', formato: 'presencial' })
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); alert('Dados enviados!') }

  return (
    <div className="text-gray-900 font-sans">
      <header className="container flex items-center justify-between py-6">
        <LogoAdaptive className="h-10" />
        <Button aria-label="Garanta minha vaga" onClick={() => document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' })} className="bg-brand-accent text-brand-navy hover:bg-yellow-400">Garanta minha vaga</Button>
      </header>

      <section className="py-20 bg-brand-navy text-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">IA PRÁTICA: Transforme sua Produtividade em 1 Dia</h1>
            <p className="text-lg md:text-xl mb-6">Profissionais que ainda não aplicam IA desperdiçam até 15 h/semana em tarefas manuais. Mude esse jogo agora.</p>
            <Button aria-label="Garanta minha vaga" className="bg-brand-accent text-brand-navy hover:bg-yellow-400" onClick={() => document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' })}>Garanta minha vaga</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="identifica">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Você se identifica?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-6 space-y-2">
              <p>❌ Perde 15 h/semana em tarefas repetitivas.</p>
              <p>❌ Não sabe por onde começar com IA.</p>
              <p>❌ Medo de expor dados dos clientes.</p>
              <p>❌ Concorrentes já usam IA.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 space-y-2">
              <p>✅ Automatiza tarefas em minutos.</p>
              <p>✅ Domina as melhores ferramentas sem código.</p>
              <p>✅ Implementa IA com segurança (LGPD).</p>
              <p>✅ Sai na frente da concorrência.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados comprovados</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Economize 20 h/mês</h3>
                <p>Automatizando processos do dia a dia</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Aumente resultados em até 30%</h3>
                <p>Foque no estratégico com IA</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">100% Seguro & Ético</h3>
                <p>Implementação alinhada à LGPD</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 italic">"Recuperei o investimento em 3 semanas e ganho 6 h/mês" – Ricardo M.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="conteudo">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Conteúdo do Curso</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-4 mb-6">
              {partes.map((p,i) => (
                <button key={i} onClick={() => setTab(i)} className={`px-4 py-2 rounded-xl ${tab===i ? 'bg-brand-navy text-white' : 'bg-white border'}`}>{p.titulo}</button>
              ))}
            </div>
            <ul className="list-disc space-y-2 ml-5">
              {partes[tab].topicos.map((t,idx) => <li key={idx}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" id="turmas">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Próximas turmas</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {turmas.map((t,i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="text-2xl font-bold">{t.tipo}</h3>
                  <p className="flex justify-center items-center gap-2"><Calendar className="w-4 h-4" />{t.data}</p>
                  <p className="flex justify-center items-center gap-2"><Clock className="w-4 h-4" />{t.horario}</p>
                  <p>{t.local}</p>
                  <p className="text-3xl font-bold text-brand-navy">{t.preco}</p>
                  <Button aria-label="Garantir vaga" className="w-full bg-brand-navy text-white hover:bg-brand-accent hover:text-brand-navy" onClick={() => setFormData({ ...formData, formato: t.tipo.toLowerCase().includes('online') ? 'online' : 'presencial' })}>Garantir vaga</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white" id="garantia">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Garantia de 7 dias</h2>
          <p className="mb-6">Se não estiver satisfeito em até 7 dias, devolvemos 100% do seu investimento.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="material">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Material gratuito</h2>
          <p className="mb-6">Baixe o PDF de introdução e descubra como já economizar 15 h/semana.</p>
          <Button asChild className="bg-brand-accent text-brand-navy hover:bg-yellow-400">
            <a href="https://example.com/landing-kit-ia-pratica.pdf" target="_blank" rel="noopener">Baixar PDF</a>
          </Button>
        </div>
      </section>

      <section className="py-20" id="inscricao">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Formulário de inscrição</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="w-full border px-3 py-2 rounded" />
            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" className="w-full border px-3 py-2 rounded" />
            <input required name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="w-full border px-3 py-2 rounded" />
            <select name="formato" value={formData.formato} onChange={handleChange} className="w-full border px-3 py-2 rounded">
              <option value="presencial">Presencial - São Paulo</option>
              <option value="online">Online ao Vivo</option>
            </select>
            <Button type="submit" aria-label="Confirmar inscrição" className="w-full bg-brand-navy text-white hover:bg-brand-accent hover:text-brand-navy">Confirmar inscrição</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

