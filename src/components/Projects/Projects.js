import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cube from "../../Assets/Projects/cube.png";
import robotics from "../../Assets/Projects/robotics.jpg";
import stockpredictor from "../../Assets/Projects/stockpredictor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Vex Robotics Competition"
              description="My code from my final year competing in the Vex Robotics Competition as team 4549A. The code includes many advanced functions such as object tracking using Vision sensors and Absolute Position Tracking using encoders and Odometry "
              link="https://github.com/Jackiele123/4549A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockpredictor}
              isBlog={false}
              title="Stock Price Predictor"
              description="My Stock Price Predictor that's coded in Python using a Linear Regression Machine Learning algorithm that use 80/20 splits to test and improve its performance. It can currently predict stock price with up to 82% accuracy."
              link="https://github.com/Jackiele123/Stock-Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cube}
              isBlog={false}
              title="Self Balancing Cube"
              description="Designed and Programmed a cube that balances itself using 3 reaction wheels that utilize encoders and IMU sensor info to create moment of inertias that counteract the forces that are acting on it."
              link="https://github.com/Jackiele123/BalancingCube"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
