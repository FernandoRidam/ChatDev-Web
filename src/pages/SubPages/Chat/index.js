import React from 'react';

import {
  arrowLeft,
} from '../../../assets';

import {
  Message,
} from '../../../components';

import './styles.css';

export function Chat({ handleCloseChat, handleOpenProfile }) {
  return (
    <div className="chat-container">
      <div className="header-chat">
        <img className="arrow-left-group" src={ arrowLeft } alt="Voltar" onClick={ handleCloseChat } />

        <span className="group-name">NodeJs</span>
      </div>

      <div className="chat">
        <Message
          handleOpenProfile={ handleOpenProfile }
        />
      </div>
    </div>
  );
};
