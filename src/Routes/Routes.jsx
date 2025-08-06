import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/bookDetails/bookDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        loader: async () => {
          const res = await fetch('booksData.json');
          return res.json(); 
        },
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/bookDetails/:id',
        loader: async () => {
          const res = await fetch('booksData.json');
          return res.json();
        },
        Component: BookDetails,
      },
    ],
  },
]);
