import React from 'react';
import { Info } from 'lucide-react';

const QuestionCard = ({ 
  question, 
  userAnswer, 
  showExplanation, 
  handleAnswerSelect,
  correctAnswer,
  isReviewMode = false 
}) => {
  
  const getOptionClass = (option) => {
    if (!isReviewMode && !showExplanation) {
      return userAnswer === option ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300';
    }
    
    if (isReviewMode || showExplanation) {
      if (option === correctAnswer) {
        return 'bg-green-100 border-green-500';
      }
      if (userAnswer === option && option !== correctAnswer) {
        return 'bg-red-100 border-red-500';
      }
    }
    
    return 'bg-white border-gray-300';
  };
  
  return (
    <div className="mb-4">
      <p className="text-lg font-medium mb-4">{question.question}</p>
      
      <div className="space-y-2">
        {['A', 'B', 'C', 'D'].map((option) => (
          <button
            key={option}
            className={`w-full p-3 rounded-lg text-left ${getOptionClass(option)} border`}
            onClick={() => !showExplanation && !isReviewMode && handleAnswerSelect(option)}
            disabled={showExplanation || isReviewMode}
          >
            <div className="flex items-start">
              <span className="mr-2">{option})</span>
              <span>{question[`option${option}`]}</span>
            </div>
          </button>
        ))}
      </div>
      
      {(showExplanation || isReviewMode) && (
        <div className="p-4 bg-blue-50 rounded-lg mt-4">
          <div className="flex items-start">
            <Info className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
            <div>
              <p className="font-medium mb-1">Correct Answer: {correctAnswer}</p>
              <p className="text-sm">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
