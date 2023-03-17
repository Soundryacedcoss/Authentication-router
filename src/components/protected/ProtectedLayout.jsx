import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/AuthProvider";

export const ProtectedLayout = ({ children }) => {
  // accessing custom hook
  const user = useAuth();
  // if user is not authenticated
  if (user.user.userName === "" || user.user.userName === undefined) {
    return <Navigate to="/SignUp" />;
  }
  // user is autheticated
  else return children;
};
