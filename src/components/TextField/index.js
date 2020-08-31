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
    enterKeyPress = () => {},
    onFocus,
    height = 55,
    width = '100%',
  } = props;

  function handleEnterKeyPress( event ) {
    if ( event.keyCode == 13) {
      enterKeyPress();
    }
  };

  return(
    <div id={ `field-${ placeholder }`} className="text-field" style={{ height, width }}>
      <input
        placeholder={ placeholder }
        className="input-text"
        type={ type || 'text'}
        value={ value }
        onChange={ onChange }
        onKeyUp={ handleEnterKeyPress }
        onFocus={ onFocus }
      />

      { icon ? <img onClick={() => iconFunction( placeholder  )} className="text-field-icon" src={ icon } alt=""/> : <></>}

      { popupText ? <div id={ `popup-${ placeholder }`} className="text-field-popup"><span className="popup-text">{ popupText }</span></div> : <></>}
    </div>
  );
};
