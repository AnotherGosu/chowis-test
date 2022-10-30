import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "style/globalStyle";
import { theme } from "style/theme";
import { ModalContextProvider } from "../context/modalContext";

import Button from "components/common/Button";

import Header from "./Header";
import Hero from "./Hero";
import GeoConditionCards from "./GeoConditionCards";

const Main = styled.main`
  padding: 140px 20px 25px 20px;
  height: calc(100vh - 83px);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme["pr-600"]};
`;

const Credits = styled.span`
  margin-top: auto;
  font-weight: 700;
  color: #c4c4c4;
`;

export default function App() {
  return (
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Hero />
          <GeoConditionCards />
          <Button text="Let's begin!" width="372px" />
          <Credits>Powered by CHOWIS</Credits>
        </Main>
      </ThemeProvider>
    </ModalContextProvider>
  );
}
