import React, { useState } from "react";
import PageTitle from "../helper/PageTitle";

function Askme() {
  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer:
        "I use Figma, Adobe XD, Sketch, and other design tools for creating UX designs.",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer:
        "I measure success through user testing, feedback, and analytics to understand user engagement and satisfaction.",
    },
  ];

  const [active, setActive] = useState(0);

  const handleToggle = (index) => {
    setActive(index);
  };

  return (
    <section className="my-16">
      <PageTitle pageTitle="Frequently asked questions" />

      <div className="mt-10 space-y-8">
        {faqs.map((item, idx) => (
          <article key={idx}>
            <header>
              <button
                onClick={() => handleToggle(idx)}
                className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-medium leading-10 tracking-tight mb-2"
              >
                {item.question}
              </button>
            </header>

            <div
              className={`transition-all ease-in-out duration-500 overflow-hidden ${
                active === idx
                  ? "max-h-40 scale-y-100 delay-75"
                  : "max-h-0 scale-y-0"
              }`}
            >
              <p className="poppins-text-medium">{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Askme;
