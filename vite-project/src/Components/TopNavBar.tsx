import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../Components/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import AG from "../../public/AG.png";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';


const TopNavBar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        // Use requestAnimationFrame for smoother scroll handling
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', scrollHandler, { passive: true });
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrolled]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully");
            navigate('/login');
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Failed to log out");
        }
    };

    return (
        <div className="fixed w-full top-0 z-50">
            {/* Contact bar - positioned absolutely within fixed container */}
            <div 
                className={`bg-gray-100 w-full transition-all duration-300 ease-in-out ${
                    scrolled ? 'opacity-0 h-0 py-0' : 'opacity-100 h-auto py-2'
                }`}
            >
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span className="font-medium">LifeGate Assemblies of God</span>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                        <a href="mailto:LifeGateAssembliesOfGod@gmail.com" className="hover:text-blue-600 transition-colors">
                            LifeGateAssembliesOfGod@gmail.com
                        </a>
                        <a href="tel:618-443-3521" className="hover:text-blue-600 transition-colors">
                            618-443-3521
                        </a>
                    </div>
                </div>
            </div>

            {/* Main nav bar - always visible */}
            <nav 
                className={`bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${
                    scrolled ? '' : 'mt-0'
                }`}
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Church branding */}
                        <div className="flex items-center gap-4">
                            <img 
                                src={AG} 
                                alt="LifeGate Assemblies of God" 
                                className="w-10 h-10 hover:scale-105 transition-transform duration-300" 
                            />
                            <div className="text-center md:text-left">
                                <h1 className="text-lg font-bold text-gray-800">
                                    ASSEMBLIES OF GOD LIFE GATE CHAPEL
                                </h1>
                                <p className="text-sm italic text-gray-600">
                                    A congregation of the ASSEMBLIES OF GOD CHURCH (A.G)
                                </p>
                            </div>
                        </div>

                        {/* Navigation links */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={handleLogout}
                                className="font-medium text-gray-800 hover:text-red-600 transition-colors"
                            >
                                Logout
                            </button>
                            <Link 
                                to="/members" 
                                className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                Members
                            </Link>
                            <Link 
                                to="/more" 
                                className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800 transition-colors" />

                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNavBar;