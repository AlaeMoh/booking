"use client"
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function navbar() {
    
  return (
        <Navbar  className="navbar">
          <Container fluid>
            <Navbar.Brand href="#"><span className='text-danger'>Tripi</span><span>Booking</span></Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Offcanvas
            
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action2">Destination</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#action2">Dashboard</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

  )
}
