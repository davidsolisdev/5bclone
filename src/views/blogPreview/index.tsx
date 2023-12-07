import React from "react";
import BlogCarousel from "./blogCarrusel";

function BlogPreview() {
  return (
    <section className="w-[1300px] min-h-[60vh] flex flex-wrap justify-around items-center">
      <span className="w-full flex flex-wrap justify-around items-center mb-10">
        <h2
          data-aos="fade-down"
          className="w-full text-5xl text-center text-primary font-bold mt-[40px]"
        >
          #AprendeCon5B
        </h2>
        <section className="w-full flex flex-wrap justify-between items-center mt-[60px]">
          <BlogCarousel />
        </section>
        <section
          data-aos="fade-up"
          className="w-full mt-[60px] flex justify-center"
        >
          <button className="w-[150px] h-[45px] outline-none text-secondary bg-primary rounded-full text-2xl font-bold">
            Ir al blog
          </button>
        </section>
      </span>
    </section>
  );
}

export default BlogPreview;
