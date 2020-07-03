import React from 'react';

import './styles.css';

import logo from '../../../assets/logo.png';
import search from '../../../assets/search.svg';
import menu from '../../../assets/menu.svg';

import TextField from '../../TextField';
import Separator from '../../Separator';
import CardGroup from '../../CardGroup';

import {
  searchGroup,
} from '../../../utils/iconsFunctions';

export default function ListGroups() {
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

      <Separator text="Interagindo" />

      <CardGroup title="NodeJs" subject="Assunto..."/>

      <Separator text="Tópicos" />

      <CardGroup title="NodeJs" subject="Assunto..."/>
    </div>
  );
};
