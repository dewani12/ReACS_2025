import React, { useState } from 'react';
import { Calendar, MapPin, Users, Bell } from 'lucide-react';

export default function Maki({ title, date, location, attendees, updates }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="mx-auto bg-white px-4 md:px-12 mt-10 sm:mt-16 md:mt-20 lg:mt-2 overflow-hidden max-w-[1280px] ">
      <div className="py-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <Bell className="w-5 h-5 text-indigo-600" />
          <div 
            className="relative flex-1 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex gap-8 whitespace-nowrap ${!isPaused ? 'animate-marquee' : ''}`}>
              {[...updates, ...updates].map((update, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-gray-700 inline-flex items-center hover:text-indigo-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                  {update}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
