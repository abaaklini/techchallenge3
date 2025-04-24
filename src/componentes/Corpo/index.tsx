import { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface IPostProps {
    titulo: string;
    conteudo: string;
    autor: string;
    id: string;
}

export const CorpoPrincipal = () => {
    const [posts, setPosts] = useState<IPostProps[]>([]);
    useEffect(() => {
        axios.get<IPostProps[]>('/api/posts/')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os posts:", error);
            })
    }, []);


    return (
        <div className="container">
            <h1>Corpo Principal</h1>
            <p>Este é o corpo principal do aplicativo.</p>
            <ListaDePosts posts={posts} />
        </div>
    );
}

export const Post = (post: IPostProps) => {
    return (
        <TableRow key={post.id}>
            <TableCell>
                {post.titulo}
            </TableCell>
            <TableCell>
                {post.conteudo}
            </TableCell>
            <TableCell>
                {post.autor}
            </TableCell>
        </TableRow>
    )
}

export const ListaDePosts = ({ posts }: { posts: IPostProps[] }) => {
    return (
        <div className="lista-de-posts">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Conteúdo</TableCell>
                            <TableCell>Autor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post, index) => (
                            <Post
                                key={index}
                                titulo={post.titulo}
                                conteudo={post.conteudo}
                                autor={post.autor}
                                id={post.id}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
