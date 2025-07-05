import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Video, Users, CheckCircle, AlertCircle } from 'lucide-react'
import { crmFunctions } from '../config/supabase'
import LogoAdaptive from '../components/LogoAdaptive'

const LandingPageWebinar = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Dados do webinar
  const webinar = {
    titulo: "Como usar IA no seu Escritório de Advocacia",
    subtitulo: "Descubra as ferramentas e estratégias para automatizar processos e aumentar a produtividade",
    data: "15 de Janeiro de 2025",
    horario: "19h às 21h",
    palestrante: "Dr. Rafael Maciel",
    cargo: "Advogado especialista em Direito Digital e IA"
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
        cargo: 'Participante Webinar'
      })

      // Registrar interação
      await crmFunctions.registrarInteracao(
        lead.cliente_id,
        'inscricao_webinar',
        `Inscrição no webinar: ${webinar.titulo}`
      )

      setSuccess(true)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: ''
      })
      
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Erro ao realizar inscrição. Por favor, tente novamente.')
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

  const beneficios = [
    "Conheça as principais ferramentas de IA para advocacia",
    "Aprenda a criar prompts eficazes para ChatGPT e Claude",
    "Descubra como automatizar contratos e petições",
    "Entenda os limites éticos e legais do uso de IA",
    "Receba um guia prático exclusivo",
    "Participe ao vivo e tire suas dúvidas"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center">
          <LogoAdaptive className="h-10 w-auto" />
        </div>
      </header>

      {/* Header Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Video className="h-4 w-4" />
            WEBINAR GRATUITO AO VIVO
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6"
          >
            {webinar.titulo}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          >
            {webinar.subtitulo}
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">07</div>
                <div className="text-gray-400 text-sm">DIAS</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="text-gray-400 text-sm">HORAS</div>
              </div>
              <div>
                <div className="text-3xl font-bold">45</div>
                <div className="text-gray-400 text-sm">MINUTOS</div>
              </div>
              <div>
                <div className="text-3xl font-bold">23</div>
                <div className="text-gray-400 text-sm">SEGUNDOS</div>
              </div>
            </div>
          </motion.div>

          {/* Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">O que você vai descobrir:</h2>
              <div className="space-y-4 mb-8">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{beneficio}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Sobre o palestrante:</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">{webinar.palestrante}</p>
                    <p className="text-gray-400 text-sm">{webinar.cargo}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white text-gray-900 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-2">
                Reserve sua vaga gratuita
              </h2>
              <p className="text-gray-600 mb-6">
                Vagas limitadas! Garanta a sua agora.
              </p>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Inscrição realizada! Verifique seu e-mail.</span>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    <span>{error}</span>
                  </div>
                </motion.div>
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
                    placeholder="Seu nome completo"
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
                    placeholder="Seu melhor e-mail"
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
                    placeholder="WhatsApp (com DDD)"
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? 'Reservando vaga...' : 'QUERO PARTICIPAR GRATUITAMENTE'}
                </button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{webinar.data}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{webinar.horario}</span>
                  </div>
                  <p>Ao se inscrever, você concorda em receber e-mails sobre o evento</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Junte-se a mais de 500 advogados inovadores</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400">Advogados treinados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Escritórios atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">4.9/5</div>
                <div className="text-gray-400">Avaliação média</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPageWebinar
