import React, { useState, useCallback } from 'react';
import fancy from '../../public/FancyL.png';
import { FaBars, FaTimes } from 'react-icons/fa';

// Extracted styles to avoid inline style JSX
const shimmerStyles = `
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
`;

// Extracted Navigation Links component for reusability
const NavLinks = ({ isMobile, closeMenu }) => {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#contact", text: "Contact" },
  ];
  
  const handleLinkClick = useCallback(() => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  }, [isMobile, closeMenu]);

  return (
    <>
      {links.map((link) => (
        <a 
          key={link.href}
          href={link.href} 
          className={isMobile 
            ? "hover:border-b hover:border-amber-300 pb-1" 
            : "hover:text-yellow-100 transition duration-300"
          }
          onClick={handleLinkClick}
        >
          {link.text}
        </a>
      ))}
      <a
        href="#projects"
        className={isMobile 
          ? "hover:border-b hover:border-amber-200 pb-1"
          : "bg-gradient-to-r from-amber-300 to-yellow-400 text-gray-900 font-semibold px-5 py-1.5 rounded-lg shadow-md"
        }
        onClick={handleLinkClick}
      >
        Our Work
      </a>
    </>
  );
};

// FancyTitle component for reusability
const FancyTitle = ({ text, preText = "", className = "" }) => (
  <h1 className={`text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text animate-textShimmer relative ${className}`}>
    {preText && (
      <span className="bg-clip-text font-normal text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        {preText}{" "}
      </span>
    )}
    {text}
    <span className="absolute top-0 left-0 w-full h-full shimmer-overlay"></span>
  </h1>
);

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative bg-black border-b border-gray-50 px-4 py-3 z-40">
      {/* Add global styles */}
      <style dangerouslySetInnerHTML={{ __html: shimmerStyles }} />
      
      {/* Glowing background */}
      <div className="absolute top-0 left-0 h-20 w-20 rounded-full bg-red-500 blur-3xl opacity-30 animate-pulse z-0" />

      {/* Navbar container */}
      <div className="relative flex items-center justify-between z-10 max-w-7xl mx-auto">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={fancy} alt="Fancy Labs" className="h-12" />
          <div className="border border-l border-amber-50 h-10"></div>
          <FancyTitle preText="Ideas Get" text="Fancy" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-full justify-center">
          <nav className="flex items-center space-x-8 text-white font-thin">
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Hamburger Icon */}
        <FaBars
          className="text-xl text-white cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu" 
        />
      </div>

      {/* Mobile Nav Slide-In */}
      <div
        className={`fixed flex flex-col justify-center items-center top-0 right-0 w-full h-screen bg-black text-white p-6 z-50 transition transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        aria-hidden={!isOpen}
      >
        <FaTimes 
          className="text-2xl cursor-pointer absolute top-4 right-4" 
          onClick={closeMenu} 
          aria-label="Close menu"
        />
        
        <img src={fancy} alt="Fancy Labs" className="h-20 mb-4" />
        
        <div className="flex flex-col items-center mb-8 text-center">
          <FancyTitle text="Fancy Labs" />
          <p className="text-gray-400 font-thin text-sm mt-2">
            The best mobile app development company
          </p>
        </div>

        <ul className="flex flex-col space-y-6 text-lg">
          <NavLinks isMobile={true} closeMenu={closeMenu} />
        </ul>
      </div>
    </div>
  );
}

export default Nav;