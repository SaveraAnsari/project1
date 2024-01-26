// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Banner from "./banner/Banner";
import About from "./about/About";
import Contact from "./contact/Contact";
import Resume from "./Resume/Resume";
import Project from "./project/Project";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <Banner />
      <About />
      <Project/>
      <Resume />
      <Contact />
    </>
  );
}

export default App;
