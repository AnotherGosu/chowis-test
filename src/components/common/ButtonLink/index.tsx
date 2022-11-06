import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface ButtonLinkProps extends LinkProps {
  text: string;
  variant?: "filled" | "outline";
  width?: string;
}

const StyledLink = styled(Link)<{
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
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    background-color: ${({ variant, theme }) =>
      variant === "filled" ? theme["pr-700"] : "#ffffff"};
    border-color: ${({ variant, theme }) =>
      variant === "filled" ? "transparent" : theme["pr-600"]};
  }

  :active {
    background-color: ${({ variant, theme }) =>
      variant === "filled" ? theme["pr-800"] : theme["gs-50"]};
  }
`;

// Some buttons are actually Links
// They have the same style but act differently
export default function ButtonLink({
  text,
  variant = "filled",
  width = "max-content",
  ...rest
}: ButtonLinkProps) {
  return (
    <StyledLink variant={variant} width={width} {...rest}>
      {text}
    </StyledLink>
  );
}
