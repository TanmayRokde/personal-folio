import React from "react";

function SkillHelper({ skill }) {
  return (
    <li className="border w-max rounded-[100px] uppercase px-6 py-2 font-[600] text-[12px] leading-[100%] tracking-[0%] ">
      {skill}
    </li>
  );
}

export default SkillHelper;
