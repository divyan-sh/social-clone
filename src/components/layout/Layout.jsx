import React from "react";
import { Outlet } from "react-router-dom";
import PostModal from "../Social/PostModal/PostModal";

const Layout = () => {
  return (
    <main style={{ height: "100vh" }}>
      <PostModal />
      <Outlet />
    </main>
  );
};

export default Layout;
