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

export default function FinishRegister({ history}) {
  function handleNavigation( route ) {
    history.push( route );
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header-card">
          <img
            onClick={() => handleNavigation('/register')}
            src={ arrowLeft }
            className="arrow-left"
            alt="Arrow Left"
          />

          <img src={ logo } className="logo" alt="CHATDEV"/>

          <span className="sub-logo">Finalize Seu Cadastro!</span>
        </div>

        <div className="inputs-view max-height">
          <div className="input-view-max">
            <TextField
              placeholder="Código de Verificação"
              icon={ info }
              popupText="Enviado para seu email!"
              iconFunction={ handlePopUpShow }
            />

            <span className="hint-input">Verifique sua caixa de email</span>
          </div>

          <TextField
            className="margin-bottom"
            placeholder="Senha"
            icon={ info }
            popupText="Sua senha de acesso!"
            iconFunction={ handlePopUpShow }
            type="password"
          />

          <TextField
            placeholder="Confirmar senha"
            icon={ info }
            popupText="Confirme sua senha!"
            iconFunction={ handlePopUpShow }
            type="password"
          />
        </div>

        <div className="buttons-view bt-max">
          <div />

          <button
            onClick={() => handleNavigation('/home')}
            className="button"
          >
            ENTRAR
          </button>

          <div />
        </div>

        <GitHubButton />
      </div>
    </div>
  );
};
