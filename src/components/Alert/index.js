import React from 'react';

import './styles.css';

import success from '../../assets/success.svg';
import warning from '../../assets/warning.svg';

export function Alert() {
  return (
    <div id="alert-notification" className="alert-container">
      <img id="alert-icon-success" className="alert-icon" src={ success } alt="Success"/>

      <img id="alert-icon-warning" className="alert-icon" src={ warning } alt="Failure"/>

      <span id="alert-notification-text" className="alert-text"></span>
    </div>
  );
};
