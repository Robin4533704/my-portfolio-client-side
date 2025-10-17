import React from 'react';
import Navber from '../Homepage/navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Homepage/navber/Footer';

const MainLayout  = () => {
    return (
        <>
        <Navber/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default MainLayout ;