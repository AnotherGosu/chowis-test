import styled from "styled-components";
import {
  newsCheckboxText,
  licenseCheckboxText,
  privacyCheckboxText,
} from "static/constants";
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
      >
        <span>{licenseCheckboxText}</span>
      </Checkbox>
      <Checkbox
        name="register-privacy"
        isChecked={privacy}
        onChange={onPrivacyCheckboxChange}
      >
        <span>{privacyCheckboxText}</span>
      </Checkbox>
    </CheckboxesWrapper>
  );
}
