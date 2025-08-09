import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import ReadList from '../pages/ReadList/ReadList';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <p>Please wait...</p>,
        loader: () => fetch('../../booksData.json'), //relative path
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/bookDetails/:id',
        Component: BookDetails,
        hydrateFallbackElement: <p>Please wait...</p>,
        // loader: () => fetch('../../booksData.json'),
        loader: () => fetch('/booksData.json').then(res => res.json()), //better 
      },
      {
        path: 'readList',
        Component: ReadList,
        hydrateFallbackElement: <p>Please wait...</p>,
        loader: () => fetch('../../booksData.json'),
      },
    ],
  },
]);

