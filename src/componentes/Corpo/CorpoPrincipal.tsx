import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Paper, Typography } from '@mui/material';
import { ListaDePosts } from './ListaDePosts';
import IPostProps from '../../types/IPostProps';

export const CorpoPrincipal = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    axios.get<IPostProps[]>('/api/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.error("Erro ao buscar os posts:", error));
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container component={Paper} sx={{ padding: 2, marginTop: 2, marginBottom: 2, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Página Principal
        </Typography>
        <ListaDePosts posts={posts} />
      </Container>
    </Box>
  );
};
