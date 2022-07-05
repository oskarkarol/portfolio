import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
  SiPostgresql,
  SiPhp,
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
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
