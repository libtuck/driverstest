import React from 'react';
import Button from './Button';
import { BookOpen, Repeat, Info } from 'lucide-react';
import { theme } from '../styles/theme';

const AboutScreen = ({ setView }) => {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-xl font-bold mb-4"
