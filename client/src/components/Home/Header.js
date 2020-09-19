import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">CSE Dept</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/timetable">Time-Table</Nav.Link>
          <Nav.Link href="/#">Attendance</Nav.Link>
          <Nav.Link href="/#">Placements</Nav.Link>
          <Nav.Link href="/#">Marks</Nav.Link>
          <Nav.Link href="/#">Notes</Nav.Link>
          <Nav.Link href="/#">Faculty</Nav.Link>
          <NavDropdown title="Information" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Notice Board</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Club Activities
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Calender Of Events
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant="outline-success">
            <Link to="/login">Login/Signup</Link>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
