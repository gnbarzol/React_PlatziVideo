import React from 'react';
import classNames from 'classnames'; //npm install classnames --save
import '../assets/styles/Search.scss';

const Search = ({ isHome }) => {
  //Si este componente se muestra en el home(lo sabremos por la propiedad isHome) el input de este
  //componete va a aplicar la clase .isHome
  const inputStyle = classNames('input', {
    isHome
  })
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input aria-label='Buscar' className={inputStyle} type='text' placeholder='Buscar...' />
    </section>
  );
};

export default Search;
