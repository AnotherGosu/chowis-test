import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useModalContext } from "context/modalContext";
import { device } from "style/breakpoints";

import Button from "components/common/Button";
import ButtonLink from "components/common/ButtonLink";

const SignUpButtonLink = styled(ButtonLink)`
  @media ${device.laptop} {
    padding: 15px 26px;
    font-weight: 700;
    font-size: 20px;
  }
`;

const SignInButton = styled(Button)`
  @media ${device.laptop} {
    padding: 15px 26px;
    font-weight: 700;
    font-size: 20px;
  }
`;

export default function AuthorizationButtons() {
  const { toggleModal } = useModalContext();
  const { pathname } = useLocation();

  const isRegisterPage = pathname === "/register";
  return (
    <>
      {isRegisterPage ? (
        <SignUpButtonLink text="Home" to="/" variant="outline" />
      ) : (
        <SignUpButtonLink text="Sing Up" to="/register" variant="outline" />
      )}
      <SignInButton text="Sign In" onClick={toggleModal} />
    </>
  );
}
