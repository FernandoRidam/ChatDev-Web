import React from 'react';

import moment from 'moment';
import br from 'moment/locale/pt-br';

import Routes from './routes';

import {
  Alert
} from './components';

export default function App() {
  moment.updateLocale('pt-br', br);

  return (
    <div className="content">
      <Routes />

      <Alert />
    </div>
  );
};
