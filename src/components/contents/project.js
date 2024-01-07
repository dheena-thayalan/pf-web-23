/* eslint-disable prettier/prettier */
import React from 'react';
import CardCarousel from '../ui/carousel';
import { biography } from '../../utils/biography';

const Project = () => {
    const carouselData =biography?.projects||[];
  return (
    <section className='project-container' id="project">
          <h2 className="section-heading">Project </h2>
           <CardCarousel data={carouselData} cardsPerSlide={3} type="card" interval={3000} />
    </section>
  )
}

export default Project