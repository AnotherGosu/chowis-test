import { REGISTER_FORM_ACTIONTYPE } from "types/actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  mail: "",
  password: "",
  gender: "",
  birthYear: "",
  skinGroup: "",
  ethnicity: "",
  agrees: { news: false, license: false, privacy: false },
};

export function reducer(
  state: typeof initialState,
  action: REGISTER_FORM_ACTIONTYPE
) {
  switch (action.type) {
    case "setUserData":
      return { ...state, [action.payload.name]: action.payload.value };
    case "setAgrees": {
      const updatedAgree = action.payload;
      const { agrees } = state;
      return {
        ...state,
        agrees: { ...agrees, [updatedAgree]: !agrees[updatedAgree] },
      };
    }
    default:
      throw new Error();
  }
}
