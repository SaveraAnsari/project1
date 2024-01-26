// Back.jsx
import React, { useState, useEffect } from 'react';
import "./back.css";

const Back = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 300; // Adjust this value based on when you want the button to appear

    setIsVisible(scrollY > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`back-to-top-btn button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <div className="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <div className="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <svg
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  );
};

export default Back;
