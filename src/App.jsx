import Header from "./components/Header";
import About from "./components/about";
import Slideshow from "./components/slideshow";
import Contact from "./components/contact";
// import Cards from "./components/Cards/Cards";
import React from "react";

const App = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Slideshow></Slideshow>
      <Contact></Contact>
    </div>
  );
};

export default App;
