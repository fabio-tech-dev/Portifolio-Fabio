import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiReact,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* HTML5 */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"28px"} color="#E34F26" />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      {/* CSS3 */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"28px"} color="#1572B6" />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript fontSize={"28px"} color="#F7DF1E" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs fontSize={"28px"} color="#339933" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"28px"} color="#3776AB" />
        <div className="tech-icons-text">Python</div>
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"28px"} color="#4479A1" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact fontSize={"28px"} color="#61DAFB" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"28px"} color="#F05032" />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"28px"} color="#FFFFFF" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      {/* SQL Relacional */}
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase fontSize={"28px"} color="#0AE7F7" />
        <div className="tech-icons-text">SQL Relacional</div>
      </Col>
    </Row>
  );
}

export default Techstack;
