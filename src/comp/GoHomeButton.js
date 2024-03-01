import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoHomeButton = () => {
  const navigate = useNavigate();

  const handleGoHomeClick = () => {
    navigate('/');
  };

  return (
    <button className="go-home-button" onClick={handleGoHomeClick}>
      Go Home
    </button>
  );
};

export default GoHomeButton;
