import { createContext, useContext, useState } from "react";

interface ModalContextInterface {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextInterface>({
  isModalVisible: false,
  toggleModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export function ModalContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const contextValue = { isModalVisible, toggleModal };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}
