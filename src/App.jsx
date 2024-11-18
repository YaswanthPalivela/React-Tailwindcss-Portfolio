import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experiance from "./Pages/Experiance";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="bg-black text-white h-full w-full font-Poppins pb-10">
      <Home />
      <About />
      <Experiance />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
