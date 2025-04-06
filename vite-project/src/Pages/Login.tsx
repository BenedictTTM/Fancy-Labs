import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Components/firebase';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User logged in:', userCredential.user);

      if (userCredential.user) {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          uid: userCredential.user.uid,
        });
      }

      navigate('/home');
    } catch (error: any) {
      setError(error.message);
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left Panel */}
      <div className='bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 w-1/2 p-10 hidden md:block'>
        <div className='flex flex-col justify-center items-center h-full'>
          <p className='text-3xl md:text-5xl mb-10 font-bold text-center text-white mt-20'>
            Welcome Back
          </p>
          <p className='text-center text-white mb-40 max-w-md'>
            To keep connected with us, please login with your personal info.
          </p>
          <button
            onClick={() => navigate('/')}
            className='bg-transparent hover:bg-white/10 mb-20 rounded-full text-white py-3 px-16 border-2 border-white hover:text-white shadow hover:shadow-xl transition-all duration-300'>
            Sign Up
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className='flex justify-center items-center bg-white w-full md:w-1/2'>
        <form onSubmit={handleSubmit} className='w-full max-w-md px-8 py-10'>
          <h2 className='text-3xl text-blue-700 md:text-4xl mb-6 font-bold text-center'>
            Login Account
          </h2>

          <div className='flex justify-center mb-8'>
            <div className="flex gap-4">
              <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-200">
                <FaFacebookF className="text-gray-600 text-lg" />
              </button>
              <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-200">
                <FaGoogle className="text-gray-600 text-lg" />
              </button>
              <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-200">
                <FaLinkedinIn className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>

          <p className='text-gray-500 text-sm mb-8 text-center'>
            Or use your email for registration
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className='space-y-5'>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              required
              minLength={6}
            />

            <div className='w-full flex justify-center mt-8'>
              <button
                type="submit"
                className='w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]'
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
