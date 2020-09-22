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
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>CSE Dept</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link to='/' as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to='/timetable' as={Link}>
            Time-Table
          </Nav.Link>
          <Nav.Link to='/attendance' as={Link}>
            Attendance
          </Nav.Link>
          <Nav.Link to='/#' as={Link}>
            Placements
          </Nav.Link>
          <Nav.Link to='/marks' as={Link}>
            Marks
          </Nav.Link>
          <Nav.Link to='/#' as={Link}>
            Notes
          </Nav.Link>
          <Nav.Link to='/faculty' as={Link}>
            Faculty
          </Nav.Link>
          <NavDropdown title='Information' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Notice Board</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Club Activities
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>
              Calender Of Events
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Contact us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant='outline-success' onClick={handleLogout}>
            <Link to='/login'>LogOut</Link>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
