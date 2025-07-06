import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, Clock, Users, Star, ChevronRight, CheckCircle, 
  Award, Shield, Zap, Brain, MessageSquare, FileText,
  TrendingUp, Lock, Timer, Lightbulb, DollarSign,
  Video, Monitor, BookOpen, ChevronDown, ArrowRight,
  Briefcase, Target, Cog, BarChart, Mail, Bot
} from 'lucide-react'
import { crmFunctions } from '../config/supabase'
import LogoAdaptive from '../components/LogoAdaptive'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'

const LandingPageIAPraticaProfissionais = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    formato: 'presencial' // presencial ou online
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedModule, setSelectedModule] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const novoCliente = await crmFunctions.criarLead({
        ...formData,
        cargo: formData.cargo || 'Profissional Liberal/Gestor'
      })
      
      if (novoCliente && novoCliente[0] && novoCliente[0].cliente_id) {
        await crmFunctions.registrarInteracao(
          novoCliente[0].cliente_id,
          'inscricao_ia_pratica_profissionais',
          `Interesse no curso IA Prática para Profissionais - Formato: ${formData.formato}`
        )
      }

      setSuccess(true)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        cargo: '',
        formato: 'presencial'
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

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  const modulos = [
    {
      titulo: "Fundamentos e Estratégia",
      subtitulo: "Entenda como funciona e onde aplicar",
      topicos: [
        "Funcionamento das soluções de IA para extrair o melhor resultado",
        "Cuidados com dados dos clientes - exposição dos riscos",
        "Mapeamento de oportunidades e gargalos",
        "Panorama de soluções disponíveis",
        "Como escolher o modelo de IA ideal",
        "Prompts eficientes para gestão, marketing e vendas",
        "Deep Research: pesquisa profunda com sabedoria"
      ],
      icone: <Brain className="w-6 h-6" />
    },
    {
      titulo: "Prática e Automação",
      subtitulo: "Mão na massa com casos reais",
      topicos: [
        "Assistentes personalizados para sua rotina",
        "Ambiente de produção configurado",
        "Atualização constante de conhecimento",
        "Comunicação eficiente com clientes",
        "Integração de arquivos e relatórios (MCPs)",
        "Agentes de IA: Manus, Operator e autônomos",
        "Automação com e sem IA passo a passo"
      ],
      exemplos: [
        "E-mail e reuniões otimizadas",
        "Respostas a reviews em 15 segundos",
        "Coaching de equipe com IA",
        "Inteligência de mercado automatizada"
      ],
      icone: <Cog className="w-6 h-6" />
    },
    {
      titulo: "Oficina Hands-On",
      subtitulo: "Crie sua solução personalizada",
      topicos: [
        "Definição clara do problema a resolver",
        "Escolha da melhor solução (custo × benefício)",
        "Implementação com ferramentas simples",
        "Material exclusivo pós-oficina",
        "Suporte por 15 dias via grupo exclusivo"
      ],
      bonus: [
        "ZIP com templates e prompts",
        "Vídeo-tutorial de 5 minutos",
        "Canvas de implementação",
        "Banco de respostas prontas"
      ],
      icone: <Target className="w-6 h-6" />
    }
  ]

  const beneficios = [
    {
      icone: <Timer className="w-8 h-8" />,
      titulo: "Economize 20h/mês",
      desc: "Automatize tarefas repetitivas e foque no estratégico"
    },
    {
      icone: <TrendingUp className="w-8 h-8" />,
      titulo: "Aumente vendas em 35%",
      desc: "Com comunicação personalizada e análises precisas"
    },
    {
      icone: <Shield className="w-8 h-8" />,
      titulo: "100% Seguro e Ético",
      desc: "Proteja dados dos clientes e cumpra regulamentações"
    }
  ]

  const exemplosReais = [
    {
      cargo: "Médico",
      problema: "Perdia 2h/dia com relatórios",
      solucao: "IA gera laudos em 5 minutos",
      resultado: "+10 pacientes/dia"
    },
    {
      cargo: "Advogado",
      problema: "Pesquisa jurisprudencial demorada",
      solucao: "IA busca e resume casos similares",
      resultado: "80% mais rápido"
    },
    {
      cargo: "Gestor de Vendas",
      problema: "Relatórios manuais semanais",
      solucao: "Dashboard automático com insights",
      resultado: "Decisões 3x mais rápidas"
    },
    {
      cargo: "Dentista",
      problema: "Baixo engajamento pós-consulta",
      solucao: "Follow-up automático personalizado",
      resultado: "40% mais retornos"
    }
  ]

  const formatos = [
    {
      tipo: "Presencial São Paulo",
      icone: <Users className="w-8 h-8" />,
      data: "15 de Fevereiro",
      horario: "9h às 18h",
      local: "Av. Paulista - SP",
      preco: "R$ 997",
      features: [
        "8h de imersão total",
        "Coffee breaks inclusos",
        "Networking presencial",
        "Material impresso + digital",
        "Certificado na hora"
      ],
      vagas: "Últimas 8 vagas!"
    },
    {
      tipo: "Online ao Vivo",
      icone: <Video className="w-8 h-8" />,
      data: "22 de Fevereiro",
      horario: "9h às 18h",
      local: "Zoom",
      preco: "R$ 697",
      features: [
        "Participação em tempo real",
        "Gravação por 30 dias",
        "Interação via chat",
        "Material digital completo",
        "Certificado digital"
      ],
      vagas: "15 vagas restantes"
    }
  ]

  const faqs = [
    {
      pergunta: "Preciso saber programar ou ser técnico?",
      resposta: "Não! O curso é 100% prático e voltado para profissionais liberais e gestores. Todas as ferramentas são intuitivas e não requerem conhecimento técnico."
    },
    {
      pergunta: "Quanto tempo leva para ver resultados?",
      resposta: "Os primeiros resultados aparecem na própria semana do curso. Nossos alunos relatam economia de 5-10 horas já na primeira semana de aplicação."
    },
    {
      pergunta: "As ferramentas são pagas?",
      resposta: "Trabalhamos com opções gratuitas e pagas. Durante o curso, você aprenderá a escolher as melhores ferramentas para seu orçamento e necessidades."
    },
    {
      pergunta: "E se eu não conseguir implementar sozinho?",
      resposta: "Você terá 15 dias de suporte via grupo exclusivo para tirar dúvidas. Além disso, os materiais incluem passo a passo detalhado."
    },
    {
      pergunta: "O certificado é válido?",
      resposta: "Sim! Certificado de 8 horas válido para progressão profissional e aceito em conselhos de classe."
    },
    {
      pergunta: "Posso aplicar no meu nicho específico?",
      resposta: "Com certeza! A Parte 3 é uma oficina hands-on onde criamos soluções específicas para cada participante."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <LogoAdaptive className="h-10 w-auto" />
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          >
            Garanta sua vaga
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-800 dark:text-blue-200 font-semibold">
              Para Profissionais Liberais e Gestores
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            IA Prática: Transforme sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Produtividade em 1 Dia
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Curso intensivo presencial ou online para dominar IA sem tecniquês
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">Próximas turmas: 15 e 22/Fev</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">8 horas de conteúdo</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">Turmas pequenas</span>
            </div>
          </div>
          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg px-8 py-6"
          >
            Quero minha vaga
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Problema/Solução */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Você se identifica com alguma dessas situações?
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6"
              >
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">Antes do curso:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>❌ Perde horas com tarefas repetitivas</li>
                  <li>❌ Não sabe por onde começar com IA</li>
                  <li>❌ Medo de expor dados dos clientes</li>
                  <li>❌ Concorrência usando IA e você não</li>
                  <li>❌ Relatórios manuais demorados</li>
                </ul>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6"
              >
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">Depois do curso:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✅ Automatiza tarefas em minutos</li>
                  <li>✅ Domina as melhores ferramentas de IA</li>
                  <li>✅ Implementa IA com segurança total</li>
                  <li>✅ Sai na frente da concorrência</li>
                  <li>✅ Gera insights em segundos</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resultados comprovados
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {beneficios.map((beneficio, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {beneficio.icone}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {beneficio.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Exemplos Reais */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Cases reais de alunos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {exemplosReais.map((exemplo, idx) => (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <h4 className="ml-3 font-bold text-gray-900 dark:text-white">{exemplo.cargo}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-600 dark:text-red-400">
                      <span className="font-semibold">Problema:</span> {exemplo.problema}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400">
                      <span className="font-semibold">Solução:</span> {exemplo.solucao}
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-bold">
                      <span className="font-semibold">Resultado:</span> {exemplo.resultado}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Curso */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Conteúdo completo do curso
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              3 partes práticas para transformar sua rotina
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {modulos.map((modulo, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedModule(idx)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedModule === idx
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {modulo.icone}
                  <span>Parte {idx + 1}: {modulo.titulo}</span>
                </button>
              ))}
            </div>

            {/* Conteúdo da Tab */}
            <motion.div
              key={selectedModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {modulos[selectedModule].titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {modulos[selectedModule].subtitulo}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    O que você vai aprender:
                  </h4>
                  <ul className="space-y-3">
                    {modulos[selectedModule].topicos.map((topico, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{topico}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {modulos[selectedModule].exemplos && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Exemplos práticos:
                    </h4>
                    <ul className="space-y-3">
                      {modulos[selectedModule].exemplos.map((exemplo, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{exemplo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {modulos[selectedModule].bonus && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Material incluso:
                    </h4>
                    <ul className="space-y-3">
                      {modulos[selectedModule].bonus.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Datas e Formatos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Próximas turmas abertas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Vagas limitadas para garantir atenção personalizada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formatos.map((formato, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        {formato.icone}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {formato.tipo}
                      </h3>
                      <div className="space-y-1 text-gray-600 dark:text-gray-300">
                        <p className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formato.data}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          {formato.horario}
                        </p>
                        <p className="text-sm">{formato.local}</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-3xl font-bold text-blue-600">{formato.preco}</p>
                        <p className="text-sm text-gray-500">ou 3x sem juros</p>
                      </div>
                      <div className="mt-2">
                        <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
                          {formato.vagas}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {formato.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => {
                        setFormData({ ...formData, formato: formato.tipo.toLowerCase().includes('online') ? 'online' : 'presencial' })
                        scrollToForm()
                      }}
                    >
                      Garantir vaga
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Garantia de 7 dias
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Se você participar do curso e não ficar satisfeito, devolvemos 100% do seu investimento. 
                Sem perguntas, sem burocracia.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Risco zero</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Garantia incondicional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Reembolso integral</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dúvidas frequentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.pergunta}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-b-lg"
                  >
                    <p className="text-gray-600 dark:text-gray-300">{faq.resposta}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                Garanta sua vaga agora
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Turmas limitadas a 25 alunos para garantir qualidade
              </p>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                    Inscrição realizada com sucesso!
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    Em breve você receberá um e-mail com todas as informações.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Empresa/Consultório
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Cargo/Profissão
                      </label>
                      <input
                        type="text"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Ex: Médico, Advogado, Gestor..."
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Formato preferido *
                      </label>
                      <select
                        name="formato"
                        value={formData.formato}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      >
                        <option value="presencial">Presencial - São Paulo</option>
                        <option value="online">Online ao Vivo</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 text-lg font-semibold"
                  >
                    {loading ? 'Enviando...' : 'Confirmar Inscrição'}
                  </Button>

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.</p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Não perca mais tempo com tarefas manuais
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Enquanto você lê isso, seus concorrentes já estão usando IA. 
              Junte-se aos profissionais que estão na vanguarda.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={scrollToForm}
            >
              Quero transformar minha produtividade
              <ArrowRight className="ml-2" />
            </Button>
            <div className="mt-8 flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certificado incluso</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Suporte por 15 dias</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPageIAPraticaProfissionais