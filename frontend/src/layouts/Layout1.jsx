import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

function Layout1() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout1
