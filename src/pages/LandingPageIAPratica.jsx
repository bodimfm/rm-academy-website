import React, { useState } from 'react';
import { Button } from '../components/ui/button';

export default function LandingPageIAPraticaProfissionais() {
  const modulos = [
    {
      titulo: 'Fundamentos e Estratégia',
      subtitulo: 'Entenda como funciona e onde aplicar',
      topicos: [
        'Funcionamento das soluções de IA para extrair o melhor resultado',
        'Cuidados com dados dos clientes e exposição dos riscos',
        'Mapeamento de oportunidades e gargalos',
        'Panorama de soluções disponíveis',
        'Como escolher o modelo de IA ideal',
        'Prompts eficientes para gestão, marketing e vendas',
        'Deep Research: pesquisa profunda com sabedoria',
      ],
    },
    {
      titulo: 'Prática e Automação',
      subtitulo: 'Mão na massa com casos reais',
      topicos: [
        'Assistentes personalizados para sua rotina',
        'Ambiente de produção configurado',
        'Atualização constante de conhecimento',
        'Comunicação eficiente com clientes',
        'Integração de arquivos e relatórios (MCPs)',
        'Agentes de IA: Manus, Operator e autônomos',
        'Automação com e sem IA passo a passo',
      ],
      exemplos: [
        'E‑mail e reuniões otimizadas',
        'Respostas a reviews em 15 segundos',
        'Coaching de equipe com IA',
        'Inteligência de mercado automatizada',
      ],
    },
    {
      titulo: 'Oficina Hands‑On',
      subtitulo: 'Crie sua solução personalizada',
      topicos: [
        'Definição clara do problema a resolver',
        'Escolha da melhor solução (custo × benefício)',
        'Implementação com ferramentas simples',
        'Material exclusivo pós‑oficina',
        'Suporte por 15 dias via grupo exclusivo',
      ],
      bonus: [
        'ZIP com templates e prompts',
        'Vídeo‑tutorial de 5 minutos',
        'Canvas de implementação',
        'Banco de respostas prontas',
      ],
    },
  ];
  const beneficios = [
    {
      titulo: 'Economize 20h/mês',
      desc: 'Automatize tarefas repetitivas e foque no estratégico',
    },
    {
      titulo: 'Aumente vendas em 35%',
      desc: 'Com comunicação personalizada e análises precisas',
    },
    {
      titulo: '100% Seguro e Ético',
      desc: 'Proteja dados dos clientes e cumpra regulamentações',
    },
  ];
  const exemplosReais = [
    {
      cargo: 'Médico',
      problema: 'Perdia 2h/dia com relatórios',
      solucao: 'IA gera laudos em 5 minutos',
      resultado: '+10 pacientes/dia',
    },
    {
      cargo: 'Advogado',
      problema: 'Pesquisa jurisprudencial demorada',
      solucao: 'IA busca e resume casos similares',
      resultado: '80% mais rápido',
    },
    {
      cargo: 'Gestor de Vendas',
      problema: 'Relatórios manuais semanais',
      solucao: 'Dashboard automático com insights',
      resultado: 'Decisões 3x mais rápidas',
    },
    {
      cargo: 'Dentista',
      problema: 'Baixo engajamento pós‑consulta',
      solucao: 'Follow‑up automático personalizado',
      resultado: '40% mais retornos',
    },
  ];
  const formatos = [
    {
      tipo: 'Presencial – São Paulo',
      data: '15 de Fevereiro',
      horario: '9h às 18h',
      local: 'Av. Paulista – SP',
      preco: 'R$ 997',
      features: [
        '8h de imersão total',
        'Coffee breaks inclusos',
        'Networking presencial',
        'Material impresso + digital',
        'Certificado na hora',
      ],
      vagas: 'Últimas 8 vagas!',
    },
    {
      tipo: 'Online ao Vivo',
      data: '22 de Fevereiro',
      horario: '9h às 18h',
      local: 'Zoom',
      preco: 'R$ 697',
      features: [
        '8h de imersão total',
        'Networking virtual',
        'Acesso às gravações por 30 dias',
        'Material digital completo',
        'Certificado digital',
      ],
      vagas: 'Vagas ilimitadas',
    },
  ];
  const [selectedModule, setSelectedModule] = useState(0);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', empresa: '', cargo: '', formato: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ nome: '', email: '', telefone: '', empresa: '', cargo: '', formato: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Erro ao enviar inscrição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          IA PRÁTICA para Profissionais
        </h1>
        <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
          Capacite‑se em Inteligência Artificial aplicada à sua área com um programa
          focado em resultados e segurança.
        </p>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((b) => (
              <div key={b.titulo} className="p-6 border border-slate-200 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{b.titulo}</h3>
                <p className="text-slate-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Programa do Curso</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {modulos.map((m, index) => (
              <Button
                key={m.titulo}
                variant={selectedModule === index ? 'primary' : 'outline'}
                onClick={() => setSelectedModule(index)}
              >
                {m.titulo}
              </Button>
            ))}
          </div>
          <div className="border border-slate-200 p-6 rounded-lg bg-slate-50">
            <h3 className="text-2xl font-semibold mb-2">{modulos[selectedModule].titulo}</h3>
            <p className="text-slate-700 mb-4">{modulos[selectedModule].subtitulo}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {modulos[selectedModule].topicos.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {modulos[selectedModule].exemplos && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Exemplos:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {modulos[selectedModule].exemplos.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
            {modulos[selectedModule].bonus && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Bônus:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {modulos[selectedModule].bonus.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Casos de Uso Reais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exemplosReais.map((ex) => (
              <div key={ex.cargo} className="p-6 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-1">{ex.cargo}</h3>
                <p className="text-slate-700 mb-1">Problema: {ex.problema}</p>
                <p className="text-slate-700 mb-1">Solução: {ex.solucao}</p>
                <p className="text-slate-700 font-semibold">Resultado: {ex.resultado}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Escolha o Formato Ideal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formatos.map((f) => (
              <div key={f.tipo} className="p-6 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{f.tipo}</h3>
                <p className="text-slate-700 mb-1">{f.data}</p>
                <p className="text-slate-700 mb-1">{f.horario}</p>
                <p className="text-slate-700 mb-1">{f.local}</p>
                <p className="text-slate-900 font-semibold mb-2">{f.preco}</p>
                <ul className="list-disc list-inside space-y-1 mb-2 text-slate-700">
                  {f.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <p className="text-sm text-red-600 mb-4">{f.vagas}</p>
                <Button onClick={() => setFormData({ ...formData, formato: f.tipo })}>
                  Selecionar
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Inscreva‑se agora</h2>
          {success && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded text-center">
              Inscrição realizada com sucesso!
            </div>
          )}
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-800 rounded text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="p-2 border border-slate-300 rounded"
              placeholder="Nome completo"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-slate-300 rounded"
              placeholder="E‑mail"
              required
            />
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="p-2 border border-slate-300 rounded"
              placeholder="Telefone"
            />
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="p-2 border border-slate-300 rounded"
              placeholder="Empresa"
            />
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              className="p-2 border border-slate-300 rounded"
              placeholder="Cargo"
            />
            <select
              name="formato"
              value={formData.formato}
              onChange={handleChange}
              className="p-2 border border-slate-300 rounded"
              required
            >
              <option value="">Escolha o formato</option>
              {formatos.map((f) => (
                <option key={f.tipo} value={f.tipo}>
                  {f.tipo}
                </option>
              ))}
            </select>
            <div className="md:col-span-2">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Enviando...' : 'Confirmar inscrição'}
              </Button>
            </div>
          </form>
        </section>
        <section className="text-center bg-slate-50 p-8 rounded">
          <h2 className="text-2xl font-semibold mb-4">Garantia de Satisfação</h2>
          <p className="text-slate-700">
            Se não estiver satisfeito em até 7 dias, devolvemos 100% do seu investimento.
          </p>
        </section>
      </div>
    </div>
  );
}