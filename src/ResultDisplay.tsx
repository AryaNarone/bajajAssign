// src/ResultDisplay.tsx
import React from 'react';
import './ResultDisplay.css';

interface ResultDisplayProps {
  response: any;
  visibleSections: string[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ response, visibleSections }) => {
  return (
    <div className="result-display-container">
      {visibleSections.includes('Alphabets') && (
        <div className="result">
          <h3>Alphabets</h3>
          <p>{response.alphabets.join(', ')}</p>
        </div>
      )}
      {visibleSections.includes('Numbers') && (
        <div className="result">
          <h3>Numbers</h3>
          <p>{response.numbers.join(', ')}</p>
        </div>
      )}
      {visibleSections.includes('Highest alphabet') && (
        <div className="result">
          <h3>Highest alphabet</h3>
          <p>{response.highest_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
