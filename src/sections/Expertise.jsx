import React from "react";
import PageTitle from "../helper/PageTitle";
import ExpertiseTwo from "../components/ExpertiseaTwo";
import { expertise } from "../data";

function Expertise() {
  if (!Array.isArray(expertise) || expertise.length === 0) return null;

  return (
    <section className="py-[50px] md:py-[64px]">
      <PageTitle pageTitle="Expertise" />
      <div className="grid sm:grid-cols-2 gap-[32px] sm:gap-[64px] mt-8">
        {expertise.map((item, index) => (
          <div key={`expertise-${index}`}>
            <ExpertiseTwo title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
