import styled from "styled-components";

import Hero from "./Hero";
import GeoConditionCards from "./GeoConditionCards";

import Header from "components/common/Header";
import Button from "components/common/Button";

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

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <GeoConditionCards />
        <Button text="Let's begin!" width="372px" />
        <Credits>Powered by CHOWIS</Credits>
      </Main>
    </>
  );
}
