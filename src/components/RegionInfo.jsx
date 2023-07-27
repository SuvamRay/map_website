import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const regionData = useSelector((state) => state.regionData);

  // Check if regionData is not available yet or missing timezones property
  if (!regionData || !Array.isArray(regionData.timezones)) {
    return <div>No region data available.</div>;
  }

  return (
    <div>
      {/* Display the region info (currency, speed units, distance units, timezone) */}
      <p>Currency: {regionData.currency}</p>
      <p>Speed Units: {regionData.speedUnits}</p>
      <p>Distance Units: {regionData.distanceUnits}</p>
      <p>Timezone(s): {regionData.timezones.join(', ')}</p>
    </div>
  );
};

export default RegionInfo;
