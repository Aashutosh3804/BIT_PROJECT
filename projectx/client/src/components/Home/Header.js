import React, { useContext, useState } from "react";
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
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      style={{
        backgroundColor: "black",
        zIndex: "500",
        // boxShadow:
        //   "0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.8)",
        top:"0",
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30
      }}
      expand='lg'
      fixed='top'
      variant='dark'
      expanded={expanded}
    >
      <Navbar.Brand style={{ color: "white" }} href='/'>
        CSE Dept
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls='basic-navbar-nav'
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link
            style={{ color: "white" }}
            to='/'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            to='/timetable'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Time-Table
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            to='/attendance'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Attendance
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            to='/#'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Placements
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            to='/marks'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Marks
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            to='/notes'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Notes
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            to='/faculty'
            as={Link}
            onClick={() => setExpanded(false)}
          >
            Faculty
          </Nav.Link>
          <NavDropdown title='Information' id='basic-nav-dropdown'>
            <NavDropdown.Item style={{ color: "black" }} href='#action/3.1'>
              Notice Board
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "black" }} href='#action/3.2'>
              Club Activities
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3' style={{ color: "black" }}>
              Calender Of Events
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={{ color: "black" }} href='#action/3.4'>
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
