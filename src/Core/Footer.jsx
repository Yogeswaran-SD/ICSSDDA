import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className='mt-20'>
      <div className='bg-[#093FB4]'>
        <div className='max-w-full mx-20 py-10'>
          <div className='grid grid-cols-4 gap-0 text-white'>
            <div>
              <img src="/image/Group 1 (1).png" alt="" />
            </div>
            <div className='space-y-3'>
              <h1 className='text-3xl'>Quick Links</h1>
              <ul className='space-y-1'>
                <li><Link to="/"  className='hover:underline cursor-pointer' >Home</Link></li>
                <li><Link to="/About"  className='hover:underline cursor-pointer'>About the Conference</Link></li>
                <li><Link to="/Scope"  className='hover:underline cursor-pointer' >Scope of the Conference</Link></li>
                <li><Link to="/Organizing"  className='hover:underline cursor-pointer' >Organizing Committee</Link></li>
                <li><Link to="/EditorialBoard"  className='hover:underline cursor-pointer' >Editorial Board</Link></li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h1 className='text-3xl'>Registration Guide</h1>
              <ul className='space-y-1'>
                <li><Link to="/Conference-Track" className='hover:underline cursor-pointer'>Conference Track</Link></li>
                <li><Link to="/KeyDates"  className='hover:underline cursor-pointer' >Key Dates</Link></li>
                <li><Link to="/PaperSubmission"  className='hover:underline cursor-pointer' >Paper Submission</Link></li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h1 className='text-3xl'>Contact Info</h1>
              <ul className='space-y-1'>
                <li><Link  className='hover:underline cursor-pointer' >Kampong Glam, Singapore</Link></li>
                <li><Link to="" className='hover:underline cursor-pointer'>yogeswaran.cse@gmail.com</Link ></li>
              </ul>
            </div>
          </div>
          <div className='text-center mt-10 space-y-5'>
            <hr className='text-white'/>
            <li to="/" className='text-white'>© 2025 ICIACSE. All rights reserved.</li>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
