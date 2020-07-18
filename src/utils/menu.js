export function openMenu() {
  if( document.getElementById('menu-floating') !== null ) {
    const menu = document.getElementById('menu-floating').classList;

    activeMenu( menu );
  }
};

function activeMenu( menu ) {
  menu.toggle('menu-open');
};
