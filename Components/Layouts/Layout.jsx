import { useState, useEffect } from "react";
import Navbar from '../Navigation/Navbar'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'
import UserModal from '../UserModal'
import { useDispatch } from "react-redux";
import { setUser } from "@/features/auth/authSlice";
import {jwtDecode} from 'jwt-decode';

const Layout = ({ children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal'ı açma fonksiyonu
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Modal'ı kapatma fonksiyonu
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const user = jwtDecode(token); // Token'ı decode et
        dispatch(setUser(user)); // Kullanıcı bilgilerini Redux'a gönder
      } catch (error) {
        console.error("Token geçersiz:", error);
      }
    }
  }, [dispatch]);



  return (
    <>
      <Navbar openModal={openModal} />

      <Toaster
        toastOptions={{
          style: {
            background: 'rgba(20, 20, 20, 0.8)', // Turuncu arka plan
            border: '1px #222222 solid', // Border
            color: '#ffffff', // Yazı rengi
            backdropFilter: 'blur(10px)', // Arka plan bulanıklığı
            borderRadius: '8px', // Kenar yuvarlama
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Gölge efekti
          },
          duration: 4000, // Toast süresi
        }}
      />

      <UserModal isOpen={isModalOpen} onClose={closeModal} />

      {children}

      <Footer />

      <div className='absolute w-48 h-48 top-1/2 left-1/2 bg-amber-600 rounded-full blur-[180px] -z-50' />
    </>
  )
}

export default Layout