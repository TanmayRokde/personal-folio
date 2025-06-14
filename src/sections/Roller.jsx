import React from "react";
import Marquee from "react-fast-marquee";
import star from "../assets/starsvg.svg";

function Roller() {
  return (
    <div className="my-10 sm:my-16 ">
      <Marquee>
        <div className="flex gap-10 items-center">
          <p className="stroked-text">DEVELOPER</p>
          <img src={star} alt="star" />
          <p className="stroked-text">Designer</p>
          <img src={star} alt="star" />
          <p className="stroked-text">WebFlow</p>
          <img src={star} alt="star" />
          <p className="stroked-text">Figma</p>
          <img src={star} alt="star" className="mr-10" />
        </div>
      </Marquee>
    </div>
  );
}

export default Roller;
