import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cube from "../../Assets/Projects/cube.png";
import robotics from "../../Assets/Projects/robotics.jpg";
import stockpredictor from "../../Assets/Projects/stockpredictor.png";
import signlanguaguetranslator from "../../Assets/Projects/signlanguaguetranslator.png";
import mobileapp from "../../Assets/Projects/mobileapp.png";
import robotarm from "../../Assets/Projects/robotarm.png";

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
              imgPath={robotarm}
              isBlog={false}
              title="6DOF Robotic Arm"
              description="I've meticulously designed a robotic arm from the ground up using SolidWorks, encapsulating both creativity and engineering precision. To showcase this endeavor, I've crafted a 3D website, serving as a vivid portfolio of my design journey and technical prowess."
              buttons={[
                {
                  name: "View Code",
                  url: "https://github.com/Jackiele123/My3DWebsite",
                }, 
                {
                  name: "View Project",
                  url: "https://project.jackiele.ca/",
                },
                {
                  name: "View Research Paper",
                  url: "https://github.com/Jackiele123/MLP_IK_Algorithm/blob/main/MLPForIKof6DOFRoboticArm.pdf",
                }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signlanguaguetranslator}
              isBlog={false}
              title="Sign Language Translator"
              description="I've developed a sign language translator powered by machine learning, bridging the communication gap. By collecting extensive data, I trained a model capable of interpreting live video feeds, transforming gestures into real-time textual translations."
              buttons={[
                {
                  name: "View Code",
                  url: "https://github.com/Jackiele123/Sign-Language-Translator"
                }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileapp}
              isBlog={false}
              title="Measuring Device"
              description="Leveraging a wheel connected to a potentiometer, I've developed a unique measuring device to capture accurate distances. To enhance user experience, I've also created a mobile app that not only records these measurements but provides a clear overview of how the system functions."
              buttons={[
                {
                  name: "View Code",
                  url: "https://github.com/Jackiele123/Distance_Measurement_App"
                }
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Vex Robotics Competition"
              description="My code from my final year competing in the Vex Robotics Competition as team 4549A. The code includes many advanced functions such as object tracking using Vision sensors and Absolute Position Tracking using encoders and Odometry "
              buttons={[
                {
                  name: "View Code",
                  url: "https://github.com/Jackiele123/4549A"
                }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockpredictor}
              isBlog={false}
              title="Stock Price Predictor"
              description="My Stock Price Predictor that's coded in Python using a Linear Regression Machine Learning algorithm that use 80/20 splits to test and improve its performance. It can currently predict stock price with up to 82% accuracy."
              buttons={[
                {
                  name: "View Code",
                  url: "https://github.com/Jackiele123/Stock-Predictor"
                }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cube}
              isBlog={false}
              title="Self Balancing Cube"
              description="Designed and Programmed a cube that balances itself using 3 reaction wheels that utilize encoders and IMU sensor info to create moment of inertias that counteract the forces that are acting on it."
              buttons={[
                {
                  name: "View Code",
                  url: "https://github.com/Jackiele123/BalancingCube"
                }
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
