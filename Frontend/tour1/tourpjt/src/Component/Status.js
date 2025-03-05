import React, { useState } from 'react';
import './Status.css';

const Status = () => {
  const [viewMessage, setViewMessage] = useState('');
  const [cancelMessage, setCancelMessage] = useState('');

  const handleViewAppointment = () => {
    
    const appointmentDate = new Date(2025, 3, 25); // 25th February 2025
    const formattedDate = `${appointmentDate.getDate()}.${appointmentDate.getMonth() + 1}.${appointmentDate.getFullYear()}`;
  
    setCancelMessage(''); 
  };

  const handleCancelAppointment = () => {
   
    setCancelMessage(" Cancelled successfully.");
    setViewMessage(''); 
  };

  return (
    <div className="status-container">
      <div className="status-box">
        <button onClick={handleViewAppointment} className="status-button">View </button>
        {viewMessage && <div className="status-message">{viewMessage}</div>}  {/* Show message below the button */}
        
        <button onClick={handleCancelAppointment} className="status-button">Cancel </button>
        {cancelMessage && <div className="status-message">{cancelMessage}</div>}  {/* Show message below the button */}
      </div>
    </div>
  );
};

export default Status;
