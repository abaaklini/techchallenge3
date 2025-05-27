import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container } from "@mui/material";
import { ListaDePosts } from "../Corpo/ListaDePosts";
import { IPostProps } from "../../types/post";

export const CorpoPrincipal = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    axios
      .get<IPostProps[]>("/api/posts/")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, []);

  return (
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <ListaDePosts posts={posts} />
        </Container>
      </Box>
  );
};
