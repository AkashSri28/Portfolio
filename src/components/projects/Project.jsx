// Project.js

import React from 'react';
import './Project.css'; // Import CSS file for styling

const Project = ({ title, description, demoLink, codeLink }) => {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
  );
};

export default Project;
