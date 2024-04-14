import React from 'react';
import './Skills.css';

const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Responsive Web Design',
    'RESTful APIs',
    'Git',
    'GitHub',
    'Webpack',
    'Babel',
    'JSON',
    'AJAX',
    'SQL',
    'Firebase',
    'GraphQL',
    'Testing (Jest, Mocha, Chai)',
    'UI/UX Design',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Figma',
    'Project Management',
  ];
  

const Skills = () => {
  return (
    <section id="skills" className="skills">
         <div className='container'>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </section>
   
  );
};

export default Skills;
