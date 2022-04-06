import React from "react";
import Container from "react-bootstrap/Container";
import GalleryView from "./screens/GalleryView";
import ListView from "./screens/ListView";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" color="green" variant="dark">
      <Container>
        <Navbar.Brand>Applicatiions</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="List">
              List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Route path="/Gallery">
        <GalleryView />
      </Route>
      <Route path="/List">
        <ListView />
      </Route>
    </Container>
  </div>
  );
};

export default Navigation;
