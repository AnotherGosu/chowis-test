import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  :root {
    --shadow-active-1: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }
`;
