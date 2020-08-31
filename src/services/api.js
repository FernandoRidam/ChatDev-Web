import axios from 'axios';
import 'dotenv';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export function saveTokenId( token, user_id ) {
  localStorage.setItem('ChatDev@token', token );
  localStorage.setItem('ChatDev@UserId', user_id );

  api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
};

export function getToken() {
  const token = localStorage.getItem('ChatDev@token');

  api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
};
