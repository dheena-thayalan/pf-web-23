/* eslint-disable prettier/prettier */
// CardCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import CardItem from "../card/index";
import QuotesSheet from "../quotes";

const CardCarousel = ({ data, cardsPerSlide = 3, type, interval }) => {
  const totalSlides = Math.ceil(data.length / cardsPerSlide);

  const getContent = (index, item) => {
    switch (type) {
      case "card":
        return <CardItem key={index} {...item} />;
      case "quotes":
        return <QuotesSheet key={index} {...item} />; 
      default:
        return null;
    }
  };
  

  return (
    <div className="carousel-container">
      <Carousel  interval={interval}>
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="d-flex">
              {data
                .slice(
                  slideIndex * cardsPerSlide,
                  (slideIndex + 1) * cardsPerSlide 
                )
                .map((item, cardIndex) => (
                  getContent(cardIndex,item)
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
