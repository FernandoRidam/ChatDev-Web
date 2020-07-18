import React from 'react';

import moment from 'moment';

import './styles.css';

export function Message({ message, handleOpenProfile }) {
  moment.locale('pt-br');

  const logedUser = localStorage.getItem('ChatDev@UserId');
  const hour = moment( message.createdAt ).format('LT');

  return (
    message.user_id._id !== logedUser
      ? <div className="member-message">
          <div className="balloon member-balloon">
            <div className="member-name" onClick={() => handleOpenProfile( message.user_id._id )}>
              <span className="name">{ message.user_id.name }</span>
            </div>

            <div className="message">
              <span className="message-text">{ message.text }</span>
            </div>

            <div className="info">
              <span className="info-text">{ hour }</span>
            </div>
          </div>
        </div>
      : <div className="your-message">
          <div className="balloon your-balloon">
            <div className="member-name" onClick={() => handleOpenProfile( message.user_id._id )}>
              <span className="name">Você</span>
            </div>

            <div className="message">
              <span className="message-text">{ message.text }</span>
            </div>

            <div className="info">
              <span className="info-text">{ hour }</span>
            </div>
          </div>
        </div>
  );
};
