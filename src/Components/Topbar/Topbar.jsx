import React from "react";
import { AiOutlineMenuFold } from "react-icons/Ai";
import "./Topbar.css";

const Topbar = ({ handleTopBar }) => {
  return (
    <>
      <div className="topContainer shadow">
        <div>
          <AiOutlineMenuFold
            onClick={handleTopBar}
            style={{
              fontSize: "3rem",
              backgroundColor: "whitesmoke",
              borderRadius: ".2rem",
              cursor: "pointer",
              color: "teal",
            }}
          />
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: ".12rem solid black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // order: 2,
          }}
        >
          <img src="" alt="logo" />
        </div>
        <div></div>
        {/* <button >Click</button> */}
      </div>
    </>
  );
};

export default Topbar;
