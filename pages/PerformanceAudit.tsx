import React from 'react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const PerformanceAudit: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.performanceAudit[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.serviceOverview.title}
        backgroundImage="/images/performance-audit-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            {content.serviceOverview.description}
          </p>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.performanceServices.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.performanceServices.services.map((service, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.methodology.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {content.methodology.description}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAudit;
