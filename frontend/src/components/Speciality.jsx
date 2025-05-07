import React from 'react';
import { assets, specialityData } from '../assets/assets';
import './Speciality.css';
import { Link } from 'react-router-dom';

const Speciality = () => {
  return (
    <div id="speciality">
      <h1 className="speciality-title">Find by Speciality</h1>
      <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div>
        {specialityData.map((item) => (
          <Link key={item.speciality} onClick={() => window.scrollTo(0, 0)} to={`/doctors/${item.speciality}`}>
            <img src={item.image} alt={item.speciality} className="speciality-img" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
