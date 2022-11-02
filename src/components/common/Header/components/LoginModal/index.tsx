import styled from "styled-components";
import { useModalContext } from "context/modalContext";
import { ReactComponent as ModalCloseIcon } from "images/modal-close-icon.svg";

import LoginForm from "./components/LoginForm";
import AlternativeLoginMethods from "./components/AlternativeLoginMethods";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(30px);
  z-index: 100;
`;

const ModalContent = styled.div`
  position: relative;
  padding: 45px;
  width: 386px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  color: #1a1d1f;
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 17px;
  right: 17px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const Divider = styled.div`
  margin: 45px 0;
  width: 100%;
  height: 2px;
  background: #efefef;
  border-radius: 2px;
`;

export default function LoginModal() {
  const { toggleModal } = useModalContext();

  const onContentClick = (e: React.FormEvent<HTMLDivElement>) => {
    //Prevent modal closing on children click
    e.stopPropagation();
  };

  return (
    <StyledModal onClick={toggleModal}>
      <ModalContent onClick={onContentClick}>
        <CloseButton onClick={toggleModal}>
          <ModalCloseIcon />
        </CloseButton>
        <LoginForm />
        <Divider />
        <AlternativeLoginMethods />
      </ModalContent>
    </StyledModal>
  );
}
