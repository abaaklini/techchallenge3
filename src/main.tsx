import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './pages/Home'
import Read from './pages/Read'
import Dashboard from './pages/Dashboard';
import SearchResult from './pages/Search';
import Create from './pages/Create';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
// import './main.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/dashboard/posts" element={<Dashboard />} />
          <Route path="/dashboard/posts/new" element={<Create />} />
          <Route path="/dashboard/posts/:id" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)
