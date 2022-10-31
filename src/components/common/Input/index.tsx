import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const StyledLabel = styled.label<{ icon?: string }>`
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
    background: ${({ icon }) =>
      icon ? `no-repeat center url(${icon})` : "none"};
  }
`;

const StyledInput = styled.input`
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

export default function Input({ icon, ...rest }: InputProps) {
  return (
    <StyledLabel icon={icon}>
      <StyledInput {...rest} />
    </StyledLabel>
  );
}
