import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Homepage from './components/HomePage/Homepage';
import Game from './Game';
import Notfound from './components/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
  path: "/",
  element: <Homepage />,
  errorElement: <Notfound />
},
  {
  path: "/game",
  element: <Game />
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);