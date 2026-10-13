import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Perfil e <strong className="highlight">Trajetória</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "60px", paddingBottom: "50px" }}
              className="about-img"
            >
              <div className="credentials-card">
                <div className="credentials-header">
                  <span className="terminal-title">{"// FORMAÇÃO & INICIATIVAS"}</span>
                </div>
                <div className="credentials-body">
                  <div className="cred-item">
                    <span className="cred-tag">Graduação</span>
                    <h4>Análise e Desenvolvimento de Sistemas</h4>
                    <p>Faculdade Una · Bom Despacho (4º Período)</p>
                  </div>

                  <div className="cred-item">
                    <span className="cred-tag">Empreendimento</span>
                    <h4>Oreia Tech</h4>
                    <p>Iniciativa de Soluções Web, Landing Pages e Software</p>
                  </div>

                  <div className="cred-item">
                    <span className="cred-tag">Cursos & Certificações</span>
                    <h4>Gestão Empresarial & Marketing Digital</h4>
                    <p>Nova Educacional · Visão Estratégica de Negócios</p>
                  </div>

                  <div className="cred-item">
                    <span className="cred-tag">Fundamentos Web</span>
                    <h4>Lógica de Programação, HTML5 & CSS3</h4>
                    <p>Alura Cursos Online</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <h1 className="project-heading">
            Stack Técnica & <strong className="highlight">Competências</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Ambiente & <strong className="highlight">Ferramentas</strong>
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
