import React, { useEffect, useState } from 'react';
import './alert.css'; // Create a CSS file for styling

const Alert = ({ message, type }) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };
  useEffect(() => {
    setTimeout(() => closeAlert(), 4000);
  })

  return (
    showAlert && (
      <div className='alert_section'>
      <div className={`alert ${type}`}>
        
        <p>{message}</p>
        <button onClick={closeAlert}>X</button>
      </div>
      </div>
    )
  );
};

export default Alert;
