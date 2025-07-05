#!/bin/bash

echo "🚀 RM Academy Website - Setup Completo"
echo "======================================"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Configurar Git
echo "🔧 Configurando Git..."
git init
git add .
git commit -m "Initial commit: RM Academy Website with Supabase CRM integration"

# Criar repositório no GitHub
echo "📤 Criando repositório no GitHub..."
echo "Certifique-se de ter o GitHub CLI instalado (gh)"
echo "Se não tiver, instale com: brew install gh"
echo ""
read -p "Deseja criar o repositório no GitHub agora? (s/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Ss]$ ]]
then
    gh repo create rm-academy-website --public --source=. --remote=origin --push
    echo "✅ Repositório criado com sucesso!"
    echo "🔗 URL: https://github.com/$(gh api user --jq .login)/rm-academy-website"
fi

# Iniciar servidor de desenvolvimento
echo ""
echo "✨ Setup concluído!"
echo ""
echo "Para iniciar o servidor de desenvolvimento:"
echo "npm run dev"
echo ""
echo "Para fazer deploy no GitHub Pages:"
echo "npm run deploy"
echo ""
echo "📚 Documentação completa no README.md"
