import React from 'react';

import plus from '../../assets/plus.svg';

import './styles.css';

export function FloatingButton() {
  return (
    <div className="floating-button">
      <img className="image-plus" src={ plus } alt="Adicionar" />
    </div>
  );
};
