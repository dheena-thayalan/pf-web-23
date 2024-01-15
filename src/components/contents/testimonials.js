/* eslint-disable prettier/prettier */
import React from "react";
import { biography } from "../../utils/biography";
import CardCarousel from "../ui/carousel";

const Testimonials = () => {
  return <section className="testimonials-continuer" id="recognition" >
       <h2 className="section-heading">Recognition</h2>
       <CardCarousel data={biography?.recognition} cardsPerSlide={1} type="quotes" interval={3000} />
  </section>;
};

export default Testimonials;
