// AboutMe.js

import React from 'react';
import './AboutMe.css'; // Import CSS file for styling

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a passionate and enthusiastic software developer with a strong
          interest in web development. I love to create user-friendly and
          visually appealing websites and applications. With a background in
          computer science and experience in front-end and back-end
          technologies, I am dedicated to delivering high-quality solutions.
        </p>
        <div className="personal-info">
          <div>
            <strong>Name:</strong> Akash Srivastava
          </div>
          <div>
            <strong>Email:</strong> sriakash.2009@gmail.com
          </div>
          <div>
            <strong>Location:</strong> Bangalore, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
