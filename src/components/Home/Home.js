import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import avatarHero from "../../Assets/avatar-hero.webp";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ alignItems: "center" }}>
            <Col md={7} className="home-header">
              <div className="home-badge">
                <span className="badge-dot"></span>
                Disponível para Oportunidades
              </div>

              <h1 style={{ paddingBottom: 5 }} className="heading">
                Olá, eu sou
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> FÁBIO MATHEUS</strong>
              </h1>

              <div style={{ padding: "30px 50px", textAlign: "left" }}>
                <Type />
              </div>

              <div className="hero-cta-group">
                <a
                  href="https://github.com/fabio-tech-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn hero-btn-primary"
                  id="btn-hero-github"
                >
                  <AiFillGithub /> Ver GitHub
                </a>
                <a
                  href="https://wa.me/5537999852929?text=Ol%C3%A1%20F%C3%A1bio,%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn hero-btn-secondary"
                  id="btn-hero-whatsapp"
                >
                  <FaWhatsapp /> Falar no WhatsApp
                </a>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="hero-avatar-col">
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar-glow"></div>
                <img
                  src={avatarHero}
                  alt="Fábio Matheus - Personagem Oreia Tech"
                  className="img-fluid hero-avatar-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
