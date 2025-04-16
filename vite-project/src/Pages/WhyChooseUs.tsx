import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, CheckCircle, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black px-4 py-20 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center md:text-left mb-16 transition-all duration-1000 transform ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="inline-block text-yellow-400 font-medium px-4 py-1 rounded-full bg-yellow-400/10 mb-4">Features</p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Why Choose <span className="text-yellow-400">Us</span>?
          </h2>
          
          <p className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto md:mx-0">
            We don't just build software—we craft digital experiences that transform businesses. Our solutions blend cutting-edge technology with visionary thinking to empower your brand's journey into the future.
          </p>
        </div>

        <div className="space-y-12">
          <AnimatedFeatureItem 
            icon={<MessageCircle className="w-6 h-6 text-yellow-400" />}
            title="Excellence in Every Line of Code"
            description="Our passionate team of digital craftsmen doesn't settle for ordinary. We push boundaries, challenge conventions, and deliver solutions that don't just meet expectations—they redefine them. When you choose us, you're choosing a partner obsessed with your success."
            delay={0}
          />
          
          <AnimatedFeatureItem 
            icon={<CheckCircle className="w-6 h-6 text-yellow-400" />}
            title="Built on Trust, Powered by Innovation"
            description="Behind every pixel and every function is our unwavering commitment to quality. We build systems that stand the test of time—robust, secure, and adaptable. Your vision deserves nothing less than absolute reliability and forward-thinking execution."
            delay={200}
          />
          
          <AnimatedFeatureItem 
            icon={<Clock className="w-6 h-6 text-yellow-400" />}
            title="Your Timeline Is Our Promise"
            description="In the digital realm, momentum matters. We respect your urgency and understand that opportunity waits for no one. Our agile approach ensures your project launches right when you need it—without compromising the exceptional quality that defines our work."
            delay={400}
          />
        </div>
        
        <AnimatedButton />
      </div>
    </div>
  );
}

function AnimatedFeatureItem({ icon, title, description, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={featureRef}
      className={`flex items-start group transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="relative">
        <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full group-hover:h-3/4 transition-all duration-300"></div>
        <div className="ml-6 flex items-start">
          <div className="rounded-full bg-gray-800 p-4 mr-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 group-hover:bg-yellow-900/60 transition-colors duration-300">
            {icon}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3 group-hover:text-yellow-400 transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
            <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group-hover:underline">
              Discover more <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedButton() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={buttonRef} 
      className={`mt-16 text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-medium rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/20 transform hover:-translate-y-1">
        Begin Your Journey <ArrowRight className="inline ml-2 w-4 h-4" />
      </button>
    </div>
  );
}