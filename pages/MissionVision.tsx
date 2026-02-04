import React from 'react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const MissionVision: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.missionVision[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={lang === 'ar' ? 'رؤيتنا ومهمتنا' : 'Our Vision & Mission'}
        backgroundImage="/images/mission-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Vision Section */}
          <section className="mb-20 p-12 bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/5 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.visionSection.title}
            </h2>
            <div className="mb-8">
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">
                "{content.visionSection.statement}"
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.visionSection.explanation}
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-20 p-12 bg-gradient-to-br from-cyber-emerald/10 to-transparent dark:from-digital-green/5 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.missionSection.title}
            </h2>
            <div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">
                "{content.missionSection.statement}"
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.missionSection.explanation}
              </p>
            </div>
          </section>

          {/* How They Drive Our Work */}
          <section>
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.driveOurWork.title}
            </h2>
            <ul className="space-y-4">
              {content.driveOurWork.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-2xl font-bold text-cyber-emerald dark:text-digital-green flex-shrink-0 w-8">
                    {idx + 1}
                  </span>
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
