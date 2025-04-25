import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Página Principal
            </Typography>
            <ListaDePosts posts={posts} />
        </Box>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
            </Typography>
            <ListaDePostsDashboard posts={posts} />
        </Box>
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
        </TableRow>
    )
}

export const PostDashboard = (post: IPostProps) => {

    const excluir = (post: IPostProps) => {
        if (window.confirm("Você tem certeza que deseja excluir este post?")) {
            axios.delete(`/api/posts/${post._id}`)
                .then((response) => {
                    console.log("Post excluído com sucesso:", response.data);
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Erro ao excluir o post:", error);
                });
        }
    }

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
            <TableCell>
                <Button variant="contained" color="error" onClick={() => excluir(post)}>Excluir</Button>
            </TableCell>
        </TableRow>
    )
}

export const ListaDePosts = ({ posts }: { posts: IPostProps[] }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
                                _id={post._id}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export const ListaDePostsDashboard = ({ posts }: { posts: IPostProps[] }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Conteúdo</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell>Editar</TableCell>
                            <TableCell>Excluir</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post, index) => (
                            <PostDashboard
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
        </Box>
    );
}
