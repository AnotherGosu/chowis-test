import styled from "styled-components";
import chowisLogo from "images/chowis-logo.svg";
import { device } from "style/breakpoints";

const StyledHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const Logo = styled.div`
  width: 100%;
  min-height: 38px;
  background: no-repeat center url(${chowisLogo});
  background-size: contain;

  @media ${device.laptop} {
    width: 758px;
    min-height: 74px;
  }
`;

const Description = styled.span`
  font-size: 18px;
  font-weight: 700;

  @media ${device.laptop} {
    font-size: 29px;
    font-weight: 400;
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Logo />
      <Description>AI BEAUTY COUNSELOR</Description>
    </StyledHero>
  );
}
