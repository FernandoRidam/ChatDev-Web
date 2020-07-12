import React from 'react';

import './styles.css';

import {
  logo,
  info,
} from '../../assets';

import {
  TextField,
  GitHubButton,
} from '../../components';

import {
  handlePopUpShow,
} from '../../utils/iconsFunctions';

export default function Login({ history }) {
  function handleNavigation( route ) {
    history.push( route );
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header-card">
          <img src={ logo } className="logo" alt="CHATDEV"/>

          <span className="sub-logo">Vamos nessa!</span>
        </div>

        <div className="inputs-view">
          <TextField
            placeholder="Usuário GitHub"
            icon={ info }
            popupText="Seu usuário GitHub!"
            iconFunction={ handlePopUpShow }
          />

          <TextField
            placeholder="Senha"
            icon={ info }
            popupText="Sua senha de acesso!"
            iconFunction={ handlePopUpShow }
            type="password"
          />
        </div>

        <div className="buttons-view">
          <button
            onClick={() => handleNavigation('/')}
            className="button"
          >
            ENTRAR
          </button>

          <button
            onClick={() => handleNavigation('/register')}
            className="button"
          >
            CADASTRAR
          </button>
        </div>

        <GitHubButton />
      </div>
    </div>
  );
};
