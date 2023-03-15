import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/AuthProvider";
export const SignUp = () => {
  // using navigate to navigate other page
  const navigate = useNavigate();
  // custom hook
  const user = useAuth();
  // ref for input box
  const NameRef = useRef();
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const UserNameRef = useRef();
  let arr = [];
  // Sign up button functinality
  const SignUpHandler = () => {
    // validation
    if (NameRef.current.value === "") {
      alert("Please write name");
      NameRef.current.focus();
    } else if (EmailRef.current.value === "") {
      alert("Please write email");
      EmailRef.current.focus();
    } else if (PasswordRef.current.value === "") {
      alert("Please write Password");
      PasswordRef.current.focus();
    } else {
      let obj = {
        name: NameRef.current.value,
        email: EmailRef.current.value,
        password: PasswordRef.current.value,
      };
      arr.push(obj);
      user.value.signUp(arr);
      alert("Account created succesfully");
      navigate("/Login");
    }
  };
  return (
    <div className="Login_container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          aria-label="name"
          aria-describedby="basic-addon1"
          ref={NameRef}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your Email"
          aria-label="email"
          aria-describedby="basic-addon1"
          ref={EmailRef}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={UserNameRef}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          aria-label="password"
          aria-describedby="basic-addon1"
          ref={PasswordRef}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button
          className="btn btn-warning"
          type="button"
          onClick={SignUpHandler}
        >
          Sign Up
        </button>
      </div>
      <Link to="/Login" className="mt-5">
        Already account
      </Link>
    </div>
  );
};
