import React from "react";
import "./FirstSectionServises.css";

export const FirstSectionServises = () => {
  return (
    <div style={{ position: "relative" }}>
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
          <p style={{ marginTop: "4%", marginBottom: "3%", marginLeft: "4%" }}>
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
  );
};
