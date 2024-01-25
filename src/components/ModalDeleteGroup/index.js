import React, { useState } from 'react';

import './styles.css';

import {
  Loading,
} from '../../components';

import closeWhite from '../../assets/close-white.svg';

import {
  alertShow,
} from '../../utils/alert';

import {
  deleteGroup,
} from '../../services/Groups';

export function ModalDeleteGroup({ group, closeModal, getGroups }) {
  const [ loadingDeletingGroup, setLoadingDeletingGroup ] = useState(false);

  async function handleDeleteGroup() {
    setLoadingDeletingGroup( true );

    const { success, message } = await deleteGroup( group._id );

    alertShow( success, message );

    setLoadingDeletingGroup( false );

    if( success ) {
      closeModal();

      getGroups();
    }
  };

  return (
    <div className="modal-group">
      <div className="form-group">
        <div className="title-view">
          <span className="title-modal-group">DELETAR GRUPO</span>

          <img onClick={ closeModal } className="close-modal" src={ closeWhite } alt="Cancelar"/>
        </div>

        <div className="body-modal-delete">
          <span className="question-modal">REALMENTE DESEJA APAGAR O GRUPO { group.name }?</span>
        </div>

        <div className="actions-modal actions-modal-buttons">
          <button
            onClick={ closeModal }
            className="button-modal button-modal-loading"
          >
            NÃO
          </button>

          <button
            onClick={ handleDeleteGroup }
            className={`button-modal ${ loadingDeletingGroup ? 'button-modal-loading' : '' }`}
          >
            SIM

            {
              loadingDeletingGroup
                ? <Loading color="#FFF" size={ 30 } />
                : <></>
            }
          </button>
        </div>
      </div>
    </div>
  );
};
