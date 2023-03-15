import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/AuthProvider";
export const Login = () => {
  // ref for input box
  const user = useAuth();
  // useNavigate hook for redirect
  const navigate = useNavigate();
  // refs for input field
  const PasswordRef = useRef();
  const userNameRef = useRef();

  // msg state for showing validation
  const [msg, setMsg] = useState("");
  // login button function
  const LoginHandler = () => {
    //input box validation
    if (userNameRef.current.value === "") {
      setMsg("Please enter your userName");
    } else if (PasswordRef.current.value === "") {
      setMsg("Please enter your password");
    } else {
      // If no any user exists
      if (user.user.length === undefined) {
        setMsg("Please create your account");
      } else {
        // existing user login functionality
        user.user.forEach((element) => {
          if (element.name !== userNameRef.current.value) {
            setMsg("Username is not correct");
          } else if (element.password !== PasswordRef.current.value) {
            setMsg("Wrong password ! please enter valid password");
          } else {
            setMsg("Login successfully!");
            let obj = {
              userName: userNameRef.current.value,
              password: PasswordRef.current.value,
            };
            user.value.login(obj);
            navigate("/profile");
          }
        });
      }
    }
  };
  // close button for validatin msg
  const closeHandler = () => {
    setMsg("");
  };
  return (
    <div className="Login_container">
      <h2>Login form</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Username"
          aria-label="userName"
          aria-describedby="basic-addon1"
          ref={userNameRef}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          aria-label="password"
          aria-describedby="basic-addon1"
          ref={PasswordRef}
        />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-info" type="button" onClick={LoginHandler}>
          Login
        </button>
      </div>
      {/* conditional rendering */}
      {msg === "" ? (
        ""
      ) : (
        <div
          className="alert alert-warning alert-dismissible fade show mt-3"
          role="alert"
        >
          {msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeHandler}
          ></button>
        </div>
      )}
    </div>
  );
};
