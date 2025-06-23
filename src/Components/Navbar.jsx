import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-xl shadow"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes className="text-gray-800 dark:text-white" /> : <FaBars className="text-gray-800 dark:text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-16 right-4 z-40 w-48 bg-white dark:bg-gray-800 p-4 rounded shadow-lg lg:hidden transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-white" />} 
          Toggle Dark Mode
        </button>
      </div>

      {/* Desktop Dark Mode Button */}
      <div className="hidden lg:flex fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-xl shadow"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
