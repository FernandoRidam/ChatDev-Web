import React, { useState } from 'react';

import './styles.css';

import logo from '../../assets/logo.png';
import info from '../../assets/info.svg';

import {
  TextField,
  GitHubButton,
  Button,
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
  login,
} from '../../services';
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ loading, setLoading ] = useState(false);

  function handleNavigation( route ) {
    navigate( route );
  };

  async function handleSubmit() {
    if( username === '' || password === '') {
      if( username === '') {
        invalidValueField('Usuário GitHub');
      }

      if( password === '') {
        invalidValueField('Senha');
      }

      alertShow( false, 'Preencha corretamente os campos!');
    } else {
      setLoading( true );

      const { success, message } = await login( username, password );

      alertShow( success, message );

      if( success ) {
        handleNavigation('/home');
      } else {
        if( message === 'Cadastro não finalizado!') {
          handleNavigation('/finish-register');
        }
      }

      setLoading( false );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header-card">
          <div className="header-title">
            <img src={ logo } className="logo" alt="CHATDEV"/>

            <span className="sub-logo">Vamos nessa!</span>
          </div>
        </div>

        <div className="inputs-view">
          <TextField
            placeholder="Usuário GitHub"
            icon={ info }
            popupText="Seu usuário GitHub!"
            iconFunction={ handlePopUpShow }
            onFocus={() => validValueField('Usuário GitHub')}
            value={ username }
            onChange={ event => setUsername( event.target.value )}
          />

          <TextField
            placeholder="Senha"
            icon={ info }
            popupText="Sua senha de acesso!"
            iconFunction={ handlePopUpShow }
            type="password"
            onFocus={() => validValueField('Senha')}
            value={ password }
            onChange={ event => setPassword( event.target.value )}
            enterKeyPress={ handleSubmit }
          />
        </div>

        <div className="buttons-view">
          <Button
            text="ENTRAR"
            loading={ loading }
            onClick={ handleSubmit }
          />

          <Button
            text="CADASTRAR"
            onClick={() => {
              !loading && handleNavigation('/register');
            }}
          />
        </div>

        <GitHubButton />
      </div>
    </div>
  );
};
