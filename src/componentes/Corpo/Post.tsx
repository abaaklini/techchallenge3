import { TableRow, TableCell } from "@mui/material";
import { Link } from "react-router";
import { IPostProps } from "../../types/post";

export const Post = (post: IPostProps) => (
  <TableRow key={post._id}>
    <TableCell>
      <Link to={`/read/${post._id}`}>{post.titulo}</Link>
    </TableCell>
    <TableCell>{post.conteudo}</TableCell>
    <TableCell>{post.autor}</TableCell>
  </TableRow>
);
