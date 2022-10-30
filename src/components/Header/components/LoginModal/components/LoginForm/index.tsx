import styled from "styled-components";
import { useModalContext } from "context/modalContext";

import { ReactComponent as ModalCloseIcon } from "images/modal-close-icon.svg";
import { ReactComponent as GmailIcon } from "images/gmail-icon.svg";
import { ReactComponent as KakaoIcon } from "images/kakao-icon.svg";

import Button from "components/common/Button";

const LoginFormContainer = styled.div`
  position: relative;
  padding: 45px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  color: #1a1d1f;
  font-weight: 600;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
`;

const Description = styled.span`
  margin-top: 25px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 17px;
  right: 17px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const InputsWrapper = styled.div`
  margin: 20px 0 25px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Divider = styled.div`
  margin: 45px 0;
  width: 100%;
  height: 2px;
  background: #efefef;
  border-radius: 2px;
`;

const AlternativeText = styled.span`
  color: ${(props) => props.theme["gs-600"]};
`;

const AlternativeTextHighlight = styled.span`
  color: ${(props) => props.theme["pr-600"]};
`;

const AlternativeOptionsContainer = styled.div`
  padding-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const AlternativeOption = styled.button`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #eeeeee;
  background-color: transparent;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    border-color: ${(props) => props.theme["gs-200"]};
  }
`;

export default function LoginForm() {
  const { toggleModal } = useModalContext();

  const onContainerClick = (e: React.FormEvent<HTMLDivElement>) => {
    //Prevent modal closing on children click
    e.stopPropagation();
  };

  return (
    <LoginFormContainer onClick={onContainerClick}>
      <CloseButton onClick={toggleModal}>
        <ModalCloseIcon />
      </CloseButton>
      <Title>Login</Title>
      <Description>Or continue with email address</Description>
      <InputsWrapper>
        <input />
        <input />
      </InputsWrapper>
      <Button text="Login" width="300px" />
      <Divider />
      <AlternativeText>
        Or
        <AlternativeTextHighlight> sign up</AlternativeTextHighlight> with Open
        account
      </AlternativeText>
      <AlternativeOptionsContainer>
        <AlternativeOption>
          <GmailIcon />
        </AlternativeOption>
        <AlternativeOption>
          <KakaoIcon />
        </AlternativeOption>
      </AlternativeOptionsContainer>
    </LoginFormContainer>
  );
}
