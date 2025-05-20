// components/PostCard.tsx
import { Card, CardContent, Typography, Paper } from "@mui/material";
import { Link } from "react-router";
import { IPostProps } from "../../types/post";

const PostCard = ({ post }: { post: IPostProps }) => (
  <Card
    component={Paper}
    sx={{
      height: "100%",
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      p: 3,
    }}
  >
    <CardContent>
      <Typography
        variant="h5"
        component={Link}
        to={`/read/${post._id}`}
        gutterBottom
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        {post.titulo}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {post.conteudo}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Autor: {post.autor}
      </Typography>
    </CardContent>
  </Card>
);

export default PostCard;
