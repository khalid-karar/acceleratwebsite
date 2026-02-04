import React from 'react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const ConsultingAssessments: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.consultingAssessments[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.whatIs360.title}
        backgroundImage="/images/accelerat360-hero.jpg"
        height="lg"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            {content.whatIs360.description}
          </p>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.howItWorks.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What It Measures */}
          <section className="mb-16 p-8 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-6">
              {content.whatItMeasures.title}
            </h2>
            <ul className="space-y-3">
              {content.whatItMeasures.measurements.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                  <span className="text-cyber-emerald dark:text-digital-green mt-1">✓</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefits.benefitsList.map((benefit, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Assessment Process */}
          <section className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.assessmentProcess.title}
            </h2>
            <ul className="space-y-4">
              {content.assessmentProcess.phases.map((phase, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="text-2xl font-bold text-cyber-emerald dark:text-digital-green flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-lg">{phase}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConsultingAssessments;
