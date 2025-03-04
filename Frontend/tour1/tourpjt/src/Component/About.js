import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p className="description">
          Welcome to our Tourism Management System. Our platform aims to make travel planning easier, 
          more efficient, and enjoyable. We provide a comprehensive solution to explore destinations, 
          book tickets, plan your trips, and much more.
        </p>
        <div className="about-us-details">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower travelers with the most up-to-date information and seamless booking 
            experiences. We strive to provide a user-friendly platform that offers personalized recommendations 
            to help you plan your dream vacations.
          </p>
        </div>
        
        <div className="about-us-details">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to reach out to us!</p>
          <p>Email: support@tourism-system.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
