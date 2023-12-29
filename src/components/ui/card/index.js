/* eslint-disable prettier/prettier */
// CardItem.js
import React from "react";
import { Card } from "react-bootstrap";

const CardItem = ({ name, description, imageSrc }) => {
  return (
    <div className="card-container">
    <Card>
    { imageSrc && <Card.Img variant="top" src={imageSrc} alt={name} />}
      <Card.Body>
        <Card.Title>{name||"title"}</Card.Title>
        <Card.Text>{description||"description"}</Card.Text>
        <Card.Link href="#">View More</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CardItem;
