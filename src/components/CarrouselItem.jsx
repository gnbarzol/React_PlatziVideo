import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/CarrouselItem.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarrouselItem = (props) => {
  const { id, title, year, contentRating, duration, cover, description, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, title, year, contentRating, duration, cover, description
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carrousel-items'>
      <img className='carrousel-items__img' src={cover} alt={title} />
      <div className='carrousel-items__details'>
        <div>
          <img src={play} alt='icon play' />
          { (isList) ?
            <img src={removeIcon} alt='icon remove' onClick={() => handleDeleteFavorite(id)} /> :
            <img src={plus} alt='icon plus' onClick={handleSetFavorite} />
          }
        </div>
        <p className='carrousel-items__details--title'>{description}</p>
        <p className='carrousel-items__details--subtitle'>{`${year} ${contentRating} ${duration} min`}</p>
      </div>
    </div>
  );
};

const mapDospatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDospatchToProps)(CarrouselItem);
