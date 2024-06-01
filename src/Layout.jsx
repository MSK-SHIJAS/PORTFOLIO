import React from 'react';
import Navbars from './Navbars'; // Assuming Navbars component is in a separate file
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbars />
            <Outlet />
        </>
    );
}

export default Layout;
