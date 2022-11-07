import styled from "styled-components";
import { device } from "style/breakpoints";

import { Modal, CloseModalButton } from "components/common/Modal";

import LoginForm from "./components/LoginForm";
import AlternativeLoginMethods from "./components/AlternativeLoginMethods";

const ModalContent = styled.div`
  position: relative;
  padding: 45px;
  width: 100%;
  max-width: 386px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  color: #1a1d1f;
  font-weight: 600;

  @media ${device.laptop} {
    max-width: 416px;
  }
`;

const Divider = styled.div`
  margin: 45px 0;
  width: 100%;
  height: 2px;
  background: #efefef;
  border-radius: 2px;
`;

const CloseLoginModalButton = styled(CloseModalButton)`
  top: 17px;
  right: 17px;
`;

export default function LoginModal() {
  return (
    <Modal>
      <ModalContent>
        <CloseLoginModalButton />
        <LoginForm />
        <Divider />
        <AlternativeLoginMethods />
      </ModalContent>
    </Modal>
  );
}
