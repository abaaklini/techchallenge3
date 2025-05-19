import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Paper, Typography } from '@mui/material';
import { ListaDePosts } from './ListaDePosts';
import IPostProps from '../../types/IPostProps';

export const CorpoPrincipalSearch = ({ query }: { query: string }) => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    if (!query) return;

    axios.get<IPostProps[]>(`/api/posts/search?q=${query}`)
      .then(response => setPosts(response.data))
      .catch(error => console.error("Erro ao buscar os posts:", error));
  }, [query]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container component={Paper} sx={{ padding: 2, marginTop: 2, marginBottom: 2, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>Resultados da Busca</Typography>
        <ListaDePosts posts={posts} />
      </Container>
    </Box>
  );
};
