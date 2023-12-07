"use client";
import React from "react";
import styles from "./styles.module.css";
import useHeaderStore from "@/states/header/headerStore";
import LinkList from "./Linklist";
import ContactNumberLink from "../contactNumberLink";
import SocialList from "./socialList";
import ButtonDrawer from "./ButtonDrawer";
import LinkHeader from "./Linklist/linkHeader";

export default function Header() {
  const [width, setWidth] = React.useState(window?.innerWidth);
  const isMenuOpen = useHeaderStore((state) => state.isMenuOpen);
  const isScrolled = useHeaderStore((state) => state.isScrolled);
  const setIsScrolled = useHeaderStore((state) => state.setIsScrolled);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <header
      className={`${isMenuOpen ? "h-[405px]" : "h-[90px]"} ${styles.header} ${
        isScrolled || isMenuOpen ? "bg-primary" : "bg-transparent"
      } max-[850px]:pr-10`}
    >
      <section
        className={`w-[1300px] ${
          isMenuOpen ? "h-[90px]" : "h-[90px]"
        } flex items-center justify-between`}
      >
        <img
          width="55px"
          height="90%"
          src="https://www.5b.com.gt/assets/img/logo_yellow.png"
          alt=""
          className="ml-4"
        />
        <section className="flex-1"></section>
        <nav className="w-[50%] h-full mr-8 max-[850px]:hidden">
          <LinkList />
        </nav>
        <ContactNumberLink withName visible={width > 850 ? true : false} />
        <SocialList className="max-[850px]:hidden" />
        <ButtonDrawer />
      </section>
      {isMenuOpen && (
        <section className="w-full h-[310px] flex-wrap justify-center hidden max-[850px]:flex">
          <ul className="mt-5 w-[400px] flex flex-wrap">
            <LinkHeader
              href="#home"
              text="Nosotros"
              className="w-full !h-[20px] mb-5"
              textStart
            />
            <LinkHeader
              href="#home"
              text="Buscar Cajeros"
              className="w-full !h-[20px] mb-5"
              textStart
            />
            <LinkHeader
              href="#home"
              text="Productos y Servicios"
              className="w-full !h-[20px] mb-5"
              textStart
            />
            <LinkHeader
              href="#home"
              text="Trabaja con Nosotros"
              className="w-full !h-[20px] mb-5"
              textStart
            />
          </ul>
          <section className="w-full flex flex-wrap justify-around items-center">
            <SocialList />
            <div className="flex-1"></div>
            <ContactNumberLink withName />
          </section>
        </section>
      )}
    </header>
  );
}
