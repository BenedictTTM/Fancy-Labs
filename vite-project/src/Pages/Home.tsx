
import Nav from '../Components/Nav';
import Whoarewe from './Whoarewe';
import OurServices from './OurServices';
import WhyChooseUs from './WhyChooseUs';
import ButtonDetails from './ButtonDetails';
import bulb from '../../public/bulb.jpg'; // If this throws an error, consider importing it with `require` or use `next/image` in Next.js

function Home() {
 
  return (
    <div>
      <Nav />
      <div className='container mx-auto flex flex-col items-center justify-center bg-black min-h-screen h-180'>
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 -mt-40 relative">

          {/* Right side background styling - decorative elements */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 hidden md:block">
            <div className="absolute right-20 top-10 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 blur-2xl"></div>
            <div className="absolute right-48 top-32 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 blur-xl"></div>
            <div className="absolute right-8 bottom-20 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 blur-3xl"></div>

            {/* Floating tech symbols */}
            <div className="absolute right-40 top-20 text-yellow-300 opacity-20 text-6xl animate-float-slow">{`{ }`}</div>
            <div className="absolute right-20 bottom-40 text-yellow-300 opacity-20 text-4xl animate-float-medium">{`</>`}</div>
            <div className="absolute right-60 bottom-20 text-yellow-300 opacity-20 text-5xl animate-float-fast">{`()`}</div>

            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          </div>

          {/* Image Section */}
          <div className="relative h-100 w-100 md:w-130 hidden md:block">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600/20 to-yellow-300/20 rounded-full blur-2xl"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full blur-xl"></div>

            <img
              src={bulb}
              alt="Fancy Labs"
              className="h-100 w-100 object-cover rounded-xl -mt-12 shadow-xl relative z-10 transition-transform duration-700 animate-pulse-slow"
            />

            {/* Decorative rings */}
            <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-2 border border-yellow-500/20 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-4 border border-yellow-600/15 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-6 border-dashed border border-yellow-300/30 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-20 z-10 overflow-hidden">
            <div className="max-w-xl relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/405 to-transparent blur-lg"></div>

              <h1 className="flex justify-center md:justify-start text-yellow-50 text-2xl font-mono opacity-0 animate-fadeIn relative z-10">
                Welcome to <span className="ml-2 relative ">
                  Fancy Labs
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></span>
                </span>
              </h1>

              <span className="font-semibold text-yellow-400 text-3xl flex justify-center md:justify-start lg:text-4xl mt-4 opacity-0 animate-slideIn animation-delay-300 drop-shadow-lg">
                Simply the best at what we do.
              </span>

              <p className="text-sm text-gray-400 p-6 md:pl-0 md:pr-6 md:py-4 opacity-0 animate-fadeUp animation-delay-600 leading-relaxed">
                Trusted by visionary startups and forward-thinking brands, we deliver mobile experiences that lead, inspire, and outperform.
              </p>

              {/* Call to action button */}
              <div className="mt-6 flex justify-center md:justify-start opacity-0 animate-fadeUp animation-delay-900">
                <a
                  href="#services"
                  className="px-6 py-2 bg-gradient-to-r from-yellow-700/30 to-yellow-500/30 border border-yellow-500/70 rounded-full text-yellow-400 hover:text-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
                >
                  Explore our work
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <style >{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }

              @keyframes slideIn {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
              }

              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes float-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }

              @keyframes float-medium {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }

              @keyframes float-fast {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }

              @keyframes ping-slow {
                0% { transform: scale(1); opacity: 0.3; }
                70% { transform: scale(1.1); opacity: 0.1; }
                100% { transform: scale(1); opacity: 0.3; }
              }

              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }

              @keyframes pulse-slow {
                0%, 100% { opacity: 0.35; }
                50% { opacity: 0.25; }
              }

              .animate-fadeIn {
                animation: fadeIn 0.8s ease-out forwards;
              }

              .animate-slideIn {
                animation: slideIn 0.8s ease-out forwards;
              }

              .animate-fadeUp {
                animation: fadeUp 0.8s ease-out forwards;
              }

              .animate-float-slow {
                animation: float-slow 8s ease-in-out infinite;
              }

              .animate-float-medium {
                animation: float-medium 6s ease-in-out infinite;
              }

              .animate-float-fast {
                animation: float-fast 4s ease-in-out infinite;
              }

              .animate-ping-slow {
                animation: ping-slow 4s ease-in-out infinite;
              }

              .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
              }

              .animate-pulse-slow {
                animation: pulse-slow 3s ease-in-out infinite;
              }

              .animation-delay-300 {
                animation-delay: 0.3s;
              }

              .animation-delay-600 {
                animation-delay: 0.6s;
              }

              .animation-delay-900 {
                animation-delay: 0.9s;
              }

              .bg-circuit-pattern {
                background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' ... %3E");
              }
            `}</style>
          </div>
        </div>
      </div>

      <div className='-mt-50 h-100'>
        <Whoarewe />
      </div>
      <OurServices />
      <WhyChooseUs />
      <ButtonDetails />
    </div>
  );
}

export default Home;
