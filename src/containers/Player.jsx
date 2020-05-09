import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props, state) => {

  const { match, playing } = props;
  const { id } = match.params;
  const [loading, setLoading] = useState(true);

  const hasPlaying = Object.keys(playing).length > 0;
  console.log('hola');

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }
  , []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) :
    <Redirect to='/404/' />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    redirect: state.redirect,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
