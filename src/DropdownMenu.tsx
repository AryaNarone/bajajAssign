// src/DropdownMenu.tsx
import React from 'react';

interface DropdownMenuProps {
  setVisibleSections: (sections: string[]) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ setVisibleSections }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selected: string[] = [];
    for (const option of options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    setVisibleSections(selected);
  };

  return (
    <select multiple onChange={handleSelect}>
      <option value="Alphabets">Alphabets</option>
      <option value="Numbers">Numbers</option>
      <option value="Highest alphabet">Highest alphabet</option>
    </select>
  );
};

export default DropdownMenu;
