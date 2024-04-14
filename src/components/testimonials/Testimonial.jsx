import React from 'react';
import './Testimonial.css';

const Testimonial = ({ name, role, content, image }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-content">
        <p className="testimonial-text">{content}</p>
        <p className="testimonial-author">{name}</p>
        <p className="testimonial-role">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;
