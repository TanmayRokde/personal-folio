import React from "react";
import ViewAllBtn from "../helper/ViewAllBtn";
import Blog from "../components/Blog";
import { blog } from "../data";
import star from "../assets/starsvg.svg";

function Blogs() {
  if (!blog?.length) return null;

  return (
    <section className="my-16">
      <header className="flex items-center justify-between h-12">
        <div className="flex items-center h-[48px] gap-2">
          <img src={star} alt="star icon" />
          <h2 className="text-[30px] sm:text-[40px] font-bold leading-none">
            Blogs
          </h2>
        </div>
        <ViewAllBtn />
      </header>

      <div className="mt-6">
        <ul className="space-y-6">
          {blog.map((item) => (
            <li key={item.id}>
              <div>
                <Blog blog={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
