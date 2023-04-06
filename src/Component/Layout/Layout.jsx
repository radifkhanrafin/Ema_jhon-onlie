import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Shop></Shop> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;