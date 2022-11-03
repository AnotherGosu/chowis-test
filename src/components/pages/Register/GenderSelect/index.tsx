import styled from "styled-components";
import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";

import { ReactComponent as GenderMaleIcon } from "images/gender-male-icon.svg";
import { ReactComponent as GenderFemaleIcon } from "images/gender-female-icon.svg";

type GenderSelectProps = {
  gender: string;
  dispatch: React.Dispatch<REGISTER_FORM_ACTIONTYPE>;
};

const GenderSelectWrapper = styled.div`
  padding: 10px 30px 20px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 5px;
  border: 2px solid #cdcdcd;
  border-radius: 10px;
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

const Title = styled.span`
  grid-column: -1 / 1;
`;

const GenderButton = styled.button<{ isActive?: boolean }>`
  padding: 15px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  font-weight: 600;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#7c7c7c")};
  background: ${({ isActive, theme }) =>
    isActive ? theme["pr-600"] : "#cdcdcd"};
  transition: ${({ theme }) => theme["transition-main"]};

  :hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme["pr-600"] : theme["pr-500"]};
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
    </GenderSelectWrapper>
  );
}
