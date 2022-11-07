import { createContext, useContext, useState } from "react";

type ModalNames = "" | "login" | "sideMenu";

interface ModalContextInterface {
  visibleModal: ModalNames;
  showModal: (name: ModalNames) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextInterface>({
  visibleModal: "",
  showModal: () => {},
  hideModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export function ModalContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [visibleModal, setVisibleModal] = useState<ModalNames>("");
  const showModal = (modalName: ModalNames) => setVisibleModal(modalName);
  const hideModal = () => setVisibleModal("");

  const contextValue = { visibleModal, showModal, hideModal };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}
