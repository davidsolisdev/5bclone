"use client";
import React, { useState } from "react";

interface CarouselProps {
  height?: string;
}

const Carousel = ({
  height = "h-[95vh] max-[1500px]:h-[90vh] max-[1280px]:h-[80vh] max-[1140px]:h-[75vh] max-[1040px]:h-[70vh] max-[980px]:h-[65vh] max-[900px]:h-[60vh] max-[840px]:h-[55vh] max-[800px]:h-[50vh] max-[750px]:h-[45vh] max-[680px]:h-[40vh] max-[640px]:h-[35vh]",
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://www.5b.com.gt/assets/img/home_banner1.jpg?v=1.0.1",
    "https://www.5b.com.gt/assets/img/home_banner2.jpg",
    "https://www.5b.com.gt/assets/img/home_banner3.jpg",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${height}`}
      style={{ width: "100%" }}
      data-aos="zoom-in"
    >
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={images[activeIndex]}
          alt="Carousel Image"
          className="object-fill w-full h-full"
        />
      </div>
      <div className="absolute bottom-[20px] left-0 right-0 flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === activeIndex ? "bg-secondary" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

/*
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
*/
