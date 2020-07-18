import React from 'react';

import './styles.css';

export function TextField( props ) {
  const {
    placeholder,
    icon,
    type,
    popupText,
    iconFunction,
    value,
    onChange,
    onFocus,
    height = 55,
    width = '100%',
  } = props;

  return(
    <div id={ `field-${ placeholder }`} className="text-field" style={{ height, width }}>
      <input
        placeholder={ placeholder }
        className="input-text"
        type={ type || 'text'}
        value={ value }
        onChange={ onChange }
        onFocus={ onFocus }
      />

      { icon ? <img onClick={() => iconFunction( placeholder  )} className="text-field-icon" src={ icon } alt=""/> : <></>}

      { popupText ? <div id={ `popup-${ placeholder }`} className="text-field-popup"><span className="popup-text">{ popupText }</span></div> : <></>}
    </div>
  );
};
