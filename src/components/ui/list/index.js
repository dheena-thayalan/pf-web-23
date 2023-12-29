/* eslint-disable prettier/prettier */
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const CustomList = ({ items, title}) => {
  return <div className="list-container">
     <ListGroup as="ul" numbered>
     <ListGroup.Item
          key={0}
        >{title}</ListGroup.Item>
      {items.map((item, index) => (
        <ListGroup.Item
          key={index+1}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.subheading}</div>
            {item.content}
          </div>
          <div className="year">
             {item.badgeValue}
            </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>;
};

export default CustomList;
