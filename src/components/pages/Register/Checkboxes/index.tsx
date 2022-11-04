import styled from "styled-components";
import { newsCheckboxText, licenseCheckboxText } from "static/constants";
import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";

import Checkbox from "components/common/Checkbox";

type CheckboxesProps = {
  agrees: { news: boolean; license: boolean; privacy: boolean };
  dispatch: React.Dispatch<REGISTER_FORM_ACTIONTYPE>;
};

const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PrivacyTextWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const PrivacyLink = styled.a`
  color: #007aeb;
  font-weight: 700;
  text-decoration: none;
`;

export default function Checkboxes({ agrees, dispatch }: CheckboxesProps) {
  const { news, license, privacy } = agrees;

  const onCheckboxChange = (name: "news" | "license" | "privacy") => {
    dispatch({ type: "setAgrees", payload: name });
  };

  const onNewsCheckboxChange = () => onCheckboxChange("news");
  const onLicenseCheckboxChange = () => onCheckboxChange("license");
  const onPrivacyCheckboxChange = () => onCheckboxChange("privacy");

  return (
    <CheckboxesWrapper>
      <Checkbox
        name="register-news"
        isChecked={news}
        onChange={onNewsCheckboxChange}
      >
        <span>{newsCheckboxText}</span>
      </Checkbox>
      <Checkbox
        name="register-license"
        isChecked={license}
        onChange={onLicenseCheckboxChange}
        required
      >
        <span>{licenseCheckboxText}</span>
      </Checkbox>
      <Checkbox
        name="register-privacy"
        isChecked={privacy}
        onChange={onPrivacyCheckboxChange}
        required
      >
        <PrivacyTextWrapper>
          <span>I agree to the</span>
          <PrivacyLink href="/">PRIVACY POLICY</PrivacyLink>
        </PrivacyTextWrapper>
      </Checkbox>
    </CheckboxesWrapper>
  );
}
