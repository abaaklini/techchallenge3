import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

//const isLoggedIn = false; // Simulação de estado de login

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

//const CampoDeBusca = () => {
//    return (
//        <Box>
//            <TextField
//                label="Pesquisar"
//                variant="outlined"
//                size="small"
//                sx={{ marginRight: 2 }}
//            />
//            <Button
//                variant="contained"
//                color="primary">
//                Pesquisar
//            </Button>
//        </Box>
//    );
//}

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

//const Cabecalho = () => {
//    return (
//        <>
//            <AppBar position="static">
//                <Container maxWidth="xl">
//                    <Toolbar>
//                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                            Blog da Turma
//                        </Typography>
//                        <CampoDeBusca />
//                        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
//                            {isLoggedIn ? (
//                                <AcessoProfessor />
//                            ) : (
//                                <LoginForm />
//                            )}
//                        </Box>
//
//                    </Toolbar>
//                </Container>
//            </AppBar>
//        </>
//    );
//};
