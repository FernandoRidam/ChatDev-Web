import React, { useState, useEffect } from 'react';

import './styles.css';

import {
  TextField,
  Loading,
} from '../../components';

import {
  closeWhite,
  info,
} from '../../assets';

import {
  handlePopUpShow,
} from '../../utils/iconsFunctions';

import {
  validValueField,
  invalidValueField,
} from '../../utils/validationField';

import {
  alertShow,
} from '../../utils/alert';

import {
  storeGroup,
  updateGroup,
} from '../../services/Groups';

export function ModalGroup({ selectedGroup, closeModal, getGroups }) {
  const [ loadingSaveGroup, setLoadingSaveGroup ] = useState(false);

  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');

  async function handleSaveGroup() {
    if( name === '' || description === '') {
      if( name === '') {
        invalidValueField('Nome');
      }

      if( description === '') {
        invalidValueField('Descrição');
      }

      alertShow( false, 'Preencha corretamente os campos!');
    } else {
      setLoadingSaveGroup( true );

      const { success, message } = selectedGroup ? await updateGroup( selectedGroup._id, name, description ) : await storeGroup( name, description );

      alertShow( success, message );

      setLoadingSaveGroup( false );

      if( success ) {
        setName('');
        setDescription('');

        await getGroups();

        closeModal();
      }
    }
  };

  useEffect(() => {
    if( selectedGroup ) {
      setName( selectedGroup.name );

      setDescription( selectedGroup.subject );
    }
  }, [ selectedGroup ]);

  return (
    <div className="modal-group">
      <div className="form-group">
        <div className="title-view">
          <span className="title-modal-group">CRIAR GRUPO</span>

          <img onClick={ closeModal } className="close-modal" src={ closeWhite } alt="Cancelar"/>
        </div>

        <div className="body-modal">
          <TextField
            width="85%"
            placeholder="Nome"
            icon={ info }
            popupText="Nome do grupo"
            iconFunction={ handlePopUpShow }
            onFocus={() => validValueField('Nome')}
            value={ name }
            onChange={ event => setName( event.target.value )}
          />

          <TextField
            width="85%"
            placeholder="Descrição"
            icon={ info }
            popupText="Descrição do grupo"
            iconFunction={ handlePopUpShow }
            onFocus={() => validValueField('Descrição')}
            value={ description }
            onChange={ event => setDescription( event.target.value )}
          />
        </div>

        <div className="actions-modal">
          <button
            onClick={ handleSaveGroup }
            className={`button-modal ${ loadingSaveGroup ? 'button-modal-loading' : '' }`}
          >
            SALVAR

            {
              loadingSaveGroup
                ? <Loading color="#FFF" size={ 30 } />
                : <></>
            }
          </button>
        </div>
      </div>
    </div>
  );
};
