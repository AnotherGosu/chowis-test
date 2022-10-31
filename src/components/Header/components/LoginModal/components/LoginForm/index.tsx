import styled from "styled-components";
import { useState } from "react";

import InputMailIcon from "images/input-mail-icon.svg";
import InputPasswordIcon from "images/input-password-icon.svg";

import Button from "components/common/Button";

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

const LoginLabel = styled.label`
  position: relative;

  ::after {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    display: block;
    content: "";
    width: 25px;
    height: 25px;
  }
`;

const EmailLabel = styled(LoginLabel)`
  ::after {
    background: no-repeat center url(${InputMailIcon});
  }
`;

const PasswordLabel = styled(LoginLabel)`
  ::after {
    background: no-repeat center url(${InputPasswordIcon});
  }
`;

const LoginInput = styled.input`
  padding: 12px 50px;
  border: none;
  outline: none;
  border-radius: 12px;
  background-color: #f4f4f4;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;

  ::placeholder {
    color: #9a9fa5;
  }
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

  return (
    <LoginFormContainer>
      <Title>Login</Title>
      <Description>Or continue with email address</Description>
      <InputsWrapper>
        <EmailLabel>
          <LoginInput
            value={email}
            onChange={onEmailChange}
            placeholder="Your email"
            type="email"
            autoFocus
          />
        </EmailLabel>
        <PasswordLabel>
          <LoginInput
            value={password}
            onChange={onPasswordChange}
            placeholder="Your password"
            type="password"
          />
        </PasswordLabel>
      </InputsWrapper>
      <Button text="Login" width="300px" />
    </LoginFormContainer>
  );
}
