import React from "react";
import "./HomePage.css";
import { FirstSection } from "../1/page.jsx";

import { TopBar } from "../../TopBar/TopBar.jsx";

export const HomePage = () => {
  return (
    <section id="/" style={{ marginTop: "0px" }}>
      <TopBar />
      <FirstSection />
    </section>
  );
};