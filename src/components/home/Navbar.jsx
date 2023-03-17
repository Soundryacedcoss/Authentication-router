import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-light bg-light">
        <div className="">
          <Link to={"/"}>
            <button className="btn btn-primary mx-3">Home</button>
          </Link>
          <Link to={"/SignUp"}>
            <button className="btn btn-primary  mx-3">Sign Up</button>
          </Link>
          <Link to={"/Login"}>
            <button className="btn btn-primary mx-3">Sign In</button>
          </Link>
          <Link to={"/profile"}>
            <button className="btn btn-primary mx-3">Profile</button>
          </Link>
          <Link to={"/profile/settings"}>
            <button className="btn btn-primary mx-3">Setting</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
