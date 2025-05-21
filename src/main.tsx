import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { reduxStorage } from './application/storage/reduxStorage.ts';
import { WrapRouters } from './componentes/wrapRouters.tsx';

console.log(import.meta.env);

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
    <Provider store={reduxStorage}>
      <WrapRouters/>
    </Provider>
  </ThemeProvider>
)
