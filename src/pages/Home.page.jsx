import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../components/layout/Header";
import PostsWrapper from "../components/Social/Posts/PostsWrapper";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="sm">
        <PostsWrapper />
      </Container>
    </Box>
  );
};

export default HomePage;
