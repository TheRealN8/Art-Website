import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Courses from "./pages/courses";
import Artwork from "./pages/artwork";
import About from "./pages/about";

//<Route path="blogs" element={<Blogs />} />

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />}/>
          <Route path="artwork" element={<Artwork />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
