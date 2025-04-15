import Nav from '../Components/Nav'
import bulb from '../../public/bulb.jpg'
import Whoarewe from './Whoarewe'
import OurServices from './OurServices'

import { useState, useEffect } from 'react';


function Home() {

        const [visible, setVisible] = useState(false);
      
        useEffect(() => {
          // Trigger fade-in after mount
          const timer = setTimeout(() => setVisible(true), 500);
          return () => clearTimeout(timer);
        }, []);
      
  return (
    <div>
      <Nav />
      <div className='container  mx-auto flex flex-col items-center justify-center h-screen bg-black '>
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 -mt-40">
  {/* Image Section */}
  <div className="relative h-100 w-100 hidden md:block">
  {/* Background Blur Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full blur-xl"></div>

  {/* Image Section */}
  <img
      src={bulb}
      alt="Fancy Labs"
      className={`h-100 w-100 object-cover rounded-xl -mt-12 shadow-xl relative z-10 transition-opacity duration-1200 ease-in animate-pulse ${
        visible ? 'opacity-35' : 'opacity-15'
      }`}
    />
</div>


  {/* Text Section */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left mt-20">
  <p className="text-lg text-gray-200 max-w-xl -mt-30 text-center md:text-left leading-relaxed">
    <h1 className='flex center-align justify-center text-2xl font-mono '>Welcome to Fancy Labs</h1>
    <span className="font-semibold text-yellow-400 text-3xl flex center-align justify-center lg:text-4xl">Simply the best at what we do.</span>

    <p className='text-sm text-gray-400 p-10'>
    Trusted by visionary startups and forward-thinking brands, we deliver mobile experiences that lead, inspire, and outperform.
    </p>
  </p>
  </div>
</div>

      </div>
      <div className='-mt-50 h-100'>
    <Whoarewe />
    </div>
    <OurServices />
    </div>
  );
}

export default Home;
