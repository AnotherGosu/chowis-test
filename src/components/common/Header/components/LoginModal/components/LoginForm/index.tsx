import styled from "styled-components";
import { useState } from "react";
import useAuthorizedRedirect from "hooks/useAuthorizedRedirect";
import { useModalContext } from "context/modalContext";

import InputMailIcon from "images/input-mail-icon.svg";
import InputPasswordIcon from "images/input-password-icon.svg";

import Button from "components/common/Button";
import Input from "components/common/Input";

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
`;

const Description = styled.span`
  margin-top: 25px;
`;

const InputsWrapper = styled.div`
  margin: 20px 0 25px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authorizedRedirect = useAuthorizedRedirect();
  const { hideModal } = useModalContext();

  const isButtonDisabled = !email || !password;

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authorizedRedirect();
    hideModal();
  };

  return (
    <LoginFormContainer onSubmit={onLoginFormSubmit}>
      <Title>Login</Title>
      <Description>Or continue with email address</Description>
      <InputsWrapper>
        <Input
          value={email}
          onChange={onEmailChange}
          placeholder="Your email"
          type="email"
          autoFocus
          icon={InputMailIcon}
          variant="filled"
        />
        <Input
          value={password}
          onChange={onPasswordChange}
          placeholder="Your password"
          type="password"
          icon={InputPasswordIcon}
          variant="filled"
        />
      </InputsWrapper>
      <Button text="Login" type="submit" disabled={isButtonDisabled} />
    </LoginFormContainer>
  );
}
