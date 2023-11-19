// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="md">
       <Navbar.Brand as={Link} to="/mycontexts/langcontext">MULTILINGUE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/tp4">Api</Nav.Link>
          <Nav.Link as={Link} to="/tp1">SLIDER</Nav.Link>
          <Nav.Link as={Link} to="/tp3">CALCULATRICE</Nav.Link>
          <Nav.Link as={Link} to="/tp5">TO DO LIST</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
