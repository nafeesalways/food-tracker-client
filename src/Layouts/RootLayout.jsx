import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Loader from "../Pages/Loader";
import Container from "../Shared/Container";


const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
