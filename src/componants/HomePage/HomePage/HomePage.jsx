import React from "react";
import "./HomePage.css";
import { FirstSectionHome } from "../1/FirstSectionHome.jsx";

import { TopBar } from "../../TopBar/TopBar.jsx";

export const HomePage = () => {
  return (
    <section id="/" style={{ marginTop: "0px", background: "#1f100d" }}>
      <TopBar />
      <FirstSectionHome />
    </section>
  );
};
