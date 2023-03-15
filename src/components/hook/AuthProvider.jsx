import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [setting, setSetting] = useState([]);
  const [flag, setFlag] = useState(false);
  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    // setFlag(true);
    // <Navigate to={"/dashboard"}></Navigate>;
  };

  const signUp = async (data) => {
    setUser(data);
  };
  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    // navigate("/", { replace: true });
  };

  const value = {
    user,
    login,
    logout,
    signUp,
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ user, setUser, value, flag, setting, setSetting }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
