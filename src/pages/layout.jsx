import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div>
      <Heading />
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;