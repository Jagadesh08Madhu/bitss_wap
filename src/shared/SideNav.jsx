import React from 'react';
import { MdLockPerson } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';

export default function SideNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className='bg-[#1D2327] h-screen w-[200px] flex flex-col items-center py-10'>
      {/* Header */}
      <div className='flex items-center gap-1 text-white text-lg w-full justify-center py-2 bg-[#2271B1]'>
        <MdLockPerson />
        <p>Bitss Wap</p>
      </div>

      {/* Navigation */}
      <div className='mt-5 w-full'>
        <ul className='flex flex-col gap-5 pl-6'>
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer ${isActive("/") ? "text-white font-semibold" : "text-gray-400"}`}
          >
            Settings
          </li>
          <li
            onClick={() => navigate("/blacklistIP")}
            className={`cursor-pointer ${isActive("/blacklistIP") ? "text-white font-semibold" : "text-gray-400"}`}
          >
            Blacklist IP
          </li>
          <li
            onClick={() => navigate("/whitelistIP")}
            className={`cursor-pointer ${isActive("/whitelistIP") ? "text-white font-semibold" : "text-gray-400"}`}
          >
            Whitelist IP
          </li>
          <li
            onClick={() => navigate("/adminLoginIP")}
            className={`cursor-pointer ${isActive("/adminLoginIP") ? "text-white font-semibold" : "text-gray-400"}`}
          >
            Admin Login IP
          </li>
          <li
            onClick={() => navigate("/loggedInUsers")}
            className={`cursor-pointer ${isActive("/loggedInUsers") ? "text-white font-semibold" : "text-gray-400"}`}
          >
            Logged In Users
          </li>
        </ul>
      </div>
    </nav>
  );
}
