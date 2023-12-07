import React from "react";

export interface ServiceCardProps {
  link: string;
  img: string;
  title: string;
  description: string;
  widthImage?: string;
  heightImage?: string;
  animation: "left" | "right" | "center";
}

function ServiceCard({
  animation,
  widthImage = "105px",
  heightImage = "",
  link,
  img,
  title,
  description,
}: ServiceCardProps) {
  return (
    <a
      href={link}
      className="no-underline text-gray-500 rounded-lg hover:shadow-lg transition-all duration-300 ease-linear "
      data-aos={
        animation == "left"
          ? "fade-left"
          : animation == "right"
          ? "fade-right"
          : animation == "center"
          ? "zoom-in"
          : ""
      }
    >
      <article className="h-[280px] w-[280px] ">
        <section className="h-[50%] w-full flex justify-center items-center">
          <div style={{ width: widthImage, height: heightImage }}>
            <img src={img} width={widthImage} height={heightImage} />
          </div>
        </section>
        <section className="50% mt-4">
          <h3 className="text-primary font-bold text-lg w-full text-center">
            {title}
          </h3>
          <p className="text-center text-sm">{description}</p>
        </section>
      </article>
    </a>
  );
}

export default ServiceCard;
