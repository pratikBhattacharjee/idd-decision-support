import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import './ResultScreen.css';

const ResultScreen = () => {
  const navigate = useNavigate();
  const { score, answers, componentScores } = useQuiz();
  const [recommendations, setRecommendations] = useState([]);
  const [scoreCategory, setScoreCategory] = useState('');
  const [scoreColor, setScoreColor] = useState('');
  const [scoreMessage, setScoreMessage] = useState('');
  
  useEffect(() => {
    if (score === null) {
      navigate('/quiz');
      return;
    }

    // Determine score category and message
    if (score < 40) {
      setScoreCategory('Unsuitable for IDD');
      setScoreColor('#e53935'); // red
      setScoreMessage('Based on your responses, your project is not currently suitable for an Integrated Design Delivery approach.');
    } else if (score >= 40 && score < 60) {
      setScoreCategory('Requires Modification');
      setScoreColor('#ff9800'); // orange
      setScoreMessage('Your project has potential for IDD implementation, but some modifications are needed to ensure success.');
    } else if (score >= 60 && score < 80) {
      setScoreCategory('Suitable with Caution');
      setScoreColor('#4caf50'); // green
      setScoreMessage('Your project is suitable for IDD implementation with some caution in specific areas.');
    } else {
      setScoreCategory('Highly Suitable');
      setScoreColor('#2e7d32'); // dark green
      setScoreMessage('Your project is highly suitable for Integrated Design Delivery. You have the necessary conditions for successful implementation.');
    }

    // Get recommendations for "No" answers
    import('../data/questions').then(({ flattenedQuestions }) => {
      const newRecommendations = flattenedQuestions
        .filter(question => answers[question.id] === false) // Get only "No" answers
        .map(question => ({
          id: question.id,
          text: question.text,
          recommendation: question.recommendation,
          componentName: question.componentName
        }));
      
      setRecommendations(newRecommendations);
    });
  }, [score, answers, navigate]);

  const handleRetakeQuiz = () => {
    navigate('/');
  };

  const handlePrintResults = () => {
    window.print();
  };

  return (
    <div className="result-container">
      <div className="result-header">
        <h2>Your IDD Suitability Assessment Results</h2>
        <p className="result-date">Generated on: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="score-section">
        <div className="score-display">
          <div className="score-circle" style={{ backgroundColor: scoreColor }}>
            <span className="score-value">{score ? Math.round(score) : 0}%</span>
          </div>
          <div className="score-info">
            <h3 className="score-category" style={{ color: scoreColor }}>{scoreCategory}</h3>
            <p className="score-message">{scoreMessage}</p>
          </div>
        </div>

        <div className="score-breakdown">
          <h3>Component Breakdown</h3>
          <div className="component-scores">
            {Object.keys(componentScores).map(key => (
              <div key={key} className="component-score-item">
                <div className="component-name">{componentScores[key].name}</div>
                <div className="component-progress">
                  <div 
                    className="component-progress-fill" 
                    style={{ 
                      width: `${Math.min(100, Math.round(componentScores[key].score))}%`,
                      backgroundColor: getColorForScore(componentScores[key].score)
                    }}
                  />
                </div>
                <div className="component-score-value">{Math.round(componentScores[key].score)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {(recommendations.length > 0 && score >= 40 && score < 80) && (
        <div className="recommendations-section">
          <h3>Recommendations for Improvement</h3>
          <p className="recommendations-intro">
            Based on your responses, we've identified the following areas for improvement:
          </p>
          <div className="recommendations-list">
            {recommendations.map(item => (
              <div key={item.id} className="recommendation-item">
                <div className="recommendation-question">
                  <div className="component-tag">{item.componentName}</div>
                  <p>{item.text}</p>
                </div>
                <div className="recommendation-text">
                  <h4>Recommendation:</h4>
                  <p>{item.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="result-actions">
        <button className="action-button retake" onClick={handleRetakeQuiz}>
          Retake Assessment
        </button>
        <button className="action-button print" onClick={handlePrintResults}>
          Print Results
        </button>
      </div>
    </div>
  );
};

// Helper function to get color based on score
const getColorForScore = (score) => {
  if (score < 40) return '#e53935'; // red
  if (score < 60) return '#ff9800'; // orange
  if (score < 80) return '#4caf50'; // green
  return '#2e7d32'; // dark green
};

export default ResultScreen;