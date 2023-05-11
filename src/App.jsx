import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import CourseLayout from "./pages/courseLayout";
import Home from "./pages/home";
import Courses from "./pages/courses";
import Artwork from "./pages/artwork";
import About from "./pages/about";
import Drawing from "./pages/courses/drawing";
import CreativeArt from "./pages/courses/creative-art";
import DigitalArt from "./pages/courses/digital-art";
import GraphicDesign from "./pages/courses/graphic-design";
import Paintings from "./pages/courses/paintings";
<<<<<<< HEAD
=======
import AnimeManga from "./pages/courses/anime-manga";
import ChildPrograms from "./pages/courses/child-programs";
>>>>>>> Nathan

//<Route path="blogs" element={<Blogs />} />

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />}/>
          <Route path="/artwork" element={<Artwork />}/>
          <Route path="/about" element={<About />}/>
        </Route>
        <Route path='/course/' element={<CourseLayout />}>
          <Route path="/course/drawing" element={<Drawing />}/>
          <Route path="/course/paintings" element={<Paintings />}/>
<<<<<<< HEAD
          <Route path="/course/graphic-design" element={<GraphicDesign />}/>
          <Route path="/course/digital-art" element={<DigitalArt />}/>
          <Route path="/course/creative-art" element={<CreativeArt />}/>
=======
          <Route path="/course/creative-art" element={<CreativeArt />}/>
          <Route path="/course/digital-art" element={<DigitalArt />}/>
          <Route path="/course/graphic-design" element={<GraphicDesign />}/>
          <Route path="/course/anime-manga" element={<AnimeManga />}/>
          <Route path="/course/child-programs" element={<ChildPrograms />}/>
          
          
>>>>>>> Nathan
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
