import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, Monitor, X, ChevronDown, Instagram, Twitter, Linkedin, Volume2, StopCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuTranslations } from '../content/menuTranslations';

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  lang: 'en' | 'ar';
  toggleLang: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  isSpeaking: boolean;
  toggleTTS: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ 
  darkMode, toggleDarkMode, lang, toggleLang, zoomIn, zoomOut, isSpeaking, toggleTTS 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const t = menuTranslations[lang];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsLangDropdownOpen(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Text color based on container (White header -> Dark Text)
  const textColor = "text-cyber-emerald dark:text-white";
  const borderColor = "border-cyber-emerald/10 dark:border-white/20";

  return (
    <>
      <div className={`w-full relative z-30 border-t ${borderColor} ${textColor} transition-colors duration-300`}>
        <div className="flex items-center justify-between px-6 md:px-12 h-16">
          
          {/* Left: Menu Only */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-1 hover:text-shiny-red transition-colors flex items-center gap-2 group"
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
              <span className="text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                {t.menu}
              </span>
            </button>
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="relative">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 hover:text-shiny-red transition-colors font-bold tracking-wider"
              >
                <span>{lang === 'en' ? 'EN' : 'عربي'}</span>
                <ChevronDown size={16} className={`transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-cyber-emerald/20 z-50">
                  <button
                    onClick={() => {
                      if (lang !== 'en') toggleLang();
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-cyber-emerald/10 transition-colors ${lang === 'en' ? 'text-cyber-emerald font-bold' : 'text-gray-700 dark:text-gray-300'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      if (lang !== 'ar') toggleLang();
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-cyber-emerald/10 transition-colors ${lang === 'ar' ? 'text-cyber-emerald font-bold' : 'text-gray-700 dark:text-gray-300'}`}
                  >
                    عربي
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 opacity-90">
               <button 
                onClick={toggleDarkMode} 
                title="Toggle Theme" 
                className="hover:text-shiny-red transition-colors"
               >
                 {darkMode ? <Sun size={18} /> : <Moon size={18} />}
               </button>
               
               <div className="flex items-center gap-1">
                 <button onClick={zoomOut} title="Decrease Font Size" className="hover:text-shiny-red transition-colors font-serif font-bold text-sm">A-</button>
                 <button onClick={zoomIn} title="Increase Font Size" className="hover:text-shiny-red transition-colors font-serif font-bold text-lg">A+</button>
               </div>
               
               <button 
                onClick={toggleTTS} 
                title="Text to Speech" 
                className={`hover:text-shiny-red transition-colors ${isSpeaking ? 'text-shiny-red animate-pulse' : ''}`}
               >
                 {isSpeaking ? <StopCircle size={18} /> : <Volume2 size={18} />}
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay - Split Layout */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col md:flex-row animate-in fade-in duration-300">
            
            {/* Left Sidebar (White) */}
            <div className="w-full md:w-64 lg:w-80 bg-white text-cyber-emerald flex flex-col justify-between p-8 md:p-12 border-r border-gray-100 shadow-xl relative z-20">
                <div className="flex justify-between md:block">
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-shiny-red hover:text-white transition-all duration-300"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col gap-6 mt-12 md:mt-0">
                    <button 
                        onClick={() => lang !== 'en' && toggleLang()}
                        className={`text-left text-lg font-bold transition-colors ${lang === 'en' ? 'text-cyber-emerald' : 'text-gray-400 hover:text-cyber-emerald'}`}
                    >
                        English
                    </button>
                    <button 
                        onClick={() => lang !== 'ar' && toggleLang()}
                        className={`text-left text-lg font-arabic font-medium transition-colors ${lang === 'ar' ? 'text-cyber-emerald' : 'text-gray-400 hover:text-cyber-emerald'}`}
                    >
                        اللغة العربية
                    </button>
                </div>

                <div className="mt-12 md:mt-0 hidden md:block">
                </div>
            </div>

            {/* Main Content Area (Dark) */}
            <div className="flex-1 bg-[#0a0a0a] text-white flex flex-col overflow-y-auto">
                
                {/* Top Right Utilities */}
                <div className="flex justify-end p-8 md:p-12 gap-8 text-sm font-medium text-gray-400">
                    <button onClick={toggleLang} className="flex items-center gap-1 hover:text-digital-green transition-colors">
                        <span>{lang === 'en' ? 'EN' : 'عربي'}</span>
                        <ChevronDown size={14} />
                    </button>
                    <button onClick={toggleDarkMode} className="hover:text-digital-green transition-colors">
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <div className="flex items-center gap-3">
                         <button onClick={zoomOut} className="hover:text-digital-green transition-colors text-base font-serif">A-</button>
                         <button onClick={zoomIn} className="hover:text-digital-green transition-colors text-lg font-bold font-serif">A+</button>
                    </div>
                    <button onClick={toggleTTS} className={`hover:text-digital-green transition-colors ${isSpeaking ? 'text-shiny-red' : ''}`}>
                         {isSpeaking ? <StopCircle size={18} /> : <Volume2 size={18} />}
                    </button>
                </div>

                {/* Navigation Links Grid */}
                <div className="flex-1 px-8 md:px-20 lg:px-32 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        
                        {/* Column 1 */}
                        <div className="space-y-10">
                            <div>
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold mb-4 hover:text-digital-green cursor-pointer transition-colors inline-block">{t.home}</Link>
                            </div>
                            <div>
                                <Link to="/who-we-are" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold mb-4 hover:text-digital-green cursor-pointer transition-colors inline-block">{t.whoWeAre}</Link>
                                <ul className="flex flex-col gap-3 text-gray-400 text-sm font-medium">
                                    <li><Link to="/who-we-are#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{t.aboutUs}</Link></li>
                                    <li><Link to="/who-we-are#mission" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{t.ourMissionVision}</Link></li>
                                    <li><Link to="/who-we-are#values" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{t.ourValues}</Link></li>
                                    <li><Link to="/who-we-are#strategy" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{t.ourStrategy}</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-10">
                            <div>
                                <Link to="/what-we-do" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold mb-4 hover:text-digital-green cursor-pointer transition-colors inline-block">{t.whatWeDo}</Link>
                                <ul className="flex flex-col gap-3 text-gray-400 text-sm font-medium">
                                    <li><Link to="/advisory-services" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{lang === 'ar' ? 'الخدمات الاستشارية' : 'Advisory Services'}</Link></li>
                                    <li><Link to="/assurance-services" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{lang === 'ar' ? 'خدمات التأكيد' : 'Assurance Services'}</Link></li>
                                    <li><Link to="/consulting-services" onClick={() => setIsMenuOpen(false)} className="hover:text-white cursor-pointer transition-colors w-fit">{lang === 'ar' ? 'خدمات الاستشارات' : 'Consulting Services'}</Link></li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/accelerat-360" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold mb-4 hover:text-digital-green cursor-pointer transition-colors inline-block">{lang === 'ar' ? 'أكسيليريت 360' : 'ACCELERAT 360'}</Link>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                            <Link to="/partnerships" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-digital-green cursor-pointer transition-colors w-fit block">{t.partnerships}</Link>
                            <h3 className="text-2xl font-bold hover:text-digital-green cursor-pointer transition-colors w-fit">Publications</h3>
                            <Link to="/news-events" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-digital-green cursor-pointer transition-colors w-fit block">{t.newsEvents}</Link>
                            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-digital-green cursor-pointer transition-colors w-fit block">{t.contactUs}</Link>
                        </div>

                    </div>
                </div>

                {/* Menu Footer */}
                <div className="px-8 md:px-20 lg:px-32 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-medium bg-black/40">
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-6 md:mb-0 uppercase tracking-widest">
                        <Link to="/careers" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">{t.careers}</Link>
                        <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">{t.privacyPolicy}</Link>
                        <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">{t.faq}</Link>
                        <a href="#" className="hover:text-white transition-colors">{t.sitemap}</a>
                    </div>
                    <div className="flex gap-8 text-gray-400">
                        <Instagram size={20} className="hover:text-digital-green cursor-pointer transition-colors" />
                        <Twitter size={20} className="hover:text-digital-green cursor-pointer transition-colors" />
                        <Linkedin size={20} className="hover:text-digital-green cursor-pointer transition-colors" />
                    </div>
                </div>

            </div>
        </div>
      )}
    </>
  );
};

export default NavBar;