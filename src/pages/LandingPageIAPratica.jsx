import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, Clock, Users, Star, ChevronRight, CheckCircle, 
  Award, Shield, Zap, Brain, MessageSquare, FileText,
  TrendingUp, Lock, Timer, Lightbulb, DollarSign,
  Video, Monitor, BookOpen, ChevronDown, ArrowRight
} from 'lucide-react'
import { crmFunctions } from '../config/supabase'
import LogoAdaptive from '../components/LogoAdaptive'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'

const LandingPageIAPratica = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    formato: 'presencial' // presencial, online, gravado
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const novoCliente = await crmFunctions.criarLead({
        ...formData,
        cargo: formData.cargo || 'Interessado em IA Prática'
      })
      
      if (novoCliente && novoCliente[0] && novoCliente[0].cliente_id) {
        await crmFunctions.registrarInteracao(
          novoCliente[0].cliente_id,
          'inscricao_ia_pratica',
          `Interesse no curso IA Prática - Formato: ${formData.formato}`
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
    { titulo: "Fundamentos de IA", desc: "Conceitos essenciais sem tecniquês" },
    { titulo: "Mapeamento de Oportunidades", desc: "Identifique onde aplicar IA no seu negócio" },
    { titulo: "Prompts Eficazes", desc: "Domine a arte de conversar com IA" },
    { titulo: "Prototipagem Low-Code", desc: "Crie soluções sem programar" },
    { titulo: "ROI & Governança LGPD", desc: "Meça resultados e garanta conformidade" },
    { titulo: "Plano de Ação", desc: "Roteiro prático de implementação" }
  ]

  const formatos = [
    {
      tipo: "Presencial",
      icone: <Users className="w-8 h-8" />,
      preco: "R$ 1.497",
      features: [
        "8h de imersão total",
        "Networking com outros executivos",
        "Coffee breaks inclusos",
        "Material impresso"
      ],
      destaque: true
    },
    {
      tipo: "Online ao Vivo",
      icone: <Video className="w-8 h-8" />,
      preco: "R$ 997",
      features: [
        "Participação em tempo real",
        "Gravação por 30 dias",
        "Interação via chat",
        "Material digital"
      ]
    },
    {
      tipo: "Gravado",
      icone: <Monitor className="w-8 h-8" />,
      preco: "R$ 697",
      features: [
        "Acesso por 6 meses",
        "Assista no seu ritmo",
        "Suporte por email",
        "Material digital"
      ]
    }
  ]

  const depoimentos = [
    {
      nome: "Carlos Silva",
      cargo: "CEO, TechCorp",
      foto: "/api/placeholder/60/60",
      texto: "Economizei 30h/mês automatizando relatórios. ROI em 2 meses!"
    },
    {
      nome: "Ana Oliveira",
      cargo: "Diretora de Marketing",
      foto: "/api/placeholder/60/60",
      texto: "Finalmente entendi como usar IA sem depender da TI."
    },
    {
      nome: "Roberto Santos",
      cargo: "CFO, Indústria XYZ",
      foto: "/api/placeholder/60/60",
      texto: "Os templates de prompts valem o curso inteiro. Produtividade 3x maior."
    },
    {
      nome: "Juliana Costa",
      cargo: "Head de Inovação",
      foto: "/api/placeholder/60/60",
      texto: "Mentoria premium transformou nossa operação. Recomendo 100%!"
    }
  ]

  const faqs = [
    {
      pergunta: "Qual a carga horária do curso?",
      resposta: "O curso presencial tem 8 horas de duração (das 9h às 18h com intervalos). O formato online ao vivo é dividido em 2 dias de 4 horas. O gravado você faz no seu ritmo."
    },
    {
      pergunta: "Preciso saber programar?",
      resposta: "Não! O curso é 100% prático e voltado para profissionais de negócios. Usamos ferramentas no-code/low-code que qualquer pessoa consegue operar."
    },
    {
      pergunta: "Qual a política de reembolso?",
      resposta: "Garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do valor investido, sem perguntas."
    },
    {
      pergunta: "O certificado é reconhecido?",
      resposta: "Sim, certificado com 8 horas de carga horária, válido para progressão profissional e aceito em empresas parceiras."
    },
    {
      pergunta: "Como funciona o suporte pós-curso?",
      resposta: "Acesso ao grupo VIP no WhatsApp por 90 dias para tirar dúvidas e trocar experiências com outros alunos e instrutores."
    },
    {
      pergunta: "Qual a diferença da versão Premium?",
      resposta: "Além do curso completo, você tem direito a 3 sessões individuais de mentoria (1h cada) para implementar IA no seu negócio específico."
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
            Inscreva-se Agora
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Aplique Inteligência Artificial de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Verdade em 1 Dia
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Curso 100% prático para profissionais que não têm tempo a perder.
          </p>
          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg px-8 py-6"
          >
            Garanta sua vaga
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Prova & Dor */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-6 py-3 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-blue-800 dark:text-blue-200 font-semibold">
                  Executivos que usam IA relatam economia média de 25h/mês
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Você ainda faz manualmente tarefas que poderiam ser automatizadas?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Enquanto você perde tempo com processos repetitivos, seus concorrentes 
                já estão usando IA para tomar decisões mais rápidas e precisas.
              </p>
            </motion.div>
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
              O que você ganha aplicando IA
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                +Tempo Livre
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatize tarefas repetitivas e foque no que realmente importa
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Decisões +Rápidas
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Análises instantâneas para tomadas de decisão mais assertivas
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Conformidade LGPD
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implemente IA respeitando todas as normas de privacidade
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              6 módulos práticos que transformam teoria em resultados
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {modulos.map((modulo, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start mb-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {idx + 1}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {modulo.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {modulo.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos e Datas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha o formato ideal para você
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formatos.map((formato, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`h-full relative ${formato.destaque ? 'ring-2 ring-blue-600 shadow-xl' : ''}`}>
                  {formato.destaque && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        {formato.icone}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {formato.tipo}
                      </h3>
                      <div className="text-3xl font-bold text-blue-600">
                        {formato.preco}
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
                      className={`w-full ${formato.destaque ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={formato.destaque ? 'default' : 'outline'}
                      onClick={() => {
                        setFormData({ ...formData, formato: formato.tipo.toLowerCase().replace(' ', '_') })
                        scrollToForm()
                      }}
                    >
                      Escolher {formato.tipo}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus Exclusivos */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Bônus Exclusivos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Grupo VIP WhatsApp
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                90 dias de suporte direto com instrutores e networking
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Templates de Prompts
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +50 prompts testados para diversas áreas de negócio
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Certificado Reconhecido
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Válido para progressão profissional e LinkedIn
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Versão Premium */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">Versão Premium</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mentoria Individual Guiada
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Além do curso completo, tenha 3 sessões individuais de 1h 
                para implementar IA no seu negócio específico
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-3xl font-bold">
                  De <s className="text-white/60">R$ 3.997</s> por R$ 2.497
                </div>
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  onClick={scrollToForm}
                >
                  Quero versão Premium
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O que dizem nossos alunos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {depoimentos.map((depoimento, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={depoimento.foto} 
                        alt={depoimento.nome}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {depoimento.nome}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {depoimento.cargo}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "{depoimento.texto}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Perguntas Frequentes
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
                Vagas limitadas para garantir qualidade e atenção personalizada
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
                        Empresa
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
                        Cargo
                      </label>
                      <input
                        type="text"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
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
                        <option value="presencial">Presencial</option>
                        <option value="online_ao_vivo">Online ao Vivo</option>
                        <option value="gravado">Gravado</option>
                        <option value="premium">Premium com Mentoria</option>
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
              Pronto para colocar a IA para trabalhar por você?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de executivos que já transformaram 
              suas rotinas com inteligência artificial
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={scrollToForm}
            >
              Inscrever agora
              <ArrowRight className="ml-2" />
            </Button>
            <div className="mt-8 flex justify-center items-center space-x-6">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                <span>Dados Protegidos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPageIAPratica