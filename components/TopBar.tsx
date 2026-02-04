import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import Logo from './Logo';

interface TopBarProps {
  darkMode?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode }) => {
  return (
    <div className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-transparent">
      {/* Left Side - Main Logo - Wrapped in Link to make it clickable */}
      <Link to="/" className="cursor-pointer hover:opacity-90 transition-opacity">
        <Logo color={darkMode ? 'light' : 'dark'} />
      </Link>

      {/* Right Side - Slogan */}
      <div className="hidden md:flex items-center gap-4 opacity-100">
         {/* Icon: Two Interlocking Circles */}
         <div className="relative w-10 h-7 flex items-center">
             {/* Solid Circle (Left) */}
             <div className="absolute left-0 w-7 h-7 rounded-full bg-cyber-emerald dark:bg-white z-10 shadow-sm"></div>
             {/* Outline Circle (Right) */}
             <div className="absolute left-3 w-7 h-7 rounded-full border-[2.5px] border-cyber-emerald dark:border-white z-0 bg-transparent"></div>
         </div>
         
         {/* Arabic Text */}
         <div className="text-right pt-1">
            <h2 className="text-base lg:text-xl font-arabic font-bold text-cyber-emerald dark:text-white tracking-wide leading-none">
              "نُسَرِّع النمو، وَنُعَزِّز التميز"
            </h2>
         </div>
      </div>
    </div>
  );
};

export default TopBar;