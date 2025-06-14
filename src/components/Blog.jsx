import React from "react";
import useFormatDate from "../helper/useFormatDate";
import SkillHelper from "../helper/SkillHelper";
import ActionButton from "../helper/ActionButton";

const Blog = ({ blog }) => {
  const formattedDate = useFormatDate(blog.publishDate);

  return (
    <article className="flex flex-col sm:flex-row w-full gap-6 mt-8 p-6 md:p-0 items-start md:items-center">
      <div className="w-full sm:w-60 md:w-[286px] h-60 md:h-64 lg:h-full overflow-hidden rounded">
        <img
          src={blog.img}
          alt={`blog-${blog.id}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col sm:flex-row justify-between gap-4 sm:gap-0 w-full">
        <div className="flex flex-col gap-4 sm:mx-8">
          <p className="poppins-text-medium">{formattedDate || ""}</p>
          <h3 className="font-semibold text-[30px] md:text-[40px] leading-none">
            {blog.title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {blog.skills.map((skill, i) => (
              <SkillHelper key={i} skill={skill} />
            ))}
          </ul>
        </div>

        <div className="block lg:hidden self-end">
          <button className="rounded-full px-5 sm:px-8 py-2 sm:py-4 bg-white font-semibold text-xs sm:text-sm text-dark">
            Read
          </button>
        </div>
      </div>

      <div className="hidden lg:block ml-auto self-center">
        <ActionButton btnTxt="Read" />
      </div>
    </article>
  );
};

export default Blog;
