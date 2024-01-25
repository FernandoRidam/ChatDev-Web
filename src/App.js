import React from 'react';

import Routes from './routes';

import {
  Alert
} from './components';

export default function App() {

  return (
    <div className="content">
      <Routes />

      <Alert />
    </div>
  );
};
