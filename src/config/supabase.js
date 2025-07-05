import { createClient } from '@supabase/supabase-js'

// Configuração do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funções auxiliares para o CRM
export const crmFunctions = {
  // Criar novo lead/cliente
  async criarLead(dadosLead) {
    const { data, error } = await supabase
      .from('crm.clientes')
      .insert([{
        nome: dadosLead.nome,
        email: dadosLead.email,
        telefone: dadosLead.telefone,
        empresa: dadosLead.empresa,
        cargo: dadosLead.cargo,
        status_contato: 'novo'
      }])
      .select()
    
    if (error) {
      console.error('Erro ao criar lead:', error)
      throw error
    }
    return data
  },

  // Registrar interesse em curso
  async registrarInteresseCurso(clienteId, cursoId, turmaId) {
    const { data, error } = await supabase
      .from('inscricoes')
      .insert([{
        cliente_id: clienteId,
        turma_id: turmaId,
        status_pagamento: 'pendente'
      }])
      .select()
    
    if (error) throw error
    return data
  },

  // Registrar interação
  async registrarInteracao(clienteId, tipo, anotacoes) {
    const { data, error } = await supabase
      .from('interacoes')
      .insert([{
        cliente_id: clienteId,
        tipo: tipo,
        anotacoes: anotacoes
      }])
      .select()
    
    if (error) throw error
    return data
  },

  // Buscar cursos disponíveis
  async buscarCursos() {
    const { data, error } = await supabase
      .from('cursos')
      .select(`
        *,
        turmas (*)
      `)
      .order('data_criacao', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Buscar turmas disponíveis
  async buscarTurmasDisponiveis() {
    const { data, error } = await supabase
      .from('turmas')
      .select(`
        *,
        cursos (*)
      `)
      .gte('data_fim', new Date().toISOString())
      .order('data_inicio', { ascending: true })
    
    if (error) throw error
    return data
  }
}
