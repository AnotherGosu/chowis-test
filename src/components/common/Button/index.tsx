import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isWhite?: boolean;
  width?: string;
}

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
  isWhite = false,
  width = "max-content",
  ...rest
}: ButtonProps) {
  return (
    <StyledButton isWhite={isWhite} width={width} type="button" {...rest}>
      {text}
    </StyledButton>
  );
}
