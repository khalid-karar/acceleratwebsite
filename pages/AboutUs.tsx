import React from 'react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const AboutUs: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.aboutUs[lang].mainContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.title}
        backgroundImage="/images/about-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.intro}
            </p>
          </section>

          {/* Credentials */}
          <section className="mb-16 p-8 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-6">
              {content.credentials.title}
            </h2>
            <ul className="space-y-3">
              {content.credentials.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="text-cyber-emerald dark:text-digital-green mr-3">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Partnership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.partnership.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.partnership.description}
            </p>
          </section>

          {/* What Makes Us Different */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-6">
              {content.whatMakesUsDifferent.title}
            </h2>
            <ul className="space-y-4">
              {content.whatMakesUsDifferent.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="text-cyber-emerald dark:text-digital-green text-2xl mr-4">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Our Approach */}
          <section>
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-6">
              {content.ourApproach.title}
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
                <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                  Partnership
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {content.ourApproach.partnership}
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
                <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                  Precision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {content.ourApproach.precision}
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
                <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                  Progress
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {content.ourApproach.progress}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
