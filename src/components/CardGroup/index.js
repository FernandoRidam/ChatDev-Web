import React from 'react';

import {
  message
} from '../../assets';

import './styles.css';

export function CardGroup({ title, subject }) {
  return (
    <div className="card-container">
      <div className="information">
        <span className="title">{ title }</span>

        <div className="subject-line">
          <img className="subject-image" src={ message } alt="Assunto"/>

          <span className="subject">{ subject }</span>
        </div>
      </div>

      <div className="line-card" />
    </div>
  );
};
