import React from "react";

interface TeamIntegrantProps {
  image: string;
  name: string;
  cargo: string;
}

function TeamIntegrant({ image, name, cargo }: TeamIntegrantProps) {
  return (
    <section
      className="w-[31%] max-[1050px]:w-[40%] max-[700px]:w-[80%] mt-[60px] cursor-pointer flex justify-center"
      data-aos="zoom-in"
    >
      <article className="w-[280px] hover:scale-125 transition-all">
        <img src={image} alt="" className="w-full h-[280px]" />
        <span className="block w-fulls">
          <h3 className="text-3xl text-secondary font-bold text-center mt-[20px]">
            {name}
          </h3>
          <p className="text-lg text-white text-center mt-[10px]">{cargo}</p>
        </span>
      </article>
    </section>
  );
}

export default TeamIntegrant;
