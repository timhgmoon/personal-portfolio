import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">TM</Navbar.Brand>
        <Nav>
          <Nav.Link href="#about-me">About</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default Navigation;