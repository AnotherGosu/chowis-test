enum REGISTER_FORM_FIELD_NAMES {
  firstName,
  lastName,
  mail,
  password,
  gender,
  birthYear,
  skinGroup,
  ethnicity,
}

export type REGISTER_FORM_ACTIONTYPE =
  | {
      type: "setUserData";
      payload: { name: keyof typeof REGISTER_FORM_FIELD_NAMES; value: string };
    }
  | { type: "setAgrees"; payload: "news" | "license" | "privacy" };
