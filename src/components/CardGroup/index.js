import React from 'react';

import {
  message,
  open,
  join,
  exit,
  edit,
  trash,
} from '../../assets';

import {
  openMenuGroup,
} from '../../utils/menuCardGroup';

import {
  joinToGroup,
  exitOfGroup,
} from '../../services';

import {
  alertShow,
} from '../../utils/alert';

import './styles.css';

export function CardGroup({ group, onClick, getGroups, deletingGroup, updatingGroup }) {
  const { _id, name, subject, creator_id } = group;

  const logged_id = localStorage.getItem('ChatDev@UserId');

  function preventClickBubble( e ) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  };

  function handleOpenMenu( event ) {
    preventClickBubble( event );

    openMenuGroup( _id );
  };

  async function handleOpenModalEdit( event ) {
    preventClickBubble( event );

    updatingGroup( group );

    openMenuGroup( _id );
  };

  async function handleOpenModalDelete( event ) {
    preventClickBubble( event );

    deletingGroup( group );

    openMenuGroup( _id );
  };

  async function handleJoinExitGroup( event ) {
    preventClickBubble( event );

    if( !onClick ) {
      const { success, message } = await joinToGroup( _id );

      alertShow( success, message );
    } else {
      const { success, message } = await exitOfGroup( _id );

      alertShow( success, message );
    }

    openMenuGroup( _id );

    getGroups();
  };

  return (
    <div className={`card-container ${ !onClick ? 'not-click' : ''}`} onClick={ onClick }>
      <div className="information">
        <div className="title-row">
          <span className="title">{ name }</span>

         <div id={`open-menu-icon-div-${ _id }`} onClick={ handleOpenMenu } className="open-menu">
          <img className="open-menu-icon" src={ open } alt="Assunto"/>
         </div>
        </div>

        <div className="subject-line">
          <img className="subject-image" src={ message } alt="Assunto"/>

          <span className="subject">{ subject }</span>
        </div>
      </div>

      <div id={`line-card-group-${ _id }`} className="line-card">
        {
          logged_id !== creator_id
            ? <div id={`buttons-card-group-${ _id }`} className="buttons-card-member">
                <div onClick={ handleJoinExitGroup } className="button-card-group">
                  <img className="button-card-imgae" src={ onClick ? exit : join } alt=""/>
                </div>
              </div>
            : <div id={`buttons-card-group-${ _id }`} className="buttons-card-owner">
                <div onClick={ handleOpenModalEdit } className="button-card-group">
                  <img className="button-card-imgae" src={ edit } alt=""/>
                </div>

                <div onClick={ handleOpenModalDelete } className="button-card-group">
                  <img className="button-card-imgae" src={ trash } alt=""/>
                </div>
              </div>
        }
      </div>
    </div>
  );
};
