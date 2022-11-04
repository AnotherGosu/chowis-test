import { useLocation } from "react-router-dom";
import { useModalContext } from "context/modalContext";

import Button from "components/common/Button";
import ButtonLink from "components/common/ButtonLink";

export default function AuthorizationButtons() {
  const { toggleModal } = useModalContext();
  const { pathname } = useLocation();

  const isRegisterPage = pathname === "/register";
  return (
    <>
      {isRegisterPage ? (
        <ButtonLink text="Home" path="/" variant="outline" />
      ) : (
        <ButtonLink text="Sing Up" path="/register" variant="outline" />
      )}
      <Button text="Sign In" onClick={toggleModal} />
    </>
  );
}
