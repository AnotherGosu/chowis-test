import styled from "styled-components";
import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";
import { device } from "style/breakpoints";

import InputMailIcon from "images/input-mail-icon.svg";
import InputPasswordIcon from "images/input-password-icon.svg";

import Input from "components/common/Input";

type AccountDetailsProps = {
  mail: string;
  password: string;
  dispatch: React.Dispatch<REGISTER_FORM_ACTIONTYPE>;
};

const AccountDetailsWrapper = styled.div`
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

export default function AccountDetails({
  mail,
  password,
  dispatch,
}: AccountDetailsProps) {
  const onMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setUserData",
      payload: { name: "mail", value: e.target.value },
    });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setUserData",
      payload: { name: "password", value: e.target.value },
    });
  };

  return (
    <AccountDetailsWrapper>
      <Description>Account Details</Description>
      <Input
        value={mail}
        onChange={onMailChange}
        placeholder="Enter Email Address"
        type="email"
        icon={InputMailIcon}
        required
      />
      <Input
        value={password}
        onChange={onPasswordChange}
        placeholder="Enter Password"
        type="password"
        icon={InputPasswordIcon}
        showEyeIcon
        required
      />
    </AccountDetailsWrapper>
  );
}
