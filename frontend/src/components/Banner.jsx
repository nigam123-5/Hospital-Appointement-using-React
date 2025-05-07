import React from 'react'
import { assets } from '../assets/assets'
import './Banner.css'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

const navigate = useNavigate()

  return (
    <div className="banner">
      {/* Left */}
      <div className="banner-left">
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}}>Create account</button>
      </div>

      {/* Right */}
      <div className="banner-right">
        <img src={assets.appointment_img} alt="Banner" />
      </div>
    </div>
  )
}

export default Banner
