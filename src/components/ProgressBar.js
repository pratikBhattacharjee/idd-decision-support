import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, currentQuestion, totalQuestions }) => {
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>3-5 minutes to complete</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;