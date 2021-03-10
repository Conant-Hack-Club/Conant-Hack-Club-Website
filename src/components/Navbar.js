import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default function TopNavbar() {
    return (
      //CAN USE TRANSPARENT
      <Navbar bg="light" expand="lg" fixed="top" variant="blue">
        <Navbar.Brand href="/">CONANT HACK CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav>
          <NavDropdown title="Projects">
            <NavDropdown.Item href="/projects">2020-2021</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">2021-2022</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
}