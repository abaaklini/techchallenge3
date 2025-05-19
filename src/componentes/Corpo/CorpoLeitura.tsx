import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router";
import { IPostProps } from "../../types/post";

export const CorpoLeitura = () => {
  const [post, setPost] = useState<IPostProps>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get<IPostProps>(`/api/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, [id]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container
        component={Paper}
        sx={{
          padding: 2,
          marginTop: 2,
          marginBottom: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {post?.titulo}
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          {post?.conteudo}
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          {post?.autor}
        </Typography>
      </Container>
    </Box>
  );
};
