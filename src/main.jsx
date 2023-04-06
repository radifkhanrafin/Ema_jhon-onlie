import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Layout from './Component/Layout/Layout';
import Order from './Component/order/Order';
import Inventory from './Component/inventory/Inventory';
import Login from './Component/Login/Login';
import cartProductLoader from './cartProductLoader/CartLodar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/order',
        element:<Order></Order>,
        loader: cartProductLoader
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>,
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
