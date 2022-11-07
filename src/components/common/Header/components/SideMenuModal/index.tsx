import styled from "styled-components";

import { Modal, CloseModalButton } from "components/common/Modal";

import MenuList from "../../../SideMenuLinks";

const ModalContent = styled.div`
  position: relative;
  padding: 80px 18px 84px 18px;
  max-width: 328px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  color: ${(props) => props.theme["pr-600"]};
  font-weight: 600;
`;

const SideMenuCloseButton = styled(CloseModalButton)`
  top: 32px;
  right: 20px;
`;

export default function SideMenuModal() {
  return (
    <Modal>
      <ModalContent>
        <SideMenuCloseButton />
        <MenuList />
      </ModalContent>
    </Modal>
  );
}
