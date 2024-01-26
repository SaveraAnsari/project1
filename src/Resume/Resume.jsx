// Resume.js

import React from 'react';
import './resume.css';

const Resume = () => {
    return (
        <>
        <section id="resume" className="resume-section">
          <div className="container">
            <div className="section-title">
              
              <h2 className='shad'> Resume</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Savera Ansari</h4>
                  <p>
                    <em>
                        Proficient Data Scientist and React-focused Front-End Developer, skilled in Python, blending analytical prowess with creative UI/UX solutions for comprehensive project success.
                    </em>
                  </p>
                  <ul>
                    <li>Karachi, Pakistan</li>
                    <li>+92 3200202682</li>
                    <li>misssaveraansari@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor in Computer Science </h4>
                  <h5>2018 - 2022</h5>
                  <p>
                    <em>Muhammad Ali Jinnah University, Pakistan</em>
                  </p>
                  <p>"Holder of a Bachelor's degree in Computer Science, equipped with a solid foundation in theoretical and practical aspects, ready to innovate and contribute to tech landscape."</p>
                  </div>
                  <h3 className="resume-title">Achievements</h3>
                  <div className="resume-item">
                    <h4>President List Awards </h4>
                    <h5>2020 - 2021</h5>
                    <p>
                      <em>Muhammad Ali Jinnah University, Pakistan</em>
                    </p>
                    <h4>Deans List Awards </h4>
                    <h5>2021 - 2022</h5>
                    <p>
                      <em>Muhammad Ali Jinnah University, Pakistan</em>
                    </p>
                    <h4>Highest GPA Awards </h4>
                    <h5>2022 - 2022</h5>
                    <p>
                      <em>Muhammad Ali Jinnah University, Pakistan</em>
                    </p>
      
                </div>

            </div>

            <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior Python Instructor</h4>
                  <h5>2022 - 2023</h5>
                  <p>
                    <em>Aptech </em>
                  </p>
                  <ul>
                    <li>Certainly! Here's a one-liner bio for a Senior Python Instructor:

"Dedicated Senior Python Instructor passionate about cultivating a new generation of proficient programmers, combining hands-on experience with innovative teaching methods to empower students in mastering the art and science of Python development.</li>
                    
                  </ul>
                </div>
                <h3 className="resume-title">Certifications</h3>
                <div className="resume-item">
                    <h4>Data Analytics</h4>
                  <h5>2024 - Present</h5>
                  <p>
                    <em>Google Professional Certifications </em>
                  </p>
                
                  <h4>React Development</h4>
                  <h5>2024 - Present</h5>
                  <p>
                    <em>Bano Qabil </em>
                  </p>
                  
                  <h4>Artificial Intelligence</h4>
                  <h5>2021</h5>
                  <p>
                    <em>Samsung Innovation Campus </em>
                  </p>
                  
                  <h4>Advanced Python Development
                  </h4>
                  <h5>2023</h5>
                  <p>
                    <em>NAVTTC </em>
                  </p>
                  
                  <h4>DataScience Training</h4>
                  <h5>2023 - Present</h5>
                  <p>
                    <em>DigiTech Synergy </em>
                  </p>
                </div>
                </div>
            </div>
            </div>
        {/* </div> */}
            </section>
        </>
    )
}

export default Resume;
