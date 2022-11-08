import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { sideMenuLinks } from "static/constants";
import { useModalContext } from "context/modalContext";

type MenuListProps = {
  className?: string;
  variant?: "icons" | "text";
};

const SideMenuLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuLink = styled(Link)<{ isActive: boolean }>`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: ${(props) => (props.isActive ? "#eeeef9" : "transparent")};
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
  const { pathname } = useLocation();
  const { hideModal } = useModalContext();

  const onMenuLinkLick = () => hideModal();

  return (
    <SideMenuLinksWrapper className={className}>
      {sideMenuLinks.map(({ text, to, Icon }) => (
        <MenuLink
          key={text}
          to={to}
          isActive={to === pathname}
          onClick={onMenuLinkLick}
        >
          <Icon />
          {variant === "text" && text}
        </MenuLink>
      ))}
    </SideMenuLinksWrapper>
  );
}
