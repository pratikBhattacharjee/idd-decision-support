import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="question-card">
      <div className="component-tag">{question.componentName}</div>
      <h3 className="question-text">{question.text}</h3>
      
      <div className="answer-options">
        <button 
          className={`answer-button ${selectedAnswer === true ? 'selected' : ''}`}
          onClick={() => onAnswer(question.id, true)}
        >
          Yes
        </button>
        <button 
          className={`answer-button ${selectedAnswer === false ? 'selected' : ''}`}
          onClick={() => onAnswer(question.id, false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;