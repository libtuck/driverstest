import React from 'react';
import Button from './Button';
import { BookOpen, Repeat, Info } from 'lucide-react';
import { theme } from '../styles/theme';

const AboutScreen = ({ setView }) => {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>About the WA DOL Knowledge Test</h2>
      
      <div className="mb-6">
        <p className="mb-2">The Washington State Department of Licensing knowledge test consists of:</p>
        <ul className="list-disc pl-5 space-y-1 mb-2">
          <li>40 multiple-choice questions</li>
          <li>Passing score: 32 correct answers (80%)</li>
          <li>Questions on road signs, traffic laws, and safe driving practices</li>
        </ul>
      </div>
      
      <h3 className="text-lg font-semibold mb-2" style={{ color: theme.primary }}>Test-Taking Tips</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded mr-3">
              <BookOpen className="text-blue-500" size={18} />
            </div>
            <div>
              <p className="font-medium">Study the Manual</p>
              <p className="text-sm">The official Washington Driver Guide contains all the information needed to pass.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded mr-3">
              <Repeat className="text-blue-500" size={18} />
            </div>
            <div>
              <p className="font-medium">Practice Regularly</p>
              <p className="text-sm">Take practice tests until you consistently score above 80%.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded mr-3">
              <Info className="text-blue-500" size={18} />
            </div>
            <div>
              <p className="font-medium">Review Missed Questions</p>
              <p className="text-sm">Focus on areas where you make mistakes and understand why.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Button
        onClick={() => setView('home')}
        variant="primary"
        fullWidth
      >
        Back to Home
      </Button>
    </div>
  );
};

export default AboutScreen;
