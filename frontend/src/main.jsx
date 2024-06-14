import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Homepage from './components/HomePage/Homepage';
import Endpage from './components/EndPage/Endpage';
import Game from './Game';
import Chat from './Chat'; 
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
},
  {
  path: "/endpage",
  element: <Endpage />
},
  {
  path: "/chat",
  element: <Chat />
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
