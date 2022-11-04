import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  isChecked: boolean;
}

const CheckboxLabel = styled.label<{ required?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 7px;
  font-weight: 500;
  color: #7c7c7c;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    display: ${({ required }) => (required ? "block" : "none")};
    content: "*";
    color: #ff0000;
    font-size: 24px;
  }
`;

const AsideWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2px;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #7c7c7c;
  border-radius: 4px;
  background-color: #fff;
  /* background-color: ${(props) => props.theme["pr-600"]}; */
  display: grid;
  place-content: center;
  align-self: flex-start;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :checked {
    background-color: ${(props) => props.theme["pr-600"]};
  }
`;

const RequiredStar = styled.span`
  color: #ff0000;
  font-size: 24px;
`;

export default function Checkbox({
  children,
  isChecked,
  required,
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxLabel required={required}>
      <AsideWrapper>
        {required && <RequiredStar>*</RequiredStar>}
        <StyledCheckbox
          type="checkbox"
          checked={isChecked}
          required={required}
          {...rest}
        />
      </AsideWrapper>
      {children}
    </CheckboxLabel>
  );
}
