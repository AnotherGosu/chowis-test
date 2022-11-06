import styled from "styled-components";
import { device } from "style/breakpoints";

import Hero from "./Hero";
import GeoConditionCards from "./GeoConditionCards";

import Header from "components/common/Header";
import MainLayout from "components/common/MainLayout";
import Button from "components/common/Button";
import Credits from "components/common/Credits";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 391px;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    max-width: 100%;
  }
`;

const BeginButton = styled(Button)`
  width: 100%;

  @media ${device.laptop} {
    max-width: 552px;
    padding: 15px 26px;
    font-size: 20px;
    font-weight: 700;
  }
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <MainLayout>
        <ContentWrapper>
          <Hero />
          <GeoConditionCards />
          <BeginButton text="Let's begin!" />
        </ContentWrapper>
        <Credits />
      </MainLayout>
    </>
  );
}
