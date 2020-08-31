import React from 'react';

import {
  plus,
} from '../../assets';

import './styles.css';

export function FloatingButton({ onClick }) {
  return (
    <div onClick={ onClick } className="floating-button">
      <img className="image-plus" src={ plus } alt="Adicionar" />
    </div>
  );
};
