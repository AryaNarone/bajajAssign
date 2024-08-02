/* eslint-disable @typescript-eslint/no-explicit-any */
// src/App.tsx
import React, { useState } from 'react';
import TextInput from './TextInput';
import DropdownMenu from './DropdownMenu';
import MultiSelect from './MultiSelect';
import ResultDisplay from './ResultDisplay';

const App: React.FC = () => {
  const [response, setResponse] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  return (
    <div>
      <head>
        <title>YOUR_ROLL_NUMBER</title>
      </head>
      <TextInput setResponse={setResponse} setShowDropdown={setShowDropdown} />
      {showDropdown && <DropdownMenu setVisibleSections={setVisibleSections} />}
      {response && <ResultDisplay response={response} visibleSections={visibleSections} />}
    </div>
  );
};

export default App;
