import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar bg="light" className="px-5">
      <Container>
        <Navbar.Brand href="#home">TM</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="/">Projects</Nav.Link>
          <Nav.Link href="/">Contact</Nav.Link>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default Navigation;