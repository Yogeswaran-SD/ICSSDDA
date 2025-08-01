import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Main() {
  return (
    <div>
      <div className='fixed top-0 z-50 w-full'>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}
