import { useEffect, useState } from 'react'
import womantyping from '../../public/womantyping.jpg'

function Whoarewe() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div 
      className={`relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl my-8 sm:my-12 md:my-16 bg-black transition-all duration-700 ${
     'opacity-100'
      }`}
    >
      {/* Background Image with zoom effect */}
      <img
        src={womantyping}
        alt="Professional woman typing on laptop"
        className={`w-full h-full object-cover object-center transition-all duration-500 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        onLoad={() => setImageLoaded(true)}
        loading="eager"
        decoding="async"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent rounded-xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-[40%] w-20 h-20 rounded-full border border-yellow-600/20 opacity-60"></div>
      <div className="absolute bottom-10 left-[30%] w-16 h-16 rounded-full border border-yellow-600/20 opacity-40"></div>
      
      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-center text-left text-white p-4 sm:p-6 md:p-8 lg:p-12 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}`}>
        {/* Content remains the same */}
        <div className="relative">
          {/* Subtitle with line */}
          <div className="flex items-center mb-2">
            <div className="w-4 sm:w-6 h-px bg-yellow-600 mr-2 sm:mr-3"></div>
            <h3 className="text-xs sm:text-sm uppercase tracking-wider font-medium text-yellow-100">Who we are</h3>
          </div>
          
          {/* Main heading with subtle glow effect */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-500 my-2 sm:my-3 font-sans leading-tight drop-shadow-lg">
            You found the best<br className="hidden sm:block" /> in the business
          </h1>
          
          {/* Description with improved typography */}
          <p className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
            At Fancy Labs, we craft custom software that's smart, scalable,
            and built to last. Based in Accra and serving clients worldwide,
            we blend cutting-edge tech with creative thinking to deliver
            solutions that exceed expectations — every time.
          </p>
          
          {/* Enhanced button with animation */}
          <button className="group relative bg-transparent border text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-3 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md overflow-hidden shadow-lg shadow-yellow-900/20 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
            <span className="relative z-10">Meet The Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            {/* Animated arrow */}
          </button>
          
          {/* Decorative stats */}
          <div className="mt-6 sm:mt-8 flex space-x-4 sm:space-x-6 md:space-x-12">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">50+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">15+</p>
              <p className="text-xs text-gray-400">Team members</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">8+</p>
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