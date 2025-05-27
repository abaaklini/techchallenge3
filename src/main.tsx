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
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";
import LoginPage from "./pages/Login";
//@ts-ignore
import * as httpClient from './services/api.tsx';
// import './main.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <CssBaseline />
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
