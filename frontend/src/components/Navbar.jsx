import { Link } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { 
      id:"qweq1",
      item:"Home",
    },
    {
      id:"qwe2",
      item:"Dates",
    },
    {
      id:"qweq3",
      item:"Program",
    },
    {
      id:"qweq4",
      item:"Registration",
    },
    {
      id:"qweq5",
      item:"Sponsors",
    },
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="primary-bg text-cl fixed top-0 left-0 right-0 shadow-lg z-50">

      <div className="inter flex justify-between items-center px-4 md:px-8 py-4 ">
        {/* Logo */}
        <div className="text-xl font-bold">ReACS 2025</div>

        {/* Desktop */}
        <div>
          <ul className="hidden md:flex space-x-5 cursor-pointer font-semibold">
            {navItems.map((item) => (
              <li key={item.id} className="menu-item">{item.item}</li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#383F47]"
            >
                <Menu className="h-6 w-6" />
            </button>
          </div>     
      </div>

      {/* Mobile menu - Slide from right */}
      <div 
        className={`fixed inset-y-0 right-0 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-[#1D232A] shadow-lg z-50 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden`}
      >

        <div className='flex justify-end mt-7 mr-4'>
        <button 
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
            <X className="h-8 w-8" />
        </button>
        </div>

        <div className="p-1">
          <div className="flex items-center justify-between my-6">
            <div className="flex items-center">
              <div className=" pl-4 rounded-lg flex items-center justify-center">
              <h1 className="text-3xl font-bold">ReACS'25</h1>
              </div>
            </div>
          </div>
   
          <div>
            <ul className="md:flex space-y-2 cursor-pointer font-semibold mb-5">
              {navItems.map((item) => (
                <li key={item.id} className="pl-4 p-2 hover:bg-[#383F47]">{item.item}</li>
              ))}
            </ul>
          </div>
          <hr/>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

    </nav>
  )
}

export default Navbar
