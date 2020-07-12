import React from 'react';

import './styles.css';

import { GitHubButton } from '../../../components';

import {
  profile,
  github,
  email,
  arrowLeft,
} from '../../../assets';

export function Profile({ handleCloseProfile }) {
  return (
    <div className="profile">
      <div className="profile-header">
        <img className="arrow-left-profile" src={ arrowLeft } alt="Voltar" onClick={ handleCloseProfile }/>

        <span className="profile-title">NodeJs</span>
      </div>

      <div className="avatar">
        <img className="profile-avatar" src={ profile } alt="Perfil"/>

        <span className="profile-name">Joãozinho</span>

        <span className="bio">Apaixonado por desenvolvimento de sistemas em geral. A procura de novos desafios</span>
      </div>

      <div className="buttons">
        <div className="profile-button">
          <span className="button-text">GitHub</span>

          <img className="button-icon" src={ github } alt="GitHub"/>
        </div>

        <div className="profile-button">
          <span className="button-text">Email</span>

          <img className="button-icon" src={ email } alt="Email"/>
        </div>
      </div>

      <div className="profile-footer">
        <GitHubButton />
      </div>
    </div>
  );
};
