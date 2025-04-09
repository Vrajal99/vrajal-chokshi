import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './darkmode.css';

const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="dark__mode">
      <div
        className={`theme__toggle ${isDarkMode ? 'dark' : ''}`}
        onClick={toggleTheme}
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? (
          <i className="uil uil-sun" aria-hidden="true"></i>
        ) : (
          <i className="uil uil-moon" aria-hidden="true"></i>
        )}
      </div>
    </div>
  );
};

export default DarkMode;
