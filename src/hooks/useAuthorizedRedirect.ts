import { useAuthContext } from "context/authContext";
import { useNavigate } from "react-router-dom";

export default function useAuthorizedRedirect() {
  const { setIsAuthorized } = useAuthContext();
  const navigate = useNavigate();

  return () => {
    setIsAuthorized(true);
    navigate("/");
  };
}
