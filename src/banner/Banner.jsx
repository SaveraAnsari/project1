import React, { useEffect } from "react";
import "./banner.css";
import Video from "./bg.mp4";
import "animate.css";
import Typed from "typed.js";
import Logo from "./Savera Ansari-logos/Savera Ansari-logos_white.png";
// import girl from './girl.png';
import About from '../about/About'
// import Navbar from "../Navbar/Navbar";

const Banner = () => {
  useEffect(() => {
    const typedElement = document.querySelector(".typed");

    if (typedElement) {
      const typedStrings = typedElement
        .getAttribute("data-typed-items")
        .split(",");

      const typedInstance = new Typed(".typed", {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });

      // Cleanup function to destroy Typed instance on component unmount
      return () => {
        if (typedInstance && typedInstance.destroy) {
          typedInstance.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <section id="hero">
        <div className="logo-div">
          <img src={Logo} alt="logo-img" className="logo-img" />
        </div>
        <div className="container">
          <video src={Video} autoPlay loop muted></video>

          <h1 className="animate__animated animate__backInLeft a1">
            Savera Ansari<span>!</span>{" "}
            <div className="animate__animated animate__backInUp">
              I'm{" "}
              <span
                className="typed"
                data-typed-items="Designer, Developer, Data Scientist, "
              ></span>
            </div>
          </h1>
        </div>
        <div className="btn01">
          <div className="btn1">
            <a href="#About">
              {" "}
              <button className="btn">About us</button>
            </a>
          </div>
          <div className="btn1">
            <a href="#resume">
              <button className="btn">Resume</button>
            </a>
          </div>

          <div className="btn1">
            <a href="#Project">
              <button className="btn">Portfolio</button>
            </a>
          </div>
          <div className="btn1">
            <a href="#Contact">
              {" "}
              <button className="btn">Contact us</button>
            </a>
          </div>
        </div>
         {/* <About/> */}
      </section>
     
  </>
  );
};

export default Banner;
