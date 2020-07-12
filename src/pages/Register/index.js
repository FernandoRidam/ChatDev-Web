import React from 'react';

import './styles.css';

import {
  logo,
  github,
  info,
  arrowLeft,
} from '../../assets';

import {
  TextField, GitHubButton
} from '../../components';

import {
  handlePopUpShow,
} from '../../utils/iconsFunctions';

export default function Register({ history }) {
  function handleNavigation( route ) {
    history.push( route );
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header-card">
          <img
            onClick={() => handleNavigation('/')}
            src={ arrowLeft }
            className="arrow-left"
            alt="Arrow Left"
          />

          <img src={ logo } className="logo" alt="CHATDEV"/>

          <span className="sub-logo">Entre Para a Comunidade!</span>
        </div>

        <div className="inputs-view">
          <TextField
            placeholder="Email"
            icon={ info }
            popupText="Seu email para cadastro"
            iconFunction={ handlePopUpShow }
          />

          <TextField
            placeholder="Usuário GitHub"
            icon={ info }
            popupText="Seu usuário GitHub!"
            iconFunction={ handlePopUpShow }
          />
        </div>

        <div className="buttons-view">
          <div />

          <button
            onClick={() => handleNavigation('/finish-register')}
            className="button"
          >
            CONTINUAR
          </button>

          <div />
        </div>

        <GitHubButton />
      </div>
    </div>
  );
};
