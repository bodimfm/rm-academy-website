# Para executar o setup completo do repositório

## Opção 1: Script Automático
```bash
cd /Users/rafaelmaciel/CODING/rm-academy-website
chmod +x setup-repo.sh
./setup-repo.sh
```

## Opção 2: Comandos Manuais
```bash
cd /Users/rafaelmaciel/CODING/rm-academy-website

# Inicializar Git
git init
git add .
git commit -m "🚀 Initial commit: RM Academy In Company Landing Page"

# Criar repositório no GitHub (escolha uma opção):

### Via GitHub CLI:
gh repo create rm-academy-incompany --public --description "Landing page para treinamentos corporativos da RM Academy"

### Via Web:
# Acesse: https://github.com/new
# Nome: rm-academy-incompany
# Público, sem README inicial

# Conectar e fazer push
git remote add origin https://github.com/rafaelmaciel/rm-academy-incompany.git
git branch -M main
git push -u origin main
```

## Configurar GitHub Pages
1. Acesse: https://github.com/rafaelmaciel/rm-academy-incompany/settings/pages
2. Source: "GitHub Actions"
3. O workflow está configurado automaticamente!

## Testar Localmente
```bash
npm install
npm run dev
# Acesse: http://localhost:5173
```

## URLs Finais
- **Repositório:** https://github.com/rafaelmaciel/rm-academy-incompany
- **Site Publicado:** https://rafaelmaciel.github.io/rm-academy-incompany
- **Desenvolvimento:** http://localhost:5173
