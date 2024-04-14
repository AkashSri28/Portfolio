import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className='experience'>
        <div className="container">
            <h2>Experience</h2>
            <div className="work-experience">
                <h3>Work Experience</h3>
                <div className="job">
                <h4>Job Title</h4>
                <p>Company Name | Location</p>
                <p>Date Range</p>
                <ul>
                    <li>Description of responsibilities and achievements</li>
                    {/* Add more list items for additional details */}
                </ul>
                </div>
                {/* Add more job divs for additional work experiences */}
            </div>
            <div className="education">
                <h3>Education</h3>
                <div className="degree">
                <h4>Degree Title</h4>
                <p>Institution Name | Location</p>
                <p>Date Range</p>
                {/* Add any additional details */}
                </div>
                {/* Add more degree divs for additional education details */}
            </div>
            <div className="certifications">
                <h3>Certifications</h3>
                <div className="certification">
                <h4>Certification Title</h4>
                <p>Issuing Organization</p>
                <p>Date Earned</p>
                {/* Add any additional details */}
                </div>
                {/* Add more certification divs for additional certifications */}
            </div>
        </div>
    </section>
    
  );
};

export default Experience;
