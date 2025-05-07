import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './MyAppointment.css'; 

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="appointments-container">
      <h2 className="appointments-title">My Appointments</h2>

      <div className="appointments-list">
        {doctors.slice(0, 3).map((item, index) => (
          <div className="appointment-card animate-fade-in" key={index}>
            <div className="doctor-image">
              <img src={item.image} alt="Doctor" />
            </div>
            <div className="doctor-details">
              <p className="doctor-name">{item.name}</p>
              <p className="doctor-speciality">{item.speciality}</p>
              <p className="address-title">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className="appointment-time">
                <span>Date & Time:</span> 04, May, 2025 | 8:30 PM
              </p>
              <div className="appointment-buttons">
                <button className="btn pay">Pay Online</button>
                <button className="btn cancel">Cancel Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
