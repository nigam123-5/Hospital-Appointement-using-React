import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// Removed unused import
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const RelatedDoctor = ({speciality, docId}) => {
const { doctors } = useContext(AppContext)
const navigate = useNavigate()

const [relDoc, setRelDocs] = useState([])

useEffect(() => {
  if (doctors.length > 0 && speciality) {
    const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
    setRelDocs(doctorsData)
  }
}, [doctors, speciality, docId])


  return (
    <div className="top-doctors">
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>

      <div className="top-doctor-list">
        {relDoc.slice(0, 5).map((item) => (
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
  )
}

export default RelatedDoctor
