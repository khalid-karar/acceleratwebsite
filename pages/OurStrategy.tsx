import React from 'react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const OurStrategy: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.ourStrategy[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.title}
        backgroundImage="/images/strategy-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            {content.intro}
          </p>

          <div className="space-y-8 mb-16">
            {content.objectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-8 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-cyber-emerald dark:border-digital-green hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-cyber-emerald dark:text-digital-green flex-shrink-0">
                    {obj.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyber-emerald dark:text-white mb-3">
                      {obj.title}
                    </h3>
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

          <div className="p-8 bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/5 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.futureOutlook.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.futureOutlook.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrategy;
