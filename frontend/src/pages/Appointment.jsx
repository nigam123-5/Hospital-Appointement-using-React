import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import './Appointment.css'
import RelatedDoctor from '../components/RelatedDoctor'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  useEffect(() => {
    const doctor = doctors.find((doc) => doc._id === docId)
    setDocInfo(doctor)
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  const getAvailableSlots = async () => {
    setDocSlots([])

    let today = new Date()
    let allSlots = []

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true  // 👈 Ensures 12-hour format
        })
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      allSlots.push(timeSlots)
    }

    setDocSlots(allSlots)
  }

  if (!docInfo) {
    return <h1 className="loading-text">Loading...</h1>
  }

  return (
    <div className="appointment-container">
      <div className="doctor-header">
        <div className="doctor-image">
          <img src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className="doctor-info">
          <p className="doctor-info-name">
            {docInfo.name}
            <img src={assets.verified_icon} alt="Verified" className="verified-icon" />
          </p>

          <div className="doctor-info-sub">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="experience-button">{docInfo.experience}</button>
          </div>

          <div className="about-section">
            <p className="about-section-title">
              About
              <img src={assets.info_icon} alt="Info" className="info-icon" />
            </p>
            <p className="about-description">{docInfo.about}</p>
          </div>

          <p className="fee">Appointment Fee: <span>{currencySymbol} {docInfo.fees}</span></p>
        </div>
      </div>

      <div className="booking-section">
        <p className="section-title">Booking Slots</p>
        <div className="slots-grid">
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div
                key={index}
                className={`slot-day ${slotIndex === index ? 'active' : ''}`}
                onClick={() => {
                  setSlotIndex(index)
                  setSlotTime('')
                }}
              >
                <p className="slot-day-name">{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p className="slot-day-date">{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>

        {/* Time Slots */}
        {docSlots[slotIndex] && (
          <div className="time-slots">
            {docSlots[slotIndex].map((slot, i) => (
              <button
                key={i}
                className={`time-slot-button ${slotTime === slot.time ? 'selected' : ''}`}
                onClick={() => setSlotTime(slot.time)}
              >
                {slot.time}
              </button>
            ))}
          </div>
        )}

        <button className='btn'>Book an appointment  </button>
      </div>

      {/* {--- Related Doctors Section ---} */}
      <RelatedDoctor doctorId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment
