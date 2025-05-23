import React, { useState } from 'react';
import SideNav from '../shared/SideNav';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";


export default function Home() {
  const [showPassword , setShowPassword] = useState(false)
  return (
    <section className='flex lg:gap-10'>
      <div>
        <SideNav />
      </div>

      <div className='py-10  lg:pr-10 px-2 lg:px-0'>
        <h1 className='text-2xl font-semibold'>Bitss Wap Settings</h1>

        <div className='py-10 flex flex-col gap-5 '>
          {/* Username */}
          <div className='flex flex-col md:flex-row lg:items-center gap-3 '>
            <label className='w-64'>Username</label>
            <input
              type="text"
              className='border border-black rounded-lg  outline-none py-1 px-3 flex-1'
            />
          </div>

          {/* Password */}
          <div className='flex flex-col md:flex-row lg:items-center gap-3'>
            <label className='w-64'>Password</label>
            <div className='relative flex-1'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='border border-black rounded-lg outline-none py-1 px-3 w-full'
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700'
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>


          {/* License Key */}
          <div className='flex flex-col md:flex-row lg:items-center gap-3 '>
            <label className='lg:w-64'>License Key</label>
            <input
              type="text"
              className='border border-black rounded-lg outline-none py-1 px-3 flex-1'
            />
          </div>

          {/* Disable Lost Password */}
          <div className='flex flex-col md:flex-row lg:items-center gap-3 '>
            <label className='lg:w-64'>Disable Lost Password : </label>
            <div className='flex items-center gap-2'><input
              type="checkbox"
              className='ml-2'
            />
            <p>Check to disable the lost password functionality</p></div>
          </div>

          {/* Enable IPsum Threat Protection */}
          <div className='flex flex-col md:flex-row lg:items-center gap-3 '>
            <label className='lg:w-64'>Enable IPsum Threat Protection :</label>
            <div className='flex items-center gap-2'>
              <input
              type="checkbox"
              className='ml-2'
            />
            <p>Check to enable IPsum Threat Protection functionality to block the IP based on that list.</p>
            </div>
          </div>

          {/* Save Button */}
          <div className='pt-4'>
            <button className='bg-[#135E96] text-white px-4 py-2 rounded'>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
