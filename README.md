# RM Academy Website

Site institucional e landing pages da RM Academy com integração ao Supabase CRM.

## 🚀 Configuração Rápida

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env` e adicione sua chave anônima do Supabase:
```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione sua chave:
```
VITE_SUPABASE_ANON_KEY=sua_chave_aqui
```

### 3. Obter a Chave do Supabase
Para obter sua chave anônima (anon key):
1. Acesse o painel do Supabase
2. Vá em Settings > API
3. Copie a chave "anon public"

### 4. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

## 📄 Landing Pages Disponíveis

### 1. **Landing Page Principal** - `/leads`
- Formulário de captura de leads genérico
- Ideal para campanhas de marketing amplas
- Integração completa com CRM

### 2. **Landing Page de Curso** - `/curso/:cursoId`
- Página específica para cada curso
- Formulário com seleção de turmas
- Exibe informações detalhadas do curso

### 3. **Landing Page de Webinar** - `/webinar`
- Otimizada para eventos online
- Contador regressivo
- Formulário de inscrição rápida

## 🔧 Integração com Supabase CRM

### Tabelas Utilizadas:
- **crm.clientes** - Armazena leads e clientes
- **crm.cursos** - Informações dos cursos
- **crm.turmas** - Turmas disponíveis
- **crm.inscricoes** - Inscrições em cursos
- **crm.interacoes** - Histórico de interações

### Funções Disponíveis:
```javascript
import { crmFunctions } from './config/supabase'

// Criar novo lead
await crmFunctions.criarLead({
  nome: 'Nome',
  email: 'email@exemplo.com',
  telefone: '11999999999',
  empresa: 'Empresa',
  cargo: 'Cargo'
})

// Buscar cursos
await crmFunctions.buscarCursos()

// Buscar turmas disponíveis
await crmFunctions.buscarTurmasDisponiveis()

// Registrar interesse em curso
await crmFunctions.registrarInteresseCurso(clienteId, cursoId, turmaId)

// Registrar interação
await crmFunctions.registrarInteracao(clienteId, tipo, anotacoes)
```

## 🚀 Deploy no GitHub Pages

### 1. Criar Repositório no GitHub
Execute o script de configuração:
```bash
chmod +x setup-github.sh
./setup-github.sh
```

### 2. Deploy
```bash
npm run deploy
```

## 📱 Recursos das Landing Pages

### Formulários Inteligentes
- Validação em tempo real
- Feedback visual de sucesso/erro
- Integração automática com CRM

### Design Responsivo
- Mobile-first
- Animações suaves com Framer Motion
- UI moderna com Tailwind CSS

### Analytics Ready
- Estrutura preparada para Google Analytics
- Eventos de conversão configuráveis
- Tracking de formulários

## 🛠️ Tecnologias Utilizadas

- **React** - Framework principal
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Supabase** - Backend e CRM
- **React Router** - Roteamento

## 📊 Estrutura do Projeto

```
rm-academy-website/
├── src/
│   ├── pages/
│   │   ├── LandingPagePrincipal.jsx
│   │   ├── LandingPageCurso.jsx
│   │   └── LandingPageWebinar.jsx
│   ├── config/
│   │   └── supabase.js
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── HomePage.jsx
│   └── main.jsx
├── .env.example
├── package.json
└── README.md
```

## 🤝 Suporte

Para dúvidas ou suporte:
- Email: contato@rmacademy.com.br
- Documentação Supabase: https://supabase.com/docs

## 📝 Licença

© 2025 RM Academy. Todos os direitos reservados.
