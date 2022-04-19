import React from 'react'
import Navbar from './Navbar'
import FooterNav from './FooterNav'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Navbar />
       { children }
      <FooterNav />
      <Footer />
    </>
  )
}

export default Layout
