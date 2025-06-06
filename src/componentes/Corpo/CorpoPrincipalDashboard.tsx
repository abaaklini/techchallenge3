import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import Button from '../Botao'
import { Link } from "react-router";
import { ListaDePostsDashboard } from "./ListaDePostsDashboard";
import { IPostProps } from "../../types/post";

export const CorpoPrincipalDashboard = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    axios
      .get<IPostProps[]>("/api/posts/")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, []);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Administração de Posts
          </Typography>
          <Link to={`/dashboard/posts/new`}>
            <Button variant="contained" color="primary">
              Novo
            </Button>
          </Link>
        </Box>
        <ListaDePostsDashboard posts={posts} />
      </Container>
    </Box>
  );
};
