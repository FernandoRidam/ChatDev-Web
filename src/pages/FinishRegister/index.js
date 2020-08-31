import React, { useState } from 'react';

import './styles.css';

import {
  logo,
  github,
  info,
  arrowLeft,
} from '../../assets';

import {
  TextField, GitHubButton, Button
} from '../../components';

import {
  handlePopUpShow,
} from '../../utils/iconsFunctions';

import {
  invalidValueField,
  validValueField,
} from '../../utils/validationField';

import {
  alertShow
} from '../../utils/alert';

import {
  verifyCode,
  login,
} from '../../services';

export default function FinishRegister({ history}) {
  const [ code, setCode ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const [ loading, setLoading ] = useState(false);

  function handleNavigation( route ) {
    history.push( route );
  };

  async function handleSubmit() {
    if( code === '' || password === '' || confirmPassword === '') {
      if( code === '') {
        invalidValueField('Código de Verificação');
      }

      if( password === '') {
        invalidValueField('Senha');
      }

      if( confirmPassword === '') {
        invalidValueField('Confirmar senha');
      }

      alertShow( false, 'Preencha corretamente os campos!');
    } else {
      setLoading( true );

      const { success, message } = await verifyCode( code, password, confirmPassword );

      if( success ) {
        efetuarLogin();
      }

      alertShow( success, message );

      setLoading( false );
    }
  };

  async function efetuarLogin() {
    const username = localStorage.getItem('ChatDev@username');

    const { success, message } = await login( username, password );

    if( success ) {
      handleNavigation('/home');

      localStorage.removeItem('ChatDev@username');
    } else {
      alertShow( success, message );
    }
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
              onFocus={() => validValueField('Código de Verificação')}
              value={ code }
              onChange={ event => setCode( event.target.value )}
            />

            <span className="hint-input">Verifique sua caixa de email</span>
          </div>

          <TextField
            className="margin-bottom"
            placeholder="Senha"
            icon={ info }
            popupText="Sua senha de acesso!"
            iconFunction={ handlePopUpShow }
            onFocus={() => validValueField('Senha')}
            value={ password }
            onChange={ event => setPassword( event.target.value )}
            type="password"
          />

          <TextField
            placeholder="Confirmar senha"
            icon={ info }
            popupText="Confirme sua senha!"
            iconFunction={ handlePopUpShow }
            onFocus={() => validValueField('Confirmar senha')}
            value={ confirmPassword }
            onChange={ event => setConfirmPassword( event.target.value )}
            type="password"
          />
        </div>

        <div className="buttons-view bt-max">
          <div />

          <Button
            onClick={handleSubmit}
            text="ENTRAR"
            loading={ loading }
          />

          <div />
        </div>

        <GitHubButton />
      </div>
    </div>
  );
};
