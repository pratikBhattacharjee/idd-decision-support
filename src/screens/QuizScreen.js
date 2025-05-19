import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import './QuizScreen.css';

const QuizScreen = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    totalQuestions, 
    currentQuestion,
    answers,
    handleAnswer,
    nextQuestion,
    prevQuestion,
    calculateScore,
    progress
  } = useQuiz();

  const handleNext = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      // Last question, calculate score and navigate to results
      calculateScore();
      navigate('/result');
    } else {
      nextQuestion();
    }
  };

  const isAnswered = currentQuestion && answers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="quiz-container">
      <ProgressBar 
        progress={progress} 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={totalQuestions} 
      />
      
      {currentQuestion && (
        <QuestionCard 
          question={currentQuestion} 
          onAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestion.id]}
        />
      )}
      
      <div className="quiz-navigation">
        <button 
          className="nav-button back"
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        
        <button 
          className={`nav-button next ${isLastQuestion ? 'submit' : ''}`}
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;