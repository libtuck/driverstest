import React from 'react';
import { theme } from '../styles/theme';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  disabled = false,
  className = ''
}) => {
  let styles = {
    backgroundColor: variant === 'primary' ? theme.primary : 
                     variant === 'secondary' ? theme.secondary : 
                     variant === 'outline' ? 'transparent' : theme.card,
    color: variant === 'primary' || variant === 'secondary' ? 'white' : 
           variant === 'outline' ? theme.primary : theme.text,
    border: variant === 'outline' ? `1px solid ${theme.primary}` : 
            variant === 'text' ? `1px solid ${theme.text}` : 'none',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-3 rounded-lg font-semibold ${fullWidth ? 'w-full' : ''} ${className}`}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
