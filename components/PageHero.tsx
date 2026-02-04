import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: 'sm' | 'md' | 'lg';
  overlay?: 'light' | 'medium' | 'dark';
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = 'md',
  overlay = 'medium'
}) => {
  const heightClasses = {
    sm: 'h-[250px] md:h-[300px]',
    md: 'h-[300px] md:h-[400px]',
    lg: 'h-[400px] md:h-[500px]'
  };

  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70'
  };

  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
