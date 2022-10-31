import styled from "styled-components";

import InputUserIcon from "images/input-user-icon.svg";

import Input from "components/common/Input";

type PersonalDetailsProps = {
  firstName: string;
  lastName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
};

const PersonalDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.span`
  font-size: 16px;
  color: #55b692;
`;

export default function PersonalDetails({
  firstName,
  lastName,
  setFirstName,
  setLastName,
}: PersonalDetailsProps) {
  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
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
