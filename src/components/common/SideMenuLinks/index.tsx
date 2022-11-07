import styled from "styled-components";
import { Link } from "react-router-dom";
import { sideMenuLinks } from "static/constants";

type MenuListProps = {
  className?: string;
  variant?: "icons" | "text";
};

const SideMenuLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuLink = styled(Link)`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  color: ${(props) => props.theme["pr-600"]};
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    background: #eeeef9;
  }
`;

export default function MenuList({
  className,
  variant = "text",
}: MenuListProps) {
  return (
    <SideMenuLinksWrapper className={className}>
      {sideMenuLinks.map(({ text, to, Icon }) => (
        <MenuLink key={text} to={to}>
          <Icon />
          {variant === "text" && text}
        </MenuLink>
      ))}
    </SideMenuLinksWrapper>
  );
}
