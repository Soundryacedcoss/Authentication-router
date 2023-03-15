import React, { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export const SettingPage = () => {
  // refs for input fieldI
  const setting1 = useRef();
  const setting2 = useRef();
  // usintg useNavigate hook for redirect to other page
  const navigate = useNavigate();
  // set setting handler
  const SetHandler = () => {
    navigate({
      pathname: "/profile/settings/detail",
      search: createSearchParams({
        set1: setting1.current.value,
        set2: setting2.current.value,
      }).toString(),
    });
  };
  return (
    <div className="setting profile">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Setting1
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="setting1"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={setting1}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Setting2
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Setting2"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={setting2}
        />
      </div>
      <button className="btn btn-success" onClick={SetHandler}>
        Set
      </button>
    </div>
  );
};
