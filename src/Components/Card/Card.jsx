import React from "react";
import "./Card.css";

const Card = ({ title }) => {
  return (
    <>
      <div className="cardChildContainer">
        <div className="cardImg"></div>
        <div className="cardName">{title}</div>
      </div>
    </>
  );
};

export default Card;
