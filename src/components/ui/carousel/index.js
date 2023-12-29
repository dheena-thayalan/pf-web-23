/* eslint-disable prettier/prettier */
// CardCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import CardItem from "../card/index";

const CardCarousel = ({ data, cardsPerSlide = 3 }) => {
  const totalSlides = Math.ceil(data.length / cardsPerSlide);

  return (
    <div className="carousel-container">
      <Carousel>
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="d-flex">
              {data
                .slice(
                  slideIndex * cardsPerSlide,
                  (slideIndex + 1) * cardsPerSlide
                )
                .map((item, cardIndex) => (
                  <CardItem key={cardIndex} {...item} />
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
