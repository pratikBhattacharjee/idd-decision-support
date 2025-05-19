import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="home-content">
          <h1>IDD Decision Support System</h1>
          <h2>Integrated Design Delivery Assessment</h2>
          
          <div className="introduction">
            <p>
              Welcome to the IDD Decision System, developed by Joshua Larbi.
            </p>
            <p>
              This assessment will help you determine if an Integrated Design Delivery (IDD) 
              approach is suitable for your construction project.
            </p>
            <div className="idd-definition">
              <h3>What is IDD?</h3>
              <p>
                IDD is a project lifecycle delivery approach that employs Design Thinking (DT) 
                to seamlessly integrate work processes and stakeholders.
              </p>
            </div>
            <div className="assessment-info">
              <h3>About this Assessment</h3>
              <p>
                By answering a series of questions about your project, we'll provide:
              </p>
              <ul>
                <li>A comprehensive score to evaluate IDD feasibility</li>
                <li>Personalized recommendations based on your responses</li>
                <li>Clear guidance on next steps for your project</li>
              </ul>
            </div>
          </div>
          
          <button className="start-button" onClick={handleStartQuiz}>
            Start Assessment
          </button>
        </div>
        
        <div className="home-image-container">
          <img 
            src="/construction-workers.jpg" 
            alt="Construction workers reviewing plans" 
            className="home-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;