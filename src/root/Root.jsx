import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;