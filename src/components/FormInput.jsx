import React, { useState } from 'react';

const FormInput = ({ onSelectRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleLoadButtonClick = () => {
    onSelectRegion(selectedRegion);
  };

  return (
    <div>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select a region</option>
        <option value="US">United States</option>
        <option value="IN">India</option>
        <option value="UK">United Kingdom</option>
      </select>
      <button onClick={handleLoadButtonClick}>Load</button>
    </div>
  );
};

export default FormInput;
