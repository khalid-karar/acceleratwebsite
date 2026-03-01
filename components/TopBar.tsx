import React from 'react';
import { Link } from 'react-router-dom';
// 1. You can delete or comment out the old Logo import!
// import Logo from './Logo'; 

interface TopBarProps {
  darkMode?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode }) => {
  return (
    <div className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-transparent">
      {/* Left Side - Main Logo */}
      <Link to="/" className="cursor-pointer hover:opacity-90 transition-opacity flex items-center">
        
        {/* 2. Replace the <Logo /> component with a standard img tag */}
        <img 
          // 3. Point these to the exact file names you put in your public/images folder
          src={darkMode ? "/images/accelerat-dark.png" : "/images/accelerat-light.png"} 
          alt="Company Logo" 
          // 4. Adjust this h-12 (height: 3rem) to make your logo bigger or smaller (e.g., h-16, h-20)
          className="h-16 w-auto object-contain transition-all duration-300" 
        />

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