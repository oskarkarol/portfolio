import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCsharp,
  SiPostgresql,
  SiPhp,
  SiPython,
  SiGit,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
