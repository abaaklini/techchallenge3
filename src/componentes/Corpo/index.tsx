interface PostProps {
    title: string;
    content: string;
    author: string;
}

export const CorpoPrincipal = ({ posts = [] }: { posts: PostProps[] }) => {
    return (
        <div className="container">
            <h1>Corpo Principal</h1>
            <p>Este é o corpo principal do aplicativo.</p>
            <ListaDePosts posts={posts} />
        </div>
    );
}

export const Post = (post: PostProps) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Autor:</strong> {post.author}</p>
        </div>
    );
}

export const ListaDePosts = ({ posts = [] }: { posts: PostProps[] }) => {
    return (
        <div className="lista-de-posts">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                />
            ))}
        </div>
    );
}
