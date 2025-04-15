import React from 'react';
import { Smartphone, Globe, Droplet } from 'lucide-react'; // Changed icons for Mobile and Web

const services = [
  {
    title: 'UI/UX Design',
    description:
      'Transform user experiences with intuitive, seamless, and visually engaging designs that drive results.',
    icon: <Droplet size={32} />,
  },
  {
    title: 'Mobile Apps',
    description:
      'Build high-performance, scalable mobile applications for both Android and iOS platforms with modern design and smooth user experience.',
    icon: <Smartphone size={32} />,
  },
  {
    title: 'Web Apps',
    description:
      'Develop fast, responsive, and secure web applications tailored to your business needs using the latest technologies.',
    icon: <Globe size={32} />,
  },
];

function OurServices() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] text-white text-center">
    <div className="mb-8">
      <span className="text-yellow-500 font-semibold bg-yellow-900/20 px-3 py-1 rounded-full text-sm">
        Polymorph Labs Ghana Limited
      </span>
      <h1 className="text-4xl font-bold text-yellow-400 mt-4">Services we offer</h1>
      <p className="text-gray-300 mt-2">
        We provide elite services across a variety of fields and use the latest technologies.
      </p>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center bg-[#1f1f1f] p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
        >
          <div className="bg-yellow-900/30 p-5 rounded-full mb-4 text-yellow-400">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">{service.title}</h3>
          <p className="text-gray-400 mb-3 px-4">{service.description}</p>
          <a
            href="#"
            className="text-yellow-400 font-medium hover:underline inline-flex items-center"
          >
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
      ))}
    </div>
  
    <div className="mt-12 ">
    <a 
  href="#" 
  className="w-47  text-yellow-400 font-semibold flex items-center gap-2 px-6 py-1 rounded-full relative overflow-hidden group transition-all duration-300 border border-yellow-500 hover:text-black active:scale-95 active:border-2"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0))',
    boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
  }}
>
  <span>Our Services</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
</a>
    </div>
  </section>
  
  );
}

export default OurServices;
