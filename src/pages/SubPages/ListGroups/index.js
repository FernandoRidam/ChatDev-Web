import React, { useState } from 'react';

import './styles.css';

import {
  logo,
  search,
  menu,
  close,
} from '../../../assets';

import {
  TextField,
  Separator,
  CardGroup,
  Loading,
} from '../../../components';

import {
  searchGroup,
} from '../../../utils/iconsFunctions';

import {
  openMenu,
} from '../../../utils/menu';

export function ListGroups({ handleNavigation, handleOpenChat, handleOpenProfile, interactingGroups, groupsNotInteracting, loading, getGroups, deletingGroup, updatingGroup }) {
  const [ openMenuIcon, setOpenMenuIcon ] = useState(false);

  async function openProfile() {
    const user_id = localStorage.getItem('ChatDev@UserId');
    handleOpenProfile( user_id );

    openMenu();
    setOpenMenuIcon( false );
  };

  function logout() {
    localStorage.clear();

    openMenu();
    setOpenMenuIcon( false );

    handleNavigation('/');
  };

  return(
    <div className="list-groups">
      <div className="header">
        <img src={ logo } alt="" className="logo-header-list"/>

        <img
          onClick={()=> {
            openMenu();

            setOpenMenuIcon( !openMenuIcon );
          }}
          src={ openMenuIcon ? close : menu }
          alt=""
          className="menu-header-list"
        />

        <div id="menu-floating" className="menu-floating">
          {
            openMenuIcon
              ? <>
                  <div
                    onClick={ openProfile }
                    className="menu-item"
                  >
                    <span className="item-text">Perfil</span>
                  </div>

                  <div
                    onClick={ logout }
                    className="menu-item"
                  >
                    <span className="item-text">Sair</span>
                  </div>
                </>
              : <></>
          }
        </div>
      </div>

      <TextField
        placeholder="O Que Procura?"
        icon={ search }
        iconFunction={ searchGroup }
        width="90%"
      />

      <div className="list">
        {
          !loading
            ? <>
                <Separator text="Interagindo" />
                {
                  interactingGroups.length > 0
                    ? interactingGroups.map( group =>
                      <CardGroup
                        key={ group._id }
                        group={ group }
                        getGroups={ getGroups }
                        onClick={() => handleOpenChat( group )}
                        deletingGroup={ deletingGroup }
                        updatingGroup={ updatingGroup }
                      />)

                    : <div className="empty">
                        <span className="empty-text">Nenhum Grupo Interagindo...</span>
                      </div>
                }

                <Separator text="Tópicos" />
                {
                  groupsNotInteracting.length > 0
                    ? groupsNotInteracting.map( group =>
                      <CardGroup
                        key={ group._id }
                        group={ group }
                        getGroups={ getGroups }
                      />)

                    : <div className="empty">
                        <span className="empty-text">Nenhum Grupo Para Interagir...</span>
                      </div>
                }
              </>
            : <div className="loading-groups">
                <Loading size={ 50 }/>
              </div>
        }
      </div>
    </div>
  );
};
