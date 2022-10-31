import styled from "styled-components";
import { ReactComponent as Logo } from "images/chowis-logo.svg";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const Description = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export default function Hero() {
  return (
    <StyledHero>
      <Logo />
      <Description>AI BEAUTY COUNSELOR</Description>
    </StyledHero>
  );
}
