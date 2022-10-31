import styled from "styled-components";
import { useState } from "react";

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

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <LoginFormContainer onSubmit={onFormSubmit}>
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
        />
        <Input
          value={password}
          onChange={onPasswordChange}
          placeholder="Your password"
          type="password"
          icon={InputPasswordIcon}
        />
      </InputsWrapper>
      <Button text="Login" width="300px" type="submit" />
    </LoginFormContainer>
  );
}
