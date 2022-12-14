import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function DisplayNavbar() {
  return (
    <div className='sticky-top'>
    <Navbar bg="success" variant="dark">
    <Container className='d-flex justify-content-between'>
      <Navbar.Brand href="#home">Develop.</Navbar.Brand>
      <Nav className="">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Blogs</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}
