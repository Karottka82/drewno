import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";

export const TopBar = () => {
  const navRef = useRef(null);

  return (
    <>
      <br />
      <Navbar
        style={{
          backgroundColor: "#1f100d",
          marginTop: "10px",
          justifyContent: "flex-end",
        }}
      >
        <Container className="containerdstyle justify-end">
          <Navbar.Brand
            href="/"
            className="NavbarBrand-custom"
            style={{
              color: "#f2d8c7",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            STRONA GŁOWNA
          </Navbar.Brand>
          <Nav
            ref={navRef}
            className="me-auto"
            style={{
              color: "#f2d8c7",
              fontSize: "16px",
              marginTop: "20px",
            }}
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
