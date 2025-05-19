import { TableRow, TableCell } from "@mui/material";
import Button from "../Botao";
import { Link } from "react-router";
import axios from "axios";
import { IPostProps } from "../../types/post";

export const PostDashboard = (post: IPostProps) => {
  const excluir = (post: IPostProps) => {
    if (window.confirm("Você tem certeza que deseja excluir este post?")) {
      axios
        .delete(`/api/posts/${post._id}`)
        .then((response) => {
          console.log("Post excluído com sucesso:", response.data);
          window.location.reload();
        })
        .catch((error) => console.error("Erro ao excluir o post:", error));
    }
  };

  return (
    <TableRow key={post._id}>
      <TableCell>{post.titulo}</TableCell>
      <TableCell>{post.conteudo}</TableCell>
      <TableCell>{post.autor}</TableCell>
      <TableCell>
        <Link to={`/dashboard/posts/${post._id}`}>
          <Button variant="contained" color="primary">
            Editar
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        <Button variant="contained" color="error" onClick={() => excluir(post)}>
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  );
};
