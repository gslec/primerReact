import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import { searchRequest } from '../actions';

const Search = (props, { isHome }) => {

  const handleChange = (event) => {
    props.searchRequest(event.target.value);
  };

  const inpuntStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='busqueda'
        type='text'
        className={inpuntStyle}
        placeholder='Buscar...'
        onChange={handleChange}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchRequest,
};
export default connect(null, mapDispatchToProps)(Search);
