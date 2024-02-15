import React from "react";
import "./LogoSectionServises.css";
import logoImage from "../../assets/jpg/logo1.png";

export const LogoSectionServises = () => {
  return (
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
    </div>
  );
};
