import styled from "styled-components";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ReactComponent as HelpIcon } from "images/help-icon.svg";
import { ReactComponent as LightThemeIcon } from "images/light-theme-icon.svg";

const ControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ControlButton = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const RightArrowControlButton = styled(ControlButton)`
  padding-bottom: 16px;
  border-bottom: 2px solid #c7fff1;
  border-radius: 2px;
`;

const ThemeControlButton = styled(ControlButton)`
  width: 40px;
  height: 40px;
  background: #fcfcfc;
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25),
    inset 0px -1px 1px rgba(0, 0, 0, 0.04),
    inset 0px 2px 0px rgba(255, 255, 255, 0.25);
  border-radius: 32px;
`;

export default function ControlButtons() {
  return (
    <ControlButtonsContainer>
      <RightArrowControlButton>
        <ArrowRightIcon />
      </RightArrowControlButton>
      <ControlButton>
        <HelpIcon />
      </ControlButton>
      <ThemeControlButton>
        <LightThemeIcon />
      </ThemeControlButton>
    </ControlButtonsContainer>
  );
}
