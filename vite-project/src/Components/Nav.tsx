import React from 'react'
import fancy from '../../public/FancyLabs.png'
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
    // State to manage the navigation menu visibility
    const [isOpen, setIsOpen] = React.useState(false);
  return (
<div className="relative flex items-center space-x-3 container mx-auto px-4 bg-black">
  {/* Glowing background */}
  <div className="h-20 w-20 absolute rounded-full bg-red-500 blur-3xl opacity-30 animate-pulse"></div>

  {/* Image */}
  
  <img src={fancy} alt="" className="h-20 z-10" />

  {/* Text next to image */}
  <h1 className="text-3xl font-bold z-10 bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
      Fancy
    </span>{" "}
    Labs
  </h1>
  <nav className='hidden md:flex md:items-center md:space-x-4'>
  <ul className="flex space-x-4 text-white font-bold z-10">

    <li><a href="#home" className="hover:underline">Home</a></li>
    <li><a href="#about" className="hover:underline">About</a></li>
    <li><a href="#services" className="hover:underline">Services</a></li>
    <li><a href="#contact" className="hover:underline">Contact</a></li>
  </ul>
</nav>

  <FaBars className="text-xl text-white z-10 justify-between ml-auto " />

  {/* Navigation menu */}
</div>

  )
}

export default Nav