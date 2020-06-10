import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';
import github from '../../assets/github.png';
import info from '../../assets/info.svg';

import TextField from '../../components/TextField';

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
          />

          <TextField
            placeholder="Senha"
            icon={ info }
            popupText="Sua senha de acesso!"
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

        <div className="github">
          <span className="text-github">Contribua com o projeto</span>

          <img src={ github } className="img-github" alt="GitHub"/>
        </div>
      </div>
    </div>
  );
};
