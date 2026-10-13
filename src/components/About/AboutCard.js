import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Sou <span className="highlight">Fábio Matheus Soares da Silva</span>,
            natural de{" "}
            <span className="highlight">Martinho Campos, MG</span>.
            <br />
            Estudante do 4º período de{" "}
            <span className="highlight">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            pela Una (Bom Despacho), 20 anos.
            <br />
            Minha base profissional foi forjada no setor de construção civil,
            onde atuo para financiar minha graduação. Essa vivência prática me
            ensinou resiliência, ética de trabalho e a importância de um
            planejamento rigoroso — competências que aplico diretamente na
            engenharia de software e na lógica de programação.
            <br />
            <br />
            Além do foco em código e arquitetura de sistemas, possuo formações
            complementares que agregam visão sistêmica ao meu perfil
            profissional:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gestão Empresarial e Empreendedorismo
            </li>
            <li className="about-activity">
              <ImPointRight /> Marketing Digital e Mídias Digitais
            </li>
            <li className="about-activity">
              <ImPointRight /> Manutenção de Sistemas e Hardwares
            </li>
            <li className="about-activity">
              <ImPointRight /> Fundamentos de HTML, CSS e Lógica de Programação (Alura)
            </li>
          </ul>

          <p style={{ color: "rgb(10, 231, 247)" }}>
            "Construindo soluções escaláveis, do planejamento à execução
            estruturada."{" "}
          </p>
          <footer className="blockquote-footer">
            Fábio Matheus · Fundador, Oreia Tech
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;