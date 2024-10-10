import React from 'react'
import Navbar from '../Navigation/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />

        {children}

        <Footer />

        <div className='absolute w-48 h-48 top-1/2 left-1/2 bg-amber-600 rounded-full blur-[140px] -z-50'/>
    </>
  )
}

export default Layout