import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItem = [
    {
      item:"Home",
      link: "/"
    },
    {
      item:"Dates",
      link: "/dates"
    },
    {
      item:"Registration",
      link: "/registration"
    },
    {
      item:"Program",
      link: "/program"
    },
    {
      item:"Sponsors",
      link: "/sponsors"
    },
  ]

  return (
    <nav className="inter bg-[#2769b0] shadow-sm py-2">
      <div className="mx-auto">
        <div className="flex justify-between  items-center px-2">
          {/* Logo */}
            <div className="flex items-center ml-5">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-15 w-50 lg:w-60 rounded-lg flex items-center justify-center">
                <Link to={"/"}>
                <h1 className="text-3xl text-white font-bold">REACS 2025</h1>
                </Link>
              </div>
            </div> 
            </div>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-2 pr-5 space-x-1 lg:space-x-5">

                {navItem.map((item) => (

                <NavLink to={item.link} className={({isActive}) => `${isActive? "text-blue-800 bg-blue-300":"bg-gray-100 text-black"}  hover:bg-blue-300 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium `}>
                    {item.item}
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
    </div>
    </div>

      {/* Mobile menu - Slide from right */}
      <div 
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 shadow-lg z-50 overflow-y-auto text-white bg-black transition-transform duration-300 ease-in-out md:hidden`}
      >

        <div className='flex justify-end mt-7 mr-4'>
        <button 
            onClick={toggleMenu}
            className="text-gray-100 hover:text-gray-500 focus:outline-none"
        >
            <X className="h-8 w-8" />
        </button>
        </div>

        <div className="p-1 px-2">
          <div className="flex items-center justify-between my-6">
            <div className="flex items-center">
              <div className="h-15 rounded-lg flex items-center justify-center">
              <h1 className="text-3xl font-bold">REACS 2025</h1>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            
            {navItem.map((item) => (
                <NavLink to={item.link} className={({isActive}) => `${isActive? "text-gray-200 bg-gray-500":" text-white"} block border-b-[0.5px] hover:bg-gray-500 px-2 py-3 mb-1 text-base font-medium `}>
                    {item.item}
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
