import styled from "styled-components";

import Hero from "./Hero";
import GeoConditionCards from "./GeoConditionCards";

import Header from "components/common/Header";
import Button from "components/common/Button";
import Credits from "components/common/Credits";

const Main = styled.main`
  padding: 140px 20px 25px 20px;
  height: calc(100vh - 83px);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme["pr-600"]};
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <GeoConditionCards />
        <Button text="Let's begin!" width="372px" />
        <Credits />
      </Main>
    </>
  );
}
