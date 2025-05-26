import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PostDashboard } from "./PostDashboard";
import { IPostProps } from "../../types/post";

export const ListaDePostsDashboard = ({ posts }: { posts: IPostProps[] }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body2">Título</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Conteúdo</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Autor</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Editar</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Excluir</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <PostDashboard key={index} {...post} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
