import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // Menü durumu küçük ekranlar için

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = (lang) => setLanguage(lang);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const linkStyle = "text-neutral-800 dark:text-neutral-100 transition duration-300";

  return (
    <nav className="py-4 shadow backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center pb-4">

        {/* Sol: Logo */}
        <div>
          <img src="/Logo/JustLogo.png" alt="Logo" />
        </div>

        {/* Orta: Büyük ekranlar için bağlantılar */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className={linkStyle}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              Home Page
            </motion.div>
          </a>
          <a href="/blog" className={linkStyle}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              See All Blog
            </motion.div>
          </a>
          <a href="/last-blog" className={linkStyle}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              Last Blog
            </motion.div>
          </a>
        </div>

        {/* Sağ: Dil ve Tema Düşürme Menüsü */}
        <div className="relative flex space-x-4 items-center">

          {/* Dil Düşürme Menüsü */}
          <div className="relative hidden md:block">
            <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#ffffff">
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
                  <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="#ffffff" />
                </svg>
              </motion.span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 mt-3 w-40 border bg-neutral-200 border-neutral-400 dark:bg-neutral-900 bg-opacity-10 dark:border-neutral-800 rounded-md shadow-lg z-10 ${isDropdownOpen ? 'block' : 'hidden'}`}
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
                    <img src="/Images/eng.jpg" alt="eng" className="w-full h-full rounded-full" />
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
                    <img src="/Images/tr.jpg" alt="tr" className="w-full h-full rounded-full" />
                  </div>
                  <span className={linkStyle}>Turkish</span>
                </label>

              </div>
            </motion.div>
          </div>

          {/* Tema Düşürme Menüsü */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setThemeDropdownOpen(!isThemeDropdownOpen)}
              className="flex items-center"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2v1.5m0 17V22m7.07-3.929l-1.06-1.06M5.99 5.989L4.928 4.93M22 12h-1.5m-17 0H2m17.071-7.071l-1.06 1.06M5.99 18.011l-1.06 1.06" color="#ffffff" />
                </svg>
              </span>

              <motion.span
                animate={{ rotate: isThemeDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9s-4.419 6-6 6s-6-6-6-6" color="#ffffff" />
                </svg>
              </motion.span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isThemeDropdownOpen ? 1 : 0, y: isThemeDropdownOpen ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 mt-3 w-52 border bg-neutral-200 border-neutral-400 dark:bg-neutral-900 bg-opacity-10 dark:border-neutral-800 rounded-md shadow-lg z-10 ${isThemeDropdownOpen ? 'block' : 'hidden'}`}
            >
              <div className="px-4 py-3">
                <label className="flex items-center space-x-3 pb-2">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="w-4 h-4 p-2 accent-black border-gray-800 rounded-lg focus:ring-neutral-800 focus:ring-2"
                  />
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-amber-600" />
                  <span className={linkStyle}>Dark Mode</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={!darkMode}
                    onChange={toggleDarkMode}
                    className="w-4 h-4 p-2 accent-black border-gray-800 rounded-lg focus:ring-neutral-800 focus:ring-2"
                  />
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-amber-600" />
                  <span className={linkStyle}>Light Mode</span>
                </label>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Küçük ekranlar için menü ikonu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M2 5h20M2 12h20M2 19h20" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Küçük ekranlar için açılır menü */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-6 w-full md:hidden absolute dark:bg-bg_dark"
          >
            <div className="flex flex-col items-start">

              <a href="/" className="flex items-center gap-2 w-full p-4 border-t border-neutral-700 hover:bg-neutral-950 transition-all duration-150">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="m9 22l-.251-3.509a3.259 3.259 0 1 1 6.501 0L15 22" /><path d="M2.352 13.214c-.354-2.298-.53-3.446-.096-4.465s1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108c.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856S16.554 22 13.14 22h-2.28c-3.415 0-5.122 0-6.29-.971c-1.168-.972-1.418-2.6-1.918-5.857z" /></g></svg>
                </span>
                <span className='text-lg text-neutral-100'>
                  Home Page
                </span>
              </a>

              <a href="/blog" className="flex items-center gap-2 w-full p-4 border-t border-neutral-700 hover:bg-neutral-950 transition-all duration-150">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 18c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18m0-8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 14 19.4 14 18 14s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 12.1 14 11.4 14 10s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093C15.9 6 16.6 6 18 6s2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10m-8 8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C12.1 22 11.4 22 10 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C6 20.1 6 19.4 6 18s0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C7.9 14 8.6 14 10 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C14 15.9 14 16.6 14 18M10 6c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6s0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6" color="#ffffff" /></svg>
                </span>
                <span className='text-lg text-neutral-100'>
                  See All Blog
                </span>
              </a>

              <a href="/last-blog" className="flex items-center gap-2 w-full p-4 border-y border-neutral-700 hover:bg-neutral-950 transition-all duration-150">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" /><path d="M16 10.833L13.886 8.79C12.996 7.93 12.552 7.5 12 7.5s-.997.43-1.886 1.29L8 10.832m8 5.667l-2.114-2.044c-.89-.86-1.334-1.29-1.886-1.29s-.997.43-1.886 1.29L8 16.5" /></g></svg>
                </span>
                <span className='text-lg text-neutral-100'>
                  Last Blog
                </span>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
