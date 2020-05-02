import React from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

export default {
  title: 'CarouselItem',
  component: CarouselItem,
};

export const Carausel1 = () => (

  <Carousel>
    <CarouselItem title='Naruto the last' duration='1:59' year='2020' contentRating='+18' cover='https://static.noimg.net/movie/cover/original/baa645ae852a2d8421fccfc57fd734ed.jpg' />
    <CarouselItem title='Paw Patrol' duration='0:30' year='2017' contentRating='+1' cover='https://vignette.wikia.nocookie.net/doblaje/images/f/f5/Paw-patrol.jpg/revision/latest?cb=20171125051129&path-prefix=es' />
    <CarouselItem title='Ranma 1/2' duration='0:24' year='1992' contentRating='+13' cover='https://vignette.wikia.nocookie.net/doblaje/images/c/c2/Rmalogo.gif/revision/latest?cb=20200404040619&path-prefix=es' />
  </Carousel>

);
