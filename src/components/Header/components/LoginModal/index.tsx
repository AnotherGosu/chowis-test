import styled from "styled-components";
import { useModalContext } from "context/modalContext";

import LoginForm from "./components/LoginForm";

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
`;

export default function LoginModal() {
  const { toggleModal } = useModalContext();

  return (
    <StyledModal onClick={toggleModal}>
      <LoginForm />
    </StyledModal>
  );
}
