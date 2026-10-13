import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Portfólio de{" "}
          <strong className="highlight">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Sistemas e aplicações desenvolvidos durante minha trajetória técnica.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ── Academia Corpo e Movimento ── */}
          <Col md={5} className="project-card">
            <ProjectCard
              projectFile="index.html"
              title="Academia Corpo e Movimento"
              description="Landing page premium e responsiva para a Academia Corpo em Movimento Fitness, em Martinho Campos-MG. Design focado em conversão, identidade visual da marca e experiência do usuário em qualquer dispositivo."
              ghLink="https://github.com/fabio-tech-dev/Academia-Corpo-e-Movimento"
              demoLink="https://academia-corpo-e-movimento.vercel.app"
              techStack={["HTML5", "CSS3", "JavaScript"]}
            />
          </Col>

          {/* ── FilipeCel ── */}
          <Col md={5} className="project-card">
            <ProjectCard
              projectFile="index.html"
              title="Filipe Cell Celulares"
              description="Landing page moderna e responsiva desenvolvida para a Filipe Cell Celulares, loja de celulares de Martinho Campos-MG. Projeto focado em experiência do usuário, conversão e identidade visual da marca."
              ghLink="https://github.com/fabio-tech-dev/FilipeCel"
              demoLink="https://filipe-cel.vercel.app"
              techStack={["HTML5", "CSS3", "JavaScript"]}
            />
          </Col>

          {/* ── OREIA TECH ── */}
          <Col md={5} className="project-card">
            <ProjectCard
              projectFile="style.css"
              title="Oreia Tech — Site Oficial"
              description="Site institucional oficial da Oreia Tech, empresa de tecnologia e soluções digitais. Projeto com design moderno, responsivo e focado em apresentar os serviços e a identidade da marca de forma profissional."
              ghLink="https://github.com/fabio-tech-dev/OREIA-TECH-SITE-OFICIAL"
              demoLink="https://oreiatechsite.vercel.app"
              techStack={["HTML5", "CSS3", "JavaScript"]}
            />
          </Col>

          {/* ── AssetPulse ── */}
          <Col md={5} className="project-card">
            <ProjectCard
              projectFile="app.js"
              title="AssetPulse"
              description="Aplicação web para gerenciamento e monitoramento de ativos. Sistema desenvolvido com JavaScript para controle, organização e acompanhamento de recursos de forma prática e eficiente."
              ghLink="https://github.com/fabio-tech-dev/AssetPulse"
              demoLink="https://sistema-assetpulsevercel-c6cusozsj-mrzoreiasekas-projects.vercel.app"
              techStack={["JavaScript"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;