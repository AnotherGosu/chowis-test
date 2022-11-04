import styled from "styled-components";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { reducer, initialState } from "./registerFormReducer";
import { useAuthContext } from "context/authContext";

import Header from "components/common/Header";
import Button from "components/common/Button";
import Credits from "components/common/Credits";

import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import GenderSelect from "./GenderSelect";
import IndividualOptions from "./IndividualOptions";
import Checkboxes from "./Checkboxes";

const Main = styled.main`
  padding: 30px 35px 20px;
  height: calc(100vh - 83px);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme["pr-600"]};
`;

const RegisterForm = styled.form`
  max-width: 353px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export default function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setIsAuthorized } = useAuthContext();
  const navigate = useNavigate();

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
    setIsAuthorized(true);
    navigate("/");
  };

  return (
    <>
      <Header />
      <Main>
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
          <Button text="Save" type="submit" width="353px" />
        </RegisterForm>
        <Credits />
      </Main>
    </>
  );
}
