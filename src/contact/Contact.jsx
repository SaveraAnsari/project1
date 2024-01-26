// Contact.js

import React, { useState } from "react";
import "./contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <div className="con2" id="Contact">
      <h1 className="con">Contact Us</h1>
    <div className="p1">
      <div class="card1">
        <p class="hhh3">
          <div className="info-box">
            <i className="bx bi-share"></i>
            <h3>Social Profiles</h3>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </p>
      </div>
      <div class="card1">
        <p class="hhh3">
        <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bi-envelope"></i>
                  <h3>Email Me</h3>
                  <p>misssaveraansari<br/>@gmail.com</p>
                </div>
              </div>
        </p>
      </div>
      <div class="card1">
        <p class="hhh3">
        <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bi-telephone"></i>
                  <h3>Call Me</h3>
                  <p>+92 3200202682</p>
                </div>
              </div>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
{
  /* <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <span>Contact Me</span>
          <h2>Contact Me</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bi-share"></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bi-envelope"></i>
                  <h3>Email Me</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bi-telephone"></i>
                  <h3>Call Me</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section> */
}
