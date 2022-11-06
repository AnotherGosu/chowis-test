import styled from "styled-components";
import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";
import { device } from "style/breakpoints";

import InputUserIcon from "images/input-user-icon.svg";

import Input from "components/common/Input";

type PersonalDetailsProps = {
  firstName: string;
  lastName: string;
  dispatch: React.Dispatch<REGISTER_FORM_ACTIONTYPE>;
};

const PersonalDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 330px 436px;
    gap: 8px;
  }
`;

const Description = styled.span`
  font-size: 16px;
  color: #55b692;

  @media ${device.laptop} {
    grid-column: -1 /1;
  }
`;

export default function PersonalDetails({
  firstName,
  lastName,
  dispatch,
}: PersonalDetailsProps) {
  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setUserData",
      payload: { name: "firstName", value: e.target.value },
    });
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setUserData",
      payload: { name: "lastName", value: e.target.value },
    });
  };

  return (
    <PersonalDetailsWrapper>
      <Description>Personal Details (Optional)</Description>
      <Input
        value={firstName}
        onChange={onFirstNameChange}
        placeholder="Enter First Name"
        icon={InputUserIcon}
      />
      <Input
        value={lastName}
        onChange={onLastNameChange}
        placeholder="Enter Last Name"
        icon={InputUserIcon}
      />
    </PersonalDetailsWrapper>
  );
}
