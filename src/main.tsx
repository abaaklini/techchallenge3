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
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";
import LoginPage from "./pages/Login";



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
        <AuthProvider>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/dashboard/posts" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/posts/new" element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/posts/:id" element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)
