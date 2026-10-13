import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="github-activity-row">
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Atividade no <strong className="highlight">GitHub</strong>
      </h1>
      <div className="github-calendar-card">
        <div className="github-calendar-header">
          <span className="neo-card-category">CONTRIBUIÇÕES</span>
          <span className="github-calendar-username">fabio-tech-dev</span>
        </div>
        <div className="github-calendar-body">
          <div className="github-calendar-scroll">
            <GitHubCalendar
              username="fabio-tech-dev"
              blockSize={12}
              blockMargin={4}
              color="#0AE7F7"
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Github;
