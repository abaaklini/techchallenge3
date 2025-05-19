import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
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
        component={Paper}
        sx={{
          padding: 2,
          marginTop: 2,
          marginBottom: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
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
