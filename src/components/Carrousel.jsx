import React from 'react';
import '../assets/styles/Carrousel.scss';

const Carrousel = ({ children }) => {
  return (
    <section className='carrousel'>
      <div className='carrousel__container'>
        { children }
      </div>
    </section>
  );
};

export default Carrousel;
