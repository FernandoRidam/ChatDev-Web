export function openMenuGroup( id ) {
  if( document.getElementById(`line-card-group-${ id }`) !== null ) {
    const menus = document.getElementsByClassName('line-card-open');
    if( menus ) {
      Array.prototype.map.call( menus, ( menu ) => {
        const classList = menu.classList;

        if( menu.id !== `line-card-group-${ id }`) {
          activeMenu( classList );
        }
      })
    }

    const cardButtons = document.getElementsByClassName('buttons-card-open');
    if( cardButtons ) {
      Array.prototype.map.call( cardButtons, ( cardButton ) => {
        const classList = cardButton.classList;

        if( cardButton.id !== `buttons-card-group-${ id }`) {
          activeButtons( classList );
        }
      })
    }

    const icons = document.getElementsByClassName('close-menu');
    if( icons ) {
      Array.prototype.map.call( icons, ( icon ) => {
        const classList = icon.classList;

        if( icon.id !== `open-menu-icon-div-${ id }`) {
          rotateIcon( classList );
        }
      })
    }

    const menu = document.getElementById(`line-card-group-${ id }`).classList;
    const buttons = document.getElementById(`buttons-card-group-${ id }`).classList;
    const icon = document.getElementById(`open-menu-icon-div-${ id }`).classList;

    setTimeout(() => {
      activeButtons( buttons );
    }, buttons.contains('buttons-card-open') ? 0 : 200 );

    activeMenu( menu );
    rotateIcon( icon );
  }
};

function activeMenu( menu ) {
  menu.toggle('line-card-open');
};

function activeButtons( buttons ) {
  buttons.toggle('buttons-card-open');
};

function rotateIcon( icon ) {
  icon.toggle('close-menu');
}
