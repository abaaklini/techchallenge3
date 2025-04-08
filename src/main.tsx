import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './pages/Home/index.tsx'
import Read from './pages/Read/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
