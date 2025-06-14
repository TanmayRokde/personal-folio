import React from "react";
import arrowIcon from "../assets/arrow.svg";

function Footer() {
  const socialLinks = [
    { label: "Behance", url: "" },
    { label: "Dribbble", url: "" },
    { label: "Twitter", url: "" },
    { label: "Instagram", url: "" },
  ];

  return (
    <footer className="px-[20px] sm:px-[30px] md:px-[100px] sm:mt-[112px]">
      <div className="text-center mb-8">
        <h1 className="mb-4 md:mb-8 font-[800] text-[30px] sm:text-[45px] md:text-[50px] lg:text-[64px] sm:leading-20 uppercase tracking-[0%]">
          LET’S TALK!
        </h1>
        <div className="flex gap-2 justify-center items-center">
          <a
            href="mailto:tanmay.json@gmail.com"
            className="decoration-0 poppins-text-medium"
          >
            tanmay.json@gmail.com
          </a>
          <img src={arrowIcon} alt="arrow" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <p className="font-[400] text-[14px] leading-5 tracking-[0%]">
          © Tanmay Rokde - 2025
        </p>

        <ul className="flex gap-2 sm:gap-8 flex-col sm:flex-row items-center">
          {socialLinks.map((profile, index) => (
            <li key={index}>
              <a
                href={profile.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[400] text-[14px] leading-5 tracking-[0%]"
              >
                {profile.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
