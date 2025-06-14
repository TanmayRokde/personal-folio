import React, { useState } from "react";

import iconPrev from "../assets/left.svg";
import iconNext from "../assets/right.svg";

import PageTitle from "../helper/PageTitle";
import ReviewCard from "../components/ReviewCard";
import { Reviews } from "../data";

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = Reviews.length;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalReviews - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="my-16">
      <PageTitle pageTitle="What they say" />

      <div>
        <ReviewCard testim={Reviews[currentIndex]} />
      </div>

      <div className="flex gap-4 mx-auto w-max mt-8">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`${
            currentIndex === 0 ? "bg-gray" : "bg-white"
          } h-10 w-10 rounded-[100px] shadow-[4px_16px_32px_0px_rgba(238,238,238,0.16)] 
          place-content-center text-center cursor-pointer`}
        >
          <img src={iconPrev} alt="previous" className="mx-auto my-auto" />
        </button>

        <button
          onClick={goToNext}
          disabled={currentIndex === totalReviews - 1}
          className={`${
            currentIndex === totalReviews - 1 ? "bg-gray" : "bg-white"
          } h-10 w-10 rounded-[100px] shadow-[4px_16px_32px_0px_rgba(238,238,238,0.16)] 
          place-content-center text-center cursor-pointer`}
        >
          <img src={iconNext} alt="next" className="mx-auto my-auto" />
        </button>
      </div>
    </div>
  );
}

export default Review;
