import styled from "styled-components";
import { useModalContext } from "context/modalContext";

const StyledHamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Line = styled.div`
  width: 34px;
  height: 5px;
  background-color: ${(props) => props.theme["pr-600"]};
  border-radius: 10px;
`;

export default function HamburgerButton() {
  const { showModal } = useModalContext();

  const onHamburgerButtonClick = () => showModal("sideMenu");

  return (
    <StyledHamburgerButton onClick={onHamburgerButtonClick}>
      <Line />
      <Line />
      <Line />
    </StyledHamburgerButton>
  );
}
