import React from 'react';
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png' alt='Logo' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src='https://static.platzi.com/media/tmp/class-files/git/curso-frontend-escuelajs/curso-frontend-escuelajs-menu-desplegable/menu-desplegable/user-icon.png' alt='icon-user' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesion</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
