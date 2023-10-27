import React from "react";
import "./Btn2.css";

const Btn3 = ({ link }) => {
  return (
    <a href={link}>
      <button className="Btn2" style={{ color: "white" }}>
        Explore
      </button>
    </a>
  );
};

export default Btn3;
