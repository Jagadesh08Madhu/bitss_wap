import React from 'react';
import SideNav from '../../shared/SideNav';

export default function LoggedInUser() {
  const IpEntries = [
    {
      username: "admin",
      email: "nitish@bobosohomail.com",
      display_name: "admin",
      ip: "152.59.218.93",
      wp_id: 1,
      role: "administrator",
      registered_on: "2025-05-05 20:58:35",
      last_login_time: "7 hours ago"
    }
  ];

  return (
    <section className="flex gap-6">
      <div>
        <SideNav />
      </div>

      <div className="py-10 w-full overflow-x-auto">
        <table className="w-full table-auto border border-black text-left text-sm">
          <thead>
            <tr className="border-b border-black text-center">
              <th className="p-2 border border-black">Username</th>
              <th className="p-2 border border-black">Email</th>
              <th className="p-2 border border-black">Display Name</th>
              <th className="p-2 border border-black">IP</th>
              <th className="p-2 border border-black">WP ID</th>
              <th className="p-2 border border-black">Role</th>
              <th className="p-2 border border-black">Registered On</th>
              <th className="p-2 border border-black">Last Login</th>
              <th className="p-2 border border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {IpEntries.map((ipentry, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-2 border border-black">{ipentry.username}</td>
                <td className="p-2 border border-black">{ipentry.email}</td>
                <td className="p-2 border border-black">{ipentry.display_name}</td>
                <td className="p-2 border border-black">{ipentry.ip}</td>
                <td className="p-2 border border-black">{ipentry.wp_id}</td>
                <td className="p-2 border border-black capitalize">{ipentry.role}</td>
                <td className="p-2 border border-black">{ipentry.registered_on}</td>
                <td className="p-2 border border-black">{ipentry.last_login_time}</td>
                <td className="p-2 border border-black">
                  <button className="border border-[#135E96] text-[#135E96] py-1 px-2">
                    Logout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
