import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react';
import iiitm_logo from "../assets/iiitm logo.jpg";
import ieee_logo from "../assets/ieee_logo.png";

const Header = () => {
  return (
    <header className="bg-white max-md:hidden shadow-md">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-16 justify-center">
          <div className="flex items-center gap-4">
            <img src={iiitm_logo} alt="iiitm logo" className='h-16' />
          </div>
          
          <div className="flex items-center gap-4">
            <img src={ieee_logo} alt="ieee logo" className='h-16' />
          </div>
        </div>

        </div>
    </header>
  );
}

export default Header