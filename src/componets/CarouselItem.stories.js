import React from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

export default {
  title: 'CarouselItem',
  component: CarouselItem,
};

export const Carausel1 = () => (

  <Carousel>
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
  </Carousel>

);
