import React from "react";
import SkillHelper from "../helper/SkillHelper";
import ActionButton from "../helper/ActionButton";

const WorkCard = ({ singleWork }) => {
  const { img, title, description, skills } = singleWork;

  return (
    <section className="relative w-full mt-8 overflow-hidden rounded-[40px] bg-gray/[0.48] px-8 py-10 flex flex-col sm:flex-row gap-8">
      {/* Image Section */}
      <div className="flex-shrink-0 sm:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-52 sm:h-full object-cover rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between sm:w-1/2">
        <header>
          <h2 className="text-[30px] sm:text-[40px] font-semibold leading-none">
            {title}
          </h2>
          <p className="poppins-text-medium mt-4 mb-6">{description}</p>

          <ul className="flex flex-wrap gap-2">
            {Array.isArray(skills) &&
              skills.map((skill, index) => (
                <SkillHelper key={index} skill={skill} />
              ))}
          </ul>
        </header>

        <footer className="mt-6">
          <ActionButton btnTxt="View Case Study" />
        </footer>
      </div>
    </section>
  );
};

export default WorkCard;
