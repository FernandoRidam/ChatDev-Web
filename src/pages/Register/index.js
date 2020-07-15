import React, { useState } from 'react';

import './styles.css';

import {
  logo,
  info,
  arrowLeft,
} from '../../assets';

import {
  TextField,
  GitHubButton,
  Button,
} from '../../components';

import {
  handlePopUpShow,
} from '../../utils/iconsFunctions';

import {
  store,
} from '../../services';

import {
  invalidValueField,
  validValueField,
} from '../../utils/validationField';

import {
  alertShow
} from '../../utils/alert';

export default function Register({ history }) {
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');

  const [ loading, setLoading ] = useState(false);

  function handleNavigation( route ) {
    history.push( route );
  };

  async function handleRegister() {
    if( email === '' || username === '') {
      if( email === '') {
        invalidValueField('Email');
      }

      if( username === '') {
        invalidValueField('Usuário GitHub');
      }

      alertShow( false, 'Preencha corretamente os campos!');
    } else {
      setLoading( true );

      const { success, message } = await store( email, username );

      alertShow( success, message );

      if( success ) {
        handleNavigation('/finish-register');
      }

      setLoading( false );
    }
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
            value={ email }
            onChange={ event => setEmail( event.target.value )}
            onFocus={() => validValueField('Email')}
          />

          <TextField
            placeholder="Usuário GitHub"
            icon={ info }
            popupText="Seu usuário GitHub!"
            iconFunction={ handlePopUpShow }
            value={ username }
            onChange={ event => setUsername( event.target.value )}
            onFocus={() => validValueField('Usuário GitHub')}
          />
        </div>

        <div className="buttons-view">
          <div />

          <Button
            onClick={handleRegister}
            text="CONTINUAR"
            loading={ loading }
          />

          <div />
        </div>

        <GitHubButton />
      </div>
    </div>
  );
};
