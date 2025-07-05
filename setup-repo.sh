#!/bin/bash

echo "🚀 Configurando repositório RM Academy In Company..."

# Navegar para o diretório
cd /Users/rafaelmaciel/CODING/rm-academy-website

# Verificar se Git já foi inicializado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
else
    echo "✅ Repositório Git já inicializado"
fi

# Configurar informações do Git (ajuste conforme necessário)
git config user.name "Rafael Maciel"
git config user.email "contato@rmacademy.com.br"

# Adicionar todos os arquivos
echo "📁 Adicionando arquivos ao staging..."
git add .

# Verificar status
echo "📊 Status do repositório:"
git status

# Fazer commit
echo "💾 Fazendo commit inicial..."
git commit -m "🚀 Initial commit: RM Academy In Company Landing Page

✨ Features:
- Site completo em React + Vite + Tailwind CSS
- Design responsivo com identidade visual RM Academy
- Seções: Hero, Cursos, Professores, Sobre, Contato
- Animações suaves com Framer Motion
- Deploy automático GitHub Pages configurado
- Estrutura modular e escalável

👨‍🏫 Professores:
- Rafael Maciel: IA e Proteção de Dados
- Gustavo Brasil: Gestão e Processos

📚 Cursos:
- IA Prática
- Gestão de Riscos em Segurança da Informação
- Gerenciamento de Processos
- Controller e Indicadores Financeiros

🔧 Tech Stack:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- shadcn/ui Components"

echo "✅ Commit realizado com sucesso!"

# Mostrar log do commit
echo "📝 Último commit:"
git log --oneline -1

echo ""
echo "🎯 Próximos passos:"
echo "1. Criar repositório no GitHub: rm-academy-incompany"
echo "2. Executar: git remote add origin https://github.com/rafaelmaciel/rm-academy-incompany.git"
echo "3. Executar: git branch -M main"
echo "4. Executar: git push -u origin main"
echo "5. Configurar GitHub Pages em Settings > Pages"
echo ""
echo "🌐 URLs finais:"
echo "- Repositório: https://github.com/rafaelmaciel/rm-academy-incompany"
echo "- Site: https://rafaelmaciel.github.io/rm-academy-incompany"
echo ""
echo "💡 Para testar localmente:"
echo "npm install && npm run dev"
