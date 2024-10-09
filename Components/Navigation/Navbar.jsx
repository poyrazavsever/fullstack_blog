import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = (lang) => setLanguage(lang);

  const linkStyle = "text-neutral-800 dark:text-neutral-100"

  return (
    <nav className="p-4 shadow backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left: Logo */}
        <div>
          <img src="Logo/JustLogo.png" alt="" />
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className={linkStyle}>Home Page</a>
          <a href="#about" className={linkStyle}>See All Blog</a>
          <a href="#contact" className={linkStyle}>Last Blog</a>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="M7 8.38h4.5m5.5 0h-2.5m-3 0h3m-3 0V7m3 1.38c-.527 1.886-1.632 3.669-2.893 5.236M8.393 17c1.019-.937 2.17-2.087 3.214-3.384m0 0c-.643-.754-1.543-1.973-1.8-2.525m1.8 2.525l1.929 2.005" /><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" /></g></svg>
              </span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="#ffffff" /></svg>
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-700 rounded-md shadow-lg z-10">
                <div className="px-4 py-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={language === 'EN'}
                      onChange={() => toggleLanguage('EN')}
                    />
                    <span className={linkStyle}>English</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input
                      type="checkbox"
                      checked={language === 'TR'}
                      onChange={() => toggleLanguage('TR')}
                    />
                    <span className={linkStyle}>Turkish</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!isThemeDropdownOpen)}
              className="flex items-center"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2v1.5m0 17V22m7.07-2.929l-1.06-1.06M5.99 5.989L4.928 4.93M22 12h-1.5m-17 0H2m17.071-7.071l-1.06 1.06M5.99 18.011l-1.06 1.06" color="#ffffff" /></svg>
              </span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="#ffffff" /></svg>
              </span>
            </button>
            {isThemeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-700 rounded-md shadow-lg z-10">
                <div className="px-4 py-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={toggleDarkMode}
                    />
                    <span className={linkStyle}>Dark Mode</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input
                      type="checkbox"
                      checked={!darkMode}
                      onChange={toggleDarkMode}
                    />
                    <span className={linkStyle}>Light Mode</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Links (for small screens) */}
      <div className="md:hidden flex flex-col space-y-2 mt-2">
        <a href="#home" className={linkStyle}>Home</a>
        <a href="#about" className={linkStyle}>About</a>
        <a href="#contact" className={linkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
