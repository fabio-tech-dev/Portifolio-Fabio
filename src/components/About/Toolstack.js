import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={"28px"} color="#007ACC" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"28px"} color="#FF6C37" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome fontSize={"28px"} color="#4285F4" />
        <div className="tech-icons-text">DevTools</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 fontSize={"28px"} color="#0078D4" />
        <div className="tech-icons-text">Windows</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
