import React, { useState, useEffect } from 'react';

import './styles.css';

import {
  Welcome,
  ListGroups,
  Chat,
  Profile,
} from '../SubPages';

import {
  FloatingButton
} from '../../components';
import {
  index,
} from '../../services';
import { alertShow } from '../../utils/alert';

export default function Home({ history }) {
  const [ groups, setGroups ] = useState([]);

  const [ group, setGroup ] = useState(null);
  const [ profile, setProfile ] = useState(null);

  function handleNavigation( route ) {
    history.push( route );
  };

  function handleOpenChat( group ) {
    setGroup( group );
  };

  function handleCloseChat() {
    setGroup(null);
  };

  function handleOpenProfile( id ) {
    // Get Profile data...

    setProfile({});
  };

  function handleCloseProfile() {
    setProfile(null);
  };

  async function getGroups() {
    const { success, message, groups } = await index();

    if( success ) {
      setGroups( groups );
    } else {
      alertShow( success, message );

      if( message === 'Token expirado!') {
        handleNavigation('/');
      };
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <div className="container-home">
      <div className="main">
        {
          !group
            ? <Welcome />
            : <Chat
                handleCloseChat={ handleCloseChat }
                handleOpenProfile={ handleOpenProfile }
                group={ group }

              />
        }
      </div>

      <div className="right-menu">
        {
          !profile
            ? <ListGroups
                handleOpenChat={ handleOpenChat }
                groups={ groups }
              />
            : <Profile
                handleCloseProfile={ handleCloseProfile }
              />
        }
      </div>

      <FloatingButton />
    </div>
    );
  };
