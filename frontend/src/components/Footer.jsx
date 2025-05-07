import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            
            {/* Left Section */}
            <div className="footer-left">
                <img src={assets.logo} alt="Hospital Logo" />
                <p>
                    Welcome to our hospital, where we prioritize your health and well-being.
                    Our dedicated team of professionals is here to provide exceptional care and support for all your medical needs.
                </p>
            </div>

            {/* Middle Section */}
            <div className="footer-middle">
               <p>COMPANY</p>
               <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul> 
            </div>

            {/* Right Section */}
            <div className="footer-right">
                <p>SUPPORT</p>
                <ul>
                    <li>FAQ</li>
                    <li>Help Center</li>
                    <li>Feedback</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <hr />
            <p>© 2023 Health Care. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
