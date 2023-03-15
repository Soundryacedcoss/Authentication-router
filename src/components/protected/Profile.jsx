import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/AuthProvider";

export const Profile = () => {
  // accessing custom hook for authentication
  const user = useAuth();
  // useNavigate hook for redirect
  const navigate = useNavigate();
  // logout handler
  const LogOutHandler = () => {
    user.setUser([]);
    navigate("/");
  };
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <div className="profile">
        <span style={{ float: "right" }}>
          <button className="btn btn-outline" onClick={LogOutHandler}>
            <i className="fa fa-sign-out"></i>{" "}
          </button>

          <Link to={"/profile/settings"}>
            <button className="btn btn-outline">
              <i className="fa fa-gear"></i>{" "}
            </button>
          </Link>
        </span>
        <h2>Hey, {user.user.userName}</h2>
      </div>
    </div>
  );
};
