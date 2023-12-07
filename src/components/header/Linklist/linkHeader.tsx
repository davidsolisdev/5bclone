"use client";
import React from "react";

interface LinkHeaderProps {
  href: string;
  text: string;
  className?: string;
  textStart?: boolean;
}

function LinkHeader({ href, text, className, textStart }: LinkHeaderProps) {
  return (
    <li className={`h-full flex items-center justify-center ${className}`}>
      <a
        href={href}
        className={`"w-full h-full flex items-center justify-center text-lg text-white ${
          textStart == true ? "text-start" : "text-center"
        }`}
      >
        <p>{text}</p>
      </a>
    </li>
  );
}

export default LinkHeader;
