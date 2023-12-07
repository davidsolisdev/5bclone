import React from "react";

interface PublicationBlogProps {
  title: string;
  fecha: string;
  description: string;
  image: string;
}

function PublicationBlog({
  title,
  fecha,
  description,
  image,
}: PublicationBlogProps) {
  return (
    <div className="w-full mr-5">
      <article className="w-full flex flex-wrap bg-primary rounded-lg h-[500px]">
        <img
          className="h-[60%] rounded-t-lg w-full object-fill object-center"
          src={image}
          alt="content"
        />
        <span className="w-full block h-[40%] p-6">
          <h2 className="text-lg text-secondary font-medium line-clamp-2">
            {title}
          </h2>
          <h3 className="tracking-widest text-gray-400 text-xs font-medium mb-4">
            {fecha}
          </h3>
          <p className="leading-relaxed text-base text-gray-200 line-clamp-2">
            {description}
          </p>
          <p className="w-full text-end text-white font-bold text-lg underline !self-end">
            Leer más
          </p>
        </span>
      </article>
    </div>
  );
}

export default PublicationBlog;
