import React, { useState, useEffect } from 'react';

import './styles.css';

import {
  Welcome,
  ListGroups,
  Chat,
  Profile,
} from '../SubPages';

import {
  FloatingButton, Loading
} from '../../components';

import {
  index,
  getProfile,
} from '../../services';

import {
  alertShow,
} from '../../utils/alert';

export default function Home({ history }) {
  const [ interactingGroups, setInteractingGroups ] = useState([]);
  const [ groupsNotInteracting, setGroupsNotInteracting ] = useState([]);

  const [ loading, setLoading ] = useState(false);

  const [ group, setGroup ] = useState(null);
  const [ profile, setProfile ] = useState(null);

  function handleNavigation( route ) {
    history.push( route );
  };

  function handleOpenChat( selectedGroup ) {
    if( group ) {
      handleCloseChat();
    }

    setGroup( selectedGroup );
  };

  function handleCloseChat() {
    setGroup(null);
  };

  async function handleOpenProfile( id ) {
    const { success, message, profile: profileData } = await getProfile( id );

    if( success ) {
      setProfile( profileData );
    } else {
      alertShow( success, message );
    }
  };

  function handleCloseProfile() {
    setProfile(null);
  };

  async function getGroups() {
    setLoading( true );

    const { success, message, groupsNotInteracting, interactingGroups } = await index();

    if( success ) {
      setInteractingGroups( interactingGroups );
      setGroupsNotInteracting( groupsNotInteracting );
    } else {
      alertShow( success, message );

      if( message === 'Token expirado!') {
        handleNavigation('/');
      };
    }

    setLoading( false );
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
                handleNavigation={ handleNavigation }
                handleOpenProfile={ handleOpenProfile }
                handleOpenChat={ handleOpenChat }
                interactingGroups={ interactingGroups }
                groupsNotInteracting={ groupsNotInteracting }
                loading={ loading }
              />
            : <Profile
                handleCloseProfile={ handleCloseProfile }
                profile={ profile }
              />
        }
      </div>

      <FloatingButton />
    </div>
    );
  };
