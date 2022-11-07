import styled from "styled-components";
import { useModalContext } from "context/modalContext";
import modalCloseIcon from "images/modal-close-icon.svg";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(30px);
  z-index: 99;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  width: 19px;
  height: 19px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${modalCloseIcon});
`;

export const CloseModalButton = ({ className }: { className?: string }) => {
  const { hideModal } = useModalContext();

  return <StyledCloseButton onClick={hideModal} className={className} />;
};

export function Modal({ children }: { children: React.ReactNode }) {
  const { hideModal } = useModalContext();

  const onModalClick = (e: React.FormEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  return <StyledModal onClick={onModalClick}>{children}</StyledModal>;
}
