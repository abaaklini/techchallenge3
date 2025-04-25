import { AppBar, Box, Container, TextField, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const isLoggedIn = false; // Simulação de estado de login

const LoginForm = () => {
    return (
        <Box>
            <TextField
                label="Usuário"
                variant="outlined"
                required
                size="small"
                sx={{ marginRight: 2 }}
            />
            <TextField
                label="Senha"
                variant="outlined"
                type="password"
                required
                size="small"
                sx={{ marginRight: 2 }}
            />
            <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 2 }}
                type="submit">
                Entrar
            </Button>
        </Box>
    );
}

const CampoDeBusca = () => {
    return (
        <Box>
            <TextField
                label="Pesquisar"
                variant="outlined"
                size="small"
                sx={{ marginRight: 2 }}
            />
            <Button
                variant="contained"
                color="primary">
                Pesquisar
            </Button>
        </Box>
    );
}

const AcessoProfessor = () => {
    return (
        <Box>
            <Button variant="contained" color="primary">Área do Professor</Button>
            <Button variant="outlined" color="secondary">Sair</Button>
        </Box>
    );
}

const Cabecalho = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Blog da Turma
                        </Typography>
                        <CampoDeBusca />
                        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            {isLoggedIn ? (
                                <AcessoProfessor />
                            ) : (
                                <LoginForm />
                            )}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Cabecalho;