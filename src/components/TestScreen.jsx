import React, { useState } from 'react';
import questions from '../data/questions'; // Changed from import { questions } to import questions
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from './Button';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import { theme } from '../styles/theme';
import { calculateScore } from '../utils/helpers';

// Helper function to shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TestScreen = ({ 
  currentQuestionSet, 
  currentQuestion, 
  setCurrentQuestion, 
  userAnswers, 
  setUserAnswers, 
  testComplete, 
  setTestComplete,
  setCurrentQuestionSet,
  setView 
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: answer,
    });
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestion < currentQuestionSet.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setTestComplete(true);
    }
  };

  // Handle previous question
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };
  
  // If there are no questions, show loading
  if (currentQuestionSet.length === 0) {
    return <div className="p-4 text-center">Loading questions...</div>;
  }

  // If test is complete, show results
  if (testComplete) {
    const score = calculateScore(userAnswers, currentQuestionSet);

    return (
      <div className="flex flex-col items-center p-4 text-center">
        <h2 className="text-xl font-bold mb-4">Test Results</h2>
        <div 
          className="w-32 h-32 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
          style={{ backgroundColor: score.passed ? theme.primary : '#e74c3c' }}
        >
          {score.correct}/{score.total}
        </div>
        <p className="text-lg mb-2">
          {score.passed ? 'Congratulations! You passed!' : 'You did not pass this time.'}
        </p>
        <p className="mb-4">
          You answered {score.correct} out of {score.total} questions correctly ({score.percentage}%).
        </p>
        <div className="space-y-3 w-full">
          <Button
            onClick={() => {
              setView('review');
              setCurrentQuestion(0);
            }}
            variant="secondary"
            fullWidth
          >
            Review Answers
          </Button>
          <Button
            onClick={() => {
              setCurrentQuestionSet(shuffleArray(questions).slice(0, 40));
              setUserAnswers({});
              setCurrentQuestion(0);
              setTestComplete(false);
            }}
            variant="primary"
            fullWidth
          >
            Take New Test
          </Button>
          <Button
            onClick={() => setView('home')}
            variant="text"
            fullWidth
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  const question = currentQuestionSet[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];
  const isAnswered = userAnswer !== undefined;
  const progress = (Object.keys(userAnswers).length / currentQuestionSet.length) * 100;

  return (
    <div className="flex flex-col h-full">
      {/* Progress bar */}
      <ProgressBar progress={progress} />
      
      {/* Question content */}
      <div className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {currentQuestionSet.length}</span>
          <span className="text-sm text-gray-500">{Object.keys(userAnswers).length} answered</span>
        </div>
        
        <QuestionCard 
          question={question}
          userAnswer={userAnswer}
          showExplanation={showExplanation}
          handleAnswerSelect={handleAnswerSelect}
          correctAnswer={question.correctAnswer}
        />
      </div>
      
      {/* Navigation buttons */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className={`p-2 rounded-lg ${currentQuestion === 0 ? 'opacity-50' : ''}`}
            style={{ color: theme.text }}
          >
            <ArrowLeft size={24} />
          </button>
          
          {isAnswered && !showExplanation ? (
            <Button
              onClick={() => setShowExplanation(true)}
              variant="secondary"
            >
              Check Answer
            </Button>
          ) : showExplanation ? (
            <Button
              onClick={handleNextQuestion}
              variant="primary"
            >
              Next Question
            </Button>
          ) : (
            <span className="text-sm text-gray-500">Select an answer</span>
          )}
          
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestion === currentQuestionSet.length - 1 || !isAnswered}
            className={`p-2 rounded-lg ${(currentQuestion === currentQuestionSet.length - 1 || !isAnswered) ? 'opacity-50' : ''}`}
            style={{ color: theme.text }}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
