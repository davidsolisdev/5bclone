import ServiceCard, {
  type ServiceCardProps,
} from "@/views/productosySercicios/serviceCard";
import React from "react";
import styles from "./styles.module.css";

const data = [
  {
    link: "",
    img: "https://www.5b.com.gt/assets/img/service1.png",
    title: "Cajeros automáticos",
    description: "¡Conoce todo lo que puedes hacer en tu cajero 5B!",
  },
  {
    link: "",
    img: "https://www.5b.com.gt/assets/img/service2.png",
    title: "Pida Cheque",
    description:
      "La opción más rápida y eficiente para reserva de fondos de cheques.",
  },
  {
    link: "",
    img: "https://www.5b.com.gt/assets/img/service3.png",
    title: "FID5B",
    description:
      "¿Aún firmas tus documentos a mano?. ¡Llegó tu solución!. Te presentamos FID5B, la firma electrónica avanzada de 5B.",
  },
  {
    link: "",
    img: "https://www.5b.com.gt/assets/img/service4.png",
    title: "Enlaces de comunicación",
    description: "Interconectando al sistema financiero de Guatemala.",
  },
  {
    link: "",
    img: "https://www.5b.com.gt/assets/img/service5.png",
    title: "Procesadora de tarjetas",
    description:
      "Soluciones electrónicas para las transacciones con tarjeta de crédito en el país.",
  },
];

function ProductosYServicios() {
  return (
    <article>
      <h2
        className="w-full text-center text-primary font-bold"
        style={{ fontSize: "3rem" }}
      >
        Productos Y Servicios
      </h2>
      <section className={`${styles.container}`}>
        <ServiceCard
          animation="left"
          widthImage="105px"
          heightImage=""
          link=""
          img="https://www.5b.com.gt/assets/img/service1.png"
          title="Cajeros automáticos"
          description="¡Conoce todo lo que puedes hacer en tu cajero 5B!"
        />
        <ServiceCard
          animation="center"
          widthImage="145px"
          heightImage="85px"
          link=""
          img="https://www.5b.com.gt/assets/img/service2.png"
          title="Pida Cheque"
          description="La opción más rápida y eficiente para reserva de fondos de cheques."
        />
        <ServiceCard
          animation="right"
          widthImage="95px"
          heightImage=""
          link=""
          img="https://www.5b.com.gt/assets/img/service3.png"
          title="FID5B"
          description="¿Aún firmas tus documentos a mano?. ¡Llegó tu solución!. Te presentamos FID5B, la firma electrónica avanzada de 5B."
        />
        <section className="w-full max-[840px]:!w-[0px] mt-5 max-[560px]:hidden"></section>
        <ServiceCard
          animation="left"
          widthImage="105px"
          heightImage=""
          link=""
          img="https://www.5b.com.gt/assets/img/service4.png"
          title="Enlaces de comunicación"
          description="Interconectando al sistema financiero de Guatemala."
        />
        <ServiceCard
          animation="right"
          widthImage="105px"
          heightImage=""
          link=""
          img="https://www.5b.com.gt/assets/img/service5.png"
          title="Procesadora de tarjetas"
          description="Soluciones electrónicas para las transacciones con tarjeta de crédito en el país."
        />
      </section>
    </article>
  );
}

export default ProductosYServicios;
