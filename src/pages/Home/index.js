import React from 'react';

import './styles.css';

import Welcome from '../../components/SubPages/Welcome';
import ListGroups from '../../components/SubPages/ListGroups';
import FloatingButton from '../../components/FloatingButton';

export default function Home({ history }) {
  function handleNavigation( route ) {
    history.push( route );
  };

  return (
    <div className="container-home">
      <div className="main">
        <Welcome />
      </div>

      <div className="right-menu">
        <ListGroups />
      </div>

      <FloatingButton />
    </div>
    );
  };
