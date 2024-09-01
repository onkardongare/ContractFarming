import React from 'react';
import '../styles/registerationbuttons.css';

function RegistrationButtons() {
  return (
    <div className="registration-buttons">
      <button className="btn btn-farmer">Register as a Farmer</button>
      <span className="or">or</span>
      <button className="btn btn-buyer">Register as a Buyer/Business</button>
    </div>
  );
}

export default RegistrationButtons;
