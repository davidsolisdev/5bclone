import React from "react";
import Certificate from "./certificate";

function Certificates() {
  const certificates = [
    {
      img: "https://www.5b.com.gt/assets/img/certification1.png",
      toltip:
        "ISO/IEC 27001 para un Sistema de Gestión de Seguridad de la Información (SGSI)",
      width: "115px",
      height: "130px",
    },
    {
      img: "https://www.5b.com.gt/assets/img/certification2.png",
      toltip: " ISO/IEC 27001:2005 ",
      width: "120px",
      height: "130px",
    },
    {
      img: "https://www.5b.com.gt/assets/img/certification3.png",
      toltip: "Certificación de seguridad de PIN de VISA",
      width: "175px",
      height: "80px",
    },
    {
      img: "https://www.5b.com.gt/assets/img/certification4.png",
      toltip:
        "Autorizados por el Registro de Prestadores de Servicios de Certificación (RPSC)",
      width: "215px",
      height: "55px",
    },
  ];

  return (
    <section className="w-full min-h-[50vh] flex flex-wrap flex-row justify-center mb-10">
      <h2
        data-aos="fade-up"
        className="w-full text-center mt-[60px] text-primary text-5xl font-bold"
      >
        Nuestras certificaciones
      </h2>
      <span className="w-full flex flex-wrap items-center justify-around  mt-[60px]">
        {certificates.map((certificate, index) => (
          <Certificate key={index} {...certificate} />
        ))}
      </span>
    </section>
  );
}

export default Certificates;
