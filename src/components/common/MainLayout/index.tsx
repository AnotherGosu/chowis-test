import styled from "styled-components";
import { device } from "style/breakpoints";

import SideMenuLinks from "components/common/SideMenuLinks";

type MainLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

const Main = styled.main`
  padding: 25px 20px;
  height: calc(100vh - 83px);
  display: grid;
  grid-template-rows: 1fr max-content;
  justify-items: center;
  align-items: center;
  color: ${(props) => props.theme["pr-600"]};

  @media ${device.laptop} {
    height: calc(100vh - 116px);
    grid-template-columns: max-content 1fr;
  }
`;

const Credits = styled.span`
  margin-top: auto;
  font-weight: 700;
  color: #c4c4c4;
  grid-column: -1/1;
`;

const StyledSideMenuLinks = styled(SideMenuLinks)`
  align-self: flex-start;
  display: none;

  @media ${device.laptop} {
    display: flex;
  }
`;

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <Main className={className}>
      <StyledSideMenuLinks variant="icons" />
      {children}
      <Credits>Powered by CHOWIS</Credits>
    </Main>
  );
}
