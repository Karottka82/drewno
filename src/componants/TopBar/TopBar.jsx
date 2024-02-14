import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";

export const TopBar = () => {
  const navRef = useRef(null);

  return (
    <>
      <br />
      <Navbar
        className="TopBarsection"
        style={{ backgroundColor: "#1f100d", marginTop: "0px" }}
      >
        <Container
          className="containerdstyle"
          style={{
            marginLeft: "60%",
            marginTop: "20px",
          }}
        >
          <Navbar.Brand
            href="/"
            className="NavbarBrand-custom"
            style={{ color: "#f2d8c7", fontSize: "18px" }}
          >
            STRONA GŁOWNA{" "}
          </Navbar.Brand>
          <Nav
            ref={navRef}
            className="me-auto"
            style={{ color: "#f2d8c7", fontSize: "16px" }}
          >
            <Nav.Link
              href="/about"
              style={{ color: "#f2d8c7", fontSize: "16px", marginLeft: "10px" }}
            >
              O NAS
            </Nav.Link>
            <Nav.Link
              href="/services"
              style={{ color: "#f2d8c7", fontSize: "16px", marginLeft: "10px" }}
            >
              USŁUGI
            </Nav.Link>
            <Nav.Link
              href="/contact"
              style={{ color: "#f2d8c7", fontSize: "16px", marginLeft: "10px" }}
            >
              KONTAKT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
