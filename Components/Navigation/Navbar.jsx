import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = (lang) => setLanguage(lang);

  const linkStyle = "text-neutral-800 dark:text-neutral-100 transition duration-300";

  return (
    <nav className="p-4 shadow backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left: Logo */}
        <div>
          <img src="Logo/JustLogo.png" alt="" />
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className={`${linkStyle}`}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              Home Page
            </motion.div>
          </a>
          <a href="/blog" className={`${linkStyle}`}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              See All Blog
            </motion.div>
          </a>
          <a href="/last-blog" className={`${linkStyle}`}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              Last Blog
            </motion.div>
          </a>
        </div>

        {/* Right: Language and Theme Dropdowns */}
        <div className="relative flex space-x-4 items-center">

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff">
                    <path d="M7 8.38h4.5m5.5 0h-3.5m-3 0h3m-3 0V7m3 1.38c-.527 1.886-1.632 3.669-3.893 5.236M8.393 17c1.019-.937 2.17-3.087 3.214-3.384m0 0c-.643-.754-1.543-1.973-1.8-3.525m1.8 2.525l1.929 2.005" />
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                  </g>
                </svg>
              </span>

              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="#ffffff" />
                </svg>
              </motion.span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 mt-3 w-40 border bg-neutral-200 border-neutral-400 dark:bg-neutral-900 bg-opacity-10 dark:border-neutral-800  dark:border rounded-md shadow-lg z-10 ${isDropdownOpen ? 'block' : 'hidden'}`}
            >
              <div className="px-4 py-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={language === 'EN'}
                    onChange={() => toggleLanguage('EN')}
                    className="w-4 h-4 p-2 accent-black border-gray-800 rounded-lg focus:ring-neutral-800 focus:ring-2"
                  />
                  <div className="w-4 h-4">
                    <img src="Images/eng.jpg" alt="eng" className="w-full h-full rounded-full"/>
                  </div>
                  <span className={linkStyle}>English</span>
                </label>
                <label className="flex items-center space-x-3 mt-3">
                  <input
                    type="checkbox"
                    checked={language === 'TR'}
                    onChange={() => toggleLanguage('TR')}
                    className="w-4 h-4 p-2 accent-black border-gray-800 rounded-lg focus:ring-neutral-800 focus:ring-2"
                  />
                  <div className="w-4 h-4">
                    <img src="Images/tr.jpg" alt="eng" className="w-full h-full rounded-full"/>
                  </div>
                  <span className={linkStyle}>Turkish</span>
                </label>
              </div>
            </motion.div>
          </div>

          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!isThemeDropdownOpen)}
              className="flex items-center"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2v1.5m0 17V22m7.07-3.929l-1.06-1.06M5.99 5.989L4.928 4.93M22 12h-1.5m-17 0H2m17.071-7.071l-1.06 1.06M5.99 18.011l-1.06 1.06" color="#ffffff" />
                </svg>
              </span>

              <motion.span
                animate={{ rotate: isThemeDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="#ffffff" />
                </svg>
              </motion.span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isThemeDropdownOpen ? 1 : 0, y: isThemeDropdownOpen ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 mt-3 w-52 border bg-neutral-200 border-neutral-400 dark:bg-neutral-900 bg-opacity-10 dark:border-neutral-800  dark:border rounded-md shadow-lg z-10 ${isThemeDropdownOpen ? 'block' : 'hidden'}`}
            >
              <div className="px-4 py-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="w-4 h-4 p-2 accent-black border-gray-800 rounded-lg focus:ring-neutral-800 focus:ring-2"
                  />
                  <div className="w-4 h-4 bg-gradient-to-r from-neutral-600 via-neutral-950 to-amber-600 rounded-full shadow" />
                  <span className={linkStyle}>Dark Mode</span>
                </label>
                <label className="flex items-center space-x-3 mt-3">
                  <input
                    type="checkbox"
                    checked={!darkMode}
                    onChange={toggleDarkMode}
                    className="w-4 h-4 p-2 accent-black border-gray-800 rounded-lg focus:ring-neutral-800 focus:ring-2"
                  />
                  <div className="w-4 h-4 bg-gradient-to-r from-neutral-100 via-neutral-200 to-amber-600 rounded-full shadow" />
                  <span className={linkStyle}>Light Mode</span>
                </label>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive Links (for small screens) */}
      <div className="md:hidden flex flex-col space-y-3 mt-3">
        <a href="/" className={linkStyle}>Home Page</a>
        <a href="/blog" className={linkStyle}>See All Blog</a>
        <a href="/last-blog" className={linkStyle}>Last Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
