import React from "react";
import ContactNumberLink from "../contactNumberLink";
import FooterLinkList from "./footerLinkList";
import SocialList from "../header/socialList";

function Footer() {
  return (
    <footer className="w-full bg-secondary min-h-[30vh] px-5 pt-[60px] pb-10 flex flex-row flex-wrap justify-around items-center">
      <FooterLinkList />

      <section className="w-[300px] flex flex-wrap justify-center items-center">
        <article className="w-full flex flex-wrap justify-between items-center">
          <img
            src="https://www.5b.com.gt/assets/img/logo_blue.png"
            width="70px"
            height="50px"
          />
          <ContactNumberLink
            color="primary"
            width="140px"
            height="70px"
            iconSize="28px"
            fontSize="text-[2.4rem]"
            className="rounded-full"
          />
        </article>
        <div className="w-full h-[50px]"></div>
        <SocialList color="primary" className="self-end" />

        <p className="text-center text-lg mt-8">
          &copy; Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
}

export default Footer;
