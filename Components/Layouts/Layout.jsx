import React from 'react'
import Navbar from '../Navigation/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />

        {children}

        <Footer />
    </>
  )
}

export default Layout