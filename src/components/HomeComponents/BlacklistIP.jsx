import React, { useState } from 'react';
import SideNav from '../../shared/SideNav';
import BlackListIPCom from './BlackListIPCom';

export default function BlacklistIP() {
  const [activeTab, setActiveTab] = useState('add');
  const [ipAddress, setIpAddress] = useState('');
  const [name, setName] = useState('');
  const [blockLevel, setBlockLevel] = useState('');
  const [entries, setEntries] = useState([]); 
  const [unblockIp, setUnblockIp] = useState('');

  const filteredEntries = entries.filter(entry =>
  entry.ip.toLowerCase().includes(unblockIp.toLowerCase())
);

  

  const handleAddIP = () => {
  if (!ipAddress.trim()) {
    alert('IP Address is required');
    return;
  }

  const newEntry = {
    ip: ipAddress,
    name: name || 'Unknown',
    level: blockLevel || '3',
    date: new Date().toLocaleString(),
  };

  const updatedEntries = [newEntry, ...entries];
  setEntries(updatedEntries);

  console.log('New entries list:', updatedEntries); 
  setIpAddress('');
  setName('');
  setBlockLevel('');
};


  return (
    <section className='flex gap-10'>
      <div>
        <SideNav />
      </div>

      <div className='py-10  md:pr-10 w-full'>
        <h1 className='text-2xl font-semibold mb-6'>Blacklist IP Management</h1>

        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='lg:w-2/5'>
            <div className='flex gap-2 border-b border-black mb-6'>
              <button
                onClick={() => setActiveTab('add')}
                className={`border p-2 ${activeTab === 'add' ? 'bg-gray-300 font-semibold' : 'bg-gray-100'}`}
              >
                Add to Blacklist
              </button>
              <button
                onClick={() => setActiveTab('level')}
                className={`border p-2 ${activeTab === 'level' ? 'bg-gray-300 font-semibold' : 'bg-gray-100'}`}
              >
                IP Block Level
              </button>
              <button
                onClick={() => setActiveTab('unblock')}
                className={`border p-2 ${activeTab === 'unblock' ? 'bg-gray-300 font-semibold' : 'bg-gray-100'}`}
              >
                Unblock IP
              </button>
            </div>

            {activeTab === 'add' && (
              <div className='flex flex-col gap-6'>
                <div className='flex gap-5 items-center'>
                  <label className='whitespace-nowrap'>IP Address *</label>
                  <input
                    type='text'
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    className='outline-none border py-1 px-4 ml-auto border-black rounded-lg w-2/3'
                    placeholder='192.168.0.1'
                  />
                </div>
                <div className='flex gap-5 items-center'>
                  <label className='whitespace-nowrap'>Name <br /> (Default: Unknown)</label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='outline-none border py-1 px-4 ml-auto border-black rounded-lg w-2/3'
                    placeholder='Unknown'
                  />
                </div>
                <div className='flex gap-5 items-center'>
                  <label className='whitespace-nowrap'>Block Level <br /> (Default: 3)</label>
                  <input
                    type='text'
                    value={blockLevel}
                    onChange={(e) => setBlockLevel(e.target.value)}
                    className='outline-none border py-1 px-4 ml-auto border-black rounded-lg w-2/3'
                    placeholder='3'
                  />
                </div>
                <button
                  onClick={handleAddIP}
                  className='bg-[#135E96] text-white px-4 py-2 rounded w-fit'
                >
                  Add IP
                </button>
              </div>
            )}

            {activeTab === 'level' && (
              <div className='flex flex-col gap-6'>
                <p className='text-sm'>
                  IP block level use to block the access for the listed IP from that level...
                </p>
                <div className='flex gap-5 items-center'>
                  <label>Block Level</label>
                  <input
                    type='text'
                    className='outline-none border py-1 px-4 ml-auto border-black rounded-lg w-2/3'
                    placeholder='3'
                  />
                </div>
                <button className='bg-[#135E96] text-white px-4 py-2 rounded w-fit'>Save block level</button>
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
                <button className='bg-[#135E96] text-white px-4 py-2 rounded w-fit'>Unblock IP</button>
              </div>
            )}
          </div>

          {/* Pass data to BlackListIPCom */}
          <div className='lg:w-3/5'>
            <BlackListIPCom  />
          </div>
        </div>
      </div>
    </section>
  );
}
