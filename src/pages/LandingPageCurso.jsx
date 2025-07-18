import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Star, ChevronRight } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { crmFunctions } from '../config/supabase'
import LogoAdaptive from '../components/LogoAdaptive'

const LandingPageCurso = () => {
  const { cursoId } = useParams()
  
  // Mapeamento dos cursos
  const cursosData = {
    'governanca-processos': {
      titulo: "Governança e Controle de Processos Empresariais",
      descricao: "Capacite-se para implementar práticas eficazes de governança e controle de processos, visando a melhoria contínua e eficiência operacional.",
      duracao_horas: 16,
      preco: 5000,
      formato: "Presencial ou Online",
      instrutor: "Gustavo Brasil",
      conteudo: [
        "Fundamentos da governança corporativa aplicada a processos",
        "Mapeamento e documentação de processos organizacionais",
        "Ferramentas e técnicas de controle de performance",
        "Implementação de sistemas de governança",
        "Gestão de riscos e melhoria contínua",
        "Integração com estratégias empresariais",
        "Softwares e metodologias para automatização"
      ],
      idealPara: [
        "Gestores e profissionais empresariais",
        "Analistas de processos",
        "Consultores organizacionais"
      ],
      preRequisitos: [
        "Experiência em gestão empresarial",
        "Conhecimento básico de processos",
        "Interesse em melhoria contínua"
      ]
    },
    'gestao-pratica': {
      titulo: "Gestão na Prática para Profissionais Liberais",
      descricao: "Base sólida para organizar, planejar, controlar e expandir seu negócio de forma eficiente e sustentável.",
      duracao_horas: 12,
      preco: 3500,
      formato: "Presencial ou Online",
      instrutor: "Gustavo Brasil",
      conteudo: [
        "Princípios fundamentais da gestão de pequenos negócios",
        "Organização financeira e precificação de serviços",
        "Fluxo de caixa e controle de despesas",
        "Plano de ação estratégico alinhado aos objetivos",
        "Marketing básico e posicionamento de marca",
        "Gestão do tempo e produtividade",
        "Obrigações legais e tributárias essenciais"
      ],
      idealPara: [
        "Profissionais liberais iniciantes",
        "Autônomos em crescimento",
        "Pequenos empresários"
      ],
      preRequisitos: [
        "Atuação como profissional liberal",
        "Vontade de organizar o negócio",
        "Comprometimento com a implementação"
      ]
    },
    'kpis-financeiros': {
      titulo: "KPIs Financeiros e Controladoria para gestão de resultados",
      descricao: "Utilize conceitos e ferramentas de controladoria e indicadores financeiros para decisões estratégicas e gestão eficiente.",
      duracao_horas: 12,
      preco: 5000,
      formato: "Presencial ou Online",
      instrutor: "Gustavo Brasil",
      conteudo: [
        "O papel da controladoria na gestão financeira",
        "Principais KPIs financeiros: margem, ponto de equilíbrio, ticket médio",
        "Ferramentas de controle gerencial e dashboards",
        "Análise crítica de dados financeiros",
        "Planejamento e acompanhamento de metas",
        "Estruturação financeira do negócio",
        "Tomada de decisão baseada em dados"
      ],
      idealPara: [
        "Gestores financeiros",
        "Controllers e analistas",
        "Empresários e executivos"
      ],
      preRequisitos: [
        "Conhecimento básico de finanças",
        "Experiência com gestão empresarial",
        "Interesse em análise de dados"
      ]
    },
    // Manter cursos existentes
    'risco-si': {
      titulo: "Gestão de Riscos em Segurança da Informação",
      descricao: "Metodologias para identificar, avaliar e mitigar riscos cibernéticos na sua empresa.",
      duracao_horas: 8,
      preco: 0,
      formato: "In-Company",
      instrutor: "Rafael Maciel",
      conteudo: [
        "ISO 27005 e framework NIST",
        "Identificação e classificação de ativos",
        "Análise de vulnerabilidades e ameaças",
        "Matriz de riscos e planos de ação",
        "Gestão de incidentes de segurança",
        "Indicadores e monitoramento contínuo"
      ],
      idealPara: [
        "Gestores de TI e segurança",
        "Analistas de riscos",
        "Profissionais de compliance"
      ],
      preRequisitos: [
        "Conhecimento básico de TI",
        "Noções de segurança da informação",
        "Visão estratégica do negócio"
      ]
    }
  }
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    turmaId: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [curso, setCurso] = useState(null)
  const [turmas, setTurmas] = useState([])

  useEffect(() => {
    carregarDadosCurso()
  }, [cursoId])

  const carregarDadosCurso = async () => {
    try {
      const cursos = await crmFunctions.buscarCursos()
      const cursoAtual = cursos.find(c => c.curso_id === cursoId)
      if (cursoAtual) {
        setCurso(cursoAtual)
        setTurmas(cursoAtual.turmas || [])
      }
    } catch (err) {
      console.error('Erro ao carregar curso:', err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Criar lead
      const [lead] = await crmFunctions.criarLead({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
        cargo: 'Interessado em curso'
      })

      // Registrar interesse no curso
      if (formData.turmaId && lead) {
        await crmFunctions.registrarInteresseCurso(
          lead.cliente_id,
          cursoId,
          formData.turmaId
        )
      }

      // Registrar interação
      await crmFunctions.registrarInteracao(
        lead.cliente_id,
        'inscricao_curso',
        `Interesse no curso: ${curso?.titulo || 'Curso'} - Turma: ${formData.turmaId}`
      )

      setSuccess(true)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        turmaId: ''
      })
      
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Erro ao enviar inscrição. Por favor, tente novamente.')
      console.error('Erro:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Usar dados do curso baseado no ID da URL
  const cursoAtual = cursosData[cursoId] || curso || {
    titulo: "Curso não encontrado",
    descricao: "O curso solicitado não foi encontrado. Por favor, verifique o link.",
    duracao_horas: 0,
    preco: 0,
    formato: "N/A",
    conteudo: [],
    idealPara: [],
    preRequisitos: []
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 container mx-auto px-4 py-6">
        <div className="flex items-center">
          <LogoAdaptive className="h-10 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              {cursoAtual.titulo}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              {cursoAtual.descricao}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{cursoAtual.duracao_horas} horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{cursoAtual.formato}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 (127 avaliações)</span>
              </div>
              {cursoAtual.instrutor && (
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Instrutor: {cursoAtual.instrutor}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">O que você vai aprender</h2>
                <div className="space-y-3">
                  {(cursoAtual.conteudo || []).map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Para quem é este curso</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Ideal para:</h3>
                    <ul className="space-y-2 text-gray-700">
                      {(cursoAtual.idealPara || []).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pré-requisitos:</h3>
                    <ul className="space-y-2 text-gray-700">
                      {(cursoAtual.preRequisitos || []).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-xl p-8 sticky top-8"
              >
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900">
                    {cursoAtual.preco > 0 
                      ? `R$ ${cursoAtual.preco?.toLocaleString('pt-BR')}`
                      : 'Sob consulta'
                    }
                  </p>
                  {cursoAtual.preco > 0 && (
                    <p className="text-gray-600">ou 12x sem juros</p>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-4">Garanta sua vaga</h3>

                {success && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                    Inscrição realizada com sucesso!
                  </div>
                )}

                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nome completo"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="E-mail"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="WhatsApp"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Escritório/Empresa (opcional)"
                    />
                  </div>

                  {turmas.length > 0 && (
                    <div>
                      <select
                        name="turmaId"
                        value={formData.turmaId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione uma turma</option>
                        {turmas.map((turma) => (
                          <option key={turma.turma_id} value={turma.turma_id}>
                            {turma.nome_turma} - {new Date(turma.data_inicio).toLocaleDateString('pt-BR')}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processando...' : 'Fazer inscrição'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao se inscrever, você concorda com nossos termos e política de privacidade
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Turma limitada a 25 alunos</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPageCurso
