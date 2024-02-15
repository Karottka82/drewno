import React from "react";
import "./ServicesPage.css";
import { TopBar } from "../../../TopBar/TopBar.jsx";
import { FirstSectionServises } from "../../1/First SectionServices.jsx";
import { LogoSectionServises } from "../../LogoSectionServises/LogoSectionServises.jsx";
export const ServicesPage = () => {
  return (
    <section id="/services" style={{ backgroundColor: "#c3a28c" }}>
      <TopBar />
      <LogoSectionServises />
      <FirstSectionServises />
    </section>
  );
};
