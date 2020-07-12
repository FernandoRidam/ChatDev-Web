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

export function ListGroups({ handleOpenChat }) {
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

        <CardGroup
          title="NodeJs - Clicável"
          subject="Assunto..."
          onClick={handleOpenChat}
          // onClick={() => handleOpenChat( group )} => in map
        />

        <CardGroup title="NodeJs" subject="Assunto..."/>

        <CardGroup title="NodeJs" subject="Assunto..."/>

        <CardGroup title="NodeJs" subject="Assunto..."/>
      </div>
    </div>
  );
};
