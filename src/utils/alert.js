export function alertShow( success, message ) {
  if( document.getElementById('alert-notification') !== null ) {
    const alert = document.getElementById('alert-notification').classList;
    const icon = document.getElementById( success ? 'alert-icon-success' : 'alert-icon-warning').classList;

    if( !alert.contains('alert-container-active')) {
      activeAlert( alert, success );
      setMessageNotificationAlert( message );
      activeAlertIcon( icon );

      setTimeout(() => {
        desactiveAlert( alert, icon, success );
      }, 3000);
    }
  }
};

function setMessageNotificationAlert( message ) {
  document.getElementById('alert-notification-text').innerHTML = message;
};

function activeAlertIcon( icon ) {
  icon.add('alert-icon-active');
};

function activeAlert( alert, success ) {
  alert.add('alert-container-active');
  alert.add( success ? 'alert-success' : 'alert-failure');
}

function desactiveAlert( alert, icon, success ) {
  alert.remove('alert-container-active');

  setTimeout(() => {
    alert.remove( success ? 'alert-success' : 'alert-failure');
    icon.remove('alert-icon-active');

    setMessageNotificationAlert('');
  }, 1000);
}
