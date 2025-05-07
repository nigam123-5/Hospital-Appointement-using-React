import React, { useContext } from 'react';
import './TopDoctors.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="top-doctors">
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>

      <div className="top-doctor-list">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item.id} // Use unique id for key instead of index
            className="doctor-card"
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }} // Navigate to appointment page
            style={{ animationDelay: `${0.2 * item.id}s` }} // Smooth animation delay
          >
            <img src={item.image} alt={item.name} className="doctor-img" />
            <div className="availability">Available</div>
            <h3>{item.name}</h3>
            <p>{item.speciality}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/doctors')}>More</button> {/* Navigate to 'doctors' page */}
    </div>
  );
};

export default TopDoctors;
