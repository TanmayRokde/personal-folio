import React from "react";
import PageTitle from "../helper/PageTitle";

function Contact() {
  return (
    <div className="pt-24 px-4 sm:px-8 md:px-16">
      <PageTitle pageTitle="Contact" />
      <form className="flex flex-col gap-4 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg p-3"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 rounded-lg p-3"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded-full w-fit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
