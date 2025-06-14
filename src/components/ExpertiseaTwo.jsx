import React from "react";
import dot from "../assets/dot.svg";

const ExpertiseTwo = ({ title, text }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mb-4">
        <img src={dot} alt="dot" />
        <h3 className="font-semibold text-[24px] leading-[32px]">{title}</h3>
      </div>
      <p className="poppins-text-small">{text}</p>
    </div>
  );
};

export default ExpertiseTwo;
