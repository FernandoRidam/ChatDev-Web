import React from 'react';

import './styles.css';

import {
  logo,
  search,
  menu,
} from '../../../assets';

import {
  TextField,
  Separator,
  CardGroup,
} from '../../../components';

import {
  searchGroup,
} from '../../../utils/iconsFunctions';

export function ListGroups({ handleOpenChat, groups }) {
  return(
    <div className="list-groups">
      <div className="header">
        <img src={ logo } alt="" className="logo-header-list"/>

        <img src={ menu } alt="" className="menu-header-list"/>
      </div>

      <TextField
        placeholder="O Que Procura?"
        icon={ search }
        iconFunction={ searchGroup }
      />

      <div className="list">
        <Separator text="Interagindo" />

        <CardGroup title="NodeJs" subject="Assunto..."/>

        <Separator text="Tópicos" />

        {
          groups.length > 0
            ? groups.map( group =>
              <CardGroup
                title={ group.name }
                subject={ group.subject }
                onClick={() => handleOpenChat( group )}
              />)

            : <div className="empty">
                <span className="empty-text">Nenhum Grupo...</span>
              </div>
        }
      </div>
    </div>
  );
};
