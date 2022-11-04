const birthYears = Array.from(Array(2004 - 1950 + 1).keys()).map(
  (x) => x + 1950
);
export const birthYearSelectOptions = birthYears.map((year) => ({
  value: `${year}`,
  text: `${year}`,
}));

export const skinGroupSelectOptions = [
  { value: "oily", text: "Oily" },
  { value: "dry", text: "Dry" },
  { value: "normal", text: "Normal" },
  { value: "combination", text: "Combination" },
  { value: "sensitive", text: "Sensitive" },
];
export const ethnicitySelectOptions = [
  { value: "african", text: "African" },
  { value: "european", text: "European" },
  { value: "korean", text: "Korean" },
  { value: "mexican", text: "Mexican" },
  { value: "arabic", text: "Arabic" },
];

export const newsCheckboxText =
  "I agree that my E-mail address will be used to receive the news letter and marketing offers on products and services from Chowis Co., Ltd.";

export const licenseCheckboxText =
  "I agree that my E-mail address will be used to receive the license termination/renewal notice from Chowis Co., Ltd.";
