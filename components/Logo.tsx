import React from 'react';

interface LogoProps {
  className?: string;
  color?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = '', color = 'dark' }) => {
  const textColor = color === 'dark' ? 'text-cyber-emerald' : 'text-white';
  const arrowColor = color === 'dark' ? 'border-cyber-emerald' : 'border-digital-green'; // Using digital green for contrast in dark mode

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2">
        {/* Text Part */}
        <h1 className={`font-[800] tracking-tight text-3xl sm:text-4xl ${textColor} italic relative`}>
          ACCELER<span className="tracking-tighter">Λ</span>T
        </h1>
        
        {/* Icon Part - Triple Chevron */}
        <div className="flex flex-col gap-[2px] mb-1">
           <div className={`w-5 h-2.5 border-t-[3px] border-r-[3px] ${arrowColor} transform -rotate-45 rounded-[1px]`}></div>
           <div className={`w-5 h-2.5 border-t-[3px] border-r-[3px] ${arrowColor} transform -rotate-45 rounded-[1px]`}></div>
           <div className={`w-5 h-2.5 border-t-[3px] border-r-[3px] ${arrowColor} transform -rotate-45 rounded-[1px]`}></div>
        </div>
      </div>
      
      {/* Subtitle */}
      <span className={`text-[0.55rem] tracking-[0.05em] font-medium uppercase ${textColor} mt-0.5 ml-0.5`}>
        Chartered Accountants, Financial & Business Consultants
      </span>
    </div>
  );
};

export default Logo;