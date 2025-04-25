import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const isLoggedIn = false; // Simulação de estado de login

const LoginForm = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <Box component={'form'} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TextField
                    label="Usuário"
                    variant="outlined"
                    required
                    margin="normal"
                    size="small"
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    required
                    margin="normal"
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
        </Box>
    );
}

const CampoDeBusca = () => {
    return (
        <Box sx={{ marginTop: 2 }}>
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
        <Box sx={{ marginTop: 2 }}>
            <Button variant="contained" color="primary">Área do Professor</Button>
            <Button variant="outlined" color="secondary" sx={{ marginLeft: 2 }}>Sair</Button>
        </Box>
    );
}

const Cabecalho = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, backgroundColor: '#f5f5f5' }}>
            Blog da Turma
            <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isLoggedIn ? (
                        <AcessoProfessor />
                    ) : (
                        <LoginForm />
                    )}
                </Box>
                <CampoDeBusca />
            </Box>

        </Box>
    );
};

export default Cabecalho;