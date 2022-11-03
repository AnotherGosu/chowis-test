import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useModalContext } from "context/modalContext";

import Button from "components/common/Button";
import ButtonLink from "components/common/ButtonLink";
import HamburgerButton from "./components/HamburgerButton";
import LoginModal from "./components/LoginModal";

const StyledHeader = styled.header`
  position: relative;
  padding: 20px;
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["gs-50"]};
`;

const SignButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-self: flex-end;
`;

const CurrentPageDescription = styled.span`
  margin-left: 20px;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme["gs-900"]};
`;

export default function Header() {
  const { isModalVisible, toggleModal } = useModalContext();
  const { pathname } = useLocation();

  const isRegisterPage = pathname === "/register";

  return (
    <StyledHeader>
      <HamburgerButton />

      <CurrentPageDescription>
        {isRegisterPage ? "User Registration" : ""}
      </CurrentPageDescription>

      <SignButtonsWrapper>
        {isRegisterPage ? (
          <ButtonLink text="Home" path="/" variant="outline" />
        ) : (
          <ButtonLink text="Sing Up" path="/register" variant="outline" />
        )}
        <Button text="Sign In" onClick={toggleModal} />
      </SignButtonsWrapper>
      {isModalVisible && <LoginModal />}
    </StyledHeader>
  );
}
