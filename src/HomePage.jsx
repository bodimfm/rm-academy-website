import { Card, CardHeader, CardContent, CardFooter } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { 
  GraduationCap, Users, Clock, Award, ArrowRight, Mail, Phone, MapPin, 
  Brain, Shield, Settings, TrendingUp, Star, CheckCircle, Play,
  BookOpen, Target, Zap, Building2
} from "lucide-react";

const courseCategories = [
  {
    id: "ia-dados",
    title: "Inteligência Artificial & Proteção de Dados",
    color: "from-blue-900 to-blue-700",
    instructor: {
      name: "Rafael Maciel",
      title: "Especialista em IA e Proteção de Dados",
      credentials: "Advogado • CIPP/E • Autor",
      avatar: "RM",
      experience: "10+ anos",
      certifications: ["CIPP/E", "Cybersecurity", "LGPD"]
    },
    description: "Transformação digital com segurança jurídica e compliance total",
    icon: Brain,
    courses: [
      {
        id: "ai-pratica",
        title: "IA PRÁTICA",
        subtitle: "Transforme desafios em ganhos mensuráveis com IA aplicada",
        duration: "8h aula + 2h mentoria",
        maxStudents: 25,
        price: "Sob consulta",
        level: "Intermediário",
        description: [
          "Fundamentos de IA & tendências do mercado",
          "Mapeamento de oportunidades de automação",
          "Prompts eficazes e prototipagem low‑code",
          "ROI & governança LGPD completa",
          "Roteiro ágil de implantação prática"
        ],
        benefits: ["Certificado", "Material Exclusivo", "Suporte Pós-Curso"],
        icon: "🤖"
      },
      {
        id: "risco-si",
        title: "Gestão de Riscos em Segurança da Informação",
        subtitle: "Metodologias e ferramentas para reduzir riscos cibernéticos",
        duration: "8h aula + 2h mentoria",
        maxStudents: 25,
        price: "Sob consulta",
        level: "Avançado",
        description: [
          "Frameworks ISO 27005 e NIST atualizados",
          "Classificação de ativos e cenários de risco",
          "Matriz probabilidade x impacto empresarial",
          "Controles técnicos e de processo avançados",
          "Plano de tratamento e KPIs mensuráveis"
        ],
        benefits: ["Certificado", "Templates", "Consultoria Inclusa"],
        icon: "🔒"
      }
    ]
  },
  {
    id: "gestao-processos",
    title: "Gestão & Processos Empresariais",
    color: "from-cyan-600 to-cyan-500",
    instructor: {
      name: "Gustavo Brasil",
      title: "Especialista em Gestão e Processos",
      credentials: "Mestre em Administração • Consultor • Coordenador Acadêmico",
      avatar: "GB",
      experience: "15+ anos",
      certifications: ["MBA", "Coaching", "PMP"]
    },
    description: "Otimização de processos e controle gerencial estratégico",
    icon: Settings,
    courses: [
      {
        id: "processos",
        title: "Gerenciamento de Processos",
        subtitle: "Estruture, otimize e monitore processos críticos",
        duration: "8h aula + 2h mentoria",
        maxStudents: 25,
        price: "Sob consulta",
        level: "Intermediário",
        description: [
          "Mapeamento BPMN 2.0 profissional",
          "Indicadores de desempenho (KPIs) estratégicos",
          "Automação de workflows inteligentes",
          "Cultura de melhoria contínua sustentável",
          "Governança e compliance empresarial"
        ],
        benefits: ["Certificado", "Software BPMN", "Cases Reais"],
        icon: "⚙️"
      },
      {
        id: "controller",
        title: "Controller e Indicadores Financeiros",
        subtitle: "Controle gerencial moderno e data‑driven",
        duration: "8h aula + 2h mentoria",
        maxStudents: 25,
        price: "Sob consulta",
        level: "Avançado",
        description: [
          "Estrutura de dashboards financeiros modernos",
          "Análise de viabilidade e custos estratégicos",
          "Indicadores de liquidez e rentabilidade",
          "Cenários e forecast com IA integrada",
          "Reporting executivo para stakeholders"
        ],
        benefits: ["Certificado", "Planilhas Pro", "Mentoria 1:1"],
        icon: "📊"
      }
    ]
  }
];

const stats = [
  { number: "500+", label: "Profissionais Capacitados", icon: Users },
  { number: "2", label: "Áreas de Especialização", icon: Target },
  { number: "4", label: "Cursos Especializados", icon: BookOpen },
  { number: "25", label: "Máximo por Turma", icon: GraduationCap }
];

const benefits = [
  {
    icon: Award,
    title: "Certificação Reconhecida",
    description: "Certificados com validade no mercado corporativo"
  },
  {
    icon: Users,
    title: "Turmas Reduzidas",
    description: "Máximo 25 alunos para atenção personalizada"
  },
  {
    icon: Zap,
    title: "Metodologia Prática",
    description: "Foco em aplicação real e resultados mensuráveis"
  },
  {
    icon: Building2,
    title: "In Company",
    description: "Treinamentos personalizados na sua empresa"
  }
];

// Enhanced Logo Component
const RMLogo = ({ size = "default" }) => {
  const sizes = {
    small: { container: "w-8 h-8", text: "text-lg", sub: "text-xs" },
    default: { container: "w-12 h-12", text: "text-2xl", sub: "text-sm" },
    large: { container: "w-16 h-16", text: "text-3xl", sub: "text-lg" }
  };
  
  const currentSize = sizes[size];
  
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className={`${currentSize.container} bg-gradient-to-br from-blue-900 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg`}>
          <GraduationCap className={`${currentSize.container.replace('w-', 'w-').replace('h-', 'h-').replace(/\d+/, (match) => Math.floor(parseInt(match) * 0.6))} text-white`} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`${currentSize.text} font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent`}>RM</span>
        <span className={`${currentSize.sub} font-semibold text-cyan-600 -mt-1`}>Academy</span>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <RMLogo />
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-300 hover:scale-105">Início</a>
              <a href="#cursos" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-300 hover:scale-105">Cursos</a>
              <a href="#professores" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-300 hover:scale-105">Professores</a>
              <a href="#sobre" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-300 hover:scale-105">Sobre</a>
              <a href="#contato" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-300 hover:scale-105">Contato</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-cyan-600/5 to-blue-900/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <RMLogo size="large" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 bg-clip-text text-transparent">
                Cursos In Company
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 mb-4 font-light">
              Gestão em Processos & Inteligência Artificial
            </p>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforme sua equipe com treinamentos especializados que geram resultados reais e mensuráveis para sua empresa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500 text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Play className="mr-3 w-6 h-6" />
                Conheça Nossos Cursos
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-lg px-10 py-6 transition-all duration-300">
                <Mail className="mr-3 w-6 h-6" />
                Solicitar Proposta
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm border-y border-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-900 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent mb-6">
              Por que escolher a RM Academy?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossa metodologia exclusiva combina expertise técnica com aplicação prática
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-900 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Pronto para Transformar sua Equipe?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossos cursos podem gerar resultados reais para sua empresa
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-3 w-6 h-6" />
              Solicitar Orçamento Gratuito
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-cyan-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">RM</span>
                    <span className="text-sm font-medium -mt-1">Academy</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Especializada em capacitação corporativa com foco em gestão de processos e inteligência artificial.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Nossos Cursos</h4>
              <ul className="space-y-3 text-white/80">
                <li>IA Prática</li>
                <li>Gestão de Riscos SI</li>
                <li>Gerenciamento de Processos</li>
                <li>Controller Financeiro</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Contato</h4>
              <div className="space-y-3 text-white/80">
                <p>contato@rmacademy.com.br</p>
                <p>(11) 9999-9999</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} RM Academy. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
