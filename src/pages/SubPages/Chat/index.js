import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';

import {
  arrowLeft,
  send,
  noSend,
} from '../../../assets';

import {
  Message, TextField, Loading,
} from '../../../components';

import {
  listMessage, storeMessage,
} from '../../../services/Messages';

import './styles.css';
import { alertShow } from '../../../utils/alert';

export function Chat({ handleCloseChat, handleOpenProfile, group }) {
  const [ groupId, setGroupId ] = useState('');

  const [ message, setMessage ] = useState({});
  const [ messages, setMessages ] = useState([]);

  const [ messageText, setMessageText ] = useState('');

  const [ loading, setLoading ] = useState(false);
  const [ sending, setSending ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  const [ total, setTotal ] = useState(0);
  const [ page, setPage ] = useState(1);

  async function getMessages() {
    setLoading( true );

    const {
      success,
      message,
      messages,
      totalCount,
    } = await listMessage( group._id, 1 );

    if( success ) {
      setMessages( messages );

      setTotal( totalCount );
      setPage( 2 );
    } else {
      alertShow( success, message );

      handleCloseChat();
    }

    setLoading( false );
  };

  async function loadMoreMessages() {
    const {
      success,
      message,
      messages: responseMessages,
      totalCount,
    } = await listMessage( group._id, page );

    if( success ) {
      setMessages([ ...messages, ...responseMessages ]);

      setTotal( totalCount );
      setPage( page + 1 );
    } else {
      alertShow( success, message );

      handleCloseChat();
    }

    setIsFetching( false );
  };

  async function sendMessasge() {
    if( messageText !== '') {
      setSending( true );

      const { success, message, newMessage } = await storeMessage( group._id, messageText );

      if( success ) {
        setMessages([ newMessage, ...messages ]);

        setMessageText('');
      } else {
        alertShow( success, message );
      }

      setSending( false );
    }
  };

  function setMessagesFeed( message ) {
    setMessage( message );
  };

  useEffect(() => {
    async function getMessagesEffect() {
      await getMessages();
    };

    getMessagesEffect();
  }, [ group ]);

  useEffect(() => {
    setMessages([ message, ...messages ]);
  }, [ message ]);

  useEffect(() => {
    const logged_id = localStorage.getItem('ChatDev@UserId');

    const socket = io('http://localhost:3333', {
      query: { user: logged_id }
    });

    socket.on('message', newMessage => {
      if( newMessage.group_id === group._id ) {
        setMessagesFeed( newMessage );
      }
    });
  }, []);

  function handleScroll() {
    const chatScroll = document.getElementById('chatScroll');

    if ( chatScroll.scrollTop !== 0 ) return;


    setIsFetching(true);
  }

  useEffect(() => {
    const chatScroll = document.getElementById('chatScroll');

    chatScroll.addEventListener('scroll', handleScroll);
    return () => chatScroll.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    loadMoreMessages();
  }, [isFetching]);

  return (
    <div className="chat-container" id="id-chat-container">
      <div className="header-chat">
        <img className="arrow-left-group" src={ arrowLeft } alt="Voltar" onClick={ handleCloseChat } />

        <span className="group-name">{ group.name }</span>
      </div>

      <ul className="chat" id="chatScroll">
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
                : <div className="empty-chat">
                    <span>NENHUMA MENSAGEM...</span>
                  </div>
            : <div className="loading-chat">
                <Loading size={ 100 }/>
              </div>
        }

        <div className="more-messages">
          {
            isFetching && !loading
              ? <Loading size={ 40 }/>
              : <></>
          }
        </div>
      </ul>

      <div className="send-message">
        <TextField
          placeholder="Mensagem"
          width='90%'
          height={ 50 }
          value={ messageText }
          onChange={ event => setMessageText( event.target.value )}
          enterKeyPress={ sendMessasge }
        />

        {
          sending
            ? <Loading />
            : <img onClick={ sendMessasge } className={ messageText !== '' ? 'send-button' : 'send-button-disabled'} src={ messageText !== '' ? send : noSend } alt="Send"/>
        }
      </div>
    </div>
  );
};
