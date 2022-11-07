import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useModalContext } from "context/modalContext";
import { useAuthContext } from "context/authContext";
import { device } from "style/breakpoints";

import HamburgerButton from "./components/HamburgerButton";
import LoginModal from "./components/LoginModal";
import SideMenuModal from "./components/SideMenuModal";

import AuthorizationButtons from "./components/AuthorizationButtons";
import AuthorizedUser from "./components/AuthorizedUser";

const StyledHeader = styled.header`
  position: relative;
  padding: 20px;
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["gs-50"]};

  @media ${device.laptop} {
    padding: 30px 55px;
  }
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
  const { visibleModal } = useModalContext();
  const { pathname } = useLocation();
  const { isAuthorized } = useAuthContext();

  const isRegisterPage = pathname === "/register";
  const isLoginModalVisible = visibleModal === "login";
  const isSideMenuModalVisible = visibleModal === "sideMenu";

  return (
    <StyledHeader>
      <HamburgerButton />

      <CurrentPageDescription>
        {isRegisterPage ? "User Registration" : ""}
      </CurrentPageDescription>

      <SignButtonsWrapper>
        {isAuthorized ? <AuthorizedUser /> : <AuthorizationButtons />}
      </SignButtonsWrapper>
      {isLoginModalVisible && <LoginModal />}
      {isSideMenuModalVisible && <SideMenuModal />}
    </StyledHeader>
  );
}
