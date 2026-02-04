import React from 'react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';

const OurValues: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.ourValues[lang];

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-cyber-emerald dark:text-white mb-8">
          {content.title}
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed max-w-3xl">
          {content.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.values.map((value, idx) => (
            <div
              key={idx}
              className="p-8 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-cyber-emerald dark:text-digital-green mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
