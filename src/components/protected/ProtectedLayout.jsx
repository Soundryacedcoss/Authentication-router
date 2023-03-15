import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/AuthProvider";

export const ProtectedLayout = ({ children }) => {
  // accessing custom hook
  const user = useAuth();
  // if user is not authenticated
  if (user) {
    return <Navigate to="/Home" />;
  }
  // user is autheticated
  else return children;
};
