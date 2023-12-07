import React from "react";
import IconTelephone from "./iconTelephone";

interface ContactNumberLinkProps {
  width?: string;
  height?: string;
  color?: "primary" | "secondary";
  iconSize?: string;
  fontSize?: string;
  withName?: boolean;
  className?: string;
  visible?: boolean;
}

function ContactNumberLink({
  width = "110px",
  height = "40px",
  color = "secondary",
  iconSize = "20px",
  fontSize = "text-3xl",
  visible = true,
  withName,
  className,
}: ContactNumberLinkProps) {
  return (
    <section
      className="w-[140px] h-[60px] flex flex-wrap items-center justify-center"
      style={{ display: visible ? "flex" : "none" }}
    >
      <a
        href="tel:+1-800-123-4567"
        className={`w-full rounded-3xl ${
          color == "secondary" ? "bg-secondary" : "bg-primary"
        } flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <IconTelephone
          size={iconSize}
          color={color == "secondary" ? "primary" : "secondary"}
        />
        <span
          className={`ml-1 text-center ${
            color == "secondary" ? "text-primary" : "text-white"
          } ${fontSize} font-bold`}
        >
          1775
        </span>
      </a>
      {withName && (
        <p className="w-full text-[.65rem] text-white">
          servicio al cliente de cajeros
        </p>
      )}
    </section>
  );
}

export default ContactNumberLink;
