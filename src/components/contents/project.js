/* eslint-disable prettier/prettier */
import React from 'react';
import CardCarousel from '../ui/carousel';
import { biography } from '../../utils/biography';

const Project = () => {
    const carouselData =biography?.projects||[];
  return (
    <div className='project-container'>
          <h2 className="section-heading">Project </h2>
           <CardCarousel data={carouselData} cardsPerSlide={3} />
    </div>
  )
}

export default Project