import React from 'react';

import './styles.css';

import {
  logo
} from '../../../assets';

export function Welcome() {
  return(
    <div className="welcome">
      <div className="header-card">
        <div className="header-title">
          <img src={ logo } className="logo" alt="CHATDEV"/>

          <span className="sub-logo">Seja Bem Vindo!</span>
        </div>
      </div>
    </div>
  );
};
