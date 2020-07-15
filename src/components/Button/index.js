import React from 'react';

import './styles.css';

import {
  Loading,
} from '../Loading';

export function Button( props ) {
  const {
    text,
    onClick,
    loading = false,
  } = props;

  function none() {};

  return (
    <button
      onClick={ !loading ? onClick : none }
      className={`button ${ loading ? 'button-desabled' : ''}`}
    >
      { text }

      {
        loading
          ? <Loading position="absolute" right={ 30 } top={ 10 } color="#FFF" size={ 35 } />
          : <></>
      }
    </button>
  );
};
