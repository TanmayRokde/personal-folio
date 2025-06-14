import React from "react";

function ActionButton({ btnTxt }) {
  return (
    <button className="rounded-[100px]  px-[20px] sm:px-[32px] py-[10px] sm:py-[16px] bg-white gap-[10px] font-[600] text-[14px] leading-[24px] tracking-[0%] text-dark">
      {btnTxt}
    </button>
  );
}

export default ActionButton;
