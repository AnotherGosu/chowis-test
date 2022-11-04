import { createContext, useContext, useState } from "react";

interface AuthContextInterface {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextInterface>({
  isAuthorized: false,
  setIsAuthorized: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const contextValue = { isAuthorized, setIsAuthorized };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
