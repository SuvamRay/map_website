import React from 'react';
import { useDispatch } from 'react-redux';
import { setNightMode } from '../redux/actions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleNightModeToggle = () => {
    dispatch(setNightMode());
  };

  return (
    <aside>
      {/* Your sidebar content with night mode toggle */}
      <label>
        Night Mode
        <input type="checkbox" onChange={handleNightModeToggle} />
      </label>
    </aside>
  );
};

export default Sidebar;
