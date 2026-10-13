import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
          <Col md="6" className="footer-copywright text-center text-md-start">
            <h3 style={{ margin: 0 }}>
              Desenvolvido por{" "}
              <span style={{ color: "#0AE7F7" }}>Fábio Matheus</span>
            </h3>
          </Col>
          <Col md="6" className="footer-copywright text-center text-md-end">
            <h3 style={{ margin: 0 }}>
              Copyright © {year}{" "}
              <span style={{ color: "#0AE7F7" }}>Oreia Tech</span>
            </h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
