import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verification, setVerification] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (step === 1) {
        // Check username
        const res = await fetch('https://your-backend-api.com/check-username', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username }),
        });
        const data = await res.json();

        if (res.ok && data.exists) {
          setStep(2);
        } else {
          setError(data.message || 'Username not found');
        }

      } else if (step === 2) {
        // Check password
        const res = await fetch('https://your-backend-api.com/check-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();

        if (res.ok && data.valid) {
          setStep(3);
        } else {
          setError(data.message || 'Incorrect password');
        }

      } else if (step === 3) {
        if (verification === '5678') {
          localStorage.setItem("authToken", "Logged-in");
          navigate('/');
        } else {
          setError('Invalid verification code');
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className='flex justify-center items-center h-screen'>
        <div className='border w-full lg:w-1/3 shadow-lg py-10 rounded-2xl flex gap-5 items-center justify-center'>
          <div className='flex flex-col gap-5 w-full px-5 lg:px-0 py-14 lg:w-1/2'>
            <div className='text-center'>
              <h1 className='text-2xl font-semibold'>BFINIT</h1>
              <p className='text-red-500'>Private Limited</p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              {step >= 1 && (
                <div className='flex flex-col gap-2'>
                  <label htmlFor="username">Username or Email Address</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='py-1 px-2 border-black w-full cursor-pointer border focus:border-2 transition-all ease-in-out duration-500 rounded-md focus:border-[#2271B1] outline-none'
                    required
                    disabled={step > 1}
                  />
                </div>
              )}

              {step >= 2 && (
                <div className='flex flex-col gap-2'>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='py-1 px-2 border-black border cursor-pointer focus:border-2 transition-all ease-in-out duration-500 w-full rounded-md focus:border-[#2271B1] outline-none'
                    required
                    disabled={step > 2}
                  />
                </div>
              )}

              {step === 3 && (
                <div className='flex flex-col gap-2'>
                  <label htmlFor="verification">Verification Code</label>
                  <input
                    type="text"
                    id="verification"
                    value={verification}
                    onChange={(e) => setVerification(e.target.value)}
                    className='py-1 px-2 border-black border focus:border-2 cursor-pointer transition-all ease-in-out duration-500 w-full rounded-md focus:border-[#2271B1] outline-none'
                    required
                  />
                </div>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className='bg-[#2271B1] text-white px-4 rounded-lg py-1 disabled:opacity-50'
                >
                  {isLoading ? 'Please wait...' : step === 1 ? 'Next' : step === 2 ? 'Verify Password' : 'Verify & Login'}
                </button>
              </div>
            </form>

            <div className='flex flex-col gap-3'>
              <p onClick={() => navigate("/forgot-password")} className='cursor-pointer'>Lost Your Password?</p>
              <p className='cursor-pointer'><span className='mr-1'>←</span>Go to Beta Bitss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
