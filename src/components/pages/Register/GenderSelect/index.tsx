import styled from "styled-components";
import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";
import { device } from "style/breakpoints";

import { ReactComponent as GenderMaleIcon } from "images/gender-male-icon.svg";
import { ReactComponent as GenderFemaleIcon } from "images/gender-female-icon.svg";

type GenderSelectProps = {
  gender: string;
  dispatch: React.Dispatch<REGISTER_FORM_ACTIONTYPE>;
};

const GenderSelectWrapper = styled.div`
  padding: 11px 32px 19px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  border: 2px solid #cdcdcd;
  border-radius: 10px;

  @media ${device.laptop} {
    padding: 8px 134px 14px 134px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  color: #7c7c7c;

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const StyledGenderMaleIcon = styled(GenderMaleIcon)<{ isActive?: boolean }>`
  path:first-child {
    fill: ${({ isActive }) => (isActive ? "#0DA883" : "#7C7C7C")};
  }
`;

const StyledGenderFemaleIcon = styled(GenderFemaleIcon)<{ isActive?: boolean }>`
  path:first-child {
    fill: ${({ isActive }) => (isActive ? "#0DA883" : "#7C7C7C")};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  @media ${device.laptop} {
    gap: 19px;
  }
`;

const GenderButton = styled.button<{ isActive?: boolean }>`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#7c7c7c")};
  background: ${({ isActive, theme }) =>
    isActive ? theme["pr-600"] : "#cdcdcd"};
  transition: ${({ theme }) => theme["transition-main"]};

  :hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme["pr-600"] : theme["pr-500"]};
  }

  @media ${device.mobile} {
    width: 140px;
  }

  @media ${device.laptop} {
    padding: 17px;
    width: 244px;
    font-size: 18px;
  }
`;

export default function GenderSelect({ gender, dispatch }: GenderSelectProps) {
  const onGenderChange = (newGender: string) => {
    dispatch({
      type: "setUserData",
      payload: { name: "gender", value: newGender },
    });
  };

  const onMaleButtonClick = () => onGenderChange("male");
  const onFemaleButtonClick = () => onGenderChange("female");

  return (
    <GenderSelectWrapper>
      <Title>Select Gender</Title>
      <ButtonsWrapper>
        <GenderButton
          isActive={gender === "male"}
          onClick={onMaleButtonClick}
          type="button"
        >
          <StyledGenderMaleIcon isActive={gender === "male"} />
          <span>Male</span>
        </GenderButton>
        <GenderButton
          isActive={gender === "female"}
          onClick={onFemaleButtonClick}
          type="button"
        >
          <StyledGenderFemaleIcon isActive={gender === "female"} />
          <span>Female</span>
        </GenderButton>
      </ButtonsWrapper>
    </GenderSelectWrapper>
  );
}
