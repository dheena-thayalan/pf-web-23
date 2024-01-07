/* eslint-disable prettier/prettier */
import React from "react";
import quotes from "../../../assets/images/quotes.svg";

const QuotesSheet = ({text,by,role,key,company}) => {
  return (
    <figure className="sheet testimonial" key={key+1}>
      <img className="quotes-img" src={quotes} alt="quotes" />
      <blockquote className="content">
        <p>
       {text||""}
        </p>
        <footer>
          <cite className="author">- {by||""}</cite>
          <cite>{role||""}</cite>
          <cite className="org">{company||""}</cite>
        </footer>
      </blockquote>
      <img className="quotes-img back" src={quotes} alt="quotes" />
    </figure>
  );
};

export default QuotesSheet;
