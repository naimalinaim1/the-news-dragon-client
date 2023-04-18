import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="my-5">
      <Container>
        <div className="text-center">
          <img src={logo} alt="logo" />
          <p className="text-secondary">Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex py-5">
          <Button variant="danger">Danger</Button>
          <Marquee speed={80}>
            I can be a React component, multiple React components, or just some
            text... I can be a React component, multiple React components, or
            just some text...I can be a React component, multiple React
            components, or just some text...
          </Marquee>
        </div>
        {/* navbar */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Carrer</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  className="border rounded-circle fw-bold"
                  href="#deets"
                >
                  User
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="secondary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
