import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  variant?: "filled" | "outline";
}

const StyledLabel = styled.label<{
  icon?: string;
}>`
  position: relative;

  ::after {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    display: block;
    content: "";
    width: 22px;
    height: 22px;
    background: ${({ icon }) =>
      icon ? `no-repeat center url(${icon})` : "none"};
  }
`;

const StyledInput = styled.input<{ variant?: "filled" | "outline" }>`
  padding: 12px 50px;
  border: none;
  outline: none;
  border-radius: 12px;
  background-color: ${({ variant }) =>
    variant === "filled" ? "#F4F4F4" : "#FFFFFF"};
  border: 1px solid;
  border-color: ${({ variant }) =>
    variant === "filled" ? "transparent" : "#CDCDCD"};
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;

  ::placeholder {
    color: #9a9fa5;
  }
`;

export default function Input({
  icon,
  variant = "outline",
  ...rest
}: InputProps) {
  return (
    <StyledLabel icon={icon}>
      <StyledInput variant={variant} {...rest} />
    </StyledLabel>
  );
}
