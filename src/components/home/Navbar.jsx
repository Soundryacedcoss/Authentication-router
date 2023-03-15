import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/Home"}>
            <button className="btn btn-primary">Home</button>
          </Link>
          <Link to={"/SignUp"}>
            <button className="btn btn-primary">Sign Up</button>
          </Link>
          <Link to={"/Login"}>
            <button className="btn btn-primary">Sign In</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
