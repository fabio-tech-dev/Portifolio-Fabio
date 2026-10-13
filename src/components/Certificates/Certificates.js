import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    name: "Montagem e Manutenção de Micro e Redes",
    institution: "Curso Técnico",
    category: "Hardware & Redes",
    color: "#0873BF",
    file: "/certificados/Fábio Matheus S S - Curso de Montagem e Manutenção de Micro e Redes.pdf",
  },
  {
    id: 2,
    name: "Empreendedorismo, Marketing, Mídias Digitais e Gestão Empresarial",
    institution: "Curso Profissionalizante",
    category: "Gestão & Negócios",
    color: "#129FD9",
    file: "/certificados/Fábio Matheus Soares da Silva - Certificado dos cursos de Empreendedorismo, Marketing, Mídias Digitais e Gestão Empresarial.pdf",
  },
  {
    id: 3,
    name: "Git e GitHub: Compartilhando e Colaborando em Projetos",
    institution: "Alura",
    category: "DevTools",
    color: "#0AE7F7",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso Git e GitHub_ compartilhando e colaborando em projetos - Alura.pdf",
  },
  {
    id: 4,
    name: "HTML e CSS: Classes, Posicionamento e Flexbox",
    institution: "Alura",
    category: "Front-end",
    color: "#0873BF",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso HTML e CSS_ Classes, posicionamento e Flexbox - Alura.pdf",
  },
  {
    id: 5,
    name: "HTML e CSS: Ambientes de Desenvolvimento, Estrutura de Arquivos e Tags",
    institution: "Alura",
    category: "Front-end",
    color: "#0873BF",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso HTML e CSS_ ambientes de desenvolvimento, estrutura de arquivos e tags - Alura.pdf",
  },
  {
    id: 6,
    name: "JavaScript: Utilizando Tipos, Variáveis e Funções",
    institution: "Alura",
    category: "JavaScript",
    color: "#F0DB4F",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso JavaScript_ utilizando tipos, variáveis e funções - Alura.pdf",
  },
  {
    id: 7,
    name: "Lógica de Programação: Explore Funções e Listas",
    institution: "Alura",
    category: "Lógica",
    color: "#00E676",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso Lógica de programação_ explore funções e listas - Alura.pdf",
  },
  {
    id: 8,
    name: "Lógica de Programação: Mergulhe em Programação com JavaScript",
    institution: "Alura",
    category: "Lógica",
    color: "#00E676",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso Lógica de programação_ mergulhe em programação com JavaScript - Alura.pdf",
  },
  {
    id: 9,
    name: "Lógica de Programação: Praticando com Desafios",
    institution: "Alura",
    category: "Lógica",
    color: "#00E676",
    file: "/certificados/Fábio Matheus Soares da Silva - Curso Lógica de programação_ praticando com desafios - Alura.pdf",
  },
];

const categoryColors = {
  "Hardware & Redes": "#0873BF",
  "Gestão & Negócios": "#129FD9",
  "DevTools": "#0AE7F7",
  "Front-end": "#e34c26",
  "JavaScript": "#F0DB4F",
  "Lógica": "#00E676",
};

function CertificateCard({ cert, onPreview }) {
  const catColor = categoryColors[cert.category] || "#0AE7F7";

  return (
    <div className="neo-card">
      {/* Cabeçalho estilo neobrutalist */}
      <div className="neo-card-head">
        <span className="neo-card-category" style={{ color: catColor }}>
          {cert.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="neo-card-body">
        <h5 className="neo-card-title">{cert.name}</h5>
        <p className="neo-card-institution">
          <FaCertificate style={{ color: cert.color, marginRight: "6px" }} />
          {cert.institution}
        </p>
      </div>

      {/* Botões */}
      <div className="neo-card-footer">
        <button
          className="neo-btn neo-btn-preview"
          onClick={() => onPreview(cert)}
          title="Visualizar certificado"
        >
          <AiOutlineEye /> Visualizar
        </button>
        <a
          href={cert.file}
          download
          className="neo-btn neo-btn-download"
          title="Baixar em PDF"
        >
          <AiOutlineDownload /> Baixar PDF
        </a>
      </div>
    </div>
  );
}

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(certificates.map((c) => c.category))];

  const filtered =
    activeCategory === "Todos"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const handlePreview = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  return (
    <Container fluid className="certificate-section" id="certificates">
      <Particle />
      <Container>
        {/* Header */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="certificate-heading">
            <h1 className="project-heading">
              Meus <strong className="purple">Certificados</strong>
            </h1>
            <p className="cert-subtitle">
              Formações e conquistas ao longo da minha jornada como desenvolvedor
            </p>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <div className="cert-filter-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cert-filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                  style={
                    activeCategory === cat
                      ? { borderColor: categoryColors[cat] || "#0AE7F7", color: categoryColors[cat] || "#0AE7F7" }
                      : {}
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Stats */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <div className="cert-stats-row">
              <div className="cert-stat">
                <span className="cert-stat-number">{certificates.length}</span>
                <span className="cert-stat-label">Certificados</span>
              </div>
              <div className="cert-stat">
                <span className="cert-stat-number">{categories.length - 1}</span>
                <span className="cert-stat-label">Categorias</span>
              </div>
              <div className="cert-stat">
                <span className="cert-stat-number">3</span>
                <span className="cert-stat-label">Plataformas</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="justify-content-center">
          {filtered.map((cert) => (
            <Col key={cert.id} md={4} sm={6} xs={12} className="cert-col">
              <CertificateCard cert={cert} onPreview={handlePreview} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal Preview */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        className="cert-modal"
      >
        <Modal.Header className="cert-modal-header">
          <Modal.Title className="cert-modal-title">
            <FaCertificate style={{ color: selectedCert?.color, marginRight: "10px" }} />
            {selectedCert?.name}
          </Modal.Title>
          <button
            className="cert-modal-close"
            onClick={() => setShowModal(false)}
          >
            <AiOutlineClose />
          </button>
        </Modal.Header>
        <Modal.Body className="cert-modal-body">
          {selectedCert && (
            <iframe
              src={selectedCert.file + "#toolbar=0"}
              title={selectedCert.name}
              className="cert-iframe"
            />
          )}
        </Modal.Body>
        <Modal.Footer className="cert-modal-footer">
          <span className="cert-modal-institution">
            <FaCertificate style={{ color: selectedCert?.color }} /> {selectedCert?.institution}
          </span>
          <a
            href={selectedCert?.file}
            download
            className="cert-btn cert-btn-download"
          >
            <AiOutlineDownload /> Baixar PDF
          </a>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Certificates;
