import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/Player.scss';
import { Redirect } from 'react-router-dom';

const Player = (props) => {
  //Gracia a router puedo obtener las variable de la ruta, en este caso el id porque lo pasamos como: 'player/:id'
  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  //Si hay un video con ese id se muestra el video, caso contraio se lo redirige a notfound
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => { props.history.goBack(); }}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    setTimeout(() => {
      <Redirect to='/404/' />;
    }, 0)
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
