import React from "react";
import "./AboutPage.css";
import { TopBar } from "../../TopBar/TopBar.jsx";
import szlifowanieImage from "../../assets/jpg/szlifowanie.jpg";
import { FirstSection } from "../1/FirstSection.jsx";

export const AboutPage = () => {
  return (
    <section
      id="/about"
      style={{
        backgroundImage: `url(${szlifowanieImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <TopBar />
      <FirstSection />
    </section>
  );
};
