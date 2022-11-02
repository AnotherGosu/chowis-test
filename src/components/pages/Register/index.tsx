import styled from "styled-components";
import { useReducer } from "react";
import { reducer, initialState } from "./registerFormReducer";

import Header from "components/common/Header";

import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import GenderSelect from "./GenderSelect";

const Main = styled.main`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export default function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstName, lastName, mail, password, gender } = state;

  const onRegisterFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        </RegisterForm>
      </Main>
    </>
  );
}
