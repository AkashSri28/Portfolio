// Portfolio.js

import React from 'react';
import Project from '../projects/Project';

const Portfolio = () => {
  // Define project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      demoLink: 'https://example.com/demo1',
      codeLink: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      demoLink: 'https://example.com/demo2',
      codeLink: 'https://github.com/example/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="portfolio">
         <div className="container">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                />
                ))}
            </div>
        </div>
    </section>
   
  );
};

export default Portfolio;
