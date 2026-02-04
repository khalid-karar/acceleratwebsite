import React from 'react';
import { pageContent3 } from '../content/pageContent3';
import { useLanguage } from '../context/LanguageContext';

const TermsConditions: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent3.termsConditions[lang];

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-cyber-emerald dark:text-white mb-12">
          Terms & Conditions
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          {content.sections.map((section, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
              <h2 className="text-2xl font-bold text-cyber-emerald dark:text-digital-green mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
