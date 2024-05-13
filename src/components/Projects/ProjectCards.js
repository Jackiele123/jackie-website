import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height="300px"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {props.buttons.map(({ name = props.isBlog ? "View Blog" : "View Project", url = "" }) => (
          <Button variant="primary" href={url} target="_blank" className="m-1">
            <BiLinkExternal /> &nbsp;
            {name}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
