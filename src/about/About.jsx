import Video from "./1.mp4";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";'
import Img from "./1.gif";
import "animate.css";

import "./about.css";

const About = () => {
  return (
    <div id="About">
      <h1 className="h1 animate__animated animate__backInDown">About Us</h1>
      <div className="a111">
      <div className="a112">
        <p className=" animate__animated animate__jello">
          I am a versatile professional proficient in both data science and
          frontend development. With expertise in Python programming and a knack
          for extracting actionable insights, I excel in creating data-driven
          solutions. Specializing in React, I design seamless and engaging user
          interfaces that enhance the overall user experience. 
        </p>
      </div>
      {/* <div className="a113">
        <img src={Img} alt="" />
      </div> */}
      <div className="a112 a114"><p> My passion lies
          in bridging the gap between analytics and frontend development,
          ensuring that technical solutions are not only functional but also
          user-friendly. Let's collaborate to bring innovation to projects.</p></div>
      </div>
    </div>
    // </div>
  );
};

export default About;
