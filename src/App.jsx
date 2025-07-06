import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPagePrincipal from './pages/LandingPagePrincipal'
import LandingPageCurso from './pages/LandingPageCurso'
import LandingPageWebinar from './pages/LandingPageWebinar'
import LandingPageIAPratica from './pages/LandingPageIAPratica'
import LandingPageIAPraticaProfissionais from './pages/LandingPageIAPraticaProfissionais'
import HomePage from './HomePage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial existente */}
        <Route path="/" element={<HomePage />} />
        
        {/* Landing Pages */}
        <Route path="/leads" element={<LandingPagePrincipal />} />
        <Route path="/curso/:cursoId" element={<LandingPageCurso />} />
        <Route path="/curso/ia-pratica-empresas" element={<LandingPageIAPratica />} />
        <Route path="/curso/ia-pratica" element={<LandingPageIAPraticaProfissionais />} />
        <Route path="/webinar" element={<LandingPageWebinar />} />
      </Routes>
    </Router>
  )
}

export default App
