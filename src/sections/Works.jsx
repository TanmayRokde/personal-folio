import React from "react";
import PageTitle from "../helper/PageTitle";
import WorkCard from "../components/WorkCard";
import { works } from "../data";

function Works() {
  return (
    <div className=" my-[50px] sm:my-[64px] ">
      <div className="flex items-start justify-between h-[48px]">
        <PageTitle pageTitle={"Works"} />
        <p className="underline decoration-[0%] decoration-solid underline-offset-[4px] h-[22px] self-center font-[500] text-[18px] leading-[150%] sm:leading-[130%] tracking-[0%]">
          view all
        </p>
      </div>
      <ul>
        {works.length > 0 &&
          works.map((item, i) => (
            <li key={i}>
              <WorkCard singleWork={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Works;
