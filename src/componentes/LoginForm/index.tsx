import { Box } from '@mui/material';
import Button from '../Botao';
import TextField from '../CampoTexto';
import '../../main.css'

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
        py: 2,
      }}
    >
      <TextField
        label="Usuário"
        required
        sx={{ minWidth: '100px' }}
      />
      <TextField
        label="Senha"
        type="password"
        required
        sx={{ minWidth: '100px' }}
      />
      <Button
        type="submit"
        sx={{
          ml: { xs: 0, sm: 'auto' },
          mr: { xs: 0, sm: 3 },
        }}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;