import React, { useEffect, useState } from 'react';

export default function AdminIPIPCom() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/blacklistedIP.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load IP data', err));
  }, []);

  const filteredEntries = data.filter((entry) =>
    entry.ip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className='border border-black p-4 overflow-x-auto'>
      {/* Top Controls */}
      <div className='flex flex-col gap-5 md:flex-row justify-between'>
        <div className='flex items-center gap-2'>
          <p>Show</p>
          <select
            value={entriesPerPage}
            className='border border-black'
            onChange={handleChangeEntriesPerPage}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
          <p>entries</p>
        </div>
        <div className='flex gap-2 items-center'>
          <label>Search:</label>
          <input
            type="search"
            className='border outline-none border-black px-2 py-1'
            placeholder="Search IP"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      {/* Table */}
<div className='mt-5'>
  <div className='max-h-[400px] overflow-y-auto'>
    <table className='w-full table-auto border border-black'>
      <thead className='font-semibold sticky -top-1 bg-white z-10'>
        <tr>
          <th className='border border-black p-2'>IP Address</th>
          <th className='border border-black p-2'>Name</th>
          <th className='border border-black p-2'>Valid Till</th>
          <th className='border border-black p-2'>Added Date</th>
          <th className='border border-black p-2'>Failed Login Count</th>
        </tr>
      </thead>
      <tbody>
        {currentEntries.length > 0 ? (
          currentEntries.map((entry, index) => (
            <tr key={index} className='border border-gray-300'>
              <td className='border border-black p-2'>{entry.ip}</td>
              <td className='border border-black p-2'>{entry.name}</td>
              <td className='border border-black p-2'>{entry.date}</td>
              <td className='border border-black p-2'>{entry.date}</td>
              <td className='border border-black p-2'>1</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className='text-center text-gray-500 py-4'>
              No matching IPs found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

{/* Pagination (outside scroll area) */}
{totalPages > 1 && (
  <div className='flex justify-center gap-4 mt-4'>
    <button
      onClick={handlePrevPage}
      disabled={currentPage === 1}
      className='px-3 py-1 bg-gray-200 rounded disabled:opacity-50'
    >
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      className='px-3 py-1 bg-gray-200 rounded disabled:opacity-50'
    >
      Next
    </button>
  </div>
)}

    </section>
  );
}
