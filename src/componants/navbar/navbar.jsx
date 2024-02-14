import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

export const TopBar = () => {
  const [navWidth, setNavWidth] = useState(0);
  const [navHeight, setNavHeight] = useState(0); // Dodajemy useState do przechowywania wysokości Navbar
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      let totalWidth = 0;
      navRef.current.childNodes.forEach((node) => {
        totalWidth += node.offsetWidth;
      });
      // Dodajemy szerokość marginesów między elementami i mnożymy przez 2
      totalWidth += (navRef.current.childNodes.length - 1) * 16; // Założmy, że marginesy mają szerokość 16px
      totalWidth *= 3;
      setNavWidth(totalWidth);

      let totalHeight = navRef.current.offsetHeight;
      totalHeight += 30; // Dodajemy 5 pikseli na górę i 5 pikseli na dół
      setNavHeight(totalHeight);
    }
  }, []);

  return (
    <>
      <br />
      <Navbar
        className="TopBarsection"
        style={{ width: navWidth, height: navHeight }}
      >
        <Container
          className="containerdstyle"
          style={{ marginLeft: "100px", marginTop: "20px" }}
        >
          <Navbar.Brand
            href="#home"
            className="NavbarBrand-custom"
            style={{ color: "white", fontSize: "18px" }}
          >
            Strona Główna
          </Navbar.Brand>
          <Nav ref={navRef} className="me-auto" style={{ fontSize: "16px" }}>
            <Nav.Link href="#home">O nas</Nav.Link>
            <Nav.Link href="#features">Usługi</Nav.Link>
            <Nav.Link href="#pricing">Kontakt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
