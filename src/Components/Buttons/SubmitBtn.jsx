import React from "react";
import "./Button.css";

const SubmitBtn = ({ value }) => {
  return (
    <>
      <div className="btnContainer">
        <input type="submit" value={value} className="submitBtn" />
      </div>
    </>
  );
};

export default SubmitBtn;
