import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';  // Import the specific CSS for this page

const Booking = () => {
  const location = useLocation();
  const { destination } = location.state || {};

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfTravel, setDateOfTravel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${fullName} to visit ${destination?.name}`);
  };

  return (
    <div className="booking-page">  {/* Apply styles only inside this container */}
      <div className="booking-container">
        <h2>Book Your Trip to {destination?.name}</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-field">
            <label htmlFor="name">Full Name:</label>
            <input 
              type="text" 
              id="name" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date of Travel:</label>
            <input 
              type="date" 
              id="date" 
              value={dateOfTravel} 
              onChange={(e) => setDateOfTravel(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
