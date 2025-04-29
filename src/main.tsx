import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './pages/Home/index.tsx'
import Read from './pages/Read/index.tsx'
import Dashboard from './pages/Dashboard/index.tsx';
import SearchResult from './pages/Search/index.tsx';
import Create from './pages/Create/index.tsx';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ac145a' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <CssBaseline enableColorScheme />
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
