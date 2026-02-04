import React from 'react';
import { ArrowRight } from 'lucide-react';
import { pageContent2 } from '../content/pageContent2';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const FAAcademy: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent2.faaAcademy[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.academyIntroduction.title}
        backgroundImage="/images/academy-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            {content.academyIntroduction.description}
          </p>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.trainingOfferings.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.trainingOfferings.offerings.map((offering, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.trainersCredentials.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {content.trainersCredentials.description}
            </p>
          </section>

          <section className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.trainingApproach.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {content.trainingApproach.description}
            </p>
          </section>

          <button className="inline-flex items-center gap-3 px-10 py-4 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            {content.cta}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAAcademy;
