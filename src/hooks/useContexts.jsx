import { useContext } from "react";
import { modalContext } from "../context/ModalContext";
import { postContext } from "../context/PostContext";

export const useModal = () => {
  const data = useContext(modalContext);

  return data;
};

export const usePosts = () => {
  const data = useContext(postContext);
  return data;
};
