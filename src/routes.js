import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import FinishRegister from './pages/FinishRegister';
import ListGroups from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },

  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/finish-register",
    element: <FinishRegister />
  },

  {
    path: "/home",
    element: <ListGroups />
  },
]);

export default function Routes() {
    return (
      <RouterProvider router={router} />
  );
}
