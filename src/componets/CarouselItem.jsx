import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import PropTypes from 'prop-types';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (

  <div className='carousel-item'>
    <img className='carousel-item__img' alt={title} src={cover} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} `}</p>
    </div>
  </div>

);

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,

};
export default CarouselItem;
