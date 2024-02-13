import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importowanie własnych stylów, jeśli takie istnieją
import "bootstrap/dist/css/bootstrap.min.css"; // Importowanie arkuszy stylów CSS z Bootstrap
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
