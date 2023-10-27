import React from "react";
import Image from "next/image";
import "./Member.css";
const Member = ({ image, name }) => {
  return (
    <div className="Team_Member">
      <Image src={image} width={120} height={120} />
      <p>{name}</p>
    </div>
  );
};

export default Member;
