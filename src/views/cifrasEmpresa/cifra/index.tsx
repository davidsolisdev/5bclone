import React from "react";

interface CifraEmpresaProps {
  title: string;
  value: string;
}

function CifraEmpresa({ title, value }: CifraEmpresaProps) {
  return (
    <article
      data-aos="flip-up"
      className="w-[40%] max-[675px]:w-[70%] max-[430px]:w-[80%] max-[385px]:w-[90%] h-[200px] mb-[50px] flex flex-wrap items-center justify-center shadow-lg rounded-3xl border-2 border-solid border-primary"
    >
      <p className="block">
        <span className="block w-full mb-3 text-center text-5xl">{value}</span>
        <span className="block w-full text-center text-xl text-gray-500">
          {title}
        </span>
      </p>
    </article>
  );
}

export default CifraEmpresa;
