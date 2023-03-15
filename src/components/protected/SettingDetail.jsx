import React from "react";
import { useSearchParams } from "react-router-dom";

export const SettingDetail = () => {
  const [data] = useSearchParams();
  return (
    <div className="profile">
      <h2>SettingDetail</h2>
      <p>Setting 1 : {data.get("set1")}</p>
      <p>Setting 2 : {data.get("set2")}</p>
    </div>
  );
};
