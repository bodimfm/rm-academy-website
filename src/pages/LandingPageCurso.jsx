import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Star, ChevronRight } from 'lucide-react'
import { crmFunctions } from '../config/supabase'

const LandingPageCurso = ({ cursoId }) => {
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

  // Dados mockados para exemplo - substitua com dados reais do Supabase
  const cursoExemplo = curso || {
    titulo: "LGPD e Proteção de Dados para Advogados",
    descricao: "Domine a Lei Geral de Proteção de Dados e transforme seu escritório em referência em compliance digital.",
    duracao_horas: 40,
    preco: 1997,
    formato: "Online ao vivo"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              {cursoExemplo.titulo}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              {cursoExemplo.descricao}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{cursoExemplo.duracao_horas} horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{cursoExemplo.formato}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 (127 avaliações)</span>
              </div>
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
                  {[
                    "Fundamentos da LGPD e princípios de proteção de dados",
                    "Como implementar um programa de compliance no escritório",
                    "Elaboração de políticas de privacidade e termos de uso",
                    "Gestão de incidentes e vazamento de dados",
                    "DPO: quando indicar e como atuar",
                    "Sanções e fiscalização da ANPD"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-indigo-600 mt-0.5" />
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
                      <li>• Advogados que querem se especializar</li>
                      <li>• Escritórios em busca de diferenciação</li>
                      <li>• Profissionais de compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pré-requisitos:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Conhecimento básico de Direito</li>
                      <li>• Interesse em tecnologia</li>
                      <li>• Vontade de inovar</li>
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
                    R$ {cursoExemplo.preco?.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-gray-600">ou 12x sem juros</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="WhatsApp"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Escritório/Empresa (opcional)"
                    />
                  </div>

                  {turmas.length > 0 && (
                    <div>
                      <select
                        name="turmaId"
                        value={formData.turmaId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
