import React, { useState } from 'react'
import SideNav from '../../../shared/SideNav';
import AdminIPCom from './AdminIPCom';

export default function AdminIp() {
    const [activeTab, setActiveTab] = useState('add');
  
  return (
    <section className='flex gap-10'>
        <div>
            <SideNav />
        </div>
        <div className='py-10  md:pr-10 w-full'>
           <h1 className='text-2xl font-semibold mb-6'>Admin IP Management</h1>
           
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='lg:w-2/5'>
                <p className='pb-5'>Note: If admin ip failed login count is being more than 2(two). That ip will block directly without warning. You can not reset the
                count. Just remove the ip and add it again for the access.</p>
                    <div className='flex gap-2 border-b w-fit border-black mb-6'>
                      <button
                      onClick={() => setActiveTab('add')}
                      className={`border p-2 ${activeTab === 'add' ? 'bg-gray-300 font-semibold' : 'bg-gray-100'}`}
                     >
                      Add to Blacklist
                    </button>
                    <button
                      onClick={() => setActiveTab('unblock')}
                      className={`border p-2 ${activeTab === 'unblock' ? 'bg-gray-300 font-semibold' : 'bg-gray-100'}`}
                    >
                      Remove IP
                    </button>
                  </div>

                  {activeTab =='add' &&(
                    <div className='flex flex-col gap-5'>
                      <div className='flex items-center'>
                        <label htmlFor="">IP Address *</label>
                        <input type="text" placeholder='192.168.0.1' className='border ml-auto outline-none  border-black px-3 rounded-xl py-1'/>
                      </div>
                      <div className='flex items-center'>
                        <label htmlFor="">Name <br />(Default: Unknown)</label>
                        <input type="text" name="" id="" placeholder='Unknown' className='border ml-auto outline-none border-black px-3 rounded-xl py-1'/>
                      </div>
                      <div className='flex items-center'>
                        <label htmlFor="">Valid till * <br /></label>
                        <input type="datetime-local" name="" id="" className='border ml-auto outline-none border-black px-3 rounded-xl py-1'/>
                      </div>
                      <button className='bg-[#135E96] text-white px-4 py-2 rounded w-fit'>Add IP</button>
                    </div>
                  )}


                  {activeTab === 'unblock' && (
                    <div className='flex flex-col gap-6'>
                      <div className='flex gap-5 items-center'>
                        <label className='whitespace-nowrap'>IP Address *</label>
                        <input
                          type='text'
                          className='outline-none border py-1 px-4 ml-auto border-black rounded-lg w-2/3'
                          placeholder='192.168.0.1'
                        />
                      </div>
                      <button className='bg-[#135E96] text-white px-4 py-2 rounded w-fit'>Remove IP</button>
                    </div>
                  )}
                </div>

                 <div className='lg:w-3/5'>
                    <AdminIPCom/>
                 </div>
            </div>
        </div>
    </section>
  )
}
