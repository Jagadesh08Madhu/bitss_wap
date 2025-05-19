import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../shared/Footer'
import SideNav from '../shared/SideNav'

export default function Main() {
  const location = useLocation()

  const hideLayoutPaths = ['/login', '/forgot-password']
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname)

  return (
    <main>
      {!shouldHideLayout && <Navbar /> }
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </main>
  )
}
