import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTypescript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
