import styled from "styled-components";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  text: string;
  path: string;
  isWhite?: boolean;
  width?: string;
};

const StyledLink = styled(Link)<{ isWhite: boolean; width: string }>`
  padding: 12px 15px;
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.isWhite ? "#ffffff" : props.theme["pr-600"]};
  color: ${(props) => (props.isWhite ? props.theme["pr-600"] : "#ffffff")};
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
    background-color: ${(props) =>
      props.isWhite ? "#ffffff" : props.theme["pr-700"]};
    border-color: ${(props) =>
      props.isWhite ? props.theme["pr-600"] : "transparent"};
  }
`;

// Some buttons are actually Links
// They have the same style but act differently
export default function ButtonLink({
  text,
  path,
  isWhite = false,
  width = "max-content",
}: ButtonLinkProps) {
  return (
    <StyledLink to={path} isWhite={isWhite} width={width}>
      {text}
    </StyledLink>
  );
}
