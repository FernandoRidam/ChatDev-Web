import React from 'react';

import {
  format,
} from 'date-fns';

import './styles.css';

export function Message({ message, handleOpenProfile }) {
  const logedUser = localStorage.getItem('ChatDev@UserId');

  const date = format( message.createdAt, 'L');
  const hour = format( message.createdAt, 'LT');

  return (
    <>
      {
        message.user_id._id !== logedUser
          ? <li className="member-message">
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
            </li>
          : <li className="your-message">
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
            </li>
      }

      <div className="date-chat">
        <div className="date">
          { date }
        </div>
      </div>
    </>
  );
};
