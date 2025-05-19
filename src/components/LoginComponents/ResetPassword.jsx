import React, { useState } from 'react';

export default function ResetPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [error, setError] = useState('');

  // Password strength checker
  const checkStrength = (password) => {
    let score = 0;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score >= 4) return 'Strong';
    if (score >= 2) return 'Medium';
    return 'Weak';
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setNewPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let pwd = '';
    for (let i = 0; i < 14; i++) {
      pwd += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setNewPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (strength === 'Weak') {
      setError('Please use a stronger password.');
      return;
    }

    try {
      // 🔁 Replace with real API call
      console.log('Resetting password to:', newPassword);

      // Simulate API success
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <div className="border w-full lg:w-2/4 shadow-lg py-10 rounded-2xl flex gap-5 items-center justify-center">
          <div className="flex flex-col gap-5 w-full px-5 lg:px-0 py-14 lg:w-1/2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">BFINIT</h1>
              <p className="text-red-500 font-medium">Private Limited</p>
            </div>

            {submitted ? (
              <div className="bg-white border-l-4 border-[#2271B1] shadow p-5">
                <p>
                  Your password has been reset.{' '}
                  <a href="/login" className="text-[#2271B1] underline">
                    login page
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <div className="bg-gray-100 px-3 py-2 border-l-4 border-[#2271B1]">
                  <p>Enter your new password below or generate one.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">New password</label>
                    <input
                      type="text"
                      id="password"
                      value={newPassword}
                      onChange={handlePasswordChange}
                      className="py-1 px-2 border-black w-full cursor-pointer border focus:border-2 transition-all ease-in-out duration-500 rounded-md focus:border-[#2271B1] outline-none"
                      required
                    />
                  </div>

                  {newPassword && (
                    <div
                      className={`text-center border py-1 rounded-lg ${
                        strength === 'Strong'
                          ? 'bg-green-300'
                          : strength === 'Medium'
                          ? 'bg-yellow-300'
                          : 'bg-red-300'
                      }`}
                    >
                      <p>{strength}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm">
                      Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like <code>! " ? $ % ^ & ( )</code>.
                    </p>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <div className="flex md:justify-around gap-3">
                    <button
                      type="button"
                      onClick={generatePassword}
                      className="bg-transparent border border-[#2271b1] text-[#2271b1] w-fit px-4 rounded-lg py-1"
                    >
                      Generate Password
                    </button>
                    <button
                      type="submit"
                      className="bg-[#2271B1] w-fit text-white px-4 rounded-lg py-1"
                    >
                      Save password
                    </button>
                  </div>
                </form>

                <div className="flex flex-col gap-3">
                  <p
                    className="cursor-pointer text-[#2271B1]"
                    onClick={() => (window.location.href = '/login')}
                  >
                    Log In
                  </p>
                </div>
              </>
            )}

            <p className="cursor-pointer">
              <span className="mr-1">←</span>Go to Beta Bitts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
