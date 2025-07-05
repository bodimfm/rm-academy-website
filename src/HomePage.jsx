import { useState, useEffect } from "react";
import LogoAdaptive from "./components/LogoAdaptive";
import { Card, CardHeader, CardContent, CardFooter } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Clock, ArrowRight, Mail, Phone, MapPin, 
  Star, CheckCircle, ChevronLeft, ChevronRight,
  Calendar, Menu, X, User, Facebook, Instagram,
  Linkedin, Youtube, ExternalLink
} from "lucide-react";

const onlineCourses = [
  {
    id: "cyber-crimes",
    title: "Aprenda a identificar autores de cibercrimes",
    description: "Estratégias e procedimentos práticos para identificação de autores de cibercrimes",
    instructor: "Rafael Maciel",
    price: "R$ 250,00",
    duration: "7 Aulas",
    category: "Cibersegurança",
    color: "from-red-600 to-orange-600",
    link: "https://rmacademy.io/courses/aprenda-a-identificar-autores-de-cibercrimes/"
  },
  {
    id: "onboarding-si",
    title: "Onboarding Segurança da Informação",
    description: "Vídeo em animação voltado para a conscientização sobre boas práticas",
    instructor: "Rafael Maciel",
    price: "R$ 9,90",
    duration: "1 Aula",
    category: "Segurança da Informação",
    color: "from-green-600 to-teal-600",
    link: "https://rmacademy.io/courses/onboarding-seguranca-da-informacao/"
  },
  {
    id: "fornecedores-dados",
    title: "Avaliar e Gerir Fornecedores de Dados Pessoais",
    description: "Como avaliar e gerir fornecedores para evitar riscos no compartilhamento de dados pessoais",
    instructor: "Rafael Maciel",
    price: "R$ 49,00",
    duration: "Curso Completo",
    category: "Privacidade",
    color: "from-purple-600 to-indigo-600",
    link: "https://rmacademy.io/courses/avaliar-e-gerir-fornecedores-de-dados-pessoais/"
  },
  {
    id: "consentimento",
    title: "Consentimento: Cuidados e Riscos",
    description: "Como obter um consentimento válido em proteção de dados pessoais",
    instructor: "Rafael Maciel",
    price: "R$ 19,00",
    duration: "1 Aula",
    category: "Proteção de Dados",
    color: "from-indigo-600 to-blue-600",
    link: "https://rmacademy.io/courses/consentimento-cuidados-e-riscos/"
  },
  {
    id: "direitos-imagem",
    title: "Direitos de Imagem e Autoral para Jornalistas",
    description: "Aspectos legais para jornalistas, influenciadores e criadores de conteúdo digital",
    instructor: "Rafael Maciel",
    price: "R$ 250,00",
    duration: "6 Aulas",
    category: "Direito Digital",
    color: "from-pink-600 to-purple-600",
    link: "https://rmacademy.io/courses/direitos-de-imagem-e-autoral-para-jornalistas/"
  },
  {
    id: "ecommerce-privacidade",
    title: "E-commerce: Desafios Jurídicos de Privacidade",
    description: "Cuidados necessários para sites seguros juridicamente em tempos de LGPD",
    instructor: "Rafael Maciel",
    price: "R$ 199,00",
    duration: "Curso Completo",
    category: "E-commerce",
    color: "from-yellow-600 to-orange-600",
    link: "https://rmacademy.io/courses/e-commerce-desafios-juridicos-de-privacidade/"
  }
];

const courses = [
  {
    id: "ai-pratica",
    category: "Inteligência Artificial",
    title: "IA PRÁTICA",
    subtitle: "Transforme desafios em ganhos mensuráveis",
    instructor: {
      name: "Rafael Maciel",
      title: "Especialista em IA e Proteção de Dados",
      avatar: "RM"
    },
    duration: "8h aula + 2h mentoria",
    price: "Sob consulta",
    image: "/api/placeholder/400/300",
    color: "from-blue-600 to-blue-800",
    highlights: ["Aplicação prática", "ROI mensurável", "LGPD compliant"]
  },
  {
    id: "risco-si",
    category: "Segurança da Informação",
    title: "Gestão de Riscos em SI",
    subtitle: "Metodologias para reduzir riscos cibernéticos",
    instructor: {
      name: "Rafael Maciel",
      title: "CIPP/E • Cybersecurity Expert",
      avatar: "RM"
    },
    duration: "8h aula + 2h mentoria",
    price: "Sob consulta",
    image: "/api/placeholder/400/300",
    color: "from-blue-600 to-indigo-700",
    highlights: ["ISO 27005", "NIST Framework", "Cases reais"]
  },
  {
    id: "processos",
    category: "Gestão Empresarial",
    title: "Gerenciamento de Processos",
    subtitle: "Estruture e otimize processos críticos",
    instructor: {
      name: "Gustavo Brasil",
      title: "Mestre em Administração",
      avatar: "GB"
    },
    duration: "8h aula + 2h mentoria",
    price: "Sob consulta",
    image: "/api/placeholder/400/300",
    color: "from-purple-600 to-pink-700",
    highlights: ["BPMN 2.0", "KPIs estratégicos", "Automação"]
  },
  {
    id: "controller",
    category: "Finanças",
    title: "Controller Financeiro",
    subtitle: "Controle gerencial moderno e data-driven",
    instructor: {
      name: "Gustavo Brasil",
      title: "Consultor Financeiro",
      avatar: "GB"
    },
    duration: "8h aula + 2h mentoria",
    price: "Sob consulta",
    image: "/api/placeholder/400/300",
    color: "from-amber-600 to-orange-700",
    highlights: ["Dashboards", "IA aplicada", "Forecast"]
  }
];

const testimonials = [
  {
    name: "Ana Silva",
    role: "Diretora de TI",
    company: "Tech Corp",
    text: "O curso de IA Prática transformou completamente nossa abordagem de automação. ROI de 300% em 6 meses.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "CFO",
    company: "Industria XYZ",
    text: "A metodologia do curso de Controller nos ajudou a implementar dashboards que economizaram 40h/mês de trabalho manual.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Gerente de Processos",
    company: "Varejo ABC",
    text: "Excelente conteúdo e didática. Conseguimos mapear e otimizar todos nossos processos críticos.",
    rating: 5
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/curso/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-black">
      
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <LogoAdaptive />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#cursos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Cursos
              </a>
              <a href="#sobre" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Sobre
              </a>
              <a href="#depoimentos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Contato
              </a>
              <Button 
                onClick={() => window.open('https://rmacademy.io/wp-login.php', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
              >
                <User className="w-4 h-4 mr-2" />
                Área do Aluno
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#cursos" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Cursos
                </a>
                <a href="#sobre" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Sobre
                </a>
                <a href="#depoimentos" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Depoimentos
                </a>
                <a href="#contato" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                  Contato
                </a>
                <Button 
                  onClick={() => window.open('https://rmacademy.io/wp-login.php', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800"
                >
                  <User className="w-4 h-4 mr-2" />
                  Área do Aluno
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/800')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Transforme sua Equipe com
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Treinamentos Corporativos Premium
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cursos especializados em IA, Gestão de Processos, Segurança da Informação e Finanças. 
                Metodologia prática com resultados mensuráveis.
              </p>
            </motion.div>

            {/* Course Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${courses[currentSlide].color} text-white mb-4`}>
                          {courses[currentSlide].category}
                        </span>
                        <h2 className="text-3xl font-bold mb-4">{courses[currentSlide].title}</h2>
                        <p className="text-lg text-gray-300 mb-6">{courses[currentSlide].subtitle}</p>
                        
                        <div className="space-y-3 mb-6">
                          {courses[currentSlide].highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-5 h-5 text-blue-400" />
                              <span className="text-gray-200">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                              {courses[currentSlide].instructor.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-semibold">{courses[currentSlide].instructor.name}</p>
                              <p className="text-xs text-gray-400">{courses[currentSlide].instructor.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{courses[currentSlide].duration}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            onClick={() => handleCourseClick(courses[currentSlide].id)}
                            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                            size="lg"
                          >
                            Saiba Mais
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-white/30 text-white hover:bg-white/10"
                            size="lg"
                            onClick={() => navigate('/leads')}
                          >
                            Solicitar Proposta
                          </Button>
                        </div>
                      </div>

                      <div className="hidden md:block">
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${courses[currentSlide].color} p-1`}>
                          <img 
                            src={courses[currentSlide].image} 
                            alt={courses[currentSlide].title}
                            className="w-full h-80 object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {courses.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? 'w-8 bg-blue-500' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Profissionais Treinados</div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Taxa de Satisfação</div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600 dark:text-gray-300">Máximo por Turma</div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300">Áreas de Expertise</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cursos Online
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Aprenda no seu ritmo com nossos cursos 100% online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card 
                  className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(course.link, '_blank')}
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                  <CardHeader>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{course.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {course.duration}
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {course.price}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {course.instructor}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    >
                      Inscreva-se Agora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open('https://rmacademy.io/todos-os-cursos/', '_blank')}
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              Ver Todos os Cursos Online
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section id="cursos" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Cursos In Company
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Treinamentos personalizados para as necessidades da sua empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card 
                  className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                  <CardHeader>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{course.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{course.subtitle}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {course.instructor.name}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    >
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O que dizem nossos alunos
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de quem já transformou sua carreira
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Pronto para transformar sua equipe?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como nossos treinamentos podem gerar resultados reais para sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100"
                onClick={() => navigate('/leads')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Solicitar Proposta
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate('/webinar')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Apresentação
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <LogoAdaptive className="h-12 w-auto mb-6" />
              <p className="text-gray-400 mb-6 max-w-sm">
                Transformando profissionais e empresas através de conhecimento especializado em tecnologia, privacidade e gestão.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="https://facebook.com/rmacademy" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/rmacademy" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/rmacademy" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/rmacademy" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#cursos" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    Cursos Online
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    In Company
                  </a>
                </li>
                <li>
                  <a href="https://rmacademy.io/blog" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    Blog
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Suporte</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://rmacademy.io/wp-login.php" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    Área do Aluno
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Certificados
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>contato@rmacademy.com.br</span>
                </p>
                <p className="text-gray-400 flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>(11) 91234-5678</span>
                </p>
                <p className="text-gray-400 flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>São Paulo - SP<br />Brasil</span>
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-medium mb-2">Newsletter</h5>
                <p className="text-sm text-gray-400 mb-3">Receba novidades e conteúdos exclusivos</p>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} RM Academy. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}