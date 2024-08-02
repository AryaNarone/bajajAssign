// src/ResultDisplay.tsx
import React from 'react';

interface ResultDisplayProps {
  response: any;
  visibleSections: string[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ response, visibleSections }) => {
  return (
    <div>
      {visibleSections.includes('Alphabets') && (
        <div>
          <h3>Alphabets</h3>
          <p>{response.alphabets.join(', ')}</p>
        </div>
      )}
      {visibleSections.includes('Numbers') && (
        <div>
          <h3>Numbers</h3>
          <p>{response.numbers.join(', ')}</p>
        </div>
      )}
      {visibleSections.includes('Highest alphabet') && (
        <div>
          <h3>Highest alphabet</h3>
          <p>{response.highest_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
