import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "filled" | "outline";
  width?: string;
}

const StyledButton = styled.button<{
  variant: "filled" | "outline";
  width: string;
}>`
  padding: 12px 15px;
  width: ${(props) => props.width};
  background-color: ${({ variant, theme }) =>
    variant === "filled" ? theme["pr-600"] : "#ffffff"};
  color: ${({ variant, theme }) =>
    variant === "filled" ? "#ffffff" : theme["pr-600"]};
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    background-color: ${({ variant, theme }) =>
      variant === "filled" ? theme["pr-700"] : "#ffffff"};
    border-color: ${({ variant, theme }) =>
      variant === "filled" ? "transparent" : theme["pr-600"]};
  }

  :active {
    background-color: ${({ variant, theme }) =>
      variant === "filled" ? theme["pr-800"] : "#F4F4F4"};
  }
`;

export default function Button({
  text,
  variant = "filled",
  width = "max-content",
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} width={width} type="button" {...rest}>
      {text}
    </StyledButton>
  );
}
