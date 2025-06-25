import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Loader from '../Pages/Loader';

const RootLayout = () => {
     const { state } = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
              {state === "loading" ? <Loader></Loader>: <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;