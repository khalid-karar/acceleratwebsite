import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const WhoWeAre: React.FC = () => {
  const { lang } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('about');
  
  const aboutContent = pageContent.aboutUs[lang].mainContent;
  const missionContent = pageContent.missionVision[lang];
  const valuesContent = pageContent.ourValues[lang];
  const strategyContent = pageContent.ourStrategy[lang];

  const tabs = [
    { id: 'about', label: lang === 'ar' ? 'من نحن' : 'About Us' },
    { id: 'mission', label: lang === 'ar' ? 'رؤيتنا ومهمتنا' : 'Mission & Vision' },
    { id: 'values', label: lang === 'ar' ? 'قيمنا' : 'Our Values' },
    { id: 'strategy', label: lang === 'ar' ? 'استراتيجيتنا' : 'Our Strategy' },
  ];

  // Handle hash navigation on mount and hash change
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['about', 'mission', 'values', 'strategy'].includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 140;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `#${tabId}`);
    const element = document.getElementById(tabId);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/about-hero.jpg"
          alt="Who We Are"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {lang === 'ar' ? 'من نحن' : 'Who We Are'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            {lang === 'ar' 
              ? 'تعرف على المزيد عن أكسيليريت للاستشارات' 
              : 'GET TO KNOW MORE ABOUT ACCELERAT CONSULTING'}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 md:px-6 py-4 text-sm md:text-base font-semibold whitespace-nowrap transition-all border-b-4 ${
                  activeTab === tab.id
                    ? 'border-cyber-emerald text-cyber-emerald dark:text-digital-green'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-cyber-emerald dark:hover:text-digital-green'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* About Section */}
          <section id="about" className="mb-24 scroll-mt-36">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-2">
                {lang === 'ar' ? 'نبذة عنا' : 'About'}
              </h2>
              <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-8" />
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                {lang === 'ar' 
                  ? 'شركة مهنية مرخصة تحت رقم الترخيص 970494 للخدمات الاستشارية والاستشارية. تجمع بين الخبرة العميقة في التدقيق المالي والاستشارات والخدمات الاستشارية، لتشكل قوة دافعة في الحوكمة وإدارة المخاطر والتحول الاستراتيجي.'
                  : 'A licensed professional firm under License No. 970494 of Consulting and Advisory Services. It brings deep-rooted expertise in financial auditing, advisory, and consulting, forming a powerhouse of governance, risk management, and strategic transformation.'}
              </p>
            </div>

            {/* Removed WHO WE ARE / OUR TEAM / OUR COMMITMENT cards as requested */}

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-cyber-emerald/20">
              <h3 className="text-2xl font-bold text-cyber-emerald dark:text-white mb-6 text-center">
                {lang === 'ar' ? 'الجهات التي يخدمها كوادرنا وخبراؤنا المؤهلون' : 'Entities that are served by our Talented resources and Qualified Experts'}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
                {/* Row 1 */}
                <img src="/images/clients/financial-audit-authority.png" alt="Financial Audit Authority" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/rta.png" alt="RTA" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/emirates.png" alt="Emirates" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/dubai-health-authority.png" alt="Dubai Health Authority" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/oman-investment-authority.png" alt="Oman Investment Authority" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/modon.png" alt="MODON" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                {/* Row 2 */}
                <img src="/images/clients/government-of-dubai.png" alt="Government of Dubai" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/emaar.png" alt="EMAAR" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/oriental-weavers.png" alt="Oriental Weavers" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/wafeer.png" alt="Wafeer" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/indeal.png" alt="Indeal" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/air-arabia.png" alt="Air Arabia" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                {/* Row 3 */}
                <img src="/images/clients/nadec.png" alt="NADEC" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/etmaen.png" alt="Etmaen" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/ministry-hr.png" alt="Ministry of Human Resources" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/alyusr.png" alt="AlYusr" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/real-estate-general-authority.png" alt="Real Estate General Authority" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                <img src="/images/clients/t2.png" alt="T2 Business Simplified" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
                {/* Row 4 */}
                <img src="/images/clients/al-rajhi-bank.png" alt="Al Rajhi Bank" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section id="mission" className="mb-24 scroll-mt-36">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-2">
                {lang === 'ar' ? 'رؤيتنا ومهمتنا' : 'Our Mission & Vision'}
              </h2>
              <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-8" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/10 rounded-lg p-8 md:p-10 border border-cyber-emerald/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-cyber-emerald dark:bg-digital-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl md:text-3xl">👁</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cyber-emerald dark:text-white">
                    {missionContent.visionSection.title}
                  </h3>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">
                  "{missionContent.visionSection.statement}"
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {missionContent.visionSection.explanation}
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/10 rounded-lg p-8 md:p-10 border border-cyber-emerald/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-cyber-emerald dark:bg-digital-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl md:text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cyber-emerald dark:text-white">
                    {missionContent.missionSection.title}
                  </h3>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">
                  "{missionContent.missionSection.statement}"
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {missionContent.missionSection.explanation}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-cyber-emerald/20">
              <h3 className="text-2xl font-bold text-cyber-emerald dark:text-white mb-6">
                {missionContent.driveOurWork.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {missionContent.driveOurWork.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-2xl font-bold text-cyber-emerald dark:text-digital-green">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section id="values" className="mb-24 scroll-mt-36">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-2">
                {lang === 'ar' ? 'قيمنا' : 'Our Values'}
              </h2>
              <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-8" />
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                {valuesContent.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuesContent.values.map((value, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 border border-cyber-emerald/20 hover:shadow-xl hover:border-cyber-emerald/50 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-cyber-emerald dark:text-digital-green mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy Section */}
          <section id="strategy" className="scroll-mt-36">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-2">
                {lang === 'ar' ? 'استراتيجيتنا' : 'Our Strategy'}
              </h2>
              <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-8" />
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                {strategyContent.intro}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {lang === 'ar' ? 'الأهداف الاستراتيجية' : 'Strategic Objectives'}
              </h3>
              <div className="space-y-6">
                {strategyContent.objectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 border-l-4 border-cyber-emerald dark:border-digital-green hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      <div className="text-4xl md:text-5xl font-bold text-cyber-emerald dark:text-digital-green flex-shrink-0">
                        {obj.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {obj.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                          {obj.description}
                        </p>
                        <p className="text-sm text-cyber-emerald dark:text-digital-green font-semibold">
                          {obj.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/10 rounded-lg p-8 border border-cyber-emerald/20">
              <h3 className="text-2xl font-bold text-cyber-emerald dark:text-white mb-4">
                {strategyContent.futureOutlook.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {strategyContent.futureOutlook.description}
              </p>
            </div>
          </section>
        </div>

        {/* Establishment Law Banner */}
        <section className="bg-gradient-to-r from-cyber-emerald to-[#0a3d35] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              {lang === 'ar' ? 'التأسيس والترخيص' : 'Establishment & Licensing'}
            </h3>
            <p className="text-white/80 text-lg mb-6">
              {lang === 'ar' 
                ? 'شركة مرخصة تعمل بموجب القوانين السعودية'
                : 'Licensed company operating under Saudi regulations'}
            </p>
            {/* Removed BROWSE & SEARCH button as requested */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhoWeAre;
