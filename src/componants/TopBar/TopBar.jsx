import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";

export const TopBar = () => {
  const navRef = useRef(null);

  return (
    <>
      <Navbar style={{ backgroundColor: "#1f100d" }}>
        <Container style={{ justifyContent: "flex-end" }}>
          <Nav>
            <Navbar.Brand href="/">STRONA GŁOWNA</Navbar.Brand>
            <Nav.Link href="/about">O NAS</Nav.Link>
            <Nav.Link href="/services">USŁUGI</Nav.Link>
            <Nav.Link href="/contact">KONTAKT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
