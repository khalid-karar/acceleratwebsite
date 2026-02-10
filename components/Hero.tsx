import React, { useState, useRef } from 'react';
import { Instagram, Linkedin, Twitter, PlayCircle, PauseCircle } from 'lucide-react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.home[lang];
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Social media links
  const socialLinks = {
    instagram: 'https://accelerateconsulting.net/',
    twitter: 'https://accelerateconsulting.net/',
    linkedin: 'https://accelerateconsulting.net/'
  };

  const videoSrc = '/videos/hero-background.mp4';
  const fallbackImage = '/images/homepage.jpg';

  // Values bullet points
  const valuesPoints = lang === 'ar' 
    ? ['النزاهة والثقة', 'الابتكار', 'التميز', 'التعاون والريادة الفكرية', 'المرونة والتكيف', 'المسؤولية البيئية والاجتماعية']
    : ['Integrity and Trust', 'Innovation', 'Excellence', 'Collaboration and Thought Leadership', 'Agility and Adaptability', 'ESG Responsibility'];

  // Strategy bullet points
  const strategyPoints = lang === 'ar'
    ? ['الحوكمة وإدارة المخاطر بالذكاء الاصطناعي', 'التحول المؤسسي والابتكار الرقمي', 'التوسع الإقليمي والعالمي', 'تقديم خدمات مستقبلية', 'تمكين المواهب وقيادة الذكاء الاصطناعي', 'تعزيز الممارسات المستدامة']
    : ['AI-Driven Governance & Risk Management', 'Business Transformation & Digital Innovation', 'Expand Regional & Global Reach', 'Deliver Future-Ready Services', 'Empower Talent & AI Leadership', 'Promote ESG & Sustainable Practices'];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-full h-[700px] lg:h-[800px] overflow-hidden bg-gray-900 group">
      
      {/* Background Image */}
      <img 
        src={fallbackImage}
        alt="Corporate Infrastructure"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-70'}`}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${isPlaying ? 'opacity-80' : 'opacity-0'}`}
        muted
        playsInline
        onEnded={handleVideoEnd}
        poster={fallbackImage}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto pt-20">
        
        {/* Main Heading */}
        <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl">
              {content.hero.welcome}
            </h1>
        </div>

        {/* Aligned Content Below Title */}
        <div className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-24 text-white max-w-5xl ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            {/* Social Connect */}
            <div className="flex items-center gap-6 text-white/80">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-digital-green">
                  {content.hero.connectLabel}
                </span>
                <div className="h-[1px] w-12 bg-white/30"></div>
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-digital-green hover:-translate-y-1 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-digital-green hover:-translate-y-1 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-digital-green hover:-translate-y-1 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
            </div>

            {/* Values & Strategy */}
            <div className={`flex flex-col md:flex-row gap-12 md:gap-16 ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                <div className="max-w-xs">
                    <h3 className="text-2xl font-bold mb-3 text-digital-green tracking-tight">
                      {content.hero.values.title}
                    </h3>
                    <ul className={`text-sm leading-relaxed opacity-90 font-light space-y-1 ${lang === 'ar' ? 'border-r border-white/30 pr-4' : 'border-l border-white/30 pl-4'}`}>
                      {valuesPoints.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                </div>
                <div className="max-w-xs">
                    <h3 className="text-2xl font-bold mb-3 text-digital-green tracking-tight">
                      {content.hero.strategy.title}
                    </h3>
                    <ul className={`text-sm leading-relaxed opacity-90 font-light space-y-1 ${lang === 'ar' ? 'border-r border-white/30 pr-4' : 'border-l border-white/30 pl-4'}`}>
                      {strategyPoints.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                </div>
            </div>
        </div>
        
        {/* Play/Pause Button */}
        <button 
          onClick={toggleVideo}
          className={`absolute bottom-40 ${lang === 'ar' ? 'left-12' : 'right-12'} text-white/70 hover:text-digital-green cursor-pointer transition-all hidden md:block hover:scale-110 ${!isPlaying ? 'animate-pulse hover:animate-none' : ''}`}
          aria-label={isPlaying ? (lang === 'ar' ? 'إيقاف الفيديو' : 'Pause Video') : (lang === 'ar' ? 'تشغيل الفيديو' : 'Play Video')}
        >
          {isPlaying ? (
            <PauseCircle size={64} strokeWidth={0.8} />
          ) : (
            <PlayCircle size={64} strokeWidth={0.8} />
          )}
        </button>

      </div>
    </div>
  );
};

export default Hero;
