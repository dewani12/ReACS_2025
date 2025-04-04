import React, { useEffect, useState } from 'react';
import { Menu, X} from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ReACE_logo from "./../assets/ReACS logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    { name: "Calls", path: "/cfp" },
    { name: "Submission", path: "/submission" },
    { name: "Schedule", path: "/schedule" },
    { name: "Committee", path: "/committee" },
    { name: "About", path: "/about" },

  ];

  useEffect(() => setIsOpen(false), [pathname]);

  return (
      
    <nav className="inter bg-[#043A75] shadow-sm px-4 md:px-12 py-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
            <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="rounded-lg flex items-center justify-center">
                <Link to={"/"}>
                <img 
                  src={ReACE_logo} 
                  alt="IEEE Logo" 
                  className="w-[100px] h-auto object-contain"
                />
                </Link>
              </div>
            </div> 
            </div>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-5">

                {navItems.map((item) => (

                <NavLink to={item.path} className={({isActive}) => `${isActive? "text-blue-800 bg-blue-200":"bg-gray-100 text-black"}  hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium `}>
                    {item.name}
                </NavLink>
                ))
                }
        </div>

    {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
        <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
        </div>
    </div>
    </div>

      {/* Mobile menu - Slide from right */}
      <div
              className={`fixed inset-y-0 z-50 right-0 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } w-64 bg-black shadow-lg text-white overflow-y-auto transition-transform duration-300 ease-in-out md:hidden`}
            >
              <div className='flex justify-end mt-7 mr-4'>
        <button 
            onClick={toggleMenu}
            className="text-gray-100 bg-gray-600 p-2 rounded-md hover:text-gray-500 focus:outline-none"
        >
            <X className="h-8 w-8" />
        </button>
        </div>
              <div className="p-1">
                <div className="flex items-center justify-between my-6">
                  <div className="flex items-center">
                    <div className="pl-4 rounded-lg flex items-center justify-center">
                      <Link to="/" className="">
                      <img 
                        src={ReACE_logo} 
                        alt="IEEE Logo" 
                        className="w-[150px] h-auto object-contain"
                      />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:flex space-y-2 cursor-pointer font-semibold my-5">
                  
                    {navItems.map((item) => (
                        <NavLink to={item.path} className="text-white pl-4 pb-2 block border-gray-800 border-b-1">
                          {item.name}
                        </NavLink>
                    ))}
            
                </div>
              </div>
            </div>
      
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

    </nav>
  );
};

export default Navbar;
