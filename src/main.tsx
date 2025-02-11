import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { Home, Err404, Projects } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeEngine } from './components/theme'
import { LangEngine } from './components/language'
import { FlashsEngine } from './components/flashs'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LangEngine>
      <ThemeEngine>
        <FlashsEngine>
          <Layout>
              <Routes>

                  <Route path="/" element={<Home />} />

                  <Route path="/projects" element={<Projects />} />

                  <Route path="/*" element={<Err404 />} />
                  
              </Routes>

          </Layout>
        </FlashsEngine>
      </ThemeEngine>
    </LangEngine>
  </BrowserRouter>,
)
