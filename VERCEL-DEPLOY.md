# Deploy no Vercel - Instruções

## Pré-requisitos

1. Conta no Vercel
2. Variáveis de ambiente do Supabase

## Passos para Deploy

### 1. Configurar Variáveis de Ambiente no Vercel

No painel do Vercel, vá em **Settings > Environment Variables** e adicione:

```
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

### 2. Verificar Build Local

Antes de fazer deploy, teste localmente:

```bash
# Instalar dependências
npm install

# Fazer build
npm run build

# Testar build localmente
npm run preview
```

### 3. Deploy

#### Opção A: Deploy via Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Opção B: Deploy via GitHub
1. Conecte seu repositório GitHub ao Vercel
2. O deploy será automático a cada push

## Configurações Importantes

O arquivo `vercel.json` já está configurado com:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: `vite`
- Rewrites para SPA (Single Page Application)

## Solução de Problemas

### Página em branco ou erro 404
- Verifique se as variáveis de ambiente estão configuradas
- Verifique o log de build no Vercel

### Imagens não aparecem
- Certifique-se de que os arquivos estão na pasta `public/`
- Use caminhos absolutos começando com `/`

### Rotas não funcionam
- O arquivo `vercel.json` já tem as rewrites configuradas
- Se ainda houver problemas, verifique se o React Router está configurado corretamente

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Build local funcionando (`npm run build`)
- [ ] Preview local funcionando (`npm run preview`)
- [ ] Arquivos de imagem na pasta `public/`
- [ ] Arquivo `vercel.json` presente na raiz
- [ ] Repositório conectado ao Vercel (se usando GitHub)