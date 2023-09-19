import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error_page';
import Home from './routes/home';
import Search from './routes/search';
import Book from './routes/book';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:searchingValue",
        element: <Search />,
      },
      {
        path: "/book/:bookId",
        element: <Book />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
