import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Skill from "./pages/Skill";
import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Languages from "./pages/Languages";
import Work from "./pages/Work";

const App = () => {
  return (
    <div className="flex items-center justify-center bg-radial from-cyan-950 to-black font-['Poppins'] max-h-screen max-w-screen overflow-hidden scroll-smooth">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/work" element={<Work />} />
        <Route path="/education" element={<Education />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </div>
    
  );
};

export default App;
