import { styled } from "styled-components";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleEstilizado = styled.h1`
    font-size: 2.5rem;
    color: rgba(105, 112, 119, 1);
    line-height: 110px;
    text-align: center;
    margin: 20px 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`;

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
            <button>Área do Professor</button>
        </div>
    );
}

const Cabecalho = () => {
    return (
        <>
            <HeaderEstilizado>
                <TitleEstilizado>
                    Blog da Turma
                </TitleEstilizado>
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
            </HeaderEstilizado>

        </>
    );
};

export default Cabecalho;