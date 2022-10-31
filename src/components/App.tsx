import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "style/globalStyle";
import { theme } from "style/theme";
import { ModalContextProvider } from "../context/modalContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "components/pages/Home";
import Register from "components/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return (
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ModalContextProvider>
  );
}
