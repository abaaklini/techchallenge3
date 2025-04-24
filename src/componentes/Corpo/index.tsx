import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router';

interface IPostProps {
    titulo: string;
    conteudo: string;
    autor: string;
    _id: string;
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
            <h1>Página Principal</h1>
            <ListaDePosts posts={posts} />
        </div>
    );
}

export const CorpoPrincipalDashboard = () => {
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
            <h1>Dashboard</h1>
            <ListaDePosts posts={posts} />
        </div>
    );
}

export const Post = (post: IPostProps) => {
    return (
        <TableRow key={post._id}>
            <TableCell>
                {post.titulo}
            </TableCell>
            <TableCell>
                {post.conteudo}
            </TableCell>
            <TableCell>
                {post.autor}
            </TableCell>
            <TableCell>
                <Link to={`/dashboard/posts/${post._id}`}>
                    <Button variant="contained" color="primary">Editar</Button>
                </Link>
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
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post, index) => (
                            <Post
                                key={index}
                                titulo={post.titulo}
                                conteudo={post.conteudo}
                                autor={post.autor}
                                _id={post._id}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
