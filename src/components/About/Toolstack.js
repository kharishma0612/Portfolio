import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWindows, SiVisualstudiocode, SiGit, SiVercel, SiStreamlit } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
    </Row>
  );
  
}

export default Toolstack;
