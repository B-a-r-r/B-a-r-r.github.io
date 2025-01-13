import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home, Err404, Projects } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeEngine } from './components/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeEngine>
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="*" element={<Err404 />} />
            
        </Routes>
      </BrowserRouter>
    </ThemeEngine>
  </StrictMode>,
)
