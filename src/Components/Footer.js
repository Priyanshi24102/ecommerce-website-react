import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUp from "./SignUp";
function Footer() {
  return (
    <div>
      <SignUp/>
      <footer className="footer py-4">
        <Container>
          <Row>
            <Col xs={6} sm={6} md={3}>
              <h4 className="fw-semibold">Trends</h4>
              <p>Service</p>
              <p>Customer</p>
              <p>Satisfaction</p>
            </Col>

            <Col xs={6} sm={6} md={3}>
              <h5 className="fw-semibold">About Us</h5>
              <p>Address: Lorem ipsum dolor sit amet</p>
              <p>Service</p>
              <p>Customer</p>
              <p>Satisfaction</p>
            </Col>

            <Col xs={6} sm={6} md={3}>
              <h5 className="fw-semibold">Contact</h5>
              <p>1234567890</p>
              <p>Customer</p>
              <p>Coming Up...</p>
              <p>New Arrival</p>
            </Col>

            <Col xs={6} sm={6} md={3}>
              <h5 className="fw-semibold">Trending</h5>
              <p>Service</p>
              <p>Customer</p>
              <p>Shops</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
