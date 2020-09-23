import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AuthContext } from "../../context/Auth/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav, Button, Form } from "react-bootstrap";

export default function Header() {
  const { LogOut } = useContext(AuthContext);
  const handleLogout = () => {
    LogOut();
  };
  return (
    <Navbar
      style={{
        backgroundColor: "black",
        height: "70px",
        position: "fixed",
        width: "100%",
        zIndex: "500",
        boxShadow:
          "0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.8)",
      }}
      expand='lg'
    >
      <Navbar.Brand style={{ color: "white" }} href='/'>
        CSE Dept
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link style={{ color: "white" }} to='/' as={Link}>
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} to='/timetable' as={Link}>
            Time-Table
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} to='/attendance' as={Link}>
            Attendance
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} to='/#' as={Link}>
            Placements
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} to='/marks' as={Link}>
            Marks
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} to='/notes' as={Link}>
            Notes
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} to='/faculty' as={Link}>
            Faculty
          </Nav.Link>
          <NavDropdown
            style={{ backgroundColor: "white" }}
            title='Information'
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item style={{ color: "white" }} href='#action/3.1'>
              Notice Board
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "white" }} href='#action/3.2'>
              Club Activities
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3' style={{ color: "white" }}>
              Calender Of Events
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={{ color: "white" }} href='#action/3.4'>
              Contact us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button
            variant='outline'
            style={{ border: "1px solid white" }}
            onClick={handleLogout}
          >
            <Link style={{ color: "white" }} to='/login'>
              LogOut
            </Link>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
