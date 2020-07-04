import React from 'react';

import './styles.css';

export function TextField( props ) {
  const {
    placeholder,
    icon,
    type,
    popupText,
    iconFunction,
  } = props;

  return(
    <div className="text-field">
      <input
        placeholder={ placeholder }
        className="input-text"
        type={ type || 'text'}
      />

      { icon ? <img onClick={() => iconFunction( placeholder  )} className="text-field-icon" src={ icon } alt=""/> : <></>}

      { popupText ? <div id={ placeholder } className="text-field-popup"><span className="popup-text">{ popupText }</span></div> : <></>}
    </div>
  );
};
