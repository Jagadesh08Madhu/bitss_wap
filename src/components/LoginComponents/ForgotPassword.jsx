import React, { useState } from 'react';

export default function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Forgot password requested for:', username);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500); // Optional: mimic async delay
  };

  return (
    <section>
      <div className='flex justify-center items-center h-screen'>
        <div className='border w-full lg:w-2/4 shadow-lg py-10 rounded-2xl flex gap-5 items-center justify-center'>
          <div className='flex flex-col gap-5 w-full px-5 lg:px-0 py-14 lg:w-1/2'>

            <div className='text-center'>
              <h1 className='text-2xl font-semibold italic'>bfin it</h1>
              <p className='text-red-500 font-medium'>Private Limited</p>
            </div>

            {submitted ? (
              <>
                <div className='bg-white border-l-4 border-[#2271B1] shadow p-5'>
                  <p>
                    Check your email for the confirmation link, then visit the{' '}
                    <a href="/login" className='text-[#2271B1] underline'>login page</a>.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className='bg-gray-100 px-3 py-2 border-l-4 border-[#2271B1]'>
                  <p>
                    Please enter your username or email address. You will receive an email message with instructions on how to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="username">Username or Email Address</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='py-1 px-2 border-black w-full cursor-pointer border focus:border-2 transition-all ease-in-out duration-500 rounded-md focus:border-[#2271B1] outline-none'
                      required
                    />
                  </div>

                  <div className='flex md:justify-end'>
                    <button type="submit" className='bg-[#2271B1] w-fit text-white px-4 rounded-lg py-1'>
                      Get New Password
                    </button>
                  </div>
                </form>

                <div className='flex flex-col gap-3'>
              <p className='cursor-pointer text-[#2271B1]' onClick={() => window.location.href = '/login'}>
                Log In
              </p>
              <p className='cursor-pointer'><span className='mr-1'>←</span>Go to Beta Bitts</p>
            </div>
              </>
            )}

            
          </div>
        </div>
      </div>
    </section>
  );
}
