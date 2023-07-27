// components/NightModeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightMode } from '../redux/actions';

const NightModeToggle = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);

  const handleToggle = () => {
    dispatch(toggleNightMode());
  };

  return (
    <div>
      <label>
        Night Mode
        <div className="switch">
          <input type="checkbox" checked={nightMode} onChange={handleToggle} />
          <span className="slider"></span>
        </div>
      </label>
    </div>
  );
};

export default NightModeToggle;
