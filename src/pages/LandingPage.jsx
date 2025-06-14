import React from "react";


import Banner from "../sections/Banner";
import Expertise from "../sections/Expertise";
import Works from "../sections/Works";
import Experience from "../sections/Experience";
import Blogs from "../sections/Blogs";
import Reviews from "../sections/Reviews";
import Askme from "../sections/Askme";

const HomePage = () => {
  const containerClasses = "px-[35px] sm:px-[45px] md:px-[100px]";

  return (
    <main className={containerClasses}>
      {[Banner, Expertise, Works, Experience, Blogs, Reviews, Askme].map(
        (Section, index) => (
          <section key={index}>
            <Section />
          </section>
        )
      )}
    </main>
  );
};

export default HomePage;
