import React from "react";

const Banner = () => {
  return (
    <section className="py-[150px] md:py-[176px] px-4">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center">
          <h1 className="font-extrabold tracking-tight uppercase text-[32px] sm:text-[52px] md:text-[64px] leading-[50px] sm:leading-[60px] md:leading-[80px]">
            <span className="inline-block mr-3 align-middle">
              I’m a DIGITAL
            </span>
            <span className="inline-block mx-2 align-middle">CREATOR</span>
            <span className="inline-block align-middle">WORKING WORLDWIDE</span>
          </h1>
        </header>

        <div className="mt-[112px] flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">
          <div className="w-full md:max-w-[716px] md:pr-[123px] flex justify-evenly text-center md:text-left">
            {["Brand One", "Brand Two", "Brand Three"].map((brand, index) => (
              <span key={index} className="font-semibold text-sm">
                {brand}
              </span>
            ))}
          </div>

          <div className="w-full md:max-w-[492px] text-center md:text-left">
            <p className="poppins-text-small h-[72px]">
              Browse a selection of digital builds crafted to merge aesthetics
              with clarity. Each piece is a blend of intention, interaction, and
              inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
