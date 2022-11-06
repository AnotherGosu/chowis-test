import styled from "styled-components";
import { device } from "style/breakpoints";

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
  }
`;

export default function MainLayout({ children, className }: MainLayoutProps) {
  return <Main className={className}>{children}</Main>;
}
