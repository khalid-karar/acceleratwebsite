import React from 'react';
import { pageContent2 } from '../content/pageContent2';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const Careers: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent2.careers[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.whyJoin.title}
        backgroundImage="/images/careers-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            {content.whyJoin.intro}
          </p>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.culture.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.culture.culturPoints.map((point, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-6">
              {content.benefits.title}
            </h2>
            <ul className="space-y-3">
              {content.benefits.benefitsList.map((benefit, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 text-lg flex items-start gap-3">
                  <span className="text-cyber-emerald dark:text-digital-green mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-8 bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/5 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.currentOpenings.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {content.currentOpenings.description}
            </p>
            <button className="px-10 py-3 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
              {content.cta}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
