import React from 'react';
import { useState, useEffect } from 'react';
import img1 from "./../assets/collegeImg1.svg"
import img2 from "./../assets/collegeImg2.svg"
import { Menu, X, ChevronDown, Search } from 'lucide-react';

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navItems = ["Home", "Dates","Registration", "Program", "Sponsors",]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const slides = [`${img1}`,`${img2}`];

  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 9000);
      return () => clearInterval(timer);
    }, []);  

  return (
    <div className="inter">
      <div className="relative">
        {/* Background Image */}
        {slides.map((slide, index) => (
            <div className={`absolute inset-0 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}>
            <img
                className="w-full h-[400px] sm:h-[400px] md:h-[600px] object-cover"
                src={slide}
                alt="library image"
            />
            <div className="absolute h-[400px] sm:h-[400px] md:h-[600px] inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        ))}

        <div className="md:hidden z-50 absolute right-3 top-3">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 bg-gray-200/30 rounded-md text-white cursor-pointer focus:outline-none"
            >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-30 sm:py-30 md:py-46 sm:px-6 lg:px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            REACS 2025
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white text-center max-w-3xl mx-auto font-semibold">
          The International Conference on Recent Advances in Computing and Systems
          </p>
          <p className="mt-4 text-md md:text-lg text-white text-center font-bold">
          19-20 December 2025 &#x2022; IIITM Gwalior, INDIA
          </p>

          {/* Navbar */}
          <nav className="relative z-10 mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="hidden md:block bg-[#2769b0]/80 rounded-4xl px-4">
                  <div className="flex items-baseline space-x-1">
                    {navItems.map((item) => (
                        <a key={item} href="#" className="px-8 py-2  text-sm font-medium text-white hover:bg-[#2769b0]">{item}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

        {/* Mobile menu */}
    <div 
        className={`fixed inset-y-0 right-0 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-black shadow-lg z-50 text-white overflow-y-auto transition-transform duration-300 ease-in-out md:hidden`}
    >
        <div className="p-1">
          <div className="flex items-center justify-between mt-20 my-6">
            <div className="flex items-center">
              <div className=" pl-4 rounded-lg flex items-center justify-center">
              <h1 className="text-3xl font-bold">REACS 2025</h1>
              </div>
            </div>
          </div>
   
          <div>
            <ul className="md:flex space-y-2 cursor-pointer font-semibold my-5">
              {navItems.map((item) => (
                <li key={item} className="pl-4 pb-2 border-gray-800 border-b-1">{item}</li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
        </nav>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
