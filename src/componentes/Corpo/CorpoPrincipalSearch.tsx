import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import { ListaDePosts } from "../Corpo/ListaDePosts";
import { IPostProps } from "../../types/post";

export const CorpoPrincipalSearch = ({ query }: { query: string }) => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    if (!query) return;

    axios
      .get<IPostProps[]>(`/api/posts/search?q=${query}`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, [query]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container
        sx={{
          padding: 2,
          marginTop: 2,
          marginBottom: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Resultados da Busca
        </Typography>
        <ListaDePosts posts={posts} />
      </Container>
    </Box>
  );
};
