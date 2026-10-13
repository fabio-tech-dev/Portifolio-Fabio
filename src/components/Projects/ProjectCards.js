import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { VscFileCode } from "react-icons/vsc";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-window-header">
        <div className="project-dots">
          <span className="p-dot dot-red"></span>
          <span className="p-dot dot-yellow"></span>
          <span className="p-dot dot-green"></span>
        </div>
        <div className="project-window-file">
          <VscFileCode className="file-icon" /> {props.projectFile || "app.js"}
        </div>
      </div>

      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem" }}>
          {props.description}
        </Card.Text>

        {props.techStack && props.techStack.length > 0 && (
          <div className="project-tags">
            {props.techStack.map((tech, index) => (
              <span key={index} className="project-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-actions">
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer" className="project-btn">
            <BsGithub /> &nbsp;Repositório GitHub
          </Button>

          {props.demoLink && (
            <Button
              variant="outline-info"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
