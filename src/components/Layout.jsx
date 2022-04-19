import React from 'react'
import Navbar from './Navbar'
import FooterNav from './FooterNav'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { selectUserIsLoggedIn } from '../features/user/userSlice'

function Layout({ children }) {
  const isLoggedIn = useSelector(selectUserIsLoggedIn)
 
  return (
    <>
      <Navbar />
      { children }
      { isLoggedIn && (
        <>
          <FooterNav />
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
