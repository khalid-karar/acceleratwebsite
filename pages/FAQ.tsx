import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { pageContent3 } from '../content/pageContent3';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent3.faq[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-cyber-emerald dark:text-white mb-12 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {content.questions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.q}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-cyber-emerald dark:text-digital-green transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 border-t border-cyber-emerald/10">
                  <p className="leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
