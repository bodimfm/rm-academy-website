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
├── pages/                         # Landing page components
│   ├── LandingPagePrincipal.jsx  # Main lead capture (/leads)
│   ├── LandingPageCurso.jsx      # Course-specific (/curso/:cursoId)
│   └── LandingPageWebinar.jsx    # Webinar registration (/webinar)
├── config/
│   └── supabase.js               # Supabase client & CRM functions
└── App.jsx                       # Routes configuration
```

### Key Architectural Decisions

1. **Multi-Page Landing System**: Three distinct landing page types sharing common components but with different conversion goals:
   - Principal: General lead capture with segmented CTAs
   - Curso: Course-specific enrollment with dynamic content
   - Webinar: Event registration with limited spots

2. **Supabase CRM Integration**: All forms interact with Supabase tables:
   - `leads`: Stores lead information
   - `cursos`: Course catalog
   - `inscricoes`: Course enrollments
   - `interacoes`: User interaction tracking

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