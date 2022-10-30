import styled from "styled-components";
import { useModalContext } from "context/modalContext";

import Button from "components/common/Button";
import HamburgerButton from "./components/HamburgerButton";
import LoginModal from "./components/LoginModal";

const StyledHeader = styled.header`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["gs-50"]};
`;

const SignButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export default function Header() {
  const { isModalVisible, toggleModal } = useModalContext();

  return (
    <StyledHeader>
      <HamburgerButton />
      <SignButtonsWrapper>
        <Button text="Sing Up" isWhite />
        <Button text="Sign In" onClick={toggleModal} />
      </SignButtonsWrapper>
      {isModalVisible && <LoginModal />}
    </StyledHeader>
  );
}
