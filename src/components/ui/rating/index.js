/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, totalStars, onRatingChange }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

  return (
    <div className="rating-container">
      {stars.map((star,index) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
          key={index+1}
          onClick={() => onRatingChange && onRatingChange(star)}
          className={`${star <= rating ? "rated" : "non-rating"}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  totalStars: PropTypes.number,
  onRatingChange: PropTypes,
};

export default StarRating;
