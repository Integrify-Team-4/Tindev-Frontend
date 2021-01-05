import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="lg" collapseOnSelect className="navbar">
      <LinkContainer to="/">
        <Navbar.Brand>TinDev</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/register">
            <Nav.Link>
              <i className="register"></i>Register
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fas fa-user"></i>Login
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
