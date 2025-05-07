import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Assume true for testing
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <img onClick={() => navigate('/')} className='navbar-logo' src={assets.logo} alt="Logo" />

      <div className='navbar-links'>
        <ul>
          <NavLink to="/"><li>HOME <hr /></li></NavLink>
          <NavLink to="/doctors"><li>OUR DOCTORS <hr /></li></NavLink>
          <NavLink to="/about"><li>ABOUT <hr /></li></NavLink>
          <NavLink to="/contact"><li>CONTACT <hr /></li></NavLink>
        </ul>
      </div>

      <div className='navbar-button'>
        {token ? (
          <div className='profile-container' onClick={toggleMenu}>
            <img className='profile-pic' src={assets.profile_pic} alt="Profile" />
            <img className='dropdown-icon' src={assets.dropdown_icon} alt="Dropdown" />
            {showMenu && (
              <div className='dropdown-menu'>
                <p onClick={() => navigate('/my-profile')}>My Profile</p>
                <p onClick={() => navigate('/my-appointments')}>My Appointments</p>
                <p onClick={() => setToken(false)}>Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')}>Create Account</button>
        )}

        <img className='menu-icon' onClick={() => setMobileMenu(true)} src={assets.menu_icon} alt="Menu" />
      </div>

      {mobileMenu && (
        <div className='mobile-menu'>
          <div className='mobile-menu-top'>
            <img src={assets.logo} alt="Logo" onClick={() => navigate('/')} />
            <img src={assets.cross_icon} alt="Close" onClick={() => setMobileMenu(false)} />
          </div>
          <ul>
            <NavLink onClick={() => setMobileMenu(false)} to="/"><li>HOME</li></NavLink>
            <NavLink onClick={() => setMobileMenu(false)} to="/doctors"><li>OUR DOCTORS</li></NavLink>
            <NavLink onClick={() => setMobileMenu(false)} to="/about"><li>ABOUT</li></NavLink>
            <NavLink onClick={() => setMobileMenu(false)} to="/contact"><li>CONTACT</li></NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
