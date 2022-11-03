import styled from "styled-components";
import {
  birthYearSelectOptions,
  skinGroupSelectOptions,
  ethnicitySelectOptions,
} from "static/constants";
import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";

import Select from "components/common/Select";

type IndividualOptionsProps = {
  birthYear: string;
  skinGroup: string;
  ethnicity: string;
  dispatch: React.Dispatch<REGISTER_FORM_ACTIONTYPE>;
};

const IndividualOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default function IndividualOptions({
  birthYear,
  skinGroup,
  ethnicity,
  dispatch,
}: IndividualOptionsProps) {
  const onSelectChange = (
    name: "birthYear" | "skinGroup" | "ethnicity",
    value: string
  ) => {
    dispatch({ type: "setUserData", payload: { name, value } });
  };

  const onBirthYearChange = (value: string) =>
    onSelectChange("birthYear", value);
  const onSkinGroupChange = (value: string) =>
    onSelectChange("skinGroup", value);
  const onEthnicityChange = (value: string) =>
    onSelectChange("ethnicity", value);

  return (
    <IndividualOptionsWrapper>
      <Select
        title="Birth Year"
        value={birthYear}
        options={birthYearSelectOptions}
        onChange={onBirthYearChange}
      />
      <Select
        title="Skin Group"
        value={skinGroup}
        options={skinGroupSelectOptions}
        onChange={onSkinGroupChange}
      />
      <Select
        title="Ethnicity"
        value={ethnicity}
        options={ethnicitySelectOptions}
        onChange={onEthnicityChange}
      />
    </IndividualOptionsWrapper>
  );
}
