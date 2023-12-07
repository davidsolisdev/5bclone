import React from "react";
import CifraEmpresa from "./cifra";

async function CifrasEmpresa() {
  return (
    <section className="w-full min-h-[50vh] bg-[#f3f3f3] pt-12 flex flex-wrap ">
      <article className="flex flex-wrap items-center justify-center w-[35%] max-[1050px]:w-full max-[1050px]:mb-[60px]">
        <h2 className="font-bold text-3xl text-center" data-aos="fade-right">
          La red de cajeros más grande de Centroamérica en cifras:
        </h2>
      </article>
      <article className="flex flex-wrap items-center justify-around flex-1">
        <CifraEmpresa title="Cajeros" value="2,735" />
        <CifraEmpresa title="usuarios" value="3,913,667" />
        <CifraEmpresa title="transacciones anuales" value="144,971,101" />
        <CifraEmpresa title="transacciones diarias promedio" value="396,706" />
      </article>
    </section>
  );
}

export default CifrasEmpresa;
