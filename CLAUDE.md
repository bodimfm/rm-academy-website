# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RM Academy corporate training website built with React + Vite, featuring three types of landing pages with Supabase CRM integration.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Build & Deploy
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint on JS/JSX files
```

## Architecture Overview

### Tech Stack
- **Frontend**: React 18.2 + Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom brand colors
- **Backend**: Supabase (authentication & CRM)
- **Deployment**: Vercel

### Core Structure

```
src/
├── pages/                                    # Landing page components
│   ├── LandingPagePrincipal.jsx             # Main lead capture (/leads)
│   ├── LandingPageCurso.jsx                 # Course-specific (/curso/:cursoId)
│   ├── LandingPageWebinar.jsx               # Webinar registration (/webinar)
│   ├── LandingPageIAPratica.jsx             # Corporate IA training (/curso/ia-pratica-empresas)
│   └── LandingPageIAPraticaProfissionais.jsx # Individual IA course (/curso/ia-pratica)
├── components/
│   └── LogoAdaptive.jsx                     # Auto-switching logo based on theme
├── config/
│   └── supabase.js                          # Supabase client & CRM functions
├── HomePage.jsx                             # Main homepage with course carousels
└── App.jsx                                  # Routes configuration
```

### Key Architectural Decisions

1. **Multi-Page Landing System**: Five distinct landing page types sharing common components but with different conversion goals:
   - Principal: General lead capture with segmented CTAs
   - Curso: Course-specific enrollment with dynamic content
   - Webinar: Event registration with limited spots
   - IA Prática Empresas: Corporate training proposals (customized, on-demand)
   - IA Prática Profissionais: Individual course sales (fixed dates, online purchase)

2. **Supabase CRM Integration**: All forms interact with Supabase tables (schema: crm):
   - `crm.clientes`: Stores lead/client information
   - `crm.cursos`: Course catalog
   - `crm.turmas`: Course sessions/batches
   - `crm.inscricoes_curso`: Course enrollments
   - `crm.interacoes`: User interaction tracking

3. **Environment Configuration**: Supabase credentials via environment variables:
   ```
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY
   ```

### Development Patterns

1. **Component Structure**: Functional components with hooks
2. **Routing**: Centralized in App.jsx using React Router
3. **State Management**: Local state with useState hooks
4. **API Calls**: Abstracted in config/supabase.js
5. **Styling**: Utility-first with Tailwind, custom colors in tailwind.config.js
6. **Dark Mode**: Automatic theme detection with LogoAdaptive component
7. **Animations**: Framer Motion for smooth transitions and interactions

### Common Tasks

**Adding a new landing page type:**
1. Create component in src/pages/
2. Add route in App.jsx
3. Implement form submission to Supabase
4. Test locally with npm run dev

**Modifying Supabase integration:**
- All CRM functions are in src/config/supabase.js
- Environment variables required for connection
- Test database operations before deploying

**Deployment checklist:**
1. Update environment variables in Vercel dashboard
2. Run npm run build locally to verify
3. Push changes to main branch
4. Vercel will automatically deploy

## Recent Updates (January 2025)

### Visual Identity Changes
- Implemented automatic dark/light theme switching based on system preferences
- Created LogoAdaptive component that switches between two logo versions:
  - Light theme: `/logormacademy-estiloprivacy.png`
  - Dark theme: `/novalogormacademy-fundoescuro.png`
- Updated navigation bar height from h-16 to h-20 for better logo visibility

### New Landing Pages
1. **IA Prática para Empresas** (`/curso/ia-pratica-empresas`):
   - Corporate training page with customized proposals
   - "Sob consulta" pricing model
   - Focus on team training and strategic consulting
   
2. **IA Prática para Profissionais** (`/curso/ia-pratica`):
   - Individual course sales with fixed pricing
   - Two formats: Presencial (R$ 997) and Online (R$ 697)
   - Detailed 3-part curriculum covering fundamentals, practice, and hands-on workshop
   - Specific dates and limited seats

### Homepage Enhancements
- Added online courses section above in-company courses
- Implemented modern footer with newsletter signup and social links
- Fixed Supabase integration to use correct schema (crm.clientes)
- Added student area link pointing to https://rmacademy.io/wp-login.php

### Key Features Implemented
- Form submissions properly integrated with Supabase CRM
- Responsive design with Tailwind CSS dark mode support
- Framer Motion animations for better UX
- Comprehensive error handling and success feedback
- SEO-friendly URL structure