# Comandos para executar no Terminal

## 1. Navegar para o diretório e inicializar Git
```bash
cd /Users/rafaelmaciel/CODING/rm-academy-website
git init
git add .
git commit -m "🚀 Initial commit: RM Academy In Company Landing Page

- Site completo em React + Vite + Tailwind  
- Design responsivo com identidade RM Academy
- Seções: Hero, Cursos, Professores, Sobre, Contato
- Animações com Framer Motion
- Deploy automático GitHub Pages configurado
- Estrutura modular e escalável

Professores:
- Rafael Maciel: IA e Proteção de Dados  
- Gustavo Brasil: Gestão e Processos

Cursos:
- IA Prática
- Gestão de Riscos em SI
- Gerenciamento de Processos
- Controller e Indicadores Financeiros"
```

## 2. Criar repositório no GitHub (via GitHub CLI)
```bash
# Se tiver GitHub CLI instalado
gh repo create rm-academy-incompany --public --description "Landing page para treinamentos corporativos da RM Academy"

# Conectar repositório local ao remoto
git remote add origin https://github.com/rafaelmaciel/rm-academy-incompany.git
git branch -M main
git push -u origin main
```

## 3. Alternativa: Criar repositório via web
1. Acesse https://github.com/new
2. Repository name: `rm-academy-incompany`
3. Description: `Landing page para treinamentos corporativos da RM Academy`
4. Public
5. NÃO inicializar com README
6. Clique "Create repository"

Depois execute:
```bash
git remote add origin https://github.com/rafaelmaciel/rm-academy-incompany.git
git branch -M main
git push -u origin main
```

## 4. Configurar GitHub Pages
1. Vá para Settings > Pages
2. Source: GitHub Actions
3. O workflow já está configurado automaticamente!

## 5. Testar o projeto localmente
```bash
npm install
npm run dev
# Acesse http://localhost:5173
```

## URLs Finais:
- **Repositório:** https://github.com/rafaelmaciel/rm-academy-incompany
- **Site:** https://rafaelmaciel.github.io/rm-academy-incompany
