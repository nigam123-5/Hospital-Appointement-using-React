import React from 'react';
import { assets } from '../assets/assets';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      {/* Left Side */}
      <div className="header-left">
        <p className="header-title">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="header-description">
          <img src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br />
            Schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="header-button">
          Book Appointment <img src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right Side */}
      <div className="header-right">
        <img src={assets.header_img} alt="Doctor" />
      </div>
    </div>
  );
};

export default Header;
