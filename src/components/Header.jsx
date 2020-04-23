import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import iconUser from '../assets/static/user-icon.png';

const Header = ({ userOn }) => {
  return (
    <header className='header'>
      <Link to="/" >
        <img className='header__img' src={logo} alt='Logo' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={iconUser} alt='icon-user' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li>
            <Link to='/login'>Iniciar Sesion</Link>
          </li>
        </ul>
      </div>
      
    </header>
  );
};

export default Header;
