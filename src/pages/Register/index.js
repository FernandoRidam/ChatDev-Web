import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';
import github from '../../assets/github.png';
import info from '../../assets/info.svg';
import arrow_left from '../../assets/arrow_left.svg';

import TextField from '../../components/TextField';

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
            src={ arrow_left }
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

        <div className="github">
          <span className="text-github">Contribua com o projeto</span>

          <img src={ github } className="img-github" alt="GitHub"/>
        </div>
      </div>
    </div>
  );
};
