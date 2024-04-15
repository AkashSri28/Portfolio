// Header.js

import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
         <a href="#about">
            <div className="logo">
                <img src="logo2.png" alt="Logo" />
                <h1>Akash Srivastava</h1>
            </div>
         </a>
      <nav className="navigation">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
