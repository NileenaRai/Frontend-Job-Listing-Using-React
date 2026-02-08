import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-icon">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#026873" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="16 10 11 15 8 12"></polyline>
        </svg>
      </div>

      <h2 className="success-heading">Application submitted successfully!</h2>
      <p className="success-subheading">Thank you for applying!</p>

      {/* Navigates to the first job listing page */}
      <button className="ok-btn" onClick={() => navigate('/')}>
        Ok
      </button>
    </div>
  );
};

export default SuccessPage;