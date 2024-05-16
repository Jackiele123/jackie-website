import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jackie Le </span>
            from <span className="purple"> Surrey, BC, Canada.</span>
            <br />I am a 3A Mechatronics Engineering student at    
            the University of Waterloo.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Throwing Frisbees
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it."{" "}
          </p>
          <footer className="blockquote-footer">Sir Henry Royce</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
