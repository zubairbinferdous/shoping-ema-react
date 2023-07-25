/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx';

import Invantory from './component/Invontory/Invantory.jsx';
import Layout from './component/Layout/Layout.jsx';
import LoaderData from './component/Loaders/LoaderData.js';
import Loging from './component/LogingPage/Loging.jsx';
import Order from './component/OrderPage/Order.jsx';
import Shop from './component/Shop/Shop';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:"/order",
        element:<Order></Order>,
        loader: LoaderData,
      },
      {
        path:"/inventory",
        element:<Invantory></Invantory>
      },
      {
        path:"/login",
        element:<Loging></Loging>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
