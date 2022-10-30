import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  isWhite?: boolean;
  width?: string;
};

const StyledButton = styled.button<{ isWhite: boolean; width: string }>`
  padding: 12px 15px;
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.isWhite ? "#ffffff" : props.theme["pr-600"]};
  color: ${(props) => (props.isWhite ? props.theme["pr-600"] : "#ffffff")};
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    background-color: ${(props) =>
      props.isWhite ? "#ffffff" : props.theme["pr-700"]};
    border-color: ${(props) =>
      props.isWhite ? props.theme["pr-600"] : "transparent"};
  }
`;

export default function Button({
  text,
  onClick,
  isWhite = false,
  width = "max-content",
}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} isWhite={isWhite} width={width}>
      {text}
    </StyledButton>
  );
}
