import { ReactComponent as LinkHomeIcon } from "images/link-home-icon.svg";
import { ReactComponent as LinkProfileIcon } from "images/link-profile-icon.svg";
import { ReactComponent as LinkShopIcon } from "images/link-shop-icon.svg";
import { ReactComponent as LinkHistoryIcon } from "images/link-history-icon.svg";
import { ReactComponent as LinkHomepageIcon } from "images/link-homepage-icon.svg";

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

export const languageSelectOptions = [
  { value: "eng", text: "English" },
  { value: "kor", text: "한국어" },
  { value: "jap", text: "日本語" },
  { value: "chi-sm", text: "简体" },
  { value: "chi-tr", text: "繁体" },
  { value: "rus", text: "Pусский" },
  { value: "fra", text: "Française" },
];

export const newsCheckboxText =
  "I agree that my E-mail address will be used to receive the news letter and marketing offers on products and services from Chowis Co., Ltd.";

export const licenseCheckboxText =
  "I agree that my E-mail address will be used to receive the license termination/renewal notice from Chowis Co., Ltd.";

export const sideMenuLinks = [
  { text: "Home", to: "/", Icon: LinkHomeIcon },
  { text: "Profile", to: "/register", Icon: LinkProfileIcon },
  { text: "Shop", to: "", Icon: LinkShopIcon },
  { text: "History", to: "", Icon: LinkHistoryIcon },
  { text: "Homepage", to: "", Icon: LinkHomepageIcon },
];
