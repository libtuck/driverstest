import React from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import Button from './Button';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import { theme } from '../styles/theme';

const ReviewScreen = ({ 
  currentQuestionSet, 
  currentQuestion, 
  setCurrentQuestion, 
  userAnswers, 
  setView 
}) => {
  if (currentQuestionSet.length === 0) {
    return <div className="p-4 text-center">Loading questions...</div>;
  }

  const question = currentQuestionSet[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];
  const isCorrect = userAnswer === question.correctAnswer;
  const progress = ((currentQuestion + 1) / currentQuestionSet.length) * 100;

  return (
    <div className="flex flex-col h-full">
      {/* Progress bar */}
      <ProgressBar progress={progress} />
      
      {/* Question */}
      <div className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {currentQuestionSet.length}</span>
          <div className="flex items-center">
            {isCorrect ? (
              <Check className="text-green-500 mr-1" size={16} />
            ) : (
              <X className="text-red-500 mr-1" size={16} />
            )}
            <span className={isCorrect ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </span>
          </div>
        </div>
        
        <QuestionCard 
          question={question}
          userAnswer={userAnswer}
          showExplanation={true}
          handleAnswerSelect={() => {}}
          correctAnswer={question.correctAnswer}
          isReviewMode={true}
        />
      </div>
      
      {/* Navigation buttons */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
              }
            }}
            disabled={currentQuestion === 0}
            className={`p-2 rounded-lg ${currentQuestion === 0 ? 'opacity-50' : ''}`}
            style={{ color: theme.text }}
          >
            <ArrowLeft size={24} />
          </button>
          
          <Button
            onClick={() => setView('home')}
            variant="primary"
          >
            Back to Home
          </Button>
          
          <button
            onClick={() => {
              if (currentQuestion < currentQuestionSet.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                setView('home');
              }
            }}
            className="p-2 rounded-lg"
            style={{ color: theme.text }}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewScreen;
