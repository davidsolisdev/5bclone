"use client";
import { useEffect } from "react";
import AOS from "aos";

function AosInit() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <></>;
}
export default AosInit;
