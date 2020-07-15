export function handlePopUpShow( placeholder ) {
  if( document.getElementById(`popup-${ placeholder }`) !== null ) {
    const popup = document.getElementById(`popup-${ placeholder }`).classList;

    if( !popup.contains('popup-active')) {
      activePopUp( popup );

      setTimeout(() => activePopUp( popup ), 3000);
    }
  }
};

function activePopUp( popup ) {
  popup.toggle('popup-active');
}

export function searchGroup() {};
