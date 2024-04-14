import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Company ABC',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis leo, ornare sed vestibulum id, ullamcorper sit amet libero.',
      image: 'john-doe.jpg' // Path to the image
    },
    {
      name: 'Jane Smith',
      role: 'Designer, Company XYZ',
      content: 'Vestibulum fermentum elit eget massa volutpat, sed rhoncus sapien luctus. Proin quis nunc libero.',
      image: 'jane-smith.jpg' // Path to the image
    },
    // Add more testimonials as needed
  ];

  return (
    <section id='testimonials' className='testimonials'>
        <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                <Testimonial
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    image={testimonial.image}
                />
                ))}
            </div>
        </div>
    </section>
    
  );
};

export default Testimonials;
