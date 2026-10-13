import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myPhoto from "../../Assets/foto-fabio.jpeg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERFIL{" "}
              <span className="highlight"> PROFISSIONAL </span> E TRAJETÓRIA
            </h1>
            <p className="home-about-body">
              Atuo no desenvolvimento de software, com foco na construção de
              soluções web estruturadas, eficientes e de alto desempenho.
              <br />
              <br />
              Possuo domínio prático em tecnologias fundamentais como
              <i>
                <b className="highlight">
                  {" "}
                  JavaScript, HTML5, CSS3, Node.js e MySQL,{" "}
                </b>
              </i>
              além de base sólida no desenvolvimento com Python.
              <br />
              <br />
              Minhas áreas de maior foco incluem a arquitetura e
              desenvolvimento de
              <i>
                <b className="highlight">
                  {" "}
                  Sistemas Web e Landing Pages para alta conversão,{" "}
                </b>
              </i>
              sempre visando performance, escalabilidade e usabilidade.
              <br />
              <br />
              Como fundador da{" "}
              <b className="highlight">Oreia Tech</b>, aplico metodologias de
              mercado para alinhar código às métricas de negócios, entregando
              produtos digitais focados no resultado do cliente.
            </p>
          </Col>

          <Col md={5} className="myAvtar">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.02}>
              <div className="profile-photo-wrapper">
                <div className="profile-photo-glow"></div>
                <img
                  src={myPhoto}
                  className="img-fluid profile-photo-img"
                  alt="Fábio Matheus - Desenvolvedor Web"
                />
                <div className="profile-photo-caption">
                  <span className="caption-dot"></span> Fábio Matheus · Dev Full Stack
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTATO E REDES SOCIAIS</h1>
            <p>
              Aberto a novas oportunidades e conexões{" "}
              <span className="highlight">profissionais.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fabio-tech-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/f%C3%A1bio-matheus-b01736279/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/5537999852929"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/fabio_matheus23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram: @fabio_matheus23"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;