import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

export const LoginForm = () => {
    return (
        <Box>
            <TextField
                label="Usuário"
                variant="outlined"
                color="secondary"
                required
                size="small"
                sx={{ marginRight: 2 }}
            />
            <TextField
                label="Senha"
                variant="outlined"
                color="secondary"
                type="password"
                required
                size="small"
                sx={{ marginRight: 2 }}
            />
            <Button
                variant="contained"
                color="secondary"
                sx={{ marginRight: 2 }}
                type="submit">
                Entrar
            </Button>
        </Box>
    );
}

export const AcessoProfessor = () => {
    return (
        <Box>
            <Link to={`/dashboard/posts`}>
                <Button
                    variant="contained"
                    size="small"
                    sx={{ marginRight: 2 }}
                    color="secondary">
                    Área do Professor
                </Button>
            </Link>
            <Button
                variant="outlined"
                size="small"
                sx={{ marginRight: 2 }}
                color="secondary">
                Sair
            </Button>
        </Box>
    );
}
