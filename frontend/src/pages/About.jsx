import React from 'react';
import './About.css';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="about-container">
      {/* About Heading */}
      <div className="about-heading">
        <p>ABOUT <span>US</span></p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <img src={assets.about_image} alt="About Us" className="about-image" />
        <div className="about-text">
          <p>
            Welcome to Healthcare Medical Clinic, your trusted partner in managing your healthcare
            needs conveniently and efficiently. We understand the challenges individuals face when it
            comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Our clinic is committed to excellence in healthcare technology. We continuously strive
            to enhance our platform, integrating the latest advancements to improve user experience
            and deliver superior service. Whether you're booking your first appointment or managing
            ongoing care, we're here to support you every step of the way.
          </p>
          <b>Our Vision</b>
          <p>
            Our vision is to create a seamless healthcare experience for every user. We aim to bridge
            the gap between patients and healthcare providers, making it easier for you to access
            the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-heading">
        <p>WHY <span>CHOOSE US</span></p>
      </div>

      <div className="why-content">
        <div className="why-card">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className="why-card">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="why-card">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        
        </div>
      </div>
    </div>
  );
};

export default About;
