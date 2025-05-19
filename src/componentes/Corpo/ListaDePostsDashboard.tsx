import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PostDashboard } from './PostDashboard';
import { IPostProps } from '../types/IPostProps';

export const ListaDePostsDashboard = ({ posts }: { posts: IPostProps[] }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Conteúdo</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
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
