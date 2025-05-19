import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import profile from '../assets/profile.png'
export default function Navbar() {
  return (
    <section>
      <nav className='flex items-center justify-between bg-[#1D2327] py-2 px-10 border-b'>
        <div className='flex items-center text-white gap-5'>
          <div>
            <span className='text-3xl'><FaWordpress/></span>
          </div>
          <div className='flex items-center gap-1'>
            <span><FaHome/></span>
            <p className=''>Beta Bitss</p>
          </div>
        </div>

        <div className='flex items-center text-white gap-3'>
          <div><h1>Howdy,admin</h1></div>
          <div className='p-2'><img className='w-5 bg-white ' src={profile} alt="" /></div>
        </div>
      </nav>      
    </section>
  )
}
