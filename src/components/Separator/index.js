import React from 'react';

import './styles.css';

export function Separator({ text }) {
  return (
    <div className="separator">
      <span>{ text }</span>

      <div className="line-separator" />
    </div>
  );
};
