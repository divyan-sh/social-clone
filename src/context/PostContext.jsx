import React, { createContext, useState } from "react";

export const postContext = createContext({
  posts: [
    {
      user_name: "@cloves",
      user_profile: "",
      post_image: "https://source.unsplash.com/random/?social",
      post_caption: "Hello First Post",
    },
  ],
  addPost: () => {},
});

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      user_name: "@cloves",
      user_profile: "",
      post_image: "https://source.unsplash.com/random/?social",
      post_caption: "Hello First Post",
    },
  ]);

  const addPost = (data) => {
    setPosts((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <postContext.Provider
      value={{
        posts,
        addPost,
      }}>
      {children}
    </postContext.Provider>
  );
};

export default PostContextProvider;
