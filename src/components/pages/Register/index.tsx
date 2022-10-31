import styled from "styled-components";
import { useState } from "react";

import Header from "components/common/Header";

import PersonalDetails from "./PersonalDetails";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <Header />
      <Main>
        <RegisterForm>
          <PersonalDetails
            firstName={firstName}
            lastName={lastName}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        </RegisterForm>
      </Main>
    </>
  );
}
