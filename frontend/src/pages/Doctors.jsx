import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './Doctors.css';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  if (!doctors || doctors.length === 0) {
    return <h1>Loading...</h1>;
  }

  const specialties = [
    'General Physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  return (
    <div className="doctor-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Browse through the doctors specialist.</h3>
        <button className="filter-btn" onClick={() => setShowFilter(prev => !prev)}>
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>

        {showFilter && (
          <div className="sidebar-specialties">
            {specialties.map((item, index) => (
              <p
                key={index}
                onClick={() => navigate(`/doctors/${item}`)}
                className={item === speciality ? 'active-specialty' : ''}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Doctor Cards */}
      <div className="doctor-cards grid-cols-auto">
        {filterDoc.map((item) => (
          <Link to={`/appointment/${item._id}`} key={item._id}>
            <div
              className="doctor-card"
              style={{ animationDelay: `${0.2 * item._id}s` }}
            >
              <img src={item.image} alt={item.name} className="doctor-img" />
              <div className="availability">Available</div>
              <h3>{item.name}</h3>
              <p>{item.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
