import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <header>
      <div>
        {isLoggedIn ? (
          <button>Logout</button>
        ) : (
          <button>Login</button>
        )}
        <button>Profile</button>
      </div>
    </header>
  );
};

export default Header;
