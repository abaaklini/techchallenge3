import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './pages/Home/index.tsx'
import Read from './pages/Read/index.tsx'

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
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)
