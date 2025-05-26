import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router";
import { IPostProps } from "../../types/post";

export const CorpoLeitura = () => {
  const [post, setPost] = useState<IPostProps>();
  const parametros = useParams<{ id: string }>();

  useEffect(() => {
    axios.get<IPostProps>(`/api/posts/${parametros.id}`)
        .then((response) => {
            setPost(response.data);
        })
        .catch((error) => {
            console.error("Erro ao buscar os posts:", error);
        })
}, []);

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
        <Typography variant="h1" component="h1" gutterBottom>
          {post?.titulo}
        </Typography>
        <Typography variant="caption" component="p" gutterBottom>
          Autor: {post?.autor}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {post?.conteudo}
        </Typography>
      </Container>
    </Box>
  );
};
