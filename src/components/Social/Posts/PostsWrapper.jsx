import { Box } from "@mui/material";
import Post from "./Post";
import React from "react";
import { usePosts } from "../../../hooks/useContexts";

const PostsWrapper = () => {
  const { posts } = usePosts();
  return (
    <Box>
      {posts.map((item, _i) => (
        <Post data={item} />
      ))}
    </Box>
  );
};

export default PostsWrapper;
