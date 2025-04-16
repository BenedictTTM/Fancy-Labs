
import { Smartphone, Globe, Droplet } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description:
      'Transform user experiences with intuitive, seamless, and visually engaging designs that drive results.',
    icon: <Droplet size={32} className="animate-pulse" />,
  },
  {
    title: 'Mobile Apps',
    description:
      'Build high-performance, scalable mobile applications for both Android and iOS platforms with modern design and smooth user experience.',
    icon: <Smartphone size={32} className="animate-pulse" />,
  },
  {
    title: 'Web Apps',
    description:
      'Develop fast, responsive, and secure web applications tailored to your business needs using the latest technologies.',
    icon: <Globe size={32} className="animate-pulse" />,
  },
];

function OurServices() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] text-white text-center overflow-hidden">
      <div className="mb-12 transform transition-all duration-700 hover:scale-105">
        <span className="text-yellow-500 font-semibold bg-yellow-900/20 px-3 py-1 rounded-full text-sm opacity-0 animate-fadeIn">
          Fancy Labs Ghana Limited
        </span>
        <h1 className="text-4xl font-bold text-yellow-400 mt-4 opacity-0 animate-slideUp">Services we offer</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto opacity-0 animate-slideUp animation-delay-300">
          We innovate across diverse fields, harnessing the latest technologies to deliver impactful, future-ready solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:shadow-amber-200 shadow-yellow-500/20 transform transition-all duration-500 ease-in-out border border-gray-700 opacity-0 animate-fadeIn hover:-translate-y-2
              ${idx === 0 ? 'lg:rotate-[-5deg] lg:h-96 animation-delay-100' : ''}
              ${idx === 1 ? 'my-6 z-10 lg:h-96 animation-delay-300' : ''}
              ${idx === 2 ? 'lg:rotate-[5deg] mt-4 lg:h-96 animation-delay-500' : ''}`}
          >
            <div className="bg-yellow-900/30 p-5 rounded-full mb-4 text-yellow-400 transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-3 px-4">{service.description}</p>
            <a
              href="#"
              className="text-yellow-400 font-medium group inline-flex items-center relative overflow-hidden"
            >
              <span className="relative z-10">Learn more</span> 
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-16 opacity-0 animate-fadeIn animation-delay-700">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative overflow-hidden group transition-all duration-300 border border-yellow-500 hover:border-2 text-yellow-400 font-semibold active:scale-95"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0))',
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
          }}
        >
          <span className="relative z-10">Our Services</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </a>
      </div>

      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}

export default OurServices;