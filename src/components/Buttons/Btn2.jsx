import React from "react";
import "./Btn2.css";

import { IoMdDownload } from "react-icons/io";

const Btn2 = ({ link }) => {
  return (
    <a href={link} className="Btn2">
      <IoMdDownload /> Download RuleBook
    </a>
  );
};

export default Btn2;
