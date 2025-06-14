import React from "react";
import star from "../assets/starsvg.svg";

function PageTitle({ pageTitle }) {
  return (
    <div className="h-[48px] flex items-center gap-[8px] mb-[32px]">
      <img src={star} alt={`${pageTitle} icon`} />
      <p className="font-[700] text-[30px] sm:text-[40px] leading-[100%] tracking-[0%]">
        {pageTitle}
      </p>
    </div>
  );
}

export default PageTitle;
