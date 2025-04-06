import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../Components/TopNavBar';
import AccountDetails from './AccountDetails';

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity for fade effect
  const bgOpacity = Math.max(0, 1 - scrollY / 300); // Fades over 300px scroll

  return (
    <div className="relative min-h-screen">
      <TopNavBar />
      
      {/* Background Image Section with Fade Effect */}
      <div 
        className="w-full h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/public/Push.png')", // Direct public path
          opacity: bgOpacity,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        <img src="/Lg.jpg" alt="" className='w-full h-screen' />
        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
          <div className="text-center p-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome Home</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Experience the love and power of God at Life Gate Assemblies of God
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 bg-white">
        {/* Welcome Card */}
        <div className="max-w-6xl mx-auto p-6 -mt-20 mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg shadow-lg p-8">
            <div className="flex-1 text-center md:text-left space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Welcome To</h3>
              <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 uppercase leading-tight">
                Life Gate<br />Assemblies<br />of God
              </h1>
              <p className="text-2xl font-bold text-gray-800 mt-4 border-t-2 border-red-300 pt-4">
                PUSH 2025
              </p>
              <button 
                className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => navigate('/new-members')}
              >
                I'M NEW!
              </button>
            </div>

            <div className="flex-1 flex justify-center">
              <img 
                src="/Push.jpg" // Direct public path
                alt="Life Gate Assemblies of God Church Event" 
                className="w-full hover:scale-103 transform duration-600 max-w-md object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Additional Images Section */}
       

        <AccountDetails />
      </div>
    </div>
  );
}

export default Home;