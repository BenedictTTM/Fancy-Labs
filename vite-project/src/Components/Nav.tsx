import React from 'react';
import fancy from '../../public/Fancy Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative bg-black border-b border-gray-50 px-4 py-3 z-40">
      {/* Glowing background */}
      <div className="absolute top-0 left-0 h-20 w-20 rounded-full bg-red-500 blur-3xl opacity-30 animate-pulse z-0" />

      {/* Navbar container */}
      <div className="relative flex items-center justify-between z-10 max-w-7xl mx-auto">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
  <img src={fancy} alt="Fancy Labs" className="h-12" />
  <div className='border border-l border-amber-50 h-10'></div>
  <h1 className="text-3xl font-bold  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text whitespace-nowrap animate-textShimmer relative">
    <span className="bg-clip-text font-normal text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      Ideas Get
    </span> Fancy
    <span className="absolute top-0 left-0 w-full h-full shimmer-overlay"></span>
  </h1>

  <style jsx>{`
    .animate-textShimmer {
      background-size: 200% auto;
      animation: shimmer 5s linear infinite;
    }

    @keyframes shimmer {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    .shimmer-overlay {
      pointer-events: none;
    }
  `}</style>
</div>


        {/* Desktop Nav */}
        <div className="w-full flex justify-center">
  <nav className="hidden md:flex items-center space-x-8 text-white font-thin">
    <a href="#home" className="hover:text-yellow-100 transition duration-300">Home</a>
    <a href="#about" className="hover:text-yellow-100 transition duration-300">About</a>
    <a href="#services" className="hover:text-yellow-100 transition duration-300">Services</a>
    <a href="#contact" className="hover:text-yellow-100 transition duration-300">Contact</a>
    <a
      href="#projects"
      className="bg-gradient-to-r from-amber-300 to-yellow-400 text-gray-900 font-semibold px-5 py-1.5 rounded-lg shadow-md  "
    >
      Our Work
    </a>
  </nav>
</div>



        {/* Mobile Hamburger Icon */}
        <FaBars
          className="text-xl text-white cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Mobile Nav Slide-In */}
      <div
        className={`fixed flex flex-col  justify-center  items-center top-0 right-0 w-full h-screen bg-black text-white p-6 z-50 transition transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
          <img src={fancy} alt="Fancy Labs" className="h-22 " />
        <div className="flex justify-between items-center mb-6 ">
        <div className="flex items-center space-x-2">
  <div className="flex flex-col items-center text-center">
    <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text animate-textShimmer relative">
      Fancy Labs
      <span className="absolute top-0 left-0 w-full h-full shimmer-overlay"></span>
    </h1>
    <p className="text-gray-400 font-thin text-sm">
      The best mobile app development company
    </p>
  </div>

  <style jsx>{`
    .animate-textShimmer {
      background-size: 200% auto;
      animation: shimmer 6s linear infinite;
    }

    @keyframes shimmer {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    .shimmer-overlay {
      pointer-events: none;
    }
  `}</style>
</div>

          <FaTimes className="text-2xl cursor-pointer absolute top-4 right-4" onClick={() => setIsOpen(false)} />
        </div>

        <ul className="flex flex-col space-y-6 text-lg">
  <li><a href="#home" className="hover:border-b hover:border-pink-300 pb-1">Home</a></li>
  <li><a href="#about" className="hover:border-b hover:border-pink-300 pb-1">About</a></li>
  <li><a href="#services" className="hover:border-b hover:border-pink-300 pb-1">Services</a></li>
  <li><a href="#contact" className="hover:border-b hover:border-pink-300 pb-1">Contact</a></li>
  <li><a href="#projects" className="hover:border-b hover:border-pink-300 pb-1">Our Work</a></li>
</ul>

      </div>
    </div>
  ) 
}

export default Nav;
