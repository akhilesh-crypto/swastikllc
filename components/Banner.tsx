import React from 'react';
import { LOGO_SVG } from '../constants';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-36 md:h-48 bg-white overflow-hidden rounded-xl border border-slate-200 mb-10 flex shadow-sm">
      {/* Left Section: Grayscale Architecture + Red Text */}
      <div className="relative flex-[1.6] flex items-center pl-8 md:pl-16 overflow-hidden">
        {/* Architectural Background */}
        <div 
          className="absolute inset-0 grayscale opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        />
        <div className="relative z-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-red-600 leading-tight">
            Creative Business <br /> Solutions
          </h2>
        </div>
      </div>

      {/* Middle Section: Slanted Red Graphic Elements */}
      <div className="relative w-24 md:w-36 h-full flex overflow-hidden">
        {/* Transparent Red Slanted Parallelogram */}
        <div 
          className="absolute inset-y-0 left-0 w-20 md:w-28 bg-red-600/20 -skew-x-[25deg] -translate-x-1/2"
        />
        {/* Solid Red Slanted Accent Bar */}
        <div 
          className="absolute inset-y-0 left-1/3 w-3 md:w-5 bg-red-600 -skew-x-[25deg]"
        />
      </div>

      {/* Right Section: White Background + Digital Logo */}
      <div className="relative flex-1 bg-white flex items-center justify-center p-4">
        <div className="w-24 h-24 md:w-36 md:h-36">
          {LOGO_SVG("w-full h-full")}
        </div>
      </div>
    </div>
  );
};

export default Banner;