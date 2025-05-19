import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Post } from "./Post";
import { IPostProps } from "../../types/post";

export const ListaDePosts = ({ posts }: { posts: IPostProps[] }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Conteúdo</TableCell>
            <TableCell>Autor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
