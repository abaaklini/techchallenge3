import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IPostProps } from "../../types/post";
import PostCard from "../Card";

export const ListaDePosts = ({ posts }: { posts: IPostProps[] }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", padding: 2 }}>
    <Grid container spacing={2} justifyContent="center">
      {posts.map((post) => (
        <Grid key={post._id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  </Box>
);
