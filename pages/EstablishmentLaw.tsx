import React, { useState } from 'react';
import { Search, FileText, Download, ChevronRight } from 'lucide-react';
import { pageContent3 } from '../content/pageContent3';
import { AcceleratText } from '../components/AcceleratText';
import { useLanguage } from '../context/LanguageContext';

const EstablishmentLaw: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent3.establishmentLaw[lang];
  const [searchQuery, setSearchQuery] = useState('');

  // Sample law articles/sections for search functionality
  const lawSections = [
    {
      id: 1,
      article: lang === 'ar' ? 'المادة 1' : 'Article 1',
      title: lang === 'ar' ? 'التعريفات' : 'Definitions',
      content: lang === 'ar' 
        ? 'يكون للكلمات والعبارات التالية المعاني المبينة أمام كل منها...'
        : 'The following words and phrases shall have the meanings indicated...'
    },
    {
      id: 2,
      article: lang === 'ar' ? 'المادة 2' : 'Article 2',
      title: lang === 'ar' ? 'إنشاء الشركة' : 'Establishment of the Company',
      content: lang === 'ar'
        ? 'تُنشأ شركة تسمى "أكسيليريت للاستشارات المالية"...'
        : 'A company named "ACCELERAT Financial Consulting" is hereby established...'
    },
    {
      id: 3,
      article: lang === 'ar' ? 'المادة 3' : 'Article 3',
      title: lang === 'ar' ? 'الأهداف' : 'Objectives',
      content: lang === 'ar'
        ? 'تهدف الشركة إلى تقديم خدمات التدقيق والاستشارات المالية...'
        : 'The company aims to provide audit and financial consulting services...'
    },
    {
      id: 4,
      article: lang === 'ar' ? 'المادة 4' : 'Article 4',
      title: lang === 'ar' ? 'الصلاحيات' : 'Powers',
      content: lang === 'ar'
        ? 'للشركة في سبيل تحقيق أهدافها القيام بما يلي...'
        : 'The company may, in pursuit of its objectives, do the following...'
    },
    {
      id: 5,
      article: lang === 'ar' ? 'المادة 5' : 'Article 5',
      title: lang === 'ar' ? 'الإدارة' : 'Management',
      content: lang === 'ar'
        ? 'يتولى إدارة الشركة مجلس إدارة مكون من...'
        : 'The company shall be managed by a Board of Directors composed of...'
    }
  ];

  const filteredSections = lawSections.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.article.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden bg-emerald-950">
  {/* 1. Added bg-emerald-950 (or any dark color) to the section above to hide empty space */}
  
  <img
    src="/images/establishment-law-hero.jpg"
    alt="Establishment Law"
    /* 2. Changed 'object-cover' to 'object-contain' */
    className="absolute inset-0 w-full h-full object-contain object-center opacity-80"
  />
  
  {/* The rest of your overlays stay the same... */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 to-black/50" />
  {/* ... */}
</section>

      {/* Search Section */}
      <section className="py-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={lang === 'ar' ? 'ابحث في النظام...' : 'Search the law...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald text-lg"
            />
          </div>
        </div>
      </section>

      {/* Law Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Law Header */}
          <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] text-white rounded-lg p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  <AcceleratText text={lang === 'ar' ? 'نظام تأسيس شركة أكسيليريت للاستشارات المالية' : 'ACCELERAT Financial Consulting Establishment Law'} />
                </h2>
                <p className="text-white/80">
                  {lang === 'ar' ? 'السجل التجاري رقم: XXXXXX' : 'Commercial Registration No: XXXXXX'}
                </p>
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-4">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-cyber-emerald/50 hover:shadow-lg transition-all"
                >
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="bg-cyber-emerald/10 dark:bg-digital-green/10 text-cyber-emerald dark:text-digital-green px-4 py-2 rounded-lg font-bold text-sm">
                        {section.article}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-1">
                          <AcceleratText text={section.content} />
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 flex-shrink-0" size={20} />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  {lang === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}
                </p>
              </div>
            )}
          </div>

          {/* Download Section */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {lang === 'ar' ? 'تحميل النظام كاملاً' : 'Download Full Document'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {lang === 'ar' ? 'احصل على نسخة PDF من النظام الكامل' : 'Get a PDF copy of the complete establishment law'}
                </p>
              </div>
              <a
                href="/documents/establishment-law.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                <Download size={20} />
                {lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstablishmentLaw;
