import React from "react";
import "./ServicesPage.css";
import { TopBar } from "../../../TopBar/TopBar.jsx";
import logoImage from "../../../assets/jpg/logo1.png";

export const ServicesPage = () => {
  return (
    <section id="/services" style={{ backgroundColor: "#c3a28c" }}>
      <TopBar />
      <div style={{ position: "relative" }}>
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
          style={{
            position: "absolute",
            top: "-220px",
            left: "240px",
            width: "30%",
          }}
        />

        <div className="row">
          <div className="square">
            <ul style={{ marginTop: "20%", marginBottom: "20%" }}>
              <li>Renowacja drewna</li>
              <li>Malowanie</li>
              <li>Szpachlowanie</li>
              <li>Cyklinowanie</li>
              <li>Olejowanie</li>
            </ul>
          </div>
          <div className="rectangle">
            <p
              style={{ marginTop: "4%", marginBottom: "3%", marginLeft: "4%" }}
            >
              Przywracamy dawny blask drewnianym elementom takim jak:
            </p>
            <ul style={{ marginLeft: "4%" }}>
              <li> altany ogrodowe</li>
              <li> płoty</li>
              <li> domki działkowe</li>
              <li> ławki</li>
              <li> place zabaw</li>
              <li> budki gastronomiczne</li>
              <li> wszystkie drewniane konstrukcje!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
