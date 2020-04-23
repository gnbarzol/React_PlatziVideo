import React from 'react';
import '../assets/styles/CarrouselItem.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

const CarrouselItem = (props) => {
  const {title, year, contentRating, duration, cover, description} = props;
  return (
    <div className='carrousel-items'>
      <img className='carrousel-items__img' src={cover} alt={title} />
      <div className='carrousel-items__details'>
        <div>
          <img src={play} alt='icon play' />
          <img src={plus} alt='icon plus' />
        </div>
        <p className='carrousel-items__details--title'>{description}</p>
        <p className='carrousel-items__details--subtitle'>{`${year} ${contentRating} ${duration} min`}</p>
      </div>
    </div>
  );
};

export default CarrouselItem;
