import React from "react";
import PageTitle from "../helper/PageTitle";
import ExperienceOne from "../components/Experience";
import { experiences } from "../data";

function Experience() {
  if (!Array.isArray(experiences) || experiences.length === 0) return null;

  return (
    <section className="my-16">
      <PageTitle pageTitle="Experience" />
      <div className="mt-8 space-y-6">
        {experiences.map((item, index) => {
          return (
            <div key={`exp-${index}`}>
              <ExperienceOne singleExperience={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
