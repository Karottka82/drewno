import React from "react";
import "./ContactPage.css";
import { TopBar } from "../../TopBar/TopBar.jsx";
import { FirstSectionContact } from "../1/FirstSectionContact.jsx";

export const ContactPage = () => {
  return (
    <section id="/contact">
      <TopBar />
      <FirstSectionContact />
    </section>
  );
};
