import React from 'react';
import { connect } from 'react-redux';
import { setFavorite} from '../actions';
import '../assets/styles/CarrouselItem.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

const CarrouselItem = (props) => {
  const {title, year, contentRating, duration, cover, description} = props;
  
  const handleSetFavorite = () => {
      props.setFavorite({
        title, year, contentRating, duration, cover, description
      })
  }

  return (
    <div className='carrousel-items'>
      <img className='carrousel-items__img' src={cover} alt={title} />
      <div className='carrousel-items__details'>
        <div>
          <img src={play} alt='icon play' />
          <img src={plus} alt='icon plus' onClick={handleSetFavorite} />
        </div>
        <p className='carrousel-items__details--title'>{description}</p>
        <p className='carrousel-items__details--subtitle'>{`${year} ${contentRating} ${duration} min`}</p>
      </div>
    </div>
  );
};

const mapDospatchToProps = {
  setFavorite,
}

export default connect(null, mapDospatchToProps)(CarrouselItem);
