import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";
import ModalContextProvider from "./context/ModalContext";
import PostContextProvider from "./context/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <PostContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </PostContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
