import Header from "./components/Header";
import About from "./components/about";
import Slideshow from "./components/slideshow";
import React from "react";

const App = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Slideshow></Slideshow>
    </div>
  );
};

export default App;
