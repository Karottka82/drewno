import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutPage } from "./componants/AboutPage/AboutPage/AboutPage.jsx";
import { ServicesPage } from "./componants/ServicesPage/ServicesPage/ServicesPage/ServicesPage.jsx";
import { ContactPage } from "./componants/ContactPage/ContactPage/ContactPage.jsx";
import { HomePage } from "./componants/HomePage/HomePage/HomePage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
