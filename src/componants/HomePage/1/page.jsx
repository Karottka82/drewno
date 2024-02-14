import React from "react";
import Image from "../../assets/jpg/1.jpg";
import logoImage from "../../assets/jpg/logo1.png";

export const FirstSection = () => {
  return (
    <div
      className="midle-section-img-container"
      style={{ position: "relative" }}
    >
      <img
        src={Image}
        alt="Forest"
        className="midle-section-img"
        style={{ display: "block", position: "absolute", width: "100vmax" }}
      />
      <img
        src={logoImage}
        alt="Logo"
        className="logo"
        style={{ position: "absolute", top: 0, left: 0, width: "40%" }}
      />
    </div>
  );
};
