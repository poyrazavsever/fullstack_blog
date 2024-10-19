import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/auth/authSlice';

const Navbar = ({ openModal }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated); // Redux'dan giriş durumunu al

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      dispatch(logout()); // Logout işlemini dispatch et
    } else {
      openModal(); // Giriş modalını aç
    }
  };

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

          <button onClick={handleLoginLogout} className={linkStyle}>
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              className="cursor-pointer"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </motion.div>
          </button>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 18c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18m0-8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 14 19.4 14 18 14s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 12.1 14 11.4 14 10s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093C15.9 6 16.6 6 18 6s2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10m-8 8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C12.1 22 11.4 22 10 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C6 20.1 6 19.4 6 18s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C7.9 14 8.6 14 10 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C14 15.9 14 16.6 14 18" /></svg>
                </span>
                <span className='text-lg text-neutral-100'>
                  See All Blog
                </span>
              </a>

              <a href="/last-blog" className="flex items-center gap-2 w-full p-4 border-t border-neutral-700 hover:bg-neutral-950 transition-all duration-150">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h20m-5-5l5 5l-5 5" /></svg>
                </span>
                <span className='text-lg text-neutral-100'>
                  Last Blog
                </span>
              </a>

              <button onClick={handleLoginLogout} className="flex items-center gap-2 w-full p-4 border-t border-neutral-700 hover:bg-neutral-950 transition-all duration-150">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m9 22l-.251-3.509a3.259 3.259 0 1 1 6.501 0L15 22" /><path d="M2.352 13.214c-.354-2.298-.53-3.446-.096-4.465s1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108c.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856S16.554 22 13.14 22h-2.28c-3.415 0-5.122 0-6.29-.971c-1.168-.972-1.418-2.6-1.918-5.857z" /></g></svg>
                </span>
                <span className='text-lg text-neutral-100'>
                  {isLoggedIn ? "Logout" : "Login"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
