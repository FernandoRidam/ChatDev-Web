function handlePopUpShow( placeholder ) {
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

function searchGroup() {};

module.exports = {
  handlePopUpShow,
  searchGroup,
}
