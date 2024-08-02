// src/TextInput.tsx
import React, { useState } from 'react';
import axios from 'axios';
import './TextInput.css';

interface TextInputProps {
  setResponse: (response: any) => void;
  setShowDropdown: (show: boolean) => void;
}

const TextInput: React.FC<TextInputProps> = ({ setResponse, setShowDropdown }) => {
  const [jsonInput, setJsonInput] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const response = await axios.post('https://bajajbackend-opal.vercel.app/bfhl', parsedInput);
      setResponse(response.data);
      setShowDropdown(true);
    } catch (error) {
      alert('Invalid JSON or API Error');
    }
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextInput;
