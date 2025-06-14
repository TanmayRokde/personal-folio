import React from "react";
import quote from "../assets/quote.svg";

const ReviewCard = ({ testim }) => {
  return (
    <article className="flex flex-col sm:flex-row items-start justify-between">
      <header className="sm:my-11 my-4">
        <figure className="flex items-center gap-4 mt-4">
          <img
            src={testim.img}
            alt="user"
            className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full"
          />
          <figcaption>
            <h5 className="text-[24px] leading-8 font-semibold">
              {testim.name}
            </h5>
            <p className="poppins-text-medium">{testim.company}</p>
          </figcaption>
        </figure>
      </header>

      <section className="w-full sm:w-[55%] relative sm:my-4 mt-6">
        <img
          src={quote}
          alt="quote icon"
          className="absolute top-0 left-0 w-[60px] h-[70px] sm:w-[101px] sm:h-[84px]"
        />
        <blockquote className="text-[20px] md:text-[32px] font-medium tracking-tight mt-8 md:leading-10">
          {testim.comment}
        </blockquote>
      </section>
    </article>
  );
};

export default ReviewCard;
