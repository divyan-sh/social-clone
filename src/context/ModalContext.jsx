import React, { createContext, useState } from "react";

export const modalContext = createContext({
  isOpen: false,
  toggleModal: () => {},
});

const ModalContextProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <modalContext.Provider
      value={{
        isOpen: isModalOpen,
        toggleModal,
      }}>
      {props.children}
    </modalContext.Provider>
  );
};

export default ModalContextProvider;
