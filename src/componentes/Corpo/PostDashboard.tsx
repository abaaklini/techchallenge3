import { TableRow, TableCell, Typography } from "@mui/material";
import Button from "../Botao";
import { Link } from "react-router";
import axios from "axios";
import { IPostProps } from "../../types/post";

export const PostDashboard = (post: IPostProps) => {
  const excluir = (post: IPostProps) => {
    const token = localStorage.getItem("token");

    if (window.confirm("Você tem certeza que deseja excluir este post?")) {
      axios
        .delete(`/api/posts/${post._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Post excluído com sucesso:", response.data);
          window.location.reload();
        })
        .catch((error) => console.error("Erro ao excluir o post:", error));
    }
  };

  return (
    <>
      <TableRow key={post._id}>
      <TableCell>
        <Typography variant="body1">{post.titulo}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{post.conteudo}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{post.autor}</Typography>
      </TableCell>
        <TableCell>
          <Link to={`/dashboard/posts/${post._id}`}>
            <Button variant="contained" color="primary">
              Editar
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Button
            variant="outlined"
            color="error"
            onClick={() => excluir(post)}
          >
            Excluir
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};
