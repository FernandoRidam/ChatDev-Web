import React from 'react';

import './styles.css';

import Welcome from '../SubPages/Welcome';
import ListGroups from '../SubPages/ListGroups';
import Chat from '../SubPages/Chat';

import {
  FloatingButton
} from '../../components';

export default function Home({ history }) {
  function handleNavigation( route ) {
    history.push( route );
  };

  return (
    <div className="container-home">
      <div className="main">
        {/* <Welcome /> */}

        <Chat />
      </div>

      <div className="right-menu">
        <ListGroups />
      </div>

      <FloatingButton />
    </div>
    );
  };
