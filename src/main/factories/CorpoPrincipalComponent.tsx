import react from 'react';
import { CorpoPrincipal } from '../../componentes/Corpo/index.tsx';
import { PostRepository } from '../../infra/repository';
import { teal } from '@mui/material/colors';

export const CorpoPrincipalComponent = () => {
    const postRepository = new PostRepository();
    return <CorpoPrincipal postRepository = {postRepository} />
}


// cria dependencias e factory gerencia
// diz que o corpo principal tem dependencia com o post repository
// o componente só renderiza e mostra na teal, quem mexe com dados é o post repository

// factory design
// factory method