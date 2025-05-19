import React from 'react';
import SideNav from '../shared/SideNav';

export default function Home() {
  return (
    <section className='flex gap-10'>
      <div>
        <SideNav />
      </div>

      <div className='py-10  pr-10'>
        <h1 className='text-2xl font-semibold'>Bitss Wap Settings</h1>

        <div className='py-10 flex flex-col gap-5 '>
          {/* Username */}
          <div className='flex items-center gap-3 '>
            <label className='w-64'>Username</label>
            <input
              type="text"
              className='border border-black rounded-lg  outline-none py-1 px-3 flex-1'
            />
          </div>

          {/* License Key */}
          <div className='flex items-center gap-3 '>
            <label className='w-64'>License Key</label>
            <input
              type="text"
              className='border border-black rounded-lg outline-none py-1 px-3 flex-1'
            />
          </div>

          {/* Disable Lost Password */}
          <div className='flex items-center gap-3 '>
            <label className='w-64'>Disable Lost Password</label>
            <input
              type="checkbox"
              className='ml-2'
            />
            <p>Check to disable the lost password functionality</p>
          </div>

          {/* Enable IPsum Threat Protection */}
          <div className='flex items-center gap-3 '>
            <label className='w-64'>Enable IPsum Threat Protection</label>
            <input
              type="checkbox"
              className='ml-2'
            />
            <p>Check to enable IPsum Threat Protection functionality to block the IP based on that list.</p>
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
