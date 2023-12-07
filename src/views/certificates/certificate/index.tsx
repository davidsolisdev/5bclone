import React from "react";

interface CertificateProps {
  img: string;
  width: string;
  height: string;
}

function Certificate({ img, height, width }: CertificateProps) {
  return (
    <article
      data-aos="flip-down"
      className="w-[23%] max-[1000px]:!w-[40%] flex items-center justify-center mb-[60px]"
    >
      <img src={img} width={width} height={height} />
    </article>
  );
}

export default Certificate;
