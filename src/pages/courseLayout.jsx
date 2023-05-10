import React from "react";
import {Outlet} from "react-router-dom";
import Heading from "../components/Heading";
import Footer from "../components/Footer"
import Nav from "../components/Nav";

const CourseLayout = () => {
  return (
    <div style={{justifyContent: 'center'}}>
      <Heading />
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default CourseLayout;