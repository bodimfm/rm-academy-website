#!/bin/bash

# Script para configurar o repositório GitHub
echo "🚀 Configurando repositório GitHub para RM Academy Website..."

# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: RM Academy Website with Supabase CRM integration"

# Criar repositório no GitHub (você precisa ter o GitHub CLI instalado)
# Se não tiver, instale com: brew install gh
echo "📦 Criando repositório no GitHub..."
gh repo create rm-academy-website --public --source=. --remote=origin --push

echo "✅ Repositório criado com sucesso!"
echo "🔗 URL: https://github.com/$(gh api user --jq .login)/rm-academy-website"
