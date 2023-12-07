"use client";

import React, { useState } from "react";
import PublicationBlog from "../publicationBlog";
import { get } from "http";

const Carousel = () => {
  const slides = [
    {
      image: "https://www.5b.com.gt/assets/img/fid5b_blog_thumbnail.jpg",
      title:
        "FID5B: la apuesta de 5B por una transformación digital sostenible",
      fecha: "Noviembre 23, 2023",
      description:
        "FID5B ha atendido a más de 50 000 usuarios desde su constitución como Prestador de Servicios de Certificación...",
    },
    {
      image: "https://www.5b.com.gt/assets/img/pioneros_thumbnail.jpg",
      title:
        "5B, pioneros en la transformación digital de los procesos legales",
      fecha: "Octubre 31, 2023",
      description:
        "El 5B Business Day de Identidad Digital reunió a más de 100 profesionales...",
    },
    {
      image: "https://www.5b.com.gt/assets/img/5b_business_day1_thumbnail.jpg",
      title:
        "¡Hablemos de talento innovador! Una master class disruptiva llega a Guatemala gracias a 5B",
      fecha: "Septiembre 11, 2023",
      description:
        "Para 5B, el talento innovador representa una prioridad estratégica...",
    },
    {
      image:
        "https://www.5b.com.gt/assets/img/5b_digital_summit_2023_thumbnail.jpg",
      title: "5B Digital Summit 2023",
      fecha: "Septiembre 7, 2023",
      description:
        "¡Bienvenidos al evento más esperado del año por la industria financiera!",
    },
    {
      image: "https://www.5b.com.gt/assets/img/5b_business_day_thumbnail.jpg",
      title: "5B Business Day",
      fecha: "Junio 5, 2023",
      description: "Llega a Guatemala el primer 5B Business Day",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const totalSlides = slides.length;

  React.useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setVisibleSlides(3);
      } else if (width > 750) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  // Función para obtener los slides a mostrar
  const getSlidesToShow = () => {
    let slidesToShow = [];
    for (let i = 0; i < visibleSlides; i++) {
      let index = (currentSlide + i) % totalSlides;
      slidesToShow.push(slides[index]);
    }
    return slidesToShow;
  };
  return (
    <div
      data-aos="zoom-in-down"
      className="w-full h-auto flex flex-col items-center justify-between"
    >
      <div className="relative flex items-center w-full h-full">
        {" "}
        {/* Contenedor del carrusel a pantalla completa */}
        {/* Botón Anterior */}
        <button
          className="rounded-xl text-7xl text-primary z-10"
          onClick={prevSlide}
        >
          &lt;
        </button>
        {/* Contenedor de los Slides */}
        <div className="flex justify-around w-full h-full overflow-hidden">
          {" "}
          {/* Slides a pantalla completa */}
          {getSlidesToShow().map((slide, index) => (
            <PublicationBlog {...slide} key={index} />
          ))}
        </div>
        {/* Botón Siguiente */}
        <button
          className="rounded-xl text-7xl text-primary z-10"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
