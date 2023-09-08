import React, { useState } from 'react';
import './alert.css'; // Create a CSS file for styling

const Alert = ({ message, type }) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    showAlert && (
      <div className={`alert ${type}`}>
        
        <p>"Error"{message}</p>
        <button onClick={closeAlert}>X</button>
      </div>
    )
  );
};

export default Alert;
