import React from "react";
import TeamIntegrant from "./teamIntegrant";

function PrincipalTeam() {
  const data = [
    {
      image: "https://www.5b.com.gt/assets/img/leader1.png?v=1.0.1",
      name: "Leonte Pallais",
      cargo: "Gerente General",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader2.png?v=1.0.1",
      name: "Abner Guzmán",
      cargo: "Gerente de Innovación y Transformación Digital",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader3.png?v=1.0.1",
      name: "Gabriela Pérez",
      cargo: "Gerente de Mercadeo y Negocios",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader4.png?v=1.0.1",
      name: "Javier Herrera",
      cargo: "Gerente de Finanzas",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader5.png?v=1.0.1",
      name: "Jorge Estévez",
      cargo: "Gerente de Tecnologías de la Información",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader6.png?v=1.0.1",
      name: "Pierluigi Riccardi",
      cargo: "Gerente de Operaciones",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader7.png?v=1.0.1",
      name: "Samuel Ordóñez",
      cargo: "Auditor Interno",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader8.png?v=1.0.1",
      name: "Sonia Martínez",
      cargo: "Gerente de Capital Humano",
    },
    {
      image: "https://www.5b.com.gt/assets/img/leader9.png?v=1.0.1",
      name: "Victor Rapalo",
      cargo: "Gerente de la Procesadora de Tarjetas",
    },
  ];
  return (
    <section className="w-[1300px] min-h-[50vh]">
      <h2
        data-aos="flip-right"
        className="text-5xl text-secondary font-bold text-center mt-[60px]"
      >
        Conoce a nuestros líderes 5B
      </h2>
      <div className="w-full flex flex-wrap justify-between max-[1050px]:justify-around items-center mt-[60px] mb-10">
        {data.map((item, index) => (
          <TeamIntegrant key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default PrincipalTeam;
