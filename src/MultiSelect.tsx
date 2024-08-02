// src/MultiSelect.tsx
import React from 'react';
import Select, { MultiValue } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  setSelectedOptions: (selectedOptions: MultiValue<Option>) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ setSelectedOptions }) => {
  const options: Option[] = [
    { value: 'Alphabets', label: 'Alphabets' },
    { value: 'Numbers', label: 'Numbers' },
    { value: 'Highest alphabet', label: 'Highest alphabet' }
  ];

  return (
    <Select
      isMulti
      options={options}
      onChange={setSelectedOptions}
    />
  );
};

export default MultiSelect;
