import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import iconUser from '../assets/static/user-icon.png';
import {logoutRequest} from '../actions';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    //Seteamos el state actual para simular una salida del usuario
    props.logoutRequest({})
  }
  return (
    <header className='header'>
      <Link to='/' >
        <img className='header__img' src={logo} alt='Logo' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={iconUser} alt='icon-user' />
          }
          {/* <img  Otra forma de validar
            src={user ? gravatar(user.email) : iconUser}
            alt={user ? user.email : 'Icono user'}
          /> */}
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser && <li><a href='/'>{user.name}</a></li>}
          
          {hasUser ? (
            <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li>
          ) : (
          <li>
            <Link to='/login'>Iniciar Sesion</Link>
          </li>
          )
          
          }
        </ul>
      </div>
      
    </header>
  );
};

//Se encarga de traer los props que vamos a usar en el componete
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

//Se encarga de traer los actions que se pueden disparar en este componente
const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
