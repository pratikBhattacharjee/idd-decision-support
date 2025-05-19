import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import './App.css';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  return (
    <Router>
      <QuizProvider>
      <div className="app">
        <header className="app-header">
          <h1>IDD Decision System</h1>
          <p className="author">Developed by Joshua Amo Larbi</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/quiz" element={<QuizScreen />} />
            <Route path="/result" element={<ResultScreen />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Joshua Amo Larbi - IDD Decision System</p>
        </footer>
      </div>
      </QuizProvider>
    </Router>
  );
}

export default App;
