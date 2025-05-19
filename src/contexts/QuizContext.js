import React, { createContext, useState, useContext } from 'react';
import { flattenedQuestions, quizData } from '../data/questions';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [componentScores, setComponentScores] = useState({});

  const totalQuestions = flattenedQuestions.length;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    const newComponentScores = {};
    let totalScore = 0;

    // Calculate score for each component
    quizData.components.forEach(component => {
      let componentScore = 0;
      
      component.questions.forEach(question => {
        // If question was answered Yes (1), add its weighted value
        const answer = answers[question.id] === true ? 1 : 0;
        componentScore += answer * question.weight;
      });
      
      // Store the individual component score (as percentage)
      newComponentScores[component.id] = {
        name: component.name,
        score: componentScore * 100,
        weight: component.weight
      };
      
      // Add to total score considering component weight
      totalScore += componentScore * component.weight;
    });

    // Convert to 0-100 scale
    const finalScore = totalScore * 100;
    
    setComponentScores(newComponentScores);
    setScore(finalScore);
    
    return { finalScore, newComponentScores };
  };

  const value = {
    currentQuestionIndex,
    totalQuestions,
    currentQuestion: flattenedQuestions[currentQuestionIndex],
    answers,
    handleAnswer,
    nextQuestion,
    prevQuestion,
    calculateScore,
    score,
    componentScores,
    progress: ((currentQuestionIndex + 1) / totalQuestions) * 100
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => useContext(QuizContext);