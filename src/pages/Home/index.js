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

export default function Home({ history }) {
  const [ group, setGroup ] = useState(null);
  const [ profile, setProfile ] = useState(null);

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
