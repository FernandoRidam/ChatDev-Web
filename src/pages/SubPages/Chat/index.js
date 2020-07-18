import React, { useState, useEffect } from 'react';

import {
  arrowLeft,
  send,
} from '../../../assets';

import {
  Message, TextField, Loading,
} from '../../../components';

import {
  listMessage,
} from '../../../services/Messages';

import './styles.css';
import { alertShow } from '../../../utils/alert';

export function Chat({ handleCloseChat, handleOpenProfile, group }) {
  const [ messages, setMessages ] = useState([]);

  const [ loading, setLoading ] = useState(false);

  async function getMessages() {
    setLoading( true );

    const { success, message, messages } = await listMessage( group._id );

    if( success ) {
      setMessages( messages );
    } else {
      alertShow( success, message );

      handleCloseChat();
    }

    setLoading( false );
  };

  useEffect(() => {
    getMessages();
  }, [ group ]);

  return (
    <div className="chat-container">
      <div className="header-chat">
        <img className="arrow-left-group" src={ arrowLeft } alt="Voltar" onClick={ handleCloseChat } />

        <span className="group-name">{ group.name }</span>
      </div>

      <div className="chat" id="chatScroll">
        {
          !loading
            ? messages.length > 0
                ? messages.map(( message, index ) =>
                    <Message
                      id={ index }
                      key={ message._id }
                      handleOpenProfile={ handleOpenProfile }
                      message={ message }
                    />
                  )
                : <></>
            : <div className="loading-chat">
                <Loading size={ 100 }/>
              </div>
        }
      </div>

      <div className="send-message">
        <TextField
          placeholder="Mensagem"
          width='90%'
          height={ 50 }
          textarea
        />

        <img className="send-button" src={ send } alt=""/>
      </div>
    </div>
  );
};
