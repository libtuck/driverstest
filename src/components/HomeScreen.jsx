import React from 'react';
import Button from './Button';
import { theme } from '../styles/theme';
import questions from '../data/questions';
import { shuffleArray } from '../utils/helpers';

const HomeScreen = ({ 
  setView, 
  setCurrentQuestionSet, 
  setCurrentQuestion, 
  setUserAnswers, 
  setTestComplete 
}) => {
  
  const startNewTest = () => {
    setCurrentQuestionSet(shuffleArray(questions).slice(0, 40));
    setUserAnswers({});
    setCurrentQuestion(0);
    setTestComplete(false);
    setView('test');
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h1 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
        Washington State 
        <br />Driver's License Test Prep
      </h1>
      
      <img 
        src="/images/wa-dol-logo.png" 
        alt="Washington DOL Logo" 
        className="mb-6 rounded-lg"
        width={300}
        height={200}
      />
      
      <p className="mb-8 text-sm">
        Practice for your WA DOL Knowledge Test with realistic questions. Pass requirement: 32/40 questions (80%).
      </p>
      
      <div className="w-full space-y-4">
        <Button
          onClick={startNewTest}
          variant="primary"
          fullWidth
        >
          Start Practice Test
        </Button>
        
        <Button
          onClick={() => {
            setCurrentQuestionSet(shuffleArray(questions).slice(0, 40));
            setCurrentQuestion(0);
            setView('study');
          }}
          variant="outline"
          fullWidth
        >
          Study Mode
        </Button>
        
        <Button
          onClick={() => setView('about')}
          variant="text"
          fullWidth
        >
          About & Tips
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
