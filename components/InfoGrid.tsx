import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { pageContent } from '../content/pageContent';
import { AcceleratText } from './AcceleratText';
import { useLanguage } from '../context/LanguageContext';

const InfoGrid: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.home[lang];
  const navigate = useNavigate();

  // News items for carousel - you can move this to pageContent later
  const newsItems = [
    {
      date: lang === 'ar' ? '19 يناير 2026' : 'January 19, 2026',
      headline: lang === 'ar' 
        ? 'أكسيليريت تطلق منصة ACCELERAT 360 التشخيصية المدعومة بالذكاء الاصطناعي للسوق السعودي.'
        : 'ACCELERAT launches AI-powered ACCELERAT 360 diagnostic platform for Saudi market.'
    },
    {
      date: lang === 'ar' ? '15 يناير 2026' : 'January 15, 2026',
      headline: lang === 'ar'
        ? 'أكسيليريت توقع شراكة استراتيجية مع كبرى المؤسسات المالية في المملكة.'
        : 'ACCELERAT signs strategic partnership with leading financial institutions in KSA.'
    },
    {
      date: lang === 'ar' ? '10 يناير 2026' : 'January 10, 2026',
      headline: lang === 'ar'
        ? 'فريق أكسيليريت يحصل على شهادات مهنية جديدة في الحوكمة وإدارة المخاطر.'
        : 'ACCELERAT team earns new professional certifications in governance and risk management.'
    }
  ];

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  // Use correct chevron direction based on language
  const ArrowIcon = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <div className="relative z-10 w-full px-0 md:px-12 -mt-16 md:-mt-24 pb-0">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl ${lang === 'ar' ? 'direction-rtl' : ''}`}>
        
        {/* Card 1: Who We Are (White) - Links to /about-us */}
        <div 
          onClick={() => navigate('/who-we-are')}
          className={`bg-white dark:bg-gray-800 p-8 md:p-10 flex flex-col justify-between h-[500px] group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors relative overflow-hidden ${lang === 'ar' ? 'border-r-4' : 'border-l-4'} border-cyber-emerald`}
        >
          <div>
            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] mb-8">
              {content.cards.whoWeAre.label}
            </h4>
            <p className="text-2xl font-light text-gray-800 dark:text-gray-100 leading-snug">
              {content.cards.whoWeAre.description}
            </p>
          </div>
          <div className="mt-8">
             <button 
               onClick={(e) => {
                 e.stopPropagation();
                 navigate('/who-we-are');
               }}
               className="bg-cyber-emerald text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
             >
                {content.cards.whoWeAre.cta}
             </button>
          </div>
        </div>

        {/* Card 2: ACCELERAT 360 (Emerald) */}
        <div className="bg-cyber-emerald flex flex-col h-[500px] text-white relative">
            
            {/* Top Section: Functions - Links to /accelerat-360 */}
            <div 
              onClick={() => navigate('/accelerat-360')}
              className="flex-1 p-8 md:p-10 pb-0 flex flex-col cursor-pointer group/top hover:bg-white/5 transition-colors"
            >
                <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-6">
                  <AcceleratText text={content.cards.establishmentLaw.label} />
                </h4>
                <h3 className="text-3xl md:text-3xl lg:text-4xl font-normal leading-tight">
                  <AcceleratText text={content.cards.establishmentLaw.title} />
                </h3>
                <div className={`mt-4 flex items-center gap-2 opacity-0 ${lang === 'ar' ? '-mr-4 group-hover/top:mr-0' : '-ml-4 group-hover/top:ml-0'} group-hover/top:opacity-100 transition-all duration-300`}>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {lang === 'ar' ? 'استكشف' : 'Explore'}
                    </span>
                    <ArrowIcon size={20} />
                </div>
            </div>

            {/* Bottom Section: Who We Serve - Links to /who-we-audit */}
            <div 
              onClick={() => navigate('/who-we-audit')}
              className="bg-[#013626] p-8 md:p-10 pt-6 border-t border-white/10 cursor-pointer group/bottom hover:bg-[#002c23] transition-colors"
            >
                 <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-4">
                   {content.cards.establishmentLaw.whoWeAuditLabel}
                 </h4>
                 <div className="flex items-end justify-between gap-4">
                    <p className="text-lg font-medium leading-snug opacity-90">
                      {content.cards.establishmentLaw.whoWeAuditDescription}
                    </p>
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center shrink-0 group-hover/bottom:bg-white group-hover/bottom:text-cyber-emerald transition-all">
                        <ArrowIcon size={20} />
                    </div>
                 </div>
            </div>
        </div>

        {/* Card 3: What We Do (Black/Dark) */}
        <div className="bg-[#111] dark:bg-black p-8 md:p-10 flex flex-col h-[500px] text-white">
          <h4 
            onClick={() => navigate('/what-we-do')}
            className="text-xs font-bold text-white/50 uppercase tracking-[0.15em] mb-8 cursor-pointer hover:text-white transition-colors"
          >
            {content.cards.whatWeDo.label}
          </h4>
          
          <div className="flex flex-col gap-0 divide-y divide-white/10">
             <div 
               onClick={() => navigate('/what-we-do')}
               className="py-4 first:pt-0 group/item cursor-pointer"
             >
                <p className="text-gray-400 text-sm leading-relaxed mb-2 group-hover/item:text-white transition-colors">
                  <AcceleratText text={content.cards.whatWeDo.intro} />
                </p>
             </div>
             
             {/* Service 1: Financial and Compliance Audit */}
             <div 
               onClick={() => navigate('/financial-audit')}
               className={`py-5 group/item flex justify-between items-center ${lang === 'ar' ? 'hover:pr-2' : 'hover:pl-2'} transition-all cursor-pointer`}
             >
                <div>
                    <h5 className="font-semibold text-lg group-hover/item:text-digital-green transition-colors">
                      {content.cards.whatWeDo.services[0]?.title}
                    </h5>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">
                      {content.cards.whatWeDo.services[0]?.subtitle}
                    </p>
                </div>
                <ArrowIcon size={16} className="text-gray-600 group-hover/item:text-digital-green" />
             </div>

             {/* Service 2: Digital and Technology Audit */}
             <div 
               onClick={() => navigate('/digital-audit')}
               className={`py-5 group/item flex justify-between items-center ${lang === 'ar' ? 'hover:pr-2' : 'hover:pl-2'} transition-all cursor-pointer`}
             >
                <div>
                    <h5 className="font-semibold text-lg group-hover/item:text-digital-green transition-colors">
                      {content.cards.whatWeDo.services[1]?.title}
                    </h5>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">
                      {content.cards.whatWeDo.services[1]?.subtitle}
                    </p>
                </div>
                <ArrowIcon size={16} className="text-gray-600 group-hover/item:text-digital-green" />
             </div>
          </div>
        </div>

        {/* Card 4: News (Blue-Gray) - Links to /news-events */}
        <div 
          className="bg-[#5F716F] p-8 md:p-10 flex flex-col justify-between h-[500px] text-white relative cursor-pointer hover:bg-[#4d5e5c] transition-colors"
        >
            <div onClick={() => navigate('/news-events')}>
                <h4 className="text-xs font-bold text-white/70 uppercase tracking-[0.15em] mb-8">
                  {content.cards.newsEvents.label}
                </h4>
                <p className="text-sm font-bold text-digital-green mb-3">
                  {newsItems[currentNewsIndex].date}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight hover:underline decoration-digital-green underline-offset-4 decoration-2">
                  <AcceleratText text={newsItems[currentNewsIndex].headline} />
                </h3>
            </div>
            
            {/* News Carousel Navigation */}
            <div className={`flex gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevNews();
                  }}
                  className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-digital-green hover:text-cyber-emerald transition-colors backdrop-blur-sm"
                  aria-label={lang === 'ar' ? 'الخبر السابق' : 'Previous news'}
                >
                    <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextNews();
                  }}
                  className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-digital-green hover:text-cyber-emerald transition-colors backdrop-blur-sm"
                  aria-label={lang === 'ar' ? 'الخبر التالي' : 'Next news'}
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* News Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentNewsIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentNewsIndex ? 'bg-digital-green' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default InfoGrid;
