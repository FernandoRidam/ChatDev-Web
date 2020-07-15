function activeInvalidField( field ) {
  field.add('text-field-invalid');
}

function desactiveInvalidField( field ) {
  field.remove('text-field-invalid');
  field.add('text-field-focus');
}

function desactiveFocusedField( field ) {
  field.remove('text-field-focus');
}

export function invalidValueField( placeholder ) {
  if( document.getElementById(`field-${ placeholder }`) !== null ) {
    const field = document.getElementById(`field-${ placeholder }`).classList;

    activeInvalidField( field );
  }
};

export function validValueField( placeholder ) {
  if( document.getElementById(`field-${ placeholder }`) !== null ) {
    const fields = document.getElementsByClassName('text-field-focus');

    if( fields ) {
      Array.prototype.map.call( fields, ( field ) => {
        const classList = field.classList;

        desactiveFocusedField( classList );
      })
    }

    const field = document.getElementById(`field-${ placeholder }`).classList;

    desactiveInvalidField( field );
  }
}
