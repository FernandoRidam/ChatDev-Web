import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
