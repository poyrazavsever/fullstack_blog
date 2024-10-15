import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UserModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Form türü
  const [formData, setFormData] = useState({ // Form verileri
    name: '',
    email: '',
    password: ''
  });

  // Form alanlarını güncelleme
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Giriş Yapılıyor:', formData.email, formData.password);
    } else {
      console.log('Kayıt Oluyor:', formData.name, formData.email, formData.password);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-neutral-950 bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative border bg-white border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 bg-opacity-10 dark:bg-opacity-10 rounded-lg shadow-lg p-8 max-w-md w-full backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >

            <div className="flex items-center justify-between mb-4 gap-8">
              <div className='flex w-full'>
                <button
                  className={`p-2 rounded-l w-full ${isLogin ? 'bg-orange-500 text-white' : 'bg-neutral-200 text-black'}`}
                  onClick={() => setIsLogin(true)}
                >
                  Giriş Yap
                </button>
                <button
                  className={`p-2 rounded-r w-full ${!isLogin ? 'bg-orange-500 text-white' : 'bg-neutral-200 text-black'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Kayıt Ol
                </button>
              </div>

              <button
                className="p-2 text-xs text-red-500 rounded-full hover:text-red-600 transition"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.75 15l-6-6m0 6l6-6m7 3c0-5.523-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10" color="currentColor" /></svg>
              </button>
            </div>

            <motion.div
              key={isLogin ? 'login' : 'register'} // Geçiş anahtarı
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {!isLogin && ( // Kayıt formu
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="İsim"
                    required
                    className="p-2 bg-neutral-900 bg-opacity-30 border border-neutral-700 text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                )}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="p-2 bg-neutral-900 bg-opacity-30 border border-neutral-700 text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Şifre"
                  required
                  className="p-2 bg-neutral-900 bg-opacity-30 border border-neutral-700 text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
                >
                  {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserModal;
