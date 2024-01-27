import React from "react";
import "./Inputs.css";

const Input = ({ name, type, title, setValue, value }) => {
  return (
    <>
      <div className="formGroup">
        <label htmlFor="">{title}</label>
        <input
          type={type}
          name={name}
          placeholder={title}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
