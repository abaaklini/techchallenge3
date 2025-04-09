import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className="post">
            <h2>{post.titulo}</h2>
            <p>{post.conteudo}</p>
            <p><strong>Autor:</strong> {post.autor}</p>
        </div>
    );
}

export const ListaDePosts = ({ posts }: { posts: IPostProps[] }) => {
    return (
        <div className="lista-de-posts">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    titulo={post.titulo}
                    conteudo={post.conteudo}
                    autor={post.autor}
                    id={post.id}
                />
            ))}
        </div>
    );
}
