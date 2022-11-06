import styled from "styled-components";
import { useReducer } from "react";
import { reducer, initialState } from "./registerFormReducer";
import useAuthorizedRedirect from "hooks/useAuthorizedRedirect";
import { device } from "style/breakpoints";

import Header from "components/common/Header";
import MainLayout from "components/common/MainLayout";
import Button from "components/common/Button";
import Credits from "components/common/Credits";

import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import GenderSelect from "./GenderSelect";
import IndividualOptions from "./IndividualOptions";
import Checkboxes from "./Checkboxes";

const RegisterForm = styled.form`
  max-width: 353px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media ${device.laptop} {
    max-width: 774px;
  }
`;

const SaveButton = styled(Button)`
  width: 100%;

  @media ${device.laptop} {
    max-width: 582px;
  }
`;

export default function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authorizedRedirect = useAuthorizedRedirect();

  const {
    firstName,
    lastName,
    mail,
    password,
    gender,
    birthYear,
    skinGroup,
    ethnicity,
    agrees,
  } = state;

  const onRegisterFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authorizedRedirect();
  };

  const isSubmitButtonDisabled =
    !password || !mail || !gender || !agrees.privacy || !agrees.license;

  return (
    <>
      <Header />
      <MainLayout>
        <RegisterForm onSubmit={onRegisterFormSubmit}>
          <PersonalDetails
            firstName={firstName}
            lastName={lastName}
            dispatch={dispatch}
          />
          <AccountDetails mail={mail} password={password} dispatch={dispatch} />
          <GenderSelect gender={gender} dispatch={dispatch} />
          <IndividualOptions
            birthYear={birthYear}
            skinGroup={skinGroup}
            ethnicity={ethnicity}
            dispatch={dispatch}
          />
          <Checkboxes agrees={agrees} dispatch={dispatch} />
          <SaveButton
            text="Save"
            type="submit"
            disabled={isSubmitButtonDisabled}
          />
        </RegisterForm>
        <Credits />
      </MainLayout>
    </>
  );
}
