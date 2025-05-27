// components/PostCard.tsx
import { Card, CardContent, Typography, Paper } from "@mui/material";
import { Link } from "react-router";
import { IPostProps } from "../../types/post";

const PostCard = ({ post }: { post: IPostProps }) => (
  <Card
    component={Paper}
    sx={{
      height: '100%',
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      p: 3,
      width: 345,
    }}
  >
    <CardContent>
      <Typography
        variant="h5"
        component={Link}
        to={`/read/${post._id}`}
        sx={{
          textDecoration: "none",
          color: "inherit",
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
        {post.titulo}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          flexGrow: 1,
          mb: 2,
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {post.conteudo}
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          mt: "auto",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        Autor: {post.autor}
      </Typography>
    </CardContent>
  </Card>
);

export default PostCard;
