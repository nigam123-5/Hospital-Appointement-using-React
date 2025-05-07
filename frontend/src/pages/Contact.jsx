import React from 'react';
import { assets } from '../assets/assets';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <p>CONTACT <span>US</span></p>
      </div>

      <div className="contact-details">
        <img src={assets.contact_image} alt="Contact" />

        <div className="contact-info">
          <p>OUR CLINIC</p>
          <p>Lucknow, Uttar Pradesh</p>
          <p>+91 XXXXXXXXXX</p>
          <p><strong>Careers at Health Care</strong></p>
          <p>Learn more about our teams and job openings.</p>
          <button className='btn'> Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
