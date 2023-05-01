import React from "react";
import {Outlet} from "react-router-dom";
import Heading from "../components/Heading";
import Footer from "../components/Footer"
import Nav from "../components/Nav";

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