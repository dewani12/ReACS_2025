import { Link } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Dates",
    "Registration",
    "Program",
    "Sponsors"
  ]
  return (
    <nav className="primary-bg text-cl fixed top-0 left-0 right-0 shadow-lg z-50">

      <div className="inter flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">ReACS 2025</div>

        {/* Desktop */}
        <div>
          <ul className="hidden md:flex space-x-5 cursor-pointer font-semibold">
            {/* {navItems.map((item) => (
              <li key={item} className="menu-item">{item}</li>
            ))} */}
              <li className="menu-item"><Link to="/">Home</Link></li>
              <li className="menu-item">Dates</li>
              <li className="menu-item"><Link to="/registration">Registration</Link></li>
              <li className="menu-item">Program</li>
              <li className="menu-item">Sponsors</li>
          </ul>
        </div>

        {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#383F47]"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>     
      </div>
    
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-4">
            {navItems.map((item) => (
              <a
                key={item}
                className="flex items-center space-x-2 px-8 py-2 rounded-md text-base font-medium hover:bg-[#383F47] transition-colors duration-200"
              >
              {item}
              </a>
            ))}
          </div>
          <hr />
        </div>
        )}
    </nav>
  )
}

export default Navbar
