import Button from '@mui/material/Button';

const isLoggedIn = false; // Simulação de estado de login

const LoginForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

const CampoDeBusca = () => {
    return (
        <input type="text" placeholder="Pesquisar..." />
    );
}

const AcessoProfessor = () => {
    return (
        <div>
            <Button variant="contained">Área do Professor</Button>
        </div>
    );
}

const Cabecalho = () => {
    return (
        <>
            Blog da Turma
            <div>
                <div>
                    {isLoggedIn ? (
                        <AcessoProfessor />
                    ) : (
                        <LoginForm />
                    )}
                </div>
                <CampoDeBusca />
            </div>

        </>
    );
};

export default Cabecalho;