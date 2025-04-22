import React from 'react';
import { theme } from '../styles/theme';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-2">
      <div 
        className="h-2" 
        style={{ 
          width: `${progress}%`,
          backgroundColor: theme.primary
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
