import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="fs-2 fw-bold">Shoppy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Item>
              <Link to="/" className="nav-link mx-3 fs-4">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/shop" className="nav-link mx-3 fs-4">Shops</Link>
            </Nav.Item>
            
            <Nav.Item>
              <Link to="/about" className="nav-link mx-3 fs-4">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link mx-3 fs-4">Contact</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/cart" className="nav-link mx-3 fs-4">Cart <div className='cartQuantity'>({props.cartQuantity})</div></Link>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
