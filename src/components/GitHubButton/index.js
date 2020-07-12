import React from 'react';

import {
  github,
} from '../../assets';

import './styles.css';

export function GitHubButton() {
  return (
    <div className="github gh-max">
      <span className="text-github">Contribua com o projeto</span>

      <img src={ github } className="img-github" alt="GitHub"/>
    </div>
  );
};
