import React from 'react';

import './styles.css';

import {
  logo
} from '../../../assets';

export default function Welcome() {
  return(
    <div className="welcome">
      <div className="header-card">
          <img src={ logo } className="logo" alt="CHATDEV"/>

          <span className="sub-logo">Seja Bem Vindo!</span>
        </div>
    </div>
  );
};
