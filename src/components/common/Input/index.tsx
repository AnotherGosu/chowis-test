import styled from "styled-components";
import { InputHTMLAttributes, useState } from "react";
import { ReactComponent as InputEyeIcon } from "images/input-eye-icon.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  variant?: "filled" | "outline";
  showEyeIcon?: boolean;
}

const StyledLabel = styled.label<{
  icon?: string;
}>`
  position: relative;

  ::before {
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
  transition: ${(props) => props.theme["transition-main"]};

  ::placeholder {
    color: #9a9fa5;
  }

  :focus {
    border-color: ${({ variant }) =>
      variant === "filled" ? "#CDCDCD" : "#7C7C7C"};
  }
`;

const StyledEyeIcon = styled(InputEyeIcon)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default function Input({
  icon,
  variant = "outline",
  type,
  showEyeIcon,
  ...rest
}: InputProps) {
  const [passwordType, setPasswordType] = useState("password");

  //Show/hide password mask ****
  const onEyeIconClick = () =>
    setPasswordType(passwordType === "password" ? "text" : "password");

  const inputType = showEyeIcon ? passwordType : type;

  return (
    <StyledLabel icon={icon}>
      <StyledInput variant={variant} type={inputType} {...rest} />
      {showEyeIcon && <StyledEyeIcon onClick={onEyeIconClick} />}
    </StyledLabel>
  );
}
