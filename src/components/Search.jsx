import React from 'react';
import '../assets/styles/Search.scss';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input aria-label='Buscar' className='input' type='text' placeholder='Buscar...' />
    </section>
  );
};

export default Search;
