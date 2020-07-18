import React from 'react';

import './styles.css';

import {
  GitHubButton,
} from '../../../components';

import {
  profileImg,
  github,
  email,
  arrowLeft,
} from '../../../assets';

export function Profile({ handleCloseProfile, profile }) {
  function handleClickButton( link ) {
    window.open( link );
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img className="arrow-left-profile" src={ arrowLeft } alt="Voltar" onClick={ handleCloseProfile }/>

        <span className="profile-title">Perfil</span>
      </div>

      <div className="avatar">
        <img className="profile-avatar" src={ profile.image || profileImg } alt="Perfil"/>

        <span className="profile-name">{ profile.name }</span>

        <span className="bio">{ profile.bio }</span>
      </div>

      <div className="buttons">
        <div className="profile-button" onClick={() => handleClickButton(`https://github.com/${ profile.username }`)}>
          <span className="button-text">GitHub</span>

          <img className="button-icon" src={ github } alt="GitHub"/>
        </div>

        <div className="profile-button" onClick={() => handleClickButton(`mailto:${ profile.email }`)}>
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
