import React from "react";
import FooterLink from "./footerLink";

function FooterLinkList() {
  return (
    <ul className="block w-[250px] mb-5">
      <FooterLink href="" text="Inicio" />
      <FooterLink href="" text="Preguntas Frecuentes" />
      <FooterLink href="" text="Contáctanos" />
      <FooterLink href="" text="Tips de Seguridad" />
      <FooterLink href="" text="Política de Seguridad" />
      <FooterLink href="" text="Política de Privacidad" />
    </ul>
  );
}

export default FooterLinkList;
