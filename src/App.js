import React, { useState, useEffect } from 'react';
import './global.css'; // Import global CSS
import './App.css';
import PricingTable from './PricingTable';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // If no theme is saved, default to light mode
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log("Theme toggled, dark mode is now:", !isDarkMode);
  };

  return (
    <div className="max-h-screen bg-background text-text">
      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 bg-accent text-white rounded-md focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Main Content */}
      <PricingTable />
    </div>
  );
};

export default App;

