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
import Check_Out from './Component/Chech_Out/Check_Out';
import SignUp from './Component/SignUp/SignUp';
import Provaider from './Provaider/Provaider';
import PRoute from './Component/Routes/PRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/checkout',
        element: <PRoute><Check_Out></Check_Out></PRoute>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductLoader
      },
      {
        path: '/inventory',
        element:<PRoute><Inventory></Inventory></PRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provaider>
      <RouterProvider router={router} />
    </Provaider>

  </React.StrictMode>,
)
