import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useModalContext } from "context/modalContext";
import { useAuthContext } from "context/authContext";
import { device, windowSizes } from "style/breakpoints";
import useWindowSize from "hooks/useWindowSize";

import LanguageSelect from "components/common/LanguageSelect";

import HamburgerButton from "./components/HamburgerButton";
import LoginModal from "./components/LoginModal";
import SideMenuModal from "./components/SideMenuModal";
import AuthorizationButtons from "./components/AuthorizationButtons";
import AuthorizedUser from "./components/AuthorizedUser";

const StyledHeader = styled.header`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["gs-50"]};

  @media ${device.laptop} {
    padding: 30px 55px;
  }
`;

const CurrentPageDescription = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme["gs-900"]};

  @media ${device.mobile} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export default function Header() {
  const { visibleModal } = useModalContext();
  const { pathname } = useLocation();
  const { isAuthorized } = useAuthContext();
  const { width } = useWindowSize();

  const isRegisterPage = pathname === "/register";
  const isLoginModalVisible = visibleModal === "login";
  const isSideMenuModalVisible = visibleModal === "sideMenu";
  const isLaptop = width >= windowSizes.laptop;

  return (
    <StyledHeader>
      {isLaptop ? <LanguageSelect /> : <HamburgerButton />}

      {isRegisterPage && (
        <CurrentPageDescription>User Registration</CurrentPageDescription>
      )}

      {isAuthorized ? <AuthorizedUser /> : <AuthorizationButtons />}

      {isLoginModalVisible && <LoginModal />}

      {isSideMenuModalVisible && <SideMenuModal />}
    </StyledHeader>
  );
}
