import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import TestScreen from './components/TestScreen';
import StudyScreen from './components/StudyScreen';
import ReviewScreen from './components/ReviewScreen';
import AboutScreen from './components/AboutScreen';
import { ArrowLeft } from 'lucide-react';
import { theme } from './styles/theme';

function App() {
  // State for the current view
  const [view, setView] = useState('home');
  // State for the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State for user answers
  const [userAnswers, setUserAnswers] = useState({});
  // State for whether the test is complete
  const [testComplete, setTestComplete] = useState(false);
  // State for the current question set
  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);

  // Handle navigation back to home
  const handleBackToHome = () => {
    if (['test', 'review'].includes(view) && Object.keys(userAnswers).length > 0) {
      if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
        setView('home');
      }
    } else {
      setView('home');
    }
  };

  return (
    <div 
      className="max-w-md mx-auto h-screen flex flex-col"
      style={{ backgroundColor: theme.background }}
    >
      {/* Header for all screens except home */}
      {view !== 'home' && (
        <div 
          className="px-4 py-3 flex items-center"
          style={{ backgroundColor: theme.primary, color: 'white' }}
        >
          <button 
            onClick={handleBackToHome}
            className="mr-2"
          >
            <ArrowLeft size={20} color="white" />
          </button>
          <h1 className="text-lg font-semibold">
            {view === 'test' && 'Practice Test'}
            {view === 'review' && 'Review Answers'}
            {view === 'study' && 'Study Mode'}
            {view === 'about' && 'About'}
          </h1>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        {view === 'home' && (
          <HomeScreen 
            setView={setView} 
            setCurrentQuestionSet={setCurrentQuestionSet}
            setCurrentQuestion={setCurrentQuestion}
            setUserAnswers={setUserAnswers}
            setTestComplete={setTestComplete}
          />
        )}
        {view === 'test' && (
          <TestScreen 
            currentQuestionSet={currentQuestionSet}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            testComplete={testComplete}
            setTestComplete={setTestComplete}
            setView={setView}
          />
        )}
        {view === 'review' && (
          <ReviewScreen 
            currentQuestionSet={currentQuestionSet}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            userAnswers={userAnswers}
            setView={setView}
          />
        )}
        {view === 'study' && (
          <StudyScreen 
            currentQuestionSet={currentQuestionSet}
            setCurrentQuestionSet={setCurrentQuestionSet}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setView={setView}
          />
        )}
        {view === 'about' && (
          <AboutScreen 
            setView={setView}
          />
        )}
      </div>
    </div>
  );
}

export default App;
