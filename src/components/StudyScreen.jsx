import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import Button from './Button';
import { theme } from '../styles/theme';
import { shuffleArray } from '../utils/helpers';
import questions from '../data/questions';

const StudyScreen = ({ 
  currentQuestionSet, 
  setCurrentQuestionSet, 
  currentQuestion, 
  setCurrentQuestion, 
  setView 
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  
  if (currentQuestionSet.length === 0) {
    return <div className="p-4 text-center">Loading questions...</div>;
  }

  const question = currentQuestionSet[currentQuestion];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Card {currentQuestion + 1} of {currentQuestionSet.length}</span>
          <button
            onClick={() => {
              setCurrentQuestionSet(shuffleArray(questions).slice(0, 40));
              setCurrentQuestion(0);
              setShowExplanation(false);
            }}
            className="p-1 rounded-lg"
            style={{ color: theme.primary }}
          >
            <RefreshCw size={18} />
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-lg font-medium mb-4">{question.question}</p>
          
          <div 
            className="p-4 bg-blue-50 rounded-lg mb-4 cursor-pointer"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            <p className="font-medium mb-1 text-center">
              {showExplanation ? 'Hide Answer' : 'Tap to Reveal Answer'}
            </p>
            
            {showExplanation && (
              <div className="mt-3">
                <p className="font-medium mb-1">Correct Answer: {question.correctAnswer}) {question[`option${question.correctAnswer}`]}</p>
                <div className="border-t my-2"></div>
                <p className="text-sm mt-2">{question.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
                setShowExplanation(false);
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
                setShowExplanation(false);
              }
            }}
            disabled={currentQuestion === currentQuestionSet.length - 1}
            className={`p-2 rounded-lg ${currentQuestion === currentQuestionSet.length - 1 ? 'opacity-50' : ''}`}
            style={{ color: theme.text }}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyScreen;
