import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
        <div className="container">
            <h2>Contact Me</h2>
            <div className="contact-form">
                <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
            <div className="social-media">
                <h3>Connect with Me</h3>
                <div className="social-icons">
                {/* Add social media icons/buttons with links */}
                <a href="https://linkedin.com"><img src="linkedin.png" alt="LinkedIn" /></a>
                <a href="https://twitter.com"><img src="twitter.png" alt="Twitter" /></a>
                {/* Add more social media icons/buttons as needed */}
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default Contact;
