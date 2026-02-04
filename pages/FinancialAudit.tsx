import React from 'react';
import { ArrowRight } from 'lucide-react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const FinancialAudit: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.financialAudit[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={content.serviceOverview.title}
        backgroundImage="/images/financial-audit-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            {content.serviceOverview.description}
          </p>

          {/* Types of Audits */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.typesOfAudits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.typesOfAudits.types.map((type, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {content.ourApproach.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {content.ourApproach.description}
            </p>
          </section>

          {/* Deliverables */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {content.deliverables.title}
            </h2>
            <ul className="space-y-4">
              {content.deliverables.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 text-lg flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="text-cyber-emerald dark:text-digital-green text-2xl flex-shrink-0 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            {content.cta}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialAudit;
