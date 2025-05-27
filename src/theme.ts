// theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5395EA',
      dark: '#30437D',
      light: '#BBCBFB',
    },
    grey: {
      900: '#101828',
      500: '#667085',
      300: '#D0D5DD',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#667085',
    },
    success: {
      main: '#28A745',
    },
    warning: {
      main: '#F7C960',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: '3.5rem',
      color: '#30437D',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 'normal',
      color: '#101828',
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: '1.36875rem',
      color: '#5395EA',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
      color: '#000',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
      color: '#000',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1rem',
      color: '#101828',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1rem',
      color: '#667085',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
