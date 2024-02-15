import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./ContactPage.css";
import { TopBar } from "../../TopBar/TopBar.jsx";
import { FirstSectionContact } from "../1/FirstSectionContact.jsx";

export const ContactPage = () => {
  return (
    <section id="/contact">
      <TopBar />
      <FirstSectionContact />
      <div className="contact-container">
        <h1> </h1>
        <ul className="contact-list">
          <p>
            <FaPhone /> 888-133-916 lub 517-946-548
          </p>
          <p>
            <FaMapMarkerAlt /> Kraków i okopce
          </p>
          <p>
            <FaEnvelope /> drewnorenova@gmail.com
          </p>
        </ul>
      </div>
    </section>
  );
};
