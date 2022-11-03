import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  isChecked: boolean;
}

const CheckboxLabel = styled.label`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 7px;
  font-weight: 500;
  color: #7c7c7c;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #7c7c7c;
  border-radius: 4px;
  background-color: #fff;
  display: grid;
  place-content: center;
  align-self: flex-start;
  cursor: pointer;

  ::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme["pr-600"]};
    border-radius: 1px;
    transition: 120ms transform ease-in-out;
    transform: scale(0);
  }

  :checked::before {
    transform: scale(1);
  }
`;

export default function Checkbox({
  children,
  isChecked,
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxLabel>
      <StyledCheckbox type="checkbox" checked={isChecked} {...rest} />
      {children}
    </CheckboxLabel>
  );
}
