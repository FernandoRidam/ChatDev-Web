import axios from 'axios';
import 'dotenv';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export function setToken( token ) {
  localStorage.setItem('ChatDev@token', token );

  api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
};

export function getToken() {
  const token = localStorage.getItem('ChatDev@token');

  api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
};
