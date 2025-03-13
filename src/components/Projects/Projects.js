import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import themedInk from "../../Assets/Projects/themedInk.jpeg";
import signLanguage from "../../Assets/Projects/signLanguage.jpeg";
import applyAsap from "../../Assets/Projects/applyAsap.jpeg";
import escapeRoom from "../../Assets/Projects/escapeRoom.jpeg";
import artphoria from "../../Assets/Projects/artphoria.jpeg";
import weArcade from "../../Assets/Projects/weArcade.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
  <Particle />
  <Container>
    <h1 className="project-heading">
      My Recent <strong className="purple">Works</strong>
    </h1>
    <p style={{ color: "white" }}>
      Here are a few projects I've worked on recently.
    </p>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={themedInk}
          isBlog={false}
          title="ThemedInk"
          description="A categorized blogging platform built with React, Node.js, Express, and MongoDB. It provides dedicated spaces for various topics like sports, music, and more, allowing writers to share content aligned with their interests."
          ghLink="https://github.com/kharishma0612/blogger"
          // demoLink="YOUR_DEMO_LINK"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={signLanguage}
          isBlog={false}
          title="Sign Language Recognition"
          description="Developed a real-time Sign Language Recognition system using Python, TensorFlow, and OpenCV. It translates gestures into text and speech with 90%+ accuracy and features a 500+ sign dictionary with reverse translation."
          ghLink="https://github.com/kharishma0612/md2html"
          // demoLink="YOUR_DEMO_LINK"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={applyAsap}
          isBlog={false}
          title="Apply-ASAP"
          description="A Flutter-based app that streamlines job applications using AI-driven job recommendations, tailored resumes, and an auto-apply Chrome extension built with React, Node.js, and Express."
          ghLink="https://github.com/Vishal0111110/Apply-ASAP"
          // demoLink="YOUR_DEMO_LINK"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={escapeRoom}
          isBlog={false}
          title="3D Escape Room Game"
          description="Designed a 3D escape room game using Blender and Three.js, transforming traditional escape room mechanics into an immersive 3D experience."
          ghLink="https://github.com/Upasna20/RoomBreak"
          // demoLink="YOUR_DEMO_LINK"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={artphoria}
          isBlog={false}
          title="Artphoria"
          description="Developed a full-stack web application for buying and selling art products using HTML, CSS, JS, PHP, and MySQL, with Stripe API integration for secure payments."
          ghLink="https://github.com/kharishma0612/artphoria_WE"
          // demoLink="YOUR_DEMO_LINK"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={weArcade}
          isBlog={false}
          title="WE Arcade Don't pop the Duckie Game"
          description="Led a team to develop a mini-game under WE Arcade, a clone of the Hangman game focused on topics like Machine Learning, Web Development, and Large System Design."
          ghLink="https://github.com/WE-Arcade/Mini-Games"
          // demoLink="YOUR_DEMO_LINK"
        />
      </Col>

    </Row>
  </Container>
</Container>

  );
}

export default Projects;
