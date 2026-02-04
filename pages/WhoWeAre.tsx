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
                {aboutContent.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] text-white rounded-lg p-8 hover:shadow-xl transition-all">
                <p className="text-xs font-bold tracking-widest opacity-70 mb-4">
                  {lang === 'ar' ? 'من نحن' : 'WHO WE ARE'}
                </p>
                <p className="text-lg leading-relaxed">
                  {lang === 'ar' 
                    ? 'شركة استشارات رائدة متخصصة في تقديم حلول متكاملة للحوكمة وإدارة المخاطر والامتثال.'
                    : 'A leading consulting firm specializing in comprehensive governance, risk management and compliance solutions.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white rounded-lg p-8 hover:shadow-xl transition-all">
                <p className="text-xs font-bold tracking-widest opacity-70 mb-4">
                  {lang === 'ar' ? 'رؤيتنا' : 'OUR VISION'}
                </p>
                <p className="text-lg leading-relaxed">
                  {missionContent.visionSection.statement}
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2d3436] to-[#1e272e] text-white rounded-lg p-8 hover:shadow-xl transition-all">
                <p className="text-xs font-bold tracking-widest opacity-70 mb-4">
                  {lang === 'ar' ? 'مهمتنا' : 'OUR MISSION'}
                </p>
                <p className="text-lg leading-relaxed">
                  {missionContent.missionSection.statement}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-cyber-emerald/20">
              <h3 className="text-2xl font-bold text-cyber-emerald dark:text-white mb-6">
                {aboutContent.credentials.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutContent.credentials.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <span className="text-cyber-emerald dark:text-digital-green text-2xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
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
                {lang === 'ar' ? 'الركائز الاستراتيجية' : 'Strategic Pillars'}
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
            <a
              href="/search/establishment-law"
              className="inline-block px-8 py-3 bg-white text-cyber-emerald font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              {lang === 'ar' ? 'استعراض وبحث' : 'BROWSE & SEARCH'}
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhoWeAre;
