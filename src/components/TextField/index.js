import React from 'react';

import './styles.css';

export default function TextField( props ) {
  const {
    placeholder,
    icon,
    type,
    popupText
  } = props;

  function handlePopUpShow() {
    if( document.getElementById(placeholder) !== null ) {
      const popup = document.getElementById(placeholder).classList;

      if( !popup.contains('popup-active')) {
        activePopUp( popup );

        setTimeout(() => activePopUp( popup ), 3000);
      }
    }
  };

  function activePopUp( popup ) {
    popup.toggle('popup-active');
  }

  return(
    <div className="text-field">
      <input
        placeholder={ placeholder }
        className="input-text"
        type={ type || 'text'}
      />

      { icon ? <img onClick={ handlePopUpShow } className="text-field-icon" src={ icon } alt=""/> : <></>}

      { popupText ? <div id={ placeholder } className="text-field-popup"><span className="popup-text">{ popupText }</span></div> : <></>}
    </div>
  );
};
