import styled from "styled-components";
import { device } from "style/breakpoints";

import SideMenuLinks from "components/common/SideMenuLinks";
import ControlButtons from "./components/ControlButtons";

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

const SidePanelWrapper = styled.div`
  height: 100%;
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledSideMenuLinks = styled(SideMenuLinks)`
  display: flex;
  align-self: flex-start;
`;

const Credits = styled.span`
  margin-top: auto;
  font-weight: 700;
  color: #c4c4c4;
  grid-column: -1/1;
`;

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <Main className={className}>
      <SidePanelWrapper>
        <StyledSideMenuLinks variant="icons" />
        <ControlButtons />
      </SidePanelWrapper>
      {children}
      <Credits>Powered by CHOWIS</Credits>
    </Main>
  );
}
