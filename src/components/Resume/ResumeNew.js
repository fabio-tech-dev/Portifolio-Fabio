import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { FaWhatsapp, FaEnvelope, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
              Currículo <strong className="highlight">Profissional</strong>
            </h1>
            <p style={{ color: "white", marginBottom: "30px" }}>
              Síntese de qualificações, histórico acadêmico e competências técnicas.
            </p>
          </Row>

          <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
            <Col md={8}>
              <Card className="resume-summary-card">
                <Card.Body>
                  <div className="resume-header-block">
                    <h2>Fábio Matheus Soares da Silva</h2>
                    <p className="resume-role">Desenvolvedor Web Full Stack · Fundador da Oreia Tech</p>
                    <p className="resume-meta">📍 Martinho Campos - MG · 20 anos · Disponível para Estágio / Júnior</p>
                  </div>

                  <hr className="resume-divider" />

                  {/* Formação */}
                  <div className="resume-section-item">
                    <h4 className="resume-section-title">
                      <FaGraduationCap className="resume-icon" /> Formação Acadêmica
                    </h4>
                    <div className="resume-entry">
                      <div className="entry-head">
                        <strong>Graduação em Análise e Desenvolvimento de Sistemas (ADS)</strong>
                        <span className="entry-date">Em andamento (4º Período)</span>
                      </div>
                      <p className="entry-institution">Faculdade Una · Bom Despacho - MG</p>
                    </div>
                  </div>

                  {/* Cursos */}
                  <div className="resume-section-item">
                    <h4 className="resume-section-title">
                      <FaBriefcase className="resume-icon" /> Cursos & Formações Complementares
                    </h4>
                    <ul className="resume-bullets">
                      <li>
                        <strong>Gestão Empresarial, Empreendedorismo & Marketing Digital:</strong> Nova Educacional.
                      </li>
                      <li>
                        <strong>Desenvolvimento Web & Lógica:</strong> Alura (HTML5, CSS3, Lógica de Programação).
                      </li>
                    </ul>
                  </div>

                  {/* Trajetória & Experiência */}
                  <div className="resume-section-item">
                    <h4 className="resume-section-title">
                      <FaBriefcase className="resume-icon" /> Trajetória Profissional
                    </h4>
                    <div className="resume-entry">
                      <div className="entry-head">
                        <strong>Fundador e Desenvolvedor Web</strong>
                        <span className="entry-date">2024 - Presente</span>
                      </div>
                      <p className="entry-institution">Oreia Tech (Iniciativa Própria)</p>
                      <p className="entry-desc">
                        Desenvolvimento de landing pages de alta conversão, sistemas web com CRUD completo, integração com bancos relacionais (MySQL) e alinhamento com regras de negócios.
                      </p>
                    </div>

                    <div className="resume-entry" style={{ marginTop: "15px" }}>
                      <div className="entry-head">
                        <strong>Construção Civil (Autônomo)</strong>
                        <span className="entry-date">Atuação Prática</span>
                      </div>
                      <p className="entry-desc">
                        Trabalho dedicado ao financiamento integral dos estudos universitários. Desenvolvimento de forte senso de planejamento estruturado, resiliência física e mental, disciplina de prazos e ética de trabalho.
                      </p>
                    </div>
                  </div>

                  {/* Competências */}
                  <div className="resume-section-item">
                    <h4 className="resume-section-title">
                      <FaCode className="resume-icon" /> Competências Técnicas
                    </h4>
                    <div className="resume-skills-grid">
                      <span className="r-badge">HTML5</span>
                      <span className="r-badge">CSS3</span>
                      <span className="r-badge">JavaScript (ES6+)</span>
                      <span className="r-badge">Node.js</span>
                      <span className="r-badge">Python</span>
                      <span className="r-badge">MySQL</span>
                      <span className="r-badge">Git & GitHub</span>
                      <span className="r-badge">VS Code</span>
                      <span className="r-badge">Postman</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", gap: "15px", paddingBottom: "50px" }}>
            <Button
              variant="primary"
              href="https://wa.me/5537999852929?text=Ol%C3%A1%20F%C3%A1bio,%20gostaria%20de%20solicitar%20o%20seu%20curr%C3%ADculo%20em%20PDF"
              target="_blank"
              style={{ maxWidth: "280px" }}
              className="resume-action-btn"
            >
              <FaWhatsapp /> &nbsp;Solicitar CV em PDF (WhatsApp)
            </Button>

            <Button
              variant="outline-info"
              href="mailto:matheusfabio814@gmail.com?subject=Contato%20Profissional%20-%20Curriculo"
              style={{ maxWidth: "260px" }}
              className="resume-action-btn"
            >
              <FaEnvelope /> &nbsp;Enviar E-mail
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
