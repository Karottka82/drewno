import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./FirstSectionContact.css";

export const FirstSectionContact = () => {
  return (
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
  );
};
