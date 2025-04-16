import React, { useEffect, useState } from 'react'
import womantyping from '../../public/womantyping.jpg'

function Whoarewe() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Initial visibility animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Scroll event handler
    const handleScroll = () => {
      // You can adjust this threshold value to control when the component disappears
      const scrollThreshold = 1200; // Example value in pixels
      
      if (window.scrollY > scrollThreshold) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`relative w-full h-[550px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl my-16 transition-all duration-700 ${isHidden ? 'opacity-0 transform translate-y-20  pointer-events-none' : 'opacity-100'}`}
    >
      {/* Rest of your component remains the same */}
      {/* Background Image with zoom effect */}
      <img
        src={womantyping}
        alt="Professional woman typing on laptop"
        className="w-full h-full object-cover object-center transition-transform duration-10000 hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent rounded-xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-[40%] w-20 h-20 rounded-full border border-yellow-600/20 opacity-60"></div>
      <div className="absolute bottom-10 left-[30%] w-16 h-16 rounded-full border border-yellow-600/20 opacity-40"></div>
      
      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-center text-left text-white p-8 md:p-12 w-full md:w-3/5 lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}`}>
        {/* Content remains the same */}
        <div className="relative">
          {/* Subtitle with line */}
          <div className="flex items-center mb-2">
            <div className="w-6 h-px bg-yellow-600 mr-3"></div>
            <h3 className="text-sm uppercase tracking-wider font-medium text-yellow-100">Who we are</h3>
          </div>
          
          {/* Main heading with subtle glow effect */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-500 my-3 font-sans leading-tight drop-shadow-lg">
            You found the best<br className="hidden md:block" /> in the business
          </h1>
          
          {/* Description with improved typography */}
          <p className="mb-6 text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
            At Fancy Labs, we craft custom software that's smart, scalable,
            and built to last. Based in Accra and serving clients worldwide,
            we blend cutting-edge tech with creative thinking to deliver
            solutions that exceed expectations — every time.
          </p>
          
          {/* Enhanced button with animation */}
          <button className="group relative bg-transparent border text-sm px-6 py-3 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md overflow-hidden shadow-lg shadow-yellow-900/20 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
            <span className="relative z-10">Meet The Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            {/* Animated arrow */}
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          {/* Decorative stats */}
          <div className="mt-8 flex space-x-6 md:space-x-12">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">50+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">15+</p>
              <p className="text-xs text-gray-400">Team members</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">8+</p>
              <p className="text-xs text-gray-400">Years</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side decorative element */}
      <div className="absolute right-10 bottom-10 hidden md:block">
        <div className="w-32 h-32 border border-yellow-600/30 rounded-full"></div>
        <div className="w-20 h-20 border border-yellow-500/20 rounded-full absolute top-6 left-6"></div>
      </div>
    </div>
  )
}

export default Whoarewe